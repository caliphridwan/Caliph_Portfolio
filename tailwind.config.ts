import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens — values come from CSS variables set in
        // globals.css, which flip based on [data-theme]. Using the
        // rgb(var(...) / <alpha-value>) pattern keeps Tailwind's
        // opacity modifiers (e.g. bg-ink/90) working normally.
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--color-ink-soft) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-dim": "rgb(var(--color-paper-dim) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        // Discipline accents — also theme-aware now, so text/borders
        // in these colors stay legible whichever theme is active.
        ai: "rgb(var(--color-ai) / <alpha-value>)",
        dev: "rgb(var(--color-dev) / <alpha-value>)",
        data: "rgb(var(--color-data) / <alpha-value>)",
        design: "rgb(var(--color-design) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
