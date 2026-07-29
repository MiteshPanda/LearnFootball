"""
LearnFootball API - Auth Middleware

FastAPI dependency that validates a Supabase-issued JWT from the Authorization header.
Returns a UserClaims dataclass on success; raises 401 on failure.

Usage:
    @router.get("/protected")
    async def endpoint(user: UserClaims = Depends(get_current_user)):
        ...
"""

from dataclasses import dataclass

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from jose import JWTError, jwt

from app.core.config import get_settings

bearer_scheme = HTTPBearer(auto_error=False)


@dataclass
class UserClaims:
    """Decoded claims extracted from the Supabase JWT."""

    user_id: str
    email: str
    role: str  # value from app_metadata.role or "user"


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
) -> UserClaims:
    """
    Validate the Bearer JWT issued by Supabase Auth.
    Raises HTTP 401 if missing or invalid.
    """
    settings = get_settings()

    if not credentials:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authorization header missing",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = credentials.credentials

    # If no JWT secret configured, surface a clear error instead of silently failing
    if not settings.SUPABASE_JWT_SECRET:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Authentication not configured on the server (SUPABASE_JWT_SECRET missing).",
        )

    # Supabase JWT secrets are base64-encoded. Decode it to get the raw secret bytes.
    import base64
    try:
        secret_str = settings.SUPABASE_JWT_SECRET
        # Add padding if needed
        missing_padding = len(secret_str) % 4
        if missing_padding:
            secret_str += "=" * (4 - missing_padding)
        jwt_key = base64.b64decode(secret_str)
    except Exception:
        jwt_key = settings.SUPABASE_JWT_SECRET

    try:
        payload = jwt.decode(
            token,
            jwt_key,
            algorithms=["HS256"],
            options={"verify_aud": False},
        )
    except JWTError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid or expired token: {exc}",
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc

    user_id: str = payload.get("sub", "")
    email: str = payload.get("email", "")
    # Supabase stores custom roles in app_metadata
    app_metadata: dict = payload.get("app_metadata", {})
    role: str = app_metadata.get("role", "user")

    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token missing subject claim",
        )

    return UserClaims(user_id=user_id, email=email, role=role)


def get_optional_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
) -> UserClaims | None:
    """Like get_current_user but returns None instead of raising 401."""
    try:
        return get_current_user(credentials)
    except HTTPException:
        return None
