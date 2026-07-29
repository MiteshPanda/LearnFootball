"""
LearnFootball API - Favorites Endpoints

Endpoints for managing user favorites (players, teams).
"""

from typing import Any

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel

from app.middleware.auth import UserClaims, get_current_user
from app.repositories import favorites_repo

router = APIRouter(prefix="/favorites", tags=["Favorites"])


class AddFavoriteBody(BaseModel):
    item_type: str   # "player" | "team"
    item_id: str     # slug, e.g. "lionel-messi"
    item_name: str | None = None  # display name for quick rendering


class RemoveByItemBody(BaseModel):
    item_type: str
    item_id: str


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    summary="List favorites",
    response_description="All favorites for the current user",
)
async def list_favorites(
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Return all favorited items for the authenticated user."""
    items = await favorites_repo.get_favorites(user.user_id)
    return {"favorites": items, "total": len(items)}


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    summary="Add a favorite",
    response_description="The newly created favorite entry",
)
async def add_favorite(
    body: AddFavoriteBody,
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Add a player or team to the user's favorites."""
    if body.item_type not in ("player", "team"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="item_type must be 'player' or 'team'",
        )
    result = await favorites_repo.add_favorite(
        user_id=user.user_id,
        item_type=body.item_type,
        item_id=body.item_id,
        item_name=body.item_name,
    )
    return result


@router.delete(
    "/by-item",
    status_code=status.HTTP_200_OK,
    summary="Remove a favorite by item slug",
    response_description="Confirmation of removal",
)
async def remove_favorite_by_item(
    body: RemoveByItemBody,
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Remove a favorite using item_type + item_id (slug) — used by the toggle button."""
    removed = await favorites_repo.remove_favorite_by_item(
        user_id=user.user_id,
        item_type=body.item_type,
        item_id=body.item_id,
    )
    return {"removed": removed}


@router.delete(
    "/{favorite_id}",
    status_code=status.HTTP_200_OK,
    summary="Remove a favorite by UUID",
    response_description="Confirmation of removal",
)
async def remove_favorite(
    favorite_id: str,
    user: UserClaims = Depends(get_current_user),
) -> dict[str, Any]:
    """Remove a favorite by its row UUID."""
    removed = await favorites_repo.remove_favorite(
        user_id=user.user_id,
        favorite_id=favorite_id,
    )
    return {"removed": removed}
