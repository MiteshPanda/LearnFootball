from fastapi import APIRouter, HTTPException, status
from app.services.profiles import profiles_service

router = APIRouter(prefix="/players", tags=["Players"])


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    summary="List all players",
    response_description="A list of football players",
)
async def list_players() -> dict:
    """Retrieve all football player profiles."""
    players = await profiles_service.get_players_list()
    return {"players": players, "total": len(players)}


@router.get(
    "/{slug}",
    status_code=status.HTTP_200_OK,
    summary="Get player by slug",
    response_description="A single player profile",
)
async def get_player(slug: str) -> dict:
    """Retrieve a specific player profile by slug."""
    player = await profiles_service.get_player_profile(slug)
    if not player:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Player profile with slug '{slug}' not found",
        )
    return player
