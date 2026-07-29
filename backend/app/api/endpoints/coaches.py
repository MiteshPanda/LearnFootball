from fastapi import APIRouter, HTTPException, status
from app.services.profiles import profiles_service

router = APIRouter(prefix="/coaches", tags=["Coaches"])


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    summary="List all coaches",
    response_description="A list of football coaches",
)
async def list_coaches() -> dict:
    """Retrieve all football coach profiles."""
    coaches = await profiles_service.get_coaches_list()
    return {"coaches": coaches, "total": len(coaches)}


@router.get(
    "/{slug}",
    status_code=status.HTTP_200_OK,
    summary="Get coach by slug",
    response_description="A single coach profile",
)
async def get_coach(slug: str) -> dict:
    """Retrieve a specific coach profile by slug."""
    coach = await profiles_service.get_coach_profile(slug)
    if not coach:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Coach profile with slug '{slug}' not found",
        )
    return coach
