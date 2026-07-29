import type { Metadata } from "next";
import Link from "next/link";
import { coachesData } from "@/data/profiles/coachesData";

export const metadata: Metadata = {
  title: "Football Coaches",
  description:
    "Learn about legendary and modern football managers — their philosophies, achievements, and tactical innovations.",
};

export default function CoachesPage() {

  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
          <span className="mb-6 inline-block text-6xl">🧑‍🏫</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Football{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Coaches
            </span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            Learn about legendary and modern football managers — their
            philosophies, achievements, and tactical innovations.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coachesData.map((coach, index) => (
            <Link
              key={coach.slug}
              href={`/coaches/${coach.slug}`}
              className={`card group cursor-pointer block animate-fade-in-up stagger-${(index % 6) + 1}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-2xl transition-transform duration-300 group-hover:scale-110">
                  {coach.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{coach.name}</h3>
                  <p className="text-xs text-foreground-muted">{coach.club}</p>
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                  📋 {coach.philosophy}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-background-secondary px-2.5 py-0.5 text-2xs font-medium text-foreground-muted">
                  {coach.country} {coach.countryName}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground-muted">
                Explore tactical philosophy, career highlights, and key
                achievements →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
