import type { Metadata } from "next";
import Link from "next/link";
import { teamsData } from "@/data/profiles/teamsData";

export const metadata: Metadata = {
  title: "Team Profiles",
  description:
    "Explore national football teams — their history, legendary players, tactical identity, and tournament records.",
};

export default function TeamsPage() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
          <span className="mb-6 inline-block text-6xl">🏟️</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Team{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Profiles
            </span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            Explore national football teams — their history, legendary players,
            tactical identity, and tournament records.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamsData.map((team, index) => {
            const countryCodes: Record<string, string> = {
              argentina: "ar",
              brazil: "br",
              france: "fr",
              germany: "de",
              spain: "es",
              portugal: "pt",
              england: "gb-eng",
              netherlands: "nl",
              italy: "it",
              croatia: "hr",
              morocco: "ma",
              japan: "jp",
              usa: "us",
              senegal: "sn",
            };
            const code = countryCodes[team.slug] || "un";
            const flagUrl = `https://flagcdn.com/w640/${code}.png`;

            return (
              <Link
                key={team.slug}
                href={`/teams/${team.slug}`}
                className={`card group relative overflow-hidden cursor-pointer block animate-fade-in-up stagger-${(index % 6) + 1} p-6`}
              >
                {/* Background Flag Image */}
                <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={flagUrl}
                    alt={`${team.name} Flag`}
                    className="w-full h-full object-cover opacity-100"
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background-card/30 via-background-card/80 to-background-card" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground group-hover:text-accent transition-colors pt-2">
                      {team.name}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                        🏆 {team.titles}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-border-light bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-muted">
                        {team.style}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted mt-2">
                    Tap to explore history, squad, and tactical identity →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
