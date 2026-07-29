"""
LearnFootball API - Users Endpoints

Endpoints for user profiles and preferences.
"""

from typing import Any

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel

from app.middleware.auth import UserClaims, get_current_user
from app.repositories import users_repo

router = APIRouter(prefix="/users", tags=["Users"])


class ProfileUpdate(BaseModel):
    display_name: str | None = None
    avatar_url: str | None = None


@router.get(
    "/me",
    status_code=status.HTTP_200_OK,
    summary="Get current user profile",
    response_description="The authenticated user's profile",
)
async def get_current_user_profile(
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Retrieve the currently authenticated user's profile from the database."""
    profile = await users_repo.get_user_by_id(user.user_id)
    if not profile:
        # First call — auto-create the public profile from JWT claims
        profile = await users_repo.upsert_user(
            user_id=user.user_id,
            email=user.email,
        )
    return profile


@router.patch(
    "/me",
    status_code=status.HTTP_200_OK,
    summary="Update current user profile",
    response_description="The updated user profile",
)
async def update_profile(
    body: ProfileUpdate,
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Update the authenticated user's display name and/or avatar URL."""
    updated = await users_repo.update_user_profile(
        user_id=user.user_id,
        display_name=body.display_name,
        avatar_url=body.avatar_url,
    )
    return updated


@router.get(
    "/me/favorites",
    status_code=status.HTTP_200_OK,
    summary="Get user's favorites",
    response_description="List of the user's favorited items",
)
async def get_user_favorites(
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Retrieve all favorited players and teams for the current user."""
    from app.repositories import favorites_repo  # local import to avoid circular

    favorites = await favorites_repo.get_favorites(user.user_id)
    return {
        "favorites": favorites,
        "total": len(favorites),
    }
