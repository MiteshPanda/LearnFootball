"""
LearnFootball API - Glossary Endpoints

Serve football glossary terms from the database.
Falls back to the static glossary_db.json if the DB is not yet populated.
"""

import json
import os
from typing import Any

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.models import GlossaryTerm

router = APIRouter(prefix="/glossary", tags=["Glossary"])

# ── Static fallback ───────────────────────────────────────────────────────────

_GLOSSARY_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "data",
    "glossary_db.json",
)


def _load_glossary_json() -> list[dict[str, Any]]:
    try:
        with open(_GLOSSARY_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []


# ── Endpoints ─────────────────────────────────────────────────────────────────


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    summary="List all glossary terms",
    response_description="A list of football glossary terms",
)
async def list_terms(
    category: str | None = Query(default=None, description="Filter by category"),
    db: Session = Depends(get_db),
) -> dict[str, Any]:
    """Retrieve all football glossary terms, optionally filtered by category."""
    query = db.query(GlossaryTerm).order_by(GlossaryTerm.term)
    if category:
        query = query.filter(GlossaryTerm.category == category)

    terms = query.all()

    if terms:
        return {
            "terms": [
                {
                    "id": str(t.id),
                    "term": t.term,
                    "slug": t.slug,
                    "category": t.category,
                    "definition": t.definition,
                    "advanced_explanation": t.advanced_explanation,
                }
                for t in terms
            ],
            "total": len(terms),
            "source": "database",
        }

    # Fallback to static JSON
    all_terms = _load_glossary_json()
    if category:
        all_terms = [t for t in all_terms if t.get("category") == category]
    return {"terms": all_terms, "total": len(all_terms), "source": "static"}


@router.get(
    "/{slug}",
    status_code=status.HTTP_200_OK,
    summary="Get glossary term by slug",
    response_description="A single glossary term with full definition",
)
async def get_term(slug: str, db: Session = Depends(get_db)) -> dict[str, Any]:
    """Retrieve a specific glossary term by its slug."""
    term = db.query(GlossaryTerm).filter(GlossaryTerm.slug == slug).first()

    if term:
        return {
            "id": str(term.id),
            "term": term.term,
            "slug": term.slug,
            "category": term.category,
            "definition": term.definition,
            "advanced_explanation": term.advanced_explanation,
            "source": "database",
        }

    # Fallback to static JSON
    for item in _load_glossary_json():
        if item.get("slug") == slug:
            return {**item, "source": "static"}

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Glossary term '{slug}' not found",
    )
