# PREDICTOR_SPEC.md

## Purpose

The LearnFootball Predictor allows users to simulate tournament outcomes and test their football knowledge.

The predictor should be:

* Educational
* Interactive
* Beginner-Friendly
* Visually Engaging

The goal is not gambling or betting.

The goal is helping users understand tournament structures, team strengths, and football competitions.

---

# MVP Scope

Version 1 supports:

* Manual Bracket Prediction
* AI Bracket Prediction
* Community Prediction Statistics

Primary focus:

FIFA World Cup

---

# User Goals

Users should be able to:

* Learn how knockout tournaments work.
* Predict match winners.
* Simulate an entire World Cup.
* Compare their predictions with others.
* Understand why certain teams are favored.

---

# Tournament Types

## Version 1

Supported:

* FIFA World Cup

---

## Future Versions

* UEFA Champions League
* UEFA European Championship
* Copa América
* AFC Asian Cup
* Club World Cup

---

# Prediction Modes

## Mode 1 — Manual Bracket

User selects winners manually.

Example:

Argentina vs Portugal

↓

Argentina

User advances Argentina to the next round.

---

# Mode 2 — AI Predictor

System automatically predicts outcomes.

Based on:

* Team Rating
* Historical Performance
* Tournament Performance
* Squad Quality
* Offensive Strength
* Defensive Strength

Version 1 uses simplified scoring.

No machine learning required initially.

---

# Mode 3 — Community Predictor

Displays:

* Most Selected Winner
* Most Selected Finalists
* Biggest Upset Picks

Purpose:

Allow users to compare predictions.

---

# User Flow

```text
Choose Tournament
        ↓
Choose Prediction Mode
        ↓
Build Bracket
        ↓
Generate Results
        ↓
View Champion
        ↓
Share Prediction
```

---

# Tournament Visualization

Bracket should be visual.

Example:

```text
Quarter Final
      ↓
Semi Final
      ↓
Final
      ↓
Champion
```

Animation:

Winning team advances smoothly.

---

# Team Strength System

Version 1 uses internal ratings.

Scale:

```text
0 – 100
```

Factors:

### Historical Success

Examples:

* World Cups
* Continental Titles

---

### Current Strength

Examples:

* Squad Quality
* Recent Tournament Results

---

### Tactical Strength

Examples:

* Defensive Stability
* Goal Threat

---

# AI Prediction Logic

Version 1 Formula

```text
Team Rating
+ Historical Weight
+ Tournament Weight
= Prediction Score
```

Higher score advances.

Purpose:

Transparency over complexity.

---

# Explainability

Every AI prediction should include:

## Winner

Example:

Argentina

---

## Confidence

Example:

78%

---

## Why?

Example:

* Strong attacking depth
* Recent tournament success
* High team rating

Users should understand predictions.

---

# Bracket Features

## Required

* Team Selection
* Winner Selection
* Progression Visualization
* Champion Selection

---

## Optional

* Reset Bracket
* Random Bracket
* Auto Fill

---

# Community Features

Version 1

Anonymous Aggregation

Display:

* 42% chose Argentina
* 21% chose France
* 15% chose Brazil

No social networking required.

---

# Saved Predictions

Authenticated users can:

* Save Brackets
* Edit Brackets
* Create Multiple Brackets

---

# Data Model

## prediction_session

Stores:

* User
* Tournament
* Mode

---

## prediction_match

Stores:

* Team A
* Team B
* Winner

---

# Statistics

Track:

* Most Predicted Champion
* Most Predicted Final
* Most Predicted Upset

Purpose:

Community insights.

---

# UI Requirements

The bracket must be:

* Mobile Responsive
* Interactive
* Drag-Free
* Beginner Friendly

Users should not need football knowledge to use it.

---

# Accessibility

Must support:

* Keyboard Navigation
* Screen Readers
* Reduced Motion

---

# Version 2

Add:

* FIFA Ranking Integration
* Historical Match Data
* Better Team Ratings

---

# Version 3

Add:

* Machine Learning Predictions
* Match Simulations
* Dynamic Tournament Updates

---

# Success Metric

A user should be able to:

1. Understand a knockout tournament.
2. Build a complete bracket.
3. Predict a champion.
4. Learn why certain teams are stronger than others.

without needing prior football knowledge.
