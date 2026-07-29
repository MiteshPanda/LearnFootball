"""
LearnFootball API - Application Settings

Pydantic BaseSettings for environment-based configuration.
"""

from functools import lru_cache
from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings loaded from environment variables and .env file."""

    # Database
    DATABASE_URL: str = "sqlite:///./learnfootball.db"

    # Supabase
    SUPABASE_URL: str = ""
    SUPABASE_SERVICE_ROLE_KEY: str = ""
    SUPABASE_ANON_KEY: str = ""
    SUPABASE_JWT_SECRET: str = ""  # Found in Supabase Dashboard > Settings > API > JWT Secret

    # Gemini AI
    GEMINI_API_KEY: str = ""

    # api-football.com API Key
    API_FOOTBALL_KEY: str = ""

    # App
    APP_ENV: str = "development"
    APP_DEBUG: bool = True
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
    )


@lru_cache
def get_settings() -> Settings:
    """Return cached application settings instance."""
    return Settings()
