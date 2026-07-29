-- 001_create_public_users.sql
-- Mirrors Supabase auth.users into a public profile table with role support.

create table if not exists public.users (
  id           uuid primary key references auth.users(id) on delete cascade,
  email        text unique,
  display_name text,
  avatar_url   text,
  role         text not null default 'user' check (role in ('user', 'admin', 'super_admin')),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Trigger to auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger users_updated_at
  before update on public.users
  for each row execute procedure public.set_updated_at();

-- Enable RLS
alter table public.users enable row level security;

-- Auto-create public profile on first sign-in via trigger on auth.users
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.users (id, email, display_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
