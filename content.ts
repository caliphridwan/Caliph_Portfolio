// ────────────────────────────────────────────────────────────────
// All the editable content for the site lives here.
// Replace the placeholder values with your real details.
// ────────────────────────────────────────────────────────────────

export type Discipline = "ai" | "dev" | "data" | "design";

export const disciplines: Record<
  Discipline,
  { label: string; accent: string; short: string }
> = {
  ai: { label: "AI Automation", accent: "ai", short: "AI" },
  dev: { label: "Full-Stack Dev", accent: "dev", short: "Dev" },
  data: { label: "Data Analysis", accent: "data", short: "Data" },
  design: { label: "Graphic Design", accent: "design", short: "Design" },
};

export const profile = {
  name: "Ridwan Abdulkareem",
  roles: [
    "AI Automation Specialist",
    "Full-Stack Web Developer",
    "Data Analyst",
    "Graphics Designer",
  ],
  location: "Ilorin, Nigeria — open to remote, any timezone",
  tagline:
    "I design, build, and automate — from a Figma file to a deployed app to the workflow that keeps it running itself.",
  email: "caliphridwan93@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/CaliphRidwan" },
    { label: "LinkedIn", url: "https://linkedin.com/in/ridwan-abdulkareem-o-41315b20b" },
    { label: "X", url: "https://x.com/CaliphRidwan" },
    { label: "Dribbble", url: "https://dribbble.com/your-username" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a multidisciplinary builder who moves comfortably between four roles most teams hire separately for: I automate the repetitive parts of a business with AI, I build the product itself end-to-end, I make sense of the data it produces, and I design the interface people actually see.",
    "That range means I can take a project from a rough idea to a shipped, measurable result without a handoff — which is exactly what small remote teams and lean startups need most.",
    "Replace this paragraph with 2–3 sentences about your actual journey: how you got into these fields, what kind of teams you like working with, and what you're looking for next.",
  ],
  stats: [
    { value: "4+", label: "Disciplines, one workflow" },
    { value: "20+", label: "Projects shipped" },
    { value: "100%", label: "Remote-ready" },
  ],
};

export const skills: { discipline: Discipline; items: string[] }[] = [
  {
    discipline: "ai",
    items: [
      "n8n / Zapier / Make",
      "LangChain & LangGraph",
      "OpenAI / Claude / Gemini APIs",
      "RAG pipelines & vector DBs",
      "Python scripting & scheduling",
      "Workflow & prompt design",
    ],
  },
  {
    discipline: "dev",
    items: [
      "React & Next.js",
      "Node.js / Express",
      "TypeScript",
      "PostgreSQL / MongoDB",
      "REST & GraphQL APIs",
      "CI/CD & cloud deploys (Vercel, AWS)",
    ],
  },
  {
    discipline: "data",
    items: [
      "SQL & data modeling",
      "Python (Pandas, NumPy)",
      "Power BI / Tableau",
      "A/B testing & statistics",
      "Data cleaning & ETL",
      "Dashboarding & reporting",
    ],
  },
  {
    discipline: "design",
    items: [
      "Figma (UI/UX & prototyping)",
      "Adobe Photoshop & Illustrator",
      "Brand & identity systems",
      "Design systems & tokens",
      "Motion & micro-interactions",
      "Typography & layout",
    ],
  },
];

export type Project = {
  title: string;
  discipline: Discipline;
  summary: string;
  tags: string[];
  href?: string;
  repo?: string;
  size: "lg" | "md" | "sm";
};

export const projects: Project[] = [
  {
    title: "Support-ticket triage automation",
    discipline: "ai",
    summary:
      "An n8n + GPT pipeline that reads incoming support emails, classifies urgency, drafts a first response, and routes edge cases to a human — placeholder metric: cut first-response time by 65%.",
    tags: ["n8n", "OpenAI API", "Webhooks"],
    href: "#",
    size: "lg",
  },
  {
    title: "SaaS billing dashboard",
    discipline: "dev",
    summary:
      "A full-stack Next.js + Postgres app for managing subscriptions, invoices, and usage-based billing, with a Stripe integration end to end.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    href: "#",
    repo: "#",
    size: "md",
  },
  {
    title: "Retail sales performance dashboard",
    discipline: "data",
    summary:
      "Consolidated three years of scattered spreadsheets into one Power BI dashboard leadership now checks weekly — placeholder: replace with your real before/after.",
    tags: ["Power BI", "SQL", "ETL"],
    href: "#",
    size: "md",
  },
  {
    title: "Fintech brand identity",
    discipline: "design",
    summary:
      "Full visual identity — logo system, color, typography, and a component-based design system handed off to the dev team as production-ready Figma tokens.",
    tags: ["Figma", "Brand system", "Design tokens"],
    href: "#",
    size: "sm",
  },
  {
    title: "Lead-enrichment agent",
    discipline: "ai",
    summary:
      "An autonomous agent that researches inbound leads across the web and CRM, then scores and enriches each record before it reaches sales.",
    tags: ["LangChain", "Python", "CRM API"],
    href: "#",
    size: "sm",
  },
  {
    title: "Marketplace mobile-first web app",
    discipline: "dev",
    summary:
      "A two-sided marketplace front end with real-time messaging and search, built mobile-first and deployed on Vercel.",
    tags: ["React", "Node.js", "WebSockets"],
    href: "#",
    size: "sm",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  discipline: Discipline;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Freelance AI Automation & Full-Stack Developer",
    org: "Self-employed, remote",
    discipline: "ai",
    description:
      "Placeholder: describe the clients or kinds of projects you take on, and one concrete outcome.",
  },
  {
    period: "2022 — 2024",
    role: "Data Analyst",
    org: "Company name",
    discipline: "data",
    description:
      "Placeholder: describe your responsibilities and a measurable result (e.g. a reporting process you automated or a decision your analysis informed).",
  },
  {
    period: "2020 — 2022",
    role: "Graphic Designer",
    org: "Company name",
    discipline: "design",
    description:
      "Placeholder: describe the kind of design work, tools used, and any brand or product you shipped.",
  },
  {
    period: "Education",
    role: "Your degree / certification",
    org: "Institution name",
    discipline: "dev",
    description: "Placeholder: add your degree, bootcamp, or relevant certifications.",
  },
];
