-- 003_rls_policies.sql
-- Row-level security: users can only see/touch their own rows.
-- Admins (service role) bypass RLS entirely.

-- ── public.users ──────────────────────────────────────────────────────────────

-- Users can read their own profile
create policy "users_select_own"
  on public.users for select
  using (auth.uid() = id);

-- Users can update their own profile (name, avatar)
create policy "users_update_own"
  on public.users for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- ── public.user_favorites ──────────────────────────────────────────────────────

-- Users can read their own favorites
create policy "favorites_select_own"
  on public.user_favorites for select
  using (auth.uid() = user_id);

-- Users can insert their own favorites
create policy "favorites_insert_own"
  on public.user_favorites for insert
  with check (auth.uid() = user_id);

-- Users can delete their own favorites
create policy "favorites_delete_own"
  on public.user_favorites for delete
  using (auth.uid() = user_id);
