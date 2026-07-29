from fastapi import APIRouter, HTTPException, status
from app.services.profiles import profiles_service

router = APIRouter(prefix="/teams", tags=["Teams"])


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    summary="List all teams",
    response_description="A list of football teams",
)
async def list_teams() -> dict:
    """Retrieve all football team profiles."""
    teams = await profiles_service.get_teams_list()
    return {"teams": teams, "total": len(teams)}


@router.get(
    "/{slug}",
    status_code=status.HTTP_200_OK,
    summary="Get team by slug",
    response_description="A single team profile",
)
async def get_team(slug: str) -> dict:
    """Retrieve a specific team profile by slug."""
    team = await profiles_service.get_team_profile(slug)
    if not team:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Team profile with slug '{slug}' not found",
        )
    return team
