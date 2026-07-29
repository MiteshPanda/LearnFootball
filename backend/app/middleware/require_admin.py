"""
LearnFootball API - Admin Role Guard

FastAPI dependency that requires the current user to have role='admin' or 'super_admin'.
Chain it after get_current_user.

Usage:
    @router.post("/admin/lesson")
    async def create(user: UserClaims = Depends(require_admin)):
        ...
"""

from fastapi import Depends, HTTPException, status

from app.middleware.auth import UserClaims, get_current_user

ADMIN_ROLES = {"admin", "super_admin"}


def require_admin(user: UserClaims = Depends(get_current_user)) -> UserClaims:
    """Raise 403 Forbidden if the authenticated user is not an admin."""
    if user.role not in ADMIN_ROLES:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required.",
        )
    return user
