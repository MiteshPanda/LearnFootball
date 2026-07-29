"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

interface FavoriteButtonProps {
  itemType: "player" | "team";
  itemId: string;   // slug
  itemName: string; // display name for saving
  size?: "sm" | "md";
}

export function FavoriteButton({
  itemType,
  itemId,
  itemName,
  size = "md",
}: FavoriteButtonProps) {
  const { user, isFavorited, toggleFavorite } = useAuth();
  const [pending, setPending] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const favorited = isFavorited(itemType, itemId);

  const handleClick = async () => {
    if (!user) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2500);
      return;
    }
    setPending(true);
    await toggleFavorite(itemType, itemId, itemName);
    setPending(false);
  };

  const sizeClasses =
    size === "sm"
      ? "h-8 w-8 text-base"
      : "h-10 w-10 text-xl";

  return (
    <div className="relative inline-flex">
      <button
        onClick={handleClick}
        disabled={pending}
        aria-label={favorited ? "Remove from favourites" : "Add to favourites"}
        className={`${sizeClasses} flex items-center justify-center rounded-full border transition-all duration-200 
          ${favorited
            ? "border-rose-400/40 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25"
            : "border-border bg-background-secondary text-foreground-muted hover:border-rose-400/40 hover:bg-rose-500/10 hover:text-rose-400"
          } ${pending ? "opacity-60 cursor-wait" : "cursor-pointer"}`}
      >
        {pending ? "…" : favorited ? "❤️" : "🤍"}
      </button>

      {/* Tooltip for unauthenticated users */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 animate-fade-in">
          <div className="whitespace-nowrap rounded-lg bg-background-card border border-border shadow-lg px-3 py-2 text-xs font-medium text-foreground-muted">
            <Link href="/auth" className="text-accent hover:underline">
              Sign in
            </Link>{" "}
            to save favourites
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rotate-45 bg-background-card border-r border-b border-border" />
        </div>
      )}
    </div>
  );
}
