# API_SPECIFICATION.md

## API Version

v1

Base URL:

```text
/api/v1
```

---

# Health

## GET /health

Returns API status.

Response:

```json
{
  "status": "healthy"
}
```

---

# Academy

## GET /academy

Get all academy lessons.

### Query Parameters

```text
category
difficulty
search
page
limit
```

---

## GET /academy/{slug}

Get lesson details.

Example:

```text
/academy/false-9
```

Returns:

* title
* content
* examples
* quiz

---

# Glossary

## GET /glossary

Returns glossary terms.

---

## GET /glossary/{slug}

Example:

```text
/glossary/regista
```

Returns:

* definition
* examples
* related terms

---

# Players

## GET /players

Supports:

```text
search
position
country
club
```

---

## GET /players/{slug}

Example:

```text
/players/lionel-messi
```

Returns:

* profile
* biography
* achievements
* career timeline

---

## GET /players/{slug}/compare

Example:

```text
/players/lionel-messi/compare?target=cristiano-ronaldo
```

Returns:

* side-by-side comparison

---

# Teams

## GET /teams

Returns teams.

---

## GET /teams/{slug}

Returns:

* history
* achievements
* legends
* rivalries

---

# Coaches

## GET /coaches

Returns coaches.

---

## GET /coaches/{slug}

Returns:

* biography
* tactical style
* career timeline

---

# Predictor

## POST /predictor/manual

Accepts user bracket.

Returns generated prediction.

---

## POST /predictor/ai

Accepts tournament structure.

Returns AI-generated prediction.

---

## GET /predictor/community

Returns:

* most selected winner
* most selected finalist
* upset picks

---

# Tutor

## POST /tutor/chat

Request:

```json
{
  "message": "Explain a False 9"
}
```

Response:

```json
{
  "answer": "...",
  "sources": []
}
```

---

# Quiz

## GET /quiz/{lessonId}

Returns lesson quiz.

---

## POST /quiz/submit

Request:

```json
{
  "quizId": "...",
  "answers": []
}
```

Returns:

* score
* explanation

---

# User

## GET /me

Returns current user.

---

## GET /me/favorites

Returns:

* favorite players
* favorite teams

---

## POST /favorites/player

Adds favorite player.

---

## POST /favorites/team

Adds favorite team.

---

# Admin

Protected Routes

## POST /admin/lesson

Create lesson.

---

## PUT /admin/lesson/{id}

Update lesson.

---

## DELETE /admin/lesson/{id}

Delete lesson.

---

## POST /admin/player

Create player.

---

## POST /admin/team

Create team.

---

## POST /admin/glossary

Create glossary entry.

---

# Future APIs

Version 2:

* Live fixtures
* Live scores
* Notifications
* Match events

Version 3:

* Multi-sport APIs
