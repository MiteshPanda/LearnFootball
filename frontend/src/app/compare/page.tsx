import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Compare players or teams side by side — stats, achievements, playing styles, and more.",
};

const compareOptions = [
  {
    title: "Player vs Player",
    emoji: "👤",
    description:
      "Compare any two players head-to-head — goals, assists, trophies, playing style, and career stats.",
    examples: ["Messi vs Ronaldo", "Mbappé vs Haaland", "Zidane vs Ronaldinho"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/10",
  },
  {
    title: "Team vs Team",
    emoji: "🏟️",
    description:
      "Compare national teams side by side — World Cup records, legendary players, tactical identities, and head-to-head history.",
    examples: ["Argentina vs Brazil", "Spain vs Germany", "France vs England"],
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-amber-500/10",
  },
];

export default function ComparePage() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
          <span className="mb-6 inline-block text-6xl">⚔️</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Compare
            </span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            Compare players or teams side by side — stats, achievements, playing
            styles, and more.
          </p>
        </div>

        {/* Compare Options */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {compareOptions.map((option, index) => (
            <div
              key={option.title}
              className={`card group cursor-pointer bg-gradient-to-br ${option.gradient} animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
                {option.emoji}
              </div>
              <h3 className="mb-2 text-2xl font-bold">{option.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground-muted">
                {option.description}
              </p>

              {/* Example Comparisons */}
              <div className="mb-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  Popular comparisons
                </p>
                {option.examples.map((example) => (
                  <div
                    key={example}
                    className="flex items-center gap-2 rounded-xl border border-border-light bg-background/60 px-4 py-2.5 text-sm text-foreground-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <span className="text-accent">⚡</span>
                    {example}
                  </div>
                ))}
              </div>

              <button className="btn-secondary w-full text-sm" disabled>
                Coming Soon
              </button>
            </div>
          ))}
        </div>

        {/* VS Divider */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-5 py-2.5 text-sm font-medium text-accent">
            <span>🚀</span>
            Interactive comparisons with charts &amp; stats coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
