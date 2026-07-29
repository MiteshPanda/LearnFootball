# FOLDER_STRUCTURE.md

## Frontend (Next.js)

```text
src/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── academy/
│   │   ├── page.tsx
│   │   ├── rules/
│   │   ├── positions/
│   │   ├── formations/
│   │   ├── tactics/
│   │   └── history/
│   │
│   ├── glossary/
│   │
│   ├── players/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │
│   ├── teams/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │
│   ├── coaches/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │
│   ├── compare/
│   │
│   ├── predictor/
│   │
│   ├── tutor/
│   │
│   ├── admin/
│   │
│   └── profile/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── academy/
│   ├── players/
│   ├── teams/
│   ├── coaches/
│   ├── predictor/
│   └── tutor/
│
├── features/
│   ├── academy/
│   ├── glossary/
│   ├── players/
│   ├── teams/
│   ├── coaches/
│   ├── predictor/
│   └── tutor/
│
├── hooks/
│
├── lib/
│
├── services/
│
├── types/
│
├── constants/
│
├── utils/
│
└── styles/
```

---

## Backend (FastAPI)

```text
backend/
│
├── app/
│   ├── api/
│   ├── core/
│   ├── database/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── repositories/
│   ├── middleware/
│   └── utils/
│
├── tests/
│
├── migrations/
│
└── scripts/
```

---

## Content Repository

```text
content/
│
├── academy/
│
├── glossary/
│
├── quizzes/
│
├── teams/
│
├── players/
│
└── coaches/
```
