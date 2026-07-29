"""
LearnFootball API - Supabase Client

Singleton Supabase client using the service-role key (server-side only).
Use this for all DB operations from FastAPI. Never expose the service key to the browser.
"""

from functools import lru_cache

from supabase import create_client, Client

from app.core.config import get_settings


@lru_cache
def get_supabase() -> Client:
    """Return a cached Supabase client using the service role key."""
    settings = get_settings()
    if not settings.SUPABASE_URL or not settings.SUPABASE_SERVICE_ROLE_KEY:
        raise RuntimeError(
            "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env "
            "before using Supabase features."
        )
    return create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_ROLE_KEY)
