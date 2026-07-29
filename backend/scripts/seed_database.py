"""
LearnFootball - Database Seeding Script
=======================================
Reads the three static JSON datasets from backend/app/data/ and upserts
every record into the Supabase PostgreSQL database via the SQLAlchemy session.

Run from the project root:
    python backend/scripts/seed_database.py

Or from the backend directory:
    python scripts/seed_database.py
"""

import json
import os
import sys
import uuid
from pathlib import Path

# ── Path setup ────────────────────────────────────────────────────────────────
BACKEND_DIR = Path(__file__).resolve().parent.parent        # …/backend/
DATA_DIR = BACKEND_DIR / "app" / "data"
sys.path.insert(0, str(BACKEND_DIR))                        # make 'app' importable

from dotenv import load_dotenv
load_dotenv(BACKEND_DIR / ".env")

from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

from app.core.config import get_settings
from app.models.models import (
    Base,
    CoachProfile,
    GlossaryTerm,
    Lesson,
    PlayerProfile,
    Quiz,
    QuizQuestion,
    TeamProfile,
)

settings = get_settings()

# ── Engine: use Supabase PostgreSQL connection ────────────────────────────────
# Build the postgres connection string from Supabase details
# Format: postgresql+psycopg2://<user>:<pass>@<host>:5432/postgres
def _get_pg_url() -> str:
    """Build a PostgreSQL URL from Supabase env vars."""
    supabase_url = settings.SUPABASE_URL  # e.g. https://xxxx.supabase.co
    service_key = settings.SUPABASE_SERVICE_ROLE_KEY

    if not supabase_url or not service_key:
        raise RuntimeError(
            "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in backend/.env"
        )

    # Extract project ref from URL: https://<ref>.supabase.co
    ref = supabase_url.replace("https://", "").split(".")[0]
    host = f"db.{ref}.supabase.co"

    # Supabase PostgreSQL connection: user=postgres, password=service_role_key
    # (for direct DB connections use the DB password, not the JWT key)
    # Note: We fall back to the DATABASE_URL env var if it's a postgres:// URL
    db_url = os.environ.get("DATABASE_URL", "")
    if db_url.startswith("postgresql") or db_url.startswith("postgres://"):
        return db_url.replace("postgres://", "postgresql://", 1)

    print(
        "\n⚠️  No PostgreSQL DATABASE_URL found.\n"
        "   Add to backend/.env:\n"
        "   DATABASE_URL=postgresql://postgres:<DB_PASSWORD>@db.<ref>.supabase.co:5432/postgres\n"
        "   (DB password is set when you created the Supabase project — NOT the service role key)\n"
    )
    sys.exit(1)


engine = create_engine(_get_pg_url(), echo=False, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)


# ── Helpers ──────────────────────────────────────────────────────────────────

def _load_json(filename: str) -> dict | list:
    path = DATA_DIR / filename
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


# ─────────────────────────────────────────────────────────────────────────────
# SEED FUNCTIONS
# ─────────────────────────────────────────────────────────────────────────────

def seed_glossary(session) -> int:
    """Seed glossary_terms from glossary_db.json."""
    data: list[dict] = _load_json("glossary_db.json")
    count = 0
    for item in data:
        slug = item.get("slug") or item.get("term", "").lower().replace(" ", "-")
        existing = session.query(GlossaryTerm).filter_by(slug=slug).first()
        if existing:
            continue
        term = GlossaryTerm(
            id=uuid.uuid4(),
            term=item.get("term", ""),
            slug=slug,
            category=item.get("category"),
            definition=item.get("definition", ""),
            advanced_explanation=item.get("advanced_explanation") or item.get("advancedExplanation"),
        )
        session.add(term)
        count += 1
    session.commit()
    return count


