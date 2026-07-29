# MVP_SCOPE.md

## Purpose

Define the minimum feature set required to launch LearnFootball Version 1.

The MVP should be buildable by a solo developer and provide real value to users.

---

# MVP Goal

A complete beginner should be able to:

1. Learn football basics.
2. Understand positions and tactics.
3. Explore players and teams.
4. Ask questions to the AI Tutor.
5. Use the World Cup Predictor.

If these goals are met, the MVP is successful.

---

# MVP Features

## 1. Homepage

### Include

* Hero Section
* Feature Overview
* Academy Preview
* Featured Players
* Featured Teams
* AI Tutor CTA

### Exclude

* Community Feed
* Notifications
* Live Data

---

## 2. Academy

### Include

Rules

* Offside
* Fouls
* Cards
* Penalties
* VAR

Positions

* Goalkeeper
* Defender
* Midfielder
* Attacker
* Number 6
* Number 8
* Number 10
* False 9

Formations

* 4-4-2
* 4-3-3
* 4-2-3-1

Tactics

* Gegenpressing
* Tiki-Taka
* Counter Attack

### Target

30–50 lessons.

---

## 3. Glossary

### Include

50–100 football terms.

Examples:

* Regista
* Poacher
* Anchor Man
* Shadow Striker

---

## 4. Players

### Include

100 players.

Each profile contains:

* Biography
* Position
* Nationality
* Career Timeline
* Achievements

### Exclude

* Live statistics
* Injury tracking
* Transfer tracking

---

## 5. Teams

### Include

20 national teams.

Examples:

* Argentina
* Brazil
* France
* Germany
* Spain
* England

### Exclude

* Live standings
* Live fixtures

---

## 6. Coaches

### Include

20–30 major coaches.

Examples:

* Pep Guardiola
* José Mourinho
* Carlo Ancelotti

### Exclude

* Live coaching records

---

## 7. AI Football Tutor

### Include

* Football Q&A
* Lesson-aware responses
* Beginner explanations
* Advanced explanations

### Exclude

* Voice Chat
* Multimodal Support

---

## 8. Predictor

### Include

Manual Bracket

AI Bracket

Community Bracket

### Exclude

* Real-time tournament syncing

---

## 9. Authentication

### Include

Google Login

Email Login

User Profiles

Favorites

### Exclude

* Social Features

---

## 10. Admin Dashboard

### Include

Lesson Management

Player Management

Team Management

Glossary Management

Quiz Management

### Exclude

* Multi-admin workflows

---

# Features Delayed to Version 2

## Notifications

Player Starts

Goals

Assists

Match Results

Reason:

Requires live match data.

---

## Live Match Center

Fixtures

Results

Standings

Lineups

Reason:

Requires external APIs.

---

## Transfer Tracker

Reason:

Requires continuously updated data.

---

## Injury Tracker

Reason:

Requires continuously updated data.

---

## Real-Time Statistics

Reason:

Not essential for educational MVP.

---

# Features Delayed to Version 3

## Multi-Sport Expansion

* Cricket
* Basketball
* Tennis
* Formula 1

---

## Native Mobile App

Android

iOS

---

## Community Features

Comments

Forums

User Discussions

---

# MVP Dataset

## Players

100

## Teams

20

## Coaches

30

## Glossary Terms

100

## Lessons

50

## Quizzes

50

---

# Technical Scope

Frontend

* Next.js
* TypeScript
* Tailwind

Backend

* FastAPI

Database

* Supabase PostgreSQL

Authentication

* Supabase Auth

AI

* RAG
* Football Knowledge Base

---

# Launch Criteria

The MVP is ready when:

✓ Users can learn football.

✓ Users can explore players.

✓ Users can explore teams.

✓ Users can use the AI Tutor.

✓ Users can use the Predictor.

✓ Users can complete quizzes.

✓ Users can save favorites.

Everything else can wait.
