# TESTING.md

## Purpose

This document defines the testing strategy for LearnFootball.

The goal of testing is to ensure:

* Features work correctly.
* Users have a reliable experience.
* New changes do not break existing functionality.
* Educational content remains accessible and accurate.

Testing should be performed continuously throughout development.

---

# Testing Philosophy

LearnFootball prioritizes:

1. Reliability
2. Usability
3. Accessibility
4. Performance

We do not test for the sake of testing.

We test to ensure users can learn football without friction.

---

# Testing Levels

## Level 1 — Manual Testing

Required for every feature.

Purpose:

Verify the feature works as expected from a user perspective.

Examples:

* Open player page.
* Search for a team.
* Complete a quiz.
* Use the AI Tutor.

---

## Level 2 — Unit Testing

Purpose:

Verify individual functions behave correctly.

Examples:

* Quiz scoring.
* Search filtering.
* Team rating calculations.

---

## Level 3 — Integration Testing

Purpose:

Verify systems work together.

Examples:

* Frontend ↔ Backend
* Backend ↔ Database
* Authentication ↔ User Profile

---

## Level 4 — End-to-End Testing

Purpose:

Verify complete user journeys.

Examples:

* Sign Up
* Save Favorite Team
* Complete Lesson
* Generate Predictor Bracket

---

# Frontend Testing

## Pages

Every page should be tested for:

* Rendering
* Navigation
* Mobile Responsiveness
* Theme Switching

Pages:

```text id="u8qj6v"
Home
Academy
Players
Teams
Coaches
Predictor
Tutor
Admin
```

---

## Components

Required Components:

```text id="b9txa7"
PlayerCard
TeamCard
CoachCard
LessonCard
QuizCard
SearchBar
ThemeToggle
```

Verify:

* Proper rendering
* Correct props
* Responsive layout

---

# Backend Testing

## API Endpoints

Every endpoint should be tested.

Example:

```text id="j99qbt"
GET /players
GET /players/{slug}
GET /teams
POST /predictor/manual
POST /tutor/chat
```

Verify:

* Status code
* Response format
* Error handling

---

# Database Testing

Verify:

* Records insert correctly.
* Records update correctly.
* Records delete correctly.
* Relationships remain valid.

Examples:

* Player ↔ Team
* User ↔ Favorites
* Lesson ↔ Quiz

---

# Authentication Testing

Verify:

## Google Login

* Sign In
* Sign Out
* Session Persistence

---

## Email Authentication

* Register
* Login
* Logout
* Password Reset

---

# Academy Testing

Each lesson must be checked for:

* Correct formatting
* Navigation
* Quiz availability

Verify:

```text id="epzh4g"
Definition
Examples
Advanced Explanation
Quiz
```

exist for every lesson.

---

# Glossary Testing

Verify:

* Search works.
* Related terms appear.
* Internal links work.

---

# AI Tutor Testing

Test common prompts.

Examples:

```text id="9v7m1u"
What is offside?
What is a False 9?
Explain Gegenpressing.
```

Verify:

* Clear explanation
* No hallucinated facts
* Appropriate difficulty level

---

# Predictor Testing

Verify:

## Manual Bracket

* Winner selection
* Bracket progression

---

## AI Bracket

* Prediction generation
* Explanation output

---

## Community Statistics

* Aggregation
* Display

---

# Mobile Testing

Required widths:

```text id="xajc38"
320px
375px
768px
1024px
1440px
```

Verify:

* Navigation
* Cards
* Forms
* Brackets

---

# Accessibility Testing

Verify:

* Keyboard navigation
* Focus states
* Screen reader compatibility
* Reduced motion support

Target:

WCAG AA

---

# Performance Testing

Target Lighthouse Scores:

```text id="mg9v8y"
Performance     > 90
Accessibility   > 90
SEO             > 90
Best Practices  > 90
```

---

# Error Handling Testing

Verify:

* Invalid player URL
* Invalid team URL
* Empty search
* Failed login
* API errors

Users should receive helpful messages.

Never show raw errors.

---

# Regression Testing

Before every release:

Test:

* Academy
* Players
* Teams
* Coaches
* Tutor
* Predictor
* Authentication

to ensure existing features still work.

---

# MVP Testing Checklist

Before launch:

□ User can browse lessons

□ User can complete quizzes

□ User can search players

□ User can search teams

□ User can use AI Tutor

□ User can create bracket predictions

□ User can sign in

□ User can save favorites

□ Mobile layout works

□ Dark mode works

□ Lighthouse > 90

---

# Success Metric

Testing is successful when:

A new user can visit LearnFootball and complete the entire learning journey without encountering errors, confusion, or broken functionality.