def seed_profiles(session) -> dict:
    """Seed player, coach, and team profiles from profiles_static.json."""
    data = _load_json("profiles_static.json")
    counts = {"players": 0, "coaches": 0, "teams": 0}

    for p in data.get("players", []):
        if session.query(PlayerProfile).filter_by(slug=p["slug"]).first():
            continue
        session.add(PlayerProfile(
            id=uuid.uuid4(),
            api_id=p.get("api_id"),
            name=p["name"],
            slug=p["slug"],
            active=p.get("active", True),
            position=p.get("position"),
            country=p.get("country"),
            country_name=p.get("countryName"),
            bio=p.get("bio"),
            style=p.get("style"),
            stats=p.get("stats", []),
            timeline=p.get("timeline", []),
            trophies=p.get("trophies", []),
        ))
        counts["players"] += 1

    for c in data.get("coaches", []):
        if session.query(CoachProfile).filter_by(slug=c["slug"]).first():
            continue
        session.add(CoachProfile(
            id=uuid.uuid4(),
            api_id=c.get("api_id"),
            name=c["name"],
            slug=c["slug"],
            active=c.get("active", True),
            philosophy=c.get("philosophy"),
            club=c.get("club"),
            emoji=c.get("emoji"),
            country=c.get("country"),
            country_name=c.get("countryName"),
            bio=c.get("bio"),
            stats=c.get("stats", []),
            timeline=c.get("timeline", []),
            trophies=c.get("trophies", []),
        ))
        counts["coaches"] += 1

    for t in data.get("teams", []):
        if session.query(TeamProfile).filter_by(slug=t["slug"]).first():
            continue
        session.add(TeamProfile(
            id=uuid.uuid4(),
            name=t["name"],
            slug=t["slug"],
            active=t.get("active", True),
            flag=t.get("flag"),
            titles=t.get("titles"),
            style=t.get("style"),
            squad=t.get("squad", []),
            stats=t.get("stats", []),
            timeline=t.get("timeline", []),
            trophies=t.get("trophies", []),
            world_cup_squad=t.get("worldCupSquad", []),
        ))
        counts["teams"] += 1

    session.commit()
    return counts


def seed_curriculum(session) -> dict:
    """Seed lessons and quizzes from curriculum_db.json."""
    data = _load_json("curriculum_db.json")
    counts = {"lessons": 0, "quizzes": 0, "questions": 0}

    # curriculum_db.json has TWO shapes depending on key:
    # 1. data["curriculum"] → list of modules with a "lessons" array (metadata only)
    # 2. data[<slug>] → dict with full rich content per lesson

    curriculum_modules: list[dict] = data.get("curriculum", [])

    for module in curriculum_modules:
        module_slug = module.get("slug", "")
        for lesson_meta in module.get("lessons", []):
            slug = lesson_meta.get("slug", "")
            if not slug:
                continue
            if session.query(Lesson).filter_by(slug=slug).first():
                continue

            # Try to find the full rich content in data[slug]
            rich = data.get(slug, {})
            content_sections = rich.get("sections", [])
            quiz_questions_raw = rich.get("quizQuestions", [])

            lesson = Lesson(
                id=uuid.uuid4(),
                module_slug=module_slug,
                slug=slug,
                title=lesson_meta.get("title", rich.get("title", slug)),
                description=lesson_meta.get("description", rich.get("description")),
                reading_time=lesson_meta.get("readingTime", 5),
                difficulty=lesson_meta.get("difficulty", "beginner"),
                emoji=lesson_meta.get("emoji"),
                category=lesson_meta.get("category"),
                content=content_sections,
            )
            session.add(lesson)
            session.flush()  # get lesson.id
            counts["lessons"] += 1

            if quiz_questions_raw:
                quiz = Quiz(
                    id=uuid.uuid4(),
                    lesson_id=lesson.id,
                    title=f"{lesson.title} Quiz",
                )
                session.add(quiz)
                session.flush()
                counts["quizzes"] += 1

                for order, q in enumerate(quiz_questions_raw):
                    session.add(QuizQuestion(
                        id=uuid.uuid4(),
                        quiz_id=quiz.id,
                        question=q.get("question", ""),
                        options=q.get("options", []),
                        correct_index=q.get("correctIndex", 0),
                        explanation=q.get("explanation"),
                        order=order,
                    ))
                    counts["questions"] += 1

    session.commit()
    return counts


# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────

def main():
    print("🚀 LearnFootball Database Seeder")
    print("=" * 50)

    with SessionLocal() as session:
        print("\n📖 Seeding Glossary Terms…")
        g = seed_glossary(session)
        print(f"   ✅ {g} new glossary terms inserted")

        print("\n👤 Seeding Player / Coach / Team Profiles…")
        p = seed_profiles(session)
        print(f"   ✅ Players: {p['players']}, Coaches: {p['coaches']}, Teams: {p['teams']}")

        print("\n📚 Seeding Curriculum (Lessons + Quizzes)…")
        c = seed_curriculum(session)
        print(f"   ✅ Lessons: {c['lessons']}, Quizzes: {c['quizzes']}, Questions: {c['questions']}")

    print("\n🎉 Seeding complete!")


if __name__ == "__main__":
    main()
