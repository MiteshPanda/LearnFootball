# PLAYER_DATA_PLAN.md

## Purpose

Define the structure, content requirements, and user experience for player profiles in LearnFootball.

Player pages should not feel like raw statistics pages.

They should help users understand:

* who the player is,
* how they play,
* why they are important,
* and where they fit within football history.

---

# User Goals

A visitor should be able to answer:

* Who is this player?
* Which position do they play?
* Which club do they play for?
* What makes them special?
* What have they achieved?
* How do they compare to other players?

within a few seconds.

---

# MVP Dataset

## Initial Target

40 Players

### Legends

* Lionel Messi
* Cristiano Ronaldo
* Diego Maradona
* Johan Cruyff
* Pelé
* Zinedine Zidane
* Ronaldinho
* Ronaldo Nazário
* Franz Beckenbauer
* Paolo Maldini

---

### Modern Stars

* Kylian Mbappé
* Erling Haaland
* Jude Bellingham
* Vinícius Júnior
* Kevin De Bruyne
* Rodri
* Harry Kane
* Mohamed Salah
* Lautaro Martínez
* Jamal Musiala

---

### Emerging Players

Additional young stars added over time.

---

# Player Page Layout

```text
┌───────────────────────┬─────────────────────────────┐
│                       │                             │
│     Player Card       │      Player Content         │
│                       │                             │
└───────────────────────┴─────────────────────────────┘
```

---

# Player Card

Display:

* Photo
* Name
* Nationality
* Position
* Current Club
* Age

Animation:

Player card smoothly shifts left when selected.

---

# Profile Sections

## Overview

Contains:

* Name
* Nationality
* Date of Birth
* Preferred Foot
* Position
* Current Club

---

## Biography

Explain:

* Background
* Development
* Career story

Avoid statistics-only descriptions.

---

## Playing Style

Explain:

* Strengths
* Tactical role
* Typical movements
* Positioning

Example:

Lionel Messi

* False 9
* Playmaker
* Dribbler
* Creator

---

## Career Timeline

Display:

* Clubs
* Years
* Major milestones

Example:

2004–2021 Barcelona

2021–2023 PSG

2023–Present Inter Miami

---

## Achievements

### Club

Examples:

* Champions League
* League Titles
* Domestic Cups

---

### International

Examples:

* World Cup
* Continental Titles

---

### Individual

Examples:

* Ballon d'Or
* Golden Boot
* FIFA Best Player

---

# Statistics

MVP Statistics:

* Appearances
* Goals
* Assists

Version 2:

* Expected Goals
* Expected Assists
* Progressive Passes
* Advanced Analytics

---

# Playing Position Visualization

Display:

* Primary Position
* Secondary Positions

Examples:

ST

RW

CAM

CDM

CB

---

# Trophy Cabinet

Display trophies visually.

Categories:

* Club
* Country
* Individual

---

# Related Players

Recommend similar players.

Example:

False 9:

* Lionel Messi
* Roberto Firmino

Target Man:

* Olivier Giroud
* Harry Kane

---

# Compare Entry Point

Users can click:

Compare Player

and manually choose another player.

Comparison is not shown automatically.

---

# Search Metadata

Every player page should support:

Title:

Player Name | LearnFootball

Example:

Lionel Messi | LearnFootball

Description:

Learn about Lionel Messi's career, achievements, playing style, and football legacy.

---

# Content Standards

Every player page must answer:

Who?

How?

Why?

before showing numbers.

Storytelling first.

Statistics second.

---

# Future Features

Version 2:

* Heatmaps
* Match Data
* Live Statistics
* Transfer History
* Injury History

---

# Success Metric

A beginner should be able to understand why a player is famous without needing prior football knowledge.
