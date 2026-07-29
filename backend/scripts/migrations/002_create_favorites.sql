-- 002_create_favorites.sql
-- Stores user-favorited players and teams with de-duplication.

create table if not exists public.user_favorites (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.users(id) on delete cascade,
  item_type  text not null check (item_type in ('player', 'team')),
  item_id    text not null,   -- slug of the player/team
  item_name  text,            -- denormalized for display without a join
  created_at timestamptz not null default now(),
  unique (user_id, item_type, item_id)
);

-- Enable RLS
alter table public.user_favorites enable row level security;

-- Index for fast per-user lookups
create index if not exists idx_favorites_user_id on public.user_favorites(user_id);
