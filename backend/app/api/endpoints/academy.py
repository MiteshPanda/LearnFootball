"""
LearnFootball API - Academy Endpoints

Serves curriculum modules and individual lesson content from the database.
Falls back to static JSON if the database is not yet populated.
"""

import json
import os
from typing import Any

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.models import Lesson

router = APIRouter(prefix="/academy", tags=["Academy"])

# ── Fallback: read curriculum structure from JSON ─────────────────────────────

_CURRICULUM_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "data",
    "curriculum_db.json",
)


def _load_curriculum_json() -> dict:
    try:
        with open(_CURRICULUM_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


# ── Endpoints ─────────────────────────────────────────────────────────────────


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    summary="List all curriculum modules",
    response_description="A list of curriculum modules with lesson metadata",
)
async def list_modules(db: Session = Depends(get_db)) -> dict:
    """Return curriculum modules grouped by module slug."""
    lessons = db.query(Lesson).order_by(Lesson.module_slug, Lesson.slug).all()

    if lessons:
        # Build the grouped structure from live DB
        modules: dict[str, dict[str, Any]] = {}
        for lesson in lessons:
            ms = lesson.module_slug
            if ms not in modules:
                modules[ms] = {"slug": ms, "lessons": []}
            modules[ms]["lessons"].append(
                {
                    "slug": lesson.slug,
                    "title": lesson.title,
                    "description": lesson.description,
                    "readingTime": lesson.reading_time,
                    "difficulty": lesson.difficulty,
                    "emoji": lesson.emoji,
                    "category": lesson.category,
                }
            )
        return {"modules": list(modules.values()), "total": len(lessons), "source": "database"}

    # Fallback: JSON static file
    data = _load_curriculum_json()
    curriculum = data.get("curriculum", [])
    return {
        "modules": curriculum,
        "total": sum(len(m.get("lessons", [])) for m in curriculum),
        "source": "static",
    }


@router.get(
    "/{slug}",
    status_code=status.HTTP_200_OK,
    summary="Get lesson by slug",
    response_description="A single lesson with full content",
)
async def get_lesson(slug: str, db: Session = Depends(get_db)) -> dict:
    """Retrieve a specific lesson's full content by slug."""
    lesson = db.query(Lesson).filter(Lesson.slug == slug).first()

    if lesson:
        result: dict[str, Any] = {
            "slug": lesson.slug,
            "moduleSlug": lesson.module_slug,
            "title": lesson.title,
            "description": lesson.description,
            "readingTime": lesson.reading_time,
            "difficulty": lesson.difficulty,
            "emoji": lesson.emoji,
            "category": lesson.category,
            "content": lesson.content or [],
            "source": "database",
        }
        # Attach quiz if present
        if lesson.quiz:
            result["quiz"] = {
                "id": str(lesson.quiz.id),
                "questions": [
                    {
                        "question": q.question,
                        "options": q.options,
                        "correctIndex": q.correct_index,
                        "explanation": q.explanation,
                    }
                    for q in sorted(lesson.quiz.questions, key=lambda x: x.order)
                ],
            }
        return result

    # Fallback: look for the slug key in curriculum_db.json
    data = _load_curriculum_json()
    lesson_data = data.get(slug)
    if lesson_data:
        return {**lesson_data, "source": "static"}

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Lesson '{slug}' not found",
    )
