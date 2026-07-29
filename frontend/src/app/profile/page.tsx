"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading, favorites, favoritesLoading, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  // ── Loading skeleton ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8 min-h-screen">
        <div className="mx-auto max-w-4xl">
          <div className="card mb-8 p-8 text-center animate-pulse">
            <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-border" />
            <div className="h-6 w-40 mx-auto rounded bg-border mb-2" />
            <div className="h-4 w-56 mx-auto rounded bg-border" />
          </div>
        </div>
      </section>
    );
  }

  // ── Unauthenticated state ─────────────────────────────────────────────────
  if (!user) {
    return (
      <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8 min-h-screen">
        <div className="mx-auto max-w-lg text-center animate-fade-in-up">
          <span className="text-6xl block mb-6">🔐</span>
          <h1 className="text-3xl font-bold mb-3">Your Profile</h1>
          <p className="text-foreground-muted mb-8">
            Sign in to save favourites, track your progress, and customise your experience.
          </p>
          <Link href="/auth" className="btn-primary text-base px-8 py-3">
            Sign In / Sign Up →
          </Link>
        </div>
      </section>
    );
  }

  // ── Display name & avatar ─────────────────────────────────────────────────
  const displayName =
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "Football Fan";
  const avatarUrl: string | undefined = user.user_metadata?.avatar_url;
  const joinedDate = new Date(user.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const playerFavs = favorites.filter((f) => f.item_type === "player");
  const teamFavs = favorites.filter((f) => f.item_type === "team");

  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* ── Profile Header Card ── */}
        <div className="card mb-8 bg-gradient-to-br from-accent/5 to-success/5 p-8 text-center sm:p-12 animate-fade-in-up">
          {/* Avatar */}
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent/20 bg-accent-light overflow-hidden">
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatarUrl} alt={displayName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl">👤</span>
            )}
          </div>

          <h1 className="text-2xl font-bold sm:text-3xl">{displayName}</h1>
          <p className="mt-1 text-foreground-muted">
            Joined {joinedDate} • {user.email}
          </p>

          {/* Stats */}
          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
            {[
              { label: "Favourites", value: favorites.length.toString() },
              { label: "Players", value: playerFavs.length.toString() },
              { label: "Teams", value: teamFavs.length.toString() },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-foreground-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleSignOut}
            className="btn-secondary mt-8 text-sm"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* ── Favourite Players ── */}
          <div className="card animate-fade-in-up stagger-1">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span>❤️</span> Favourite Players
            </h2>
            {favoritesLoading ? (
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 rounded-lg bg-border animate-pulse" />
                ))}
              </div>
            ) : playerFavs.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {playerFavs.map((f) => (
                  <Link
                    key={f.id}
                    href={`/players/${f.item_id}`}
                    className="rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
                  >
                    {f.item_name ?? f.item_id}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-foreground-muted">
                No favourite players yet.{" "}
                <Link href="/players" className="text-accent hover:underline">
                  Browse players →
                </Link>
              </p>
            )}
          </div>

          {/* ── Favourite Teams ── */}
          <div className="card animate-fade-in-up stagger-2">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span>🏟️</span> Favourite Teams
            </h2>
            {favoritesLoading ? (
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <div key={i} className="h-8 rounded-lg bg-border animate-pulse" />
                ))}
              </div>
            ) : teamFavs.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {teamFavs.map((f) => (
                  <Link
                    key={f.id}
                    href={`/teams/${f.item_id}`}
                    className="rounded-full border border-info/20 bg-info/10 px-4 py-1.5 text-sm font-medium text-info hover:bg-info/20 transition-colors"
                  >
                    {f.item_name ?? f.item_id}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-foreground-muted">
                No favourite teams yet.{" "}
                <Link href="/teams" className="text-accent hover:underline">
                  Browse teams →
                </Link>
              </p>
            )}
          </div>
        </div>

        {/* ── Account info ── */}
        <div className="card mt-6 animate-fade-in-up stagger-3">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <span>⚙️</span> Account
          </h2>
          <div className="space-y-3">
            {[
              { label: "Email", value: user.email ?? "—" },
              { label: "User ID", value: user.id.slice(0, 8) + "…" },
              { label: "Auth Provider", value: user.app_metadata?.provider ?? "email" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-border-light pb-2 last:border-0"
              >
                <span className="text-sm text-foreground-muted">{item.label}</span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
