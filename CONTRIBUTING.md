# CONTRIBUTING.md

## Welcome

Thank you for contributing to LearnFootball.

Our mission is simple:

> Help complete beginners become knowledgeable football fans.

Every contribution should support that mission.

---

# Code of Conduct

Contributors should:

* Be respectful.
* Be constructive.
* Focus on education.
* Welcome beginners.

We value clear communication and collaborative problem solving.

---

# Project Philosophy

LearnFootball is:

* An educational platform first.
* A football encyclopedia second.
* A football statistics platform third.

When making decisions:

Prefer clarity over complexity.

Prefer teaching over showing numbers.

---

# Technology Stack

Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

Backend

* FastAPI
* Python

Database

* PostgreSQL
* Supabase

---

# Getting Started

## Fork Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

Frontend

```bash
npm install
```

Backend

```bash
pip install -r requirements.txt
```

---

## Run Development Environment

Frontend

```bash
npm run dev
```

Backend

```bash
uvicorn app.main:app --reload
```

---

# Branching Strategy

Use feature branches.

Examples:

```text
feature/player-profile
feature/team-page
feature/academy-module
feature/ai-tutor
```

Bug fixes:

```text
fix/navigation-bug
fix/player-search
```

Documentation:

```text
docs/update-readme
docs/glossary-plan
```

---

# Commit Convention

Use clear commit messages.

Examples:

```text
feat: add player profile page

feat: create glossary module

fix: resolve mobile navigation issue

docs: update academy curriculum

refactor: simplify team service
```

---

# Pull Request Guidelines

A pull request should:

* Have a clear title.
* Explain the change.
* Include screenshots if UI changed.
* Reference related issues.

---

# Frontend Standards

## Components

Create reusable components whenever possible.

Good:

```text
PlayerCard
TeamCard
LessonCard
QuizCard
```

Avoid duplicate UI logic.

---

## Styling

Use:

* Tailwind CSS
* Design System tokens

Avoid:

* Inline styles
* Hardcoded colors

---

## Responsiveness

Every feature must support:

```text
320px
375px
768px
1024px
1440px
```

---

# TypeScript Standards

Required:

```ts
interface Player {
  id: string;
  name: string;
}
```

Avoid:

```ts
any
```

unless absolutely necessary.

---

# Backend Standards

## Python

Required:

* Type hints
* Pydantic schemas
* Clear naming

Example:

```python
def get_player(player_id: str) -> Player:
    ...
```

---

## API Design

Follow REST principles.

Example:

```text
GET    /players
GET    /players/{slug}
POST   /players
PUT    /players/{id}
DELETE /players/{id}
```

---

# Database Standards

Every table should include:

```sql
created_at
updated_at
```

Use UUIDs for primary keys.

Avoid duplicate data whenever possible.

---

# Content Standards

All educational content must include:

1. Definition
2. Beginner Explanation
3. Advanced Explanation
4. Examples
5. Quiz

---

# AI Tutor Standards

The AI Tutor must:

* Prefer LearnFootball content.
* Explain concepts clearly.
* Avoid hallucinated football facts.

When uncertain:

"I don't know."

is preferred over incorrect information.

---

# Accessibility Standards

Required:

* Semantic HTML
* Keyboard Navigation
* Screen Reader Support
* Reduced Motion Support

Target:

WCAG AA Compliance

---

# Testing Requirements

Before submitting a PR:

## Frontend

```bash
npm run lint
npm run build
```

must pass.

---

## Backend

```bash
pytest
```

must pass.

---

# Documentation Requirements

If you add:

* New feature
* New API
* New database table

Update documentation accordingly.

Documentation is part of the feature.

---

# What Makes a Good Contribution?

A good contribution helps users:

* Learn football faster.
* Understand football concepts more clearly.
* Explore football more confidently.

If a change supports those goals, it is likely a good contribution.

---

# Final Rule

Whenever there is a conflict between:

* complexity and simplicity,
* statistics and education,
* features and usability,

choose the option that makes football easier to learn.
