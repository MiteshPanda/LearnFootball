# CLAUDE.md

## Project Overview

LearnFootball is a football education platform designed to teach football to complete beginners while also serving intermediate and advanced tactical enthusiasts.

The application combines:

* Football Academy
* Football Encyclopedia
* AI Football Tutor
* World Cup Predictor
* Comparison Tools
* Admin Dashboard

The platform is built to be extendable to additional sports in the future.

---

## Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* GSAP

### Backend

* FastAPI
* Python

### Database

* PostgreSQL
* Supabase

### Authentication

* Google OAuth
* Email Authentication

---

## Development Principles

### 1. Education First

Every feature should help users understand football better.

Do not prioritize statistics over explanations.

Good:

* Explain what a False 9 does.

Bad:

* Only show numerical statistics.

---

### 2. Mobile First

All pages must work flawlessly on mobile devices.

Target widths:

* 320px
* 375px
* 768px
* 1024px
* 1440px

---

### 3. Accessibility

Maintain:

* Proper contrast ratios
* Semantic HTML
* Keyboard navigation
* Screen reader compatibility

---

### 4. Performance

Prefer:

* Server Components
* Static Rendering
* Lazy Loading

Avoid unnecessary client-side rendering.

---

### 5. Reusable Components

Never duplicate UI components.

Create reusable components for:

* Player Cards
* Team Cards
* Comparison Tables
* Achievement Badges
* Timeline Components

---

## UI Guidelines

### Light Theme

Primary: #FFF8F0

Secondary: #053225

### Dark Theme

Primary: #201A23

Secondary: #F7F7FF

---

## Animation Rules

Animations should:

* Improve understanding
* Never block interaction
* Respect reduced motion settings

Examples:

* Position movement animations
* Formation transitions
* Tactical visualizations

Avoid:

* Excessive parallax
* Long loading animations

---

## Football Academy Standards

Every lesson should include:

1. Definition
2. Beginner Explanation
3. Advanced Explanation
4. Examples
5. Visual Diagram
6. Quiz Questions

---

## AI Tutor Standards

AI Tutor must:

* Prefer LearnFootball content
* Use simple language when requested
* Avoid hallucinating football facts
* Cite LearnFootball Academy content when available

---

## Data Standards

Store canonical records for:

* Players
* Teams
* Coaches
* Competitions
* Tournaments

Avoid duplicate entities.

---

## Code Standards

### TypeScript

* Strict Mode enabled
* No `any`
* Prefer interfaces

### Python

* Type hints required
* Pydantic models
* Black formatting

---

## Future Sports

The data model must support:

* Football
* Basketball
* Cricket
* Formula 1
* Tennis

without major schema changes.
