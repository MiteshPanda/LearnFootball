# DEPLOYMENT.md

## Purpose

This document defines how LearnFootball is deployed from local development to production.

Deployment should be:

* Simple
* Repeatable
* Secure
* Cost-effective

Version 1 is designed to run entirely on free tiers where possible.

---

# Deployment Architecture

```text
User
  ↓
Vercel (Frontend)
  ↓
FastAPI Backend
  ↓
Supabase PostgreSQL
```

---

# Technology Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS

Hosting:

* Vercel

---

## Backend

* FastAPI
* Python

Hosting:

* Render (Free Tier)
  or
* Railway (if free credits available)

---

## Database

* PostgreSQL

Provider:

* Supabase

---

## Authentication

* Supabase Auth

Providers:

* Google OAuth
* Email Authentication

---

# Environment Setup

## Frontend Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

NEXT_PUBLIC_API_URL=
```

---

## Backend Variables

```env
DATABASE_URL=

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

OPENROUTER_API_KEY=
```

---

# Local Development

## Frontend

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Default:

```text
http://localhost:3000
```

---

## Backend

Create virtual environment:

```bash
python -m venv .venv
```

Activate:

### Windows

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run:

```bash
uvicorn app.main:app --reload
```

Default:

```text
http://localhost:8000
```

---

# Supabase Setup

## Create Project

Create a new Supabase project.

---

## Enable Authentication

Enable:

* Google OAuth
* Email Login

---

## Create Database Tables

Create:

```text
users
players
teams
coaches
lessons
glossary_terms
quizzes
prediction_sessions
prediction_matches
favorites
```

based on DATABASE_SCHEMA.md.

---

# Frontend Deployment

## Vercel

Connect repository.

Import project.

Framework:

```text
Next.js
```

---

## Build Command

```bash
npm run build
```

---

## Output

Automatically detected by Vercel.

---

# Backend Deployment

## Render

Create:

```text
Web Service
```

Runtime:

```text
Python
```

---

## Start Command

```bash
uvicorn app.main:app --host 0.0.0.0 --port 10000
```

---

## Health Endpoint

Required:

```text
GET /health
```

Expected:

```json
{
  "status": "healthy"
}
```

Used for monitoring deployments.

---

# Database Deployment

Managed by Supabase.

Responsibilities:

* Storage
* Authentication
* Security
* Backups

---

# Domain Setup

Version 1

Example:

```text
learnfootball.vercel.app
```

---

## Production Domain

Examples:

```text
learnfootball.com
learn-football.com
learnfootball.app
```

---

# SSL

Required.

All traffic must use:

```text
HTTPS
```

Never expose production through HTTP.

---

# Security Checklist

Before launch:

□ HTTPS enabled

□ Environment variables configured

□ Service keys not exposed

□ Database RLS enabled

□ Admin routes protected

□ Secrets removed from repository

---

# Monitoring

Version 1

Monitor:

* API uptime
* Deployment status
* Error logs

---

## Frontend

Monitor:

* Build failures
* Rendering issues

---

## Backend

Monitor:

* API failures
* Database connection issues

---

# Backup Strategy

## Database

Use Supabase backups.

Export:

* Lessons
* Players
* Teams
* Coaches

periodically.

---

# Release Process

## Step 1

Develop feature branch.

---

## Step 2

Test locally.

---

## Step 3

Merge to main.

---

## Step 4

Automatic deployment.

---

## Step 5

Verify production.

Checklist:

□ Homepage works

□ Academy works

□ Players work

□ Teams work

□ Tutor works

□ Predictor works

□ Authentication works

---

# Rollback Strategy

If production breaks:

1. Revert merge.
2. Redeploy previous stable version.
3. Investigate issue.
4. Release fix.

---

# MVP Deployment Targets

Frontend:

* Vercel Free Tier

Backend:

* Render Free Tier

Database:

* Supabase Free Tier

Goal:

₹0/month during development.

---

# Future Scaling

Version 2

Add:

* CDN optimization
* Caching
* Analytics

---

Version 3

Add:

* Multi-region deployment
* Dedicated databases
* Load balancing

---

# Success Metric

Deployment is successful when:

A user anywhere in the world can open LearnFootball, browse lessons, explore players and teams, use the AI Tutor, and create tournament predictions without needing access to local development resources.
