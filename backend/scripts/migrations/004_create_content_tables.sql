-- ============================================================================
-- 004_create_content_tables.sql
-- LearnFootball — Content Tables Migration
--
-- Creates tables for:
--   1. Academy lessons (lessons)
--   2. Quizzes (quizzes)
--   3. Quiz questions (quiz_questions)
--   4. Glossary terms (glossary_terms)
--   5. Player profiles (player_profiles)
--   6. Coach profiles (coach_profiles)
--   7. Team profiles (team_profiles)
--
-- Row-Level Security (RLS):
--   - All tables are public READ (anon + authenticated)
--   - Writes are service_role only (admin operations use service key)
-- ============================================================================

-- ── Extensions ──────────────────────────────────────────────────────────────
create extension if not exists "pgcrypto";

-- ── Helper: updated_at trigger ───────────────────────────────────────────────
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;


-- ═══════════════════════════════════════════════════════════════════════════
-- 1. LESSONS
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.lessons (
  id            uuid primary key default gen_random_uuid(),
  module_slug   text not null,
  slug          text not null unique,
  title         text not null,
  description   text,
  reading_time  integer default 5,
  difficulty    text default 'beginner',
  emoji         text,
  category      text,
  content       jsonb default '[]',
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

create index if not exists idx_lessons_module_slug on public.lessons (module_slug);

alter table public.lessons enable row level security;

create policy "lessons_select_all"
  on public.lessons for select
  using (true);

create or replace trigger set_lessons_updated_at
  before update on public.lessons
  for each row execute function update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════
-- 2. QUIZZES
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.quizzes (
  id          uuid primary key default gen_random_uuid(),
  lesson_id   uuid not null unique references public.lessons(id) on delete cascade,
  title       text,
  description text,
  created_at  timestamptz default now()
);

alter table public.quizzes enable row level security;

create policy "quizzes_select_all"
  on public.quizzes for select
  using (true);


-- ═══════════════════════════════════════════════════════════════════════════
-- 3. QUIZ QUESTIONS
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.quiz_questions (
  id            uuid primary key default gen_random_uuid(),
  quiz_id       uuid not null references public.quizzes(id) on delete cascade,
  question      text not null,
  options       jsonb not null default '[]',
  correct_index integer not null,
  explanation   text,
  "order"       integer default 0,
  created_at    timestamptz default now()
);

create index if not exists idx_quiz_questions_quiz_id on public.quiz_questions (quiz_id);

alter table public.quiz_questions enable row level security;

create policy "quiz_questions_select_all"
  on public.quiz_questions for select
  using (true);


-- ═══════════════════════════════════════════════════════════════════════════
-- 4. GLOSSARY TERMS
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.glossary_terms (
  id                   uuid primary key default gen_random_uuid(),
  term                 text not null,
  slug                 text not null unique,
  category             text,
  definition           text not null,
  advanced_explanation text,
  created_at           timestamptz default now()
);

create index if not exists idx_glossary_terms_category on public.glossary_terms (category);

alter table public.glossary_terms enable row level security;

create policy "glossary_select_all"
  on public.glossary_terms for select
  using (true);


-- ═══════════════════════════════════════════════════════════════════════════
-- 5. PLAYER PROFILES
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.player_profiles (
  id           uuid primary key default gen_random_uuid(),
  api_id       integer,
  name         text not null,
  slug         text not null unique,
  active       boolean default true,
  position     text,
  country      text,
  country_name text,
  bio          text,
  style        text,
  stats        jsonb default '[]',
  timeline     jsonb default '[]',
  trophies     jsonb default '[]',
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

alter table public.player_profiles enable row level security;

create policy "players_select_all"
  on public.player_profiles for select
  using (true);

create or replace trigger set_player_profiles_updated_at
  before update on public.player_profiles
  for each row execute function update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════
-- 6. COACH PROFILES
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.coach_profiles (
  id           uuid primary key default gen_random_uuid(),
  api_id       integer,
  name         text not null,
  slug         text not null unique,
  active       boolean default true,
  philosophy   text,
  club         text,
  emoji        text,
  country      text,
  country_name text,
  bio          text,
  stats        jsonb default '[]',
  timeline     jsonb default '[]',
  trophies     jsonb default '[]',
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

alter table public.coach_profiles enable row level security;

create policy "coaches_select_all"
  on public.coach_profiles for select
  using (true);

create or replace trigger set_coach_profiles_updated_at
  before update on public.coach_profiles
  for each row execute function update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════
-- 7. TEAM PROFILES
-- ═══════════════════════════════════════════════════════════════════════════
create table if not exists public.team_profiles (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  slug            text not null unique,
  active          boolean default true,
  flag            text,
  titles          text,
  style           text,
  squad           jsonb default '[]',
  stats           jsonb default '[]',
  timeline        jsonb default '[]',
  trophies        jsonb default '[]',
  world_cup_squad jsonb default '[]',
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

alter table public.team_profiles enable row level security;

create policy "teams_select_all"
  on public.team_profiles for select
  using (true);

create or replace trigger set_team_profiles_updated_at
  before update on public.team_profiles
  for each row execute function update_updated_at_column();
