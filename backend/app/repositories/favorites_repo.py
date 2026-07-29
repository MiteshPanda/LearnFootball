"""
LearnFootball API - Favorites Repository

Database operations for the public.user_favorites table via the Supabase service client.
"""

from typing import Any

from app.core.supabase_client import get_supabase


async def get_favorites(user_id: str) -> list[dict[str, Any]]:
    """Return all favorites for a given user, newest first."""
    supabase = get_supabase()
    response = (
        supabase.table("user_favorites")
        .select("id, item_type, item_id, item_name, created_at")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
        .execute()
    )
    return response.data or []


async def get_favorite_ids(user_id: str) -> set[str]:
    """Return a set of 'item_type:item_id' keys for quick lookup."""
    favorites = await get_favorites(user_id)
    return {f"{f['item_type']}:{f['item_id']}" for f in favorites}


async def add_favorite(
    user_id: str,
    item_type: str,
    item_id: str,
    item_name: str | None = None,
) -> dict[str, Any]:
    """Add a favorite; silently ignores duplicates (unique constraint)."""
    supabase = get_supabase()
    response = (
        supabase.table("user_favorites")
        .upsert(
            {
                "user_id": user_id,
                "item_type": item_type,
                "item_id": item_id,
                "item_name": item_name,
            },
            on_conflict="user_id,item_type,item_id",
        )
        .execute()
    )
    return response.data[0] if response.data else {}


async def remove_favorite(user_id: str, favorite_id: str) -> bool:
    """Remove a favorite by its UUID. Returns True if a row was deleted."""
    supabase = get_supabase()
    response = (
        supabase.table("user_favorites")
        .delete()
        .eq("id", favorite_id)
        .eq("user_id", user_id)  # safety: can't delete another user's favorite
        .execute()
    )
    return bool(response.data)


async def remove_favorite_by_item(
    user_id: str, item_type: str, item_id: str
) -> bool:
    """Remove by item slug rather than by UUID — used by the FavoriteButton toggle."""
    supabase = get_supabase()
    response = (
        supabase.table("user_favorites")
        .delete()
        .eq("user_id", user_id)
        .eq("item_type", item_type)
        .eq("item_id", item_id)
        .execute()
    )
    return bool(response.data)
