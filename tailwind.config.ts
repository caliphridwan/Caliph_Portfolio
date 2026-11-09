import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens (values live in app/globals.css).
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        live: "rgb(var(--live) / <alpha-value>)",
        // Department colours as text/line accents (tuned per theme).
        ai: "rgb(var(--ai) / <alpha-value>)",
        dev: "rgb(var(--dev) / <alpha-value>)",
        data: "rgb(var(--data) / <alpha-value>)",
        design: "rgb(var(--design) / <alpha-value>)",
        // Department colours as solid panels (same in both themes).
        "block-ai": "#4A44E8",
        "block-ai-fg": "#FFFFFF",
        "block-dev": "#D4FF3F",
        "block-dev-fg": "#14122E",
        "block-data": "#FF4D8D",
        "block-data-fg": "#14122E",
        "block-design": "#FFA23E",
        "block-design-fg": "#14122E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
