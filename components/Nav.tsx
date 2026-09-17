"use client";

import { profile } from "@/content";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-3 border-ink bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-paper"
        >
          Caliph Ridwan.
          <span className="text-dev">.</span>
        </a>
        <ul className="hidden gap-8 font-body text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            className="rounded-none border-2 border-paper px-4 py-1.5 font-body text-sm text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
