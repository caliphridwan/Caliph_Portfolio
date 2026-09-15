import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14141B",
        "ink-soft": "#1B1B24",
        paper: "#F2F1F7",
        "paper-dim": "#E6E4EF",
        muted: "#9A99A8",
        mist: "#6B6A78",
        // Discipline accents — used functionally to tag which
        // discipline a skill/project belongs to, not as decoration.
        ai: "#5B5BF6",
        dev: "#D4FF3F",
        data: "#FF3E7F",
        design: "#FFA23E",
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
