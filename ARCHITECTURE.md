# ARCHITECTURE.md

## System Architecture

LearnFootball follows a modular architecture.

```text
Next.js Frontend
        │
        ▼
FastAPI Backend
        │
        ▼
PostgreSQL Database
```

---

## High-Level Modules

### 1. Academy Module

Purpose:

Teach football concepts.

Contains:

* Lessons
* Glossary
* Quizzes
* Tactical Guides

---

### 2. Player Module

Purpose:

Store and display player information.

Entities:

* Player
* Achievement
* Club History
* National Team History

---

### 3. Team Module

Purpose:

Store team information.

Entities:

* Team
* Trophy
* Rivalry
* Historical Squad

---

### 4. Coach Module

Purpose:

Store manager information.

Entities:

* Coach
* Tactical Style
* Career Timeline

---

### 5. AI Tutor Module

Purpose:

Answer football questions.

Components:

* Knowledge Base
* Retrieval Layer
* LLM Interface

---

### 6. Predictor Module

Purpose:

Simulate tournament outcomes.

Modes:

* Manual
* AI Generated
* Community

---

### 7. Comparison Module

Purpose:

Compare players and teams.

Supports:

* Player vs Player
* Team vs Team

---

### 8. Admin Module

Purpose:

Manage content.

Supports:

* Lesson Management
* Glossary Management
* Player Management
* Team Management
* Quiz Management

---

## Database Overview

### Sports

```sql
sport
```

---

### Teams

```sql
team
```

---

### Players

```sql
player
```

---

### Coaches

```sql
coach
```

---

### Competitions

```sql
competition
```

---

### Lessons

```sql
lesson
```

---

### Glossary Terms

```sql
glossary_term
```

---

### Quizzes

```sql
quiz
quiz_question
```

---

### Users

```sql
user
```

---

### Favorites

```sql
favorite_player
favorite_team
```

---

### Predictions

```sql
prediction
prediction_match
```

---

## Frontend Route Structure

```text
/
│
├── academy
├── academy/rules
├── academy/positions
├── academy/formations
├── academy/tactics
│
├── players
├── players/[slug]
│
├── teams
├── teams/[slug]
│
├── coaches
├── coaches/[slug]
│
├── predictor
│
├── compare
│
├── glossary
│
├── tutor
│
└── admin
```

---

## Future Expansion

Future sports should be implemented as modules:

```text
sports
├── football
├── basketball
├── cricket
├── tennis
└── formula1
```

The football implementation must not assume it is the only sport in the platform.
