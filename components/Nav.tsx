"use client";

import { useState } from "react";
import { profile } from "@/content";
import { Close, Mark, Menu } from "./icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#departments", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#background", label: "Background" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-subtle/20 bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <Mark className="h-7 w-7" />
          <span className="font-display text-lg font-semibold">{profile.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-subtle transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-block-dev px-5 py-2.5 text-sm font-semibold text-block-dev-fg transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Start a project
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle/40 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-subtle/20 bg-canvas md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {[...links, { href: "#contact", label: "Contact" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-subtle/15 py-4 font-display text-2xl last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
