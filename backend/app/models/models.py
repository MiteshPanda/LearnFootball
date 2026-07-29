"""
LearnFootball API - SQLAlchemy ORM Models

All database tables used across the application, mapped to PostgreSQL via Supabase.
"""

from __future__ import annotations

import uuid
from datetime import datetime, timezone
from typing import Any

from sqlalchemy import (
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


def _now() -> datetime:
    return datetime.now(timezone.utc)


def _uuid() -> uuid.UUID:
    return uuid.uuid4()


# ─── Academy / Curriculum ────────────────────────────────────────────────────


class Lesson(Base):
    """A single academy lesson belonging to a curriculum module."""

    __tablename__ = "lessons"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    module_slug: Mapped[str] = mapped_column(String(80), nullable=False, index=True)
    slug: Mapped[str] = mapped_column(String(120), nullable=False, unique=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    reading_time: Mapped[int] = mapped_column(Integer, default=5)
    difficulty: Mapped[str] = mapped_column(String(30), default="beginner")
    emoji: Mapped[str] = mapped_column(String(10), nullable=True)
    category: Mapped[str] = mapped_column(String(60), nullable=True)
    # Full rich content stored as JSON (list of section dicts: {heading, content})
    content: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now, onupdate=_now)

    # Relationships
    quiz: Mapped[Quiz | None] = relationship("Quiz", back_populates="lesson", uselist=False, cascade="all, delete-orphan")


class Quiz(Base):
    """A quiz associated with a lesson."""

    __tablename__ = "quizzes"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    lesson_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("lessons.id", ondelete="CASCADE"), nullable=False, unique=True)
    title: Mapped[str] = mapped_column(String(200), nullable=True)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)

    lesson: Mapped[Lesson] = relationship("Lesson", back_populates="quiz")
    questions: Mapped[list[QuizQuestion]] = relationship("QuizQuestion", back_populates="quiz", cascade="all, delete-orphan", order_by="QuizQuestion.order")


class QuizQuestion(Base):
    """A single multiple-choice question in a quiz."""

    __tablename__ = "quiz_questions"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    quiz_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("quizzes.id", ondelete="CASCADE"), nullable=False, index=True)
    question: Mapped[str] = mapped_column(Text, nullable=False)
    options: Mapped[list[str]] = mapped_column(JSONB, nullable=False, default=list)
    correct_index: Mapped[int] = mapped_column(Integer, nullable=False)
    explanation: Mapped[str] = mapped_column(Text, nullable=True)
    order: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)

    quiz: Mapped[Quiz] = relationship("Quiz", back_populates="questions")


# ─── Glossary ────────────────────────────────────────────────────────────────


class GlossaryTerm(Base):
    """A football glossary term with definition."""

    __tablename__ = "glossary_terms"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    term: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    category: Mapped[str] = mapped_column(String(80), nullable=True, index=True)
    definition: Mapped[str] = mapped_column(Text, nullable=False)
    advanced_explanation: Mapped[str] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)


# ─── Profiles ────────────────────────────────────────────────────────────────


class PlayerProfile(Base):
    """A football player's biographical profile."""

    __tablename__ = "player_profiles"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    api_id: Mapped[int] = mapped_column(Integer, nullable=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    active: Mapped[bool] = mapped_column(Boolean, default=True)
    position: Mapped[str] = mapped_column(String(100), nullable=True)
    country: Mapped[str] = mapped_column(String(10), nullable=True)   # Flag emoji
    country_name: Mapped[str] = mapped_column(String(100), nullable=True)
    bio: Mapped[str] = mapped_column(Text, nullable=True)
    style: Mapped[str] = mapped_column(Text, nullable=True)
    stats: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    timeline: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    trophies: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now, onupdate=_now)


class CoachProfile(Base):
    """A football manager's biographical profile."""

    __tablename__ = "coach_profiles"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    api_id: Mapped[int] = mapped_column(Integer, nullable=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    active: Mapped[bool] = mapped_column(Boolean, default=True)
    philosophy: Mapped[str] = mapped_column(Text, nullable=True)
    club: Mapped[str] = mapped_column(String(100), nullable=True)
    emoji: Mapped[str] = mapped_column(String(10), nullable=True)
    country: Mapped[str] = mapped_column(String(10), nullable=True)
    country_name: Mapped[str] = mapped_column(String(100), nullable=True)
    bio: Mapped[str] = mapped_column(Text, nullable=True)
    stats: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    timeline: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    trophies: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now, onupdate=_now)


class TeamProfile(Base):
    """A national football team's profile."""

    __tablename__ = "team_profiles"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=_uuid)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    active: Mapped[bool] = mapped_column(Boolean, default=True)
    flag: Mapped[str] = mapped_column(String(10), nullable=True)
    titles: Mapped[str] = mapped_column(Text, nullable=True)
    style: Mapped[str] = mapped_column(Text, nullable=True)
    squad: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    stats: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    timeline: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    trophies: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    world_cup_squad: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_now, onupdate=_now)
