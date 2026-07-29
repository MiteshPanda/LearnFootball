"""
LearnFootball API - Quiz Endpoints

Serve quiz questions per lesson and grade submitted answers.
"""

from typing import Any

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.models import Lesson, Quiz, QuizQuestion

router = APIRouter(prefix="/quiz", tags=["Quiz"])


# ── Schemas ───────────────────────────────────────────────────────────────────


class AnswerSubmission(BaseModel):
    lesson_slug: str
    answers: list[int]  # List of selected option indexes, in question order


# ── Endpoints ─────────────────────────────────────────────────────────────────


@router.get(
    "/{lesson_slug}",
    status_code=status.HTTP_200_OK,
    summary="Get quiz for a lesson",
    response_description="Quiz questions for the specified lesson",
)
async def get_quiz(lesson_slug: str, db: Session = Depends(get_db)) -> dict[str, Any]:
    """Retrieve quiz questions associated with a specific lesson slug."""
    lesson = db.query(Lesson).filter(Lesson.slug == lesson_slug).first()

    if not lesson or not lesson.quiz:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No quiz found for lesson '{lesson_slug}'",
        )

    quiz = lesson.quiz
    questions_sorted = sorted(quiz.questions, key=lambda q: q.order)

    return {
        "lesson_slug": lesson_slug,
        "quiz_id": str(quiz.id),
        "title": quiz.title or f"{lesson.title} Quiz",
        "total_questions": len(questions_sorted),
        "questions": [
            {
                "id": str(q.id),
                "question": q.question,
                "options": q.options,
                # correctIndex intentionally omitted — only returned after submit
            }
            for q in questions_sorted
        ],
    }


@router.post(
    "/submit",
    status_code=status.HTTP_200_OK,
    summary="Submit quiz answers",
    response_description="Quiz results with score and explanations",
)
async def submit_quiz(
    submission: AnswerSubmission,
    db: Session = Depends(get_db),
) -> dict[str, Any]:
    """Submit quiz answers and receive graded results with explanations."""
    lesson = db.query(Lesson).filter(Lesson.slug == submission.lesson_slug).first()

    if not lesson or not lesson.quiz:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No quiz found for lesson '{submission.lesson_slug}'",
        )

    questions = sorted(lesson.quiz.questions, key=lambda q: q.order)
    answers = submission.answers

    if len(answers) != len(questions):
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Expected {len(questions)} answers, got {len(answers)}",
        )

    results = []
    score = 0
    for q, selected in zip(questions, answers):
        correct = selected == q.correct_index
        if correct:
            score += 1
        results.append(
            {
                "question": q.question,
                "selectedIndex": selected,
                "correctIndex": q.correct_index,
                "correct": correct,
                "explanation": q.explanation,
            }
        )

    total = len(questions)
    passed = score >= total * 0.6  # 60% pass threshold

    return {
        "lesson_slug": submission.lesson_slug,
        "score": score,
        "total": total,
        "percentage": round(score / total * 100) if total else 0,
        "passed": passed,
        "results": results,
    }
