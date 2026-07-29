"""
LearnFootball API - Users Repository

Database operations for the public.users table via the Supabase service client.
"""

from typing import Any

from app.core.supabase_client import get_supabase


async def get_user_by_id(user_id: str) -> dict[str, Any] | None:
    """Fetch a user's public profile by their UUID."""
    supabase = get_supabase()
    response = (
        supabase.table("users")
        .select("id, email, display_name, avatar_url, role, created_at")
        .eq("id", user_id)
        .single()
        .execute()
    )
    return response.data


async def upsert_user(
    user_id: str,
    email: str,
    display_name: str | None = None,
    avatar_url: str | None = None,
) -> dict[str, Any]:
    """Create or update a user's public profile (called on first sign-in)."""
    supabase = get_supabase()
    response = (
        supabase.table("users")
        .upsert(
            {
                "id": user_id,
                "email": email,
                "display_name": display_name or email.split("@")[0],
                "avatar_url": avatar_url,
            },
            on_conflict="id",
        )
        .execute()
    )
    return response.data[0] if response.data else {}


async def update_user_profile(
    user_id: str,
    display_name: str | None = None,
    avatar_url: str | None = None,
) -> dict[str, Any]:
    """Update display name and/or avatar for a user."""
    supabase = get_supabase()
    updates: dict[str, Any] = {}
    if display_name is not None:
        updates["display_name"] = display_name
    if avatar_url is not None:
        updates["avatar_url"] = avatar_url

    response = (
        supabase.table("users")
        .update(updates)
        .eq("id", user_id)
        .execute()
    )
    return response.data[0] if response.data else {}


async def get_all_users(limit: int = 50, offset: int = 0) -> list[dict[str, Any]]:
    """Admin: list all users with pagination."""
    supabase = get_supabase()
    response = (
        supabase.table("users")
        .select("id, email, display_name, role, created_at")
        .order("created_at", desc=True)
        .range(offset, offset + limit - 1)
        .execute()
    )
    return response.data or []


async def set_user_role(user_id: str, role: str) -> dict[str, Any]:
    """Admin: change a user's role."""
    supabase = get_supabase()
    response = (
        supabase.table("users")
        .update({"role": role})
        .eq("id", user_id)
        .execute()
    )
    return response.data[0] if response.data else {}
