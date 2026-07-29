# DATABASE_SCHEMA.md

## Design Philosophy

The database must be:

* Sport-agnostic
* Extensible
* Normalized
* Future-proof

Football is the first sport, not the only sport.

---

# Core Tables

## sports

Stores supported sports.

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| name        | VARCHAR   |
| slug        | VARCHAR   |
| description | TEXT      |
| created_at  | TIMESTAMP |

### Examples

* football
* cricket
* basketball
* tennis
* formula1

---

## competitions

Stores tournaments and leagues.

| Column           | Type    |
| ---------------- | ------- |
| id               | UUID    |
| sport_id         | UUID    |
| name             | VARCHAR |
| slug             | VARCHAR |
| competition_type | VARCHAR |
| country          | VARCHAR |
| founded_year     | INTEGER |

### Examples

* FIFA World Cup
* UEFA Champions League
* Premier League

---

## teams

| Column       | Type      |
| ------------ | --------- |
| id           | UUID      |
| sport_id     | UUID      |
| name         | VARCHAR   |
| slug         | VARCHAR   |
| country      | VARCHAR   |
| founded_year | INTEGER   |
| description  | TEXT      |
| logo_url     | TEXT      |
| created_at   | TIMESTAMP |

---

## coaches

| Column        | Type    |
| ------------- | ------- |
| id            | UUID    |
| sport_id      | UUID    |
| name          | VARCHAR |
| slug          | VARCHAR |
| nationality   | VARCHAR |
| date_of_birth | DATE    |
| biography     | TEXT    |

---

## players

| Column        | Type    |
| ------------- | ------- |
| id            | UUID    |
| sport_id      | UUID    |
| team_id       | UUID    |
| name          | VARCHAR |
| slug          | VARCHAR |
| nationality   | VARCHAR |
| position      | VARCHAR |
| date_of_birth | DATE    |
| height_cm     | INTEGER |
| biography     | TEXT    |
| image_url     | TEXT    |

---

# Football Specific Tables

## player_career_history

| Column      | Type    |
| ----------- | ------- |
| id          | UUID    |
| player_id   | UUID    |
| team_name   | VARCHAR |
| start_year  | INTEGER |
| end_year    | INTEGER |
| appearances | INTEGER |
| goals       | INTEGER |
| assists     | INTEGER |

---

## player_achievements

| Column           | Type    |
| ---------------- | ------- |
| id               | UUID    |
| player_id        | UUID    |
| achievement_name | VARCHAR |
| year             | INTEGER |
| description      | TEXT    |

### Examples

* Ballon d'Or
* FIFA Best Player
* World Cup Winner

---

## team_achievements

| Column     | Type    |
| ---------- | ------- |
| id         | UUID    |
| team_id    | UUID    |
| title_name | VARCHAR |
| year       | INTEGER |

---

## rivalries

| Column       | Type    |
| ------------ | ------- |
| id           | UUID    |
| team_a_id    | UUID    |
| team_b_id    | UUID    |
| rivalry_name | VARCHAR |
| description  | TEXT    |

---

# Academy System

## lessons

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| title      | VARCHAR   |
| slug       | VARCHAR   |
| category   | VARCHAR   |
| difficulty | VARCHAR   |
| content    | TEXT      |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

### Categories

* rules
* positions
* tactics
* formations
* history

---

## glossary_terms

| Column               | Type    |
| -------------------- | ------- |
| id                   | UUID    |
| term                 | VARCHAR |
| slug                 | VARCHAR |
| category             | VARCHAR |
| definition           | TEXT    |
| advanced_explanation | TEXT    |

---

# Quiz System

## quizzes

| Column      | Type    |
| ----------- | ------- |
| id          | UUID    |
| lesson_id   | UUID    |
| title       | VARCHAR |
| description | TEXT    |

---

## quiz_questions

| Column         | Type    |
| -------------- | ------- |
| id             | UUID    |
| quiz_id        | UUID    |
| question       | TEXT    |
| option_a       | TEXT    |
| option_b       | TEXT    |
| option_c       | TEXT    |
| option_d       | TEXT    |
| correct_answer | VARCHAR |

---

# Authentication

## users

| Column       | Type      |
| ------------ | --------- |
| id           | UUID      |
| email        | VARCHAR   |
| display_name | VARCHAR   |
| avatar_url   | TEXT      |
| role         | VARCHAR   |
| created_at   | TIMESTAMP |

### Roles

* user
* admin
* super_admin

---

# Favorites

## favorite_players

| Column    | Type |
| --------- | ---- |
| id        | UUID |
| user_id   | UUID |
| player_id | UUID |

---

## favorite_teams

| Column  | Type |
| ------- | ---- |
| id      | UUID |
| user_id | UUID |
| team_id | UUID |

---

# AI Tutor

## ai_conversations

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| user_id    | UUID      |
| created_at | TIMESTAMP |

---

## ai_messages

| Column          | Type      |
| --------------- | --------- |
| id              | UUID      |
| conversation_id | UUID      |
| role            | VARCHAR   |
| content         | TEXT      |
| created_at      | TIMESTAMP |

---

# Predictor

## prediction_sessions

| Column          | Type      |
| --------------- | --------- |
| id              | UUID      |
| user_id         | UUID      |
| prediction_type | VARCHAR   |
| created_at      | TIMESTAMP |

### Types

* manual
* ai
* community

---

## prediction_matches

| Column                | Type    |
| --------------------- | ------- |
| id                    | UUID    |
| prediction_session_id | UUID    |
| round_name            | VARCHAR |
| team_a                | VARCHAR |
| team_b                | VARCHAR |
| predicted_winner      | VARCHAR |

---

# Admin

## audit_logs

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| admin_id    | UUID      |
| action      | VARCHAR   |
| target_type | VARCHAR   |
| target_id   | UUID      |
| created_at  | TIMESTAMP |

---

# Recommended Supabase Extensions

Enable:

* pg_trgm
* uuid-ossp
* pgvector (future AI search)

---

# Future Expansion

When Cricket is added:

* No new user tables needed.
* No new competition tables needed.
* No new team tables needed.

Only sport-specific stat tables are added.

The core architecture remains unchanged.
