"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  // Unknown until mounted, so the server HTML and first client render match.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      /* storage blocked: the choice still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle/40 text-ink transition-colors hover:border-ink"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
