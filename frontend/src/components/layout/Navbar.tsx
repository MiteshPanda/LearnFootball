"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Search, Menu, X, LogIn } from "lucide-react";

const navLinks = [
  { href: "/academy", label: "Academy", icon: "📚" },
  { href: "/players", label: "Players", icon: "⚽" },
  { href: "/teams", label: "Teams", icon: "🏟️" },
  { href: "/coaches", label: "Coaches", icon: "📋" },
  { href: "/glossary", label: "Glossary", icon: "📖" },
  { href: "/predictor", label: "Predictor", icon: "🏆" },
  { href: "/tutor", label: "AI Tutor", icon: "🤖" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search functionality can be wired up later
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-50 w-full border-b border-border-light bg-background/85 backdrop-blur-md transition-colors"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="text-2xl animate-float">⚽</span>
          <span>
            Learn<span className="text-accent">Football</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-[var(--duration-fast)] ${
                  isActive
                    ? "bg-accent-light text-accent dark:bg-accent-light/10"
                    : "text-foreground-muted hover:bg-background-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search bar - Desktop */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative hidden max-w-xs sm:block"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
            <input
              type="text"
              placeholder="Search academy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 rounded-full border border-border-light bg-background-secondary/50 py-1.5 pl-9 pr-4 text-xs transition-all focus:w-48 focus:border-accent focus:bg-background-card focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </form>

          <ThemeToggle />

          {/* Login Button - Desktop */}
          <button className="btn-primary hidden items-center gap-2 px-4 py-2 text-xs sm:flex">
            <LogIn className="h-3.5 w-3.5" />
            Login
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-light bg-background-card transition-all hover:border-accent lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 lg:hidden border-t border-border-light ${
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-6">
          {/* Mobile Links & Search */}
          <div className="space-y-6">
            {/* Search Input for Mobile */}
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
              <input
                type="text"
                placeholder="Search academy, players, terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border-light bg-background-secondary py-3 pl-11 pr-4 text-sm focus:border-accent focus:bg-background-card focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </form>

            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname?.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                      isActive
                        ? "bg-accent-light text-accent dark:bg-accent-light/10"
                        : "text-foreground hover:bg-background-secondary"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Action Area */}
          <div className="border-t border-border-light pt-6">
            <button className="btn-primary w-full py-4 text-center text-sm">
              Join the Academy
            </button>
            <p className="mt-4 text-center text-xs text-foreground-muted">
              Already have an account?{" "}
              <button className="text-accent font-semibold hover:underline">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
