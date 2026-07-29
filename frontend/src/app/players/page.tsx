import type { Metadata } from "next";
import Link from "next/link";
import { playersData } from "@/data/profiles/playersData";

export const metadata: Metadata = {
  title: "Player Encyclopedia",
  description:
    "Discover legendary and modern football players — their stories, stats, playing styles, and career highlights.",
};

export default function PlayersPage() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
          <span className="mb-6 inline-block text-6xl">👤</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Player{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Encyclopedia
            </span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            Discover legendary and modern football players — their stories,
            stats, playing styles, and career highlights.
          </p>
        </div>

        {/* Player Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playersData.map((player, index) => (
            <Link
              key={player.slug}
              href={`/players/${player.slug}`}
              className={`card group cursor-pointer text-center block animate-fade-in-up stagger-${(index % 6) + 1}`}
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-light text-4xl transition-transform duration-300 group-hover:scale-110">
                ⚽
              </div>
              <h3 className="mb-1 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{player.name}</h3>
              <p className="mb-2 text-sm text-foreground-muted">
                {player.position}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-muted">
                {player.country} {player.countryName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
