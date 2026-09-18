"use client";

import { useState } from "react";
import { disciplines, projects, type Discipline, type Project } from "@/content";

const accentBorder: Record<Discipline, string> = {
  ai: "hover:border-ai",
  dev: "hover:border-dev",
  data: "hover:border-data",
  design: "hover:border-design",
};

const accentText: Record<Discipline, string> = {
  ai: "text-ai",
  dev: "text-dev",
  data: "text-data",
  design: "text-design",
};

const tintBg: Record<Discipline, string> = {
  ai: "bg-ai/10",
  dev: "bg-dev/10",
  data: "bg-data/10",
  design: "bg-design/10",
};

const sizeClass: Record<string, string> = {
  lg: "sm:col-span-2 sm:row-span-2",
  md: "sm:col-span-1 sm:row-span-2",
  sm: "sm:col-span-1 sm:row-span-1",
};

// Simple line-art motifs, one per discipline — a stand-in until real
// project screenshots are added via each project's optional `image`
// field. The "design" motif (an 8-point star from two overlaid
// squares) deliberately echoes the Islamic geometric patterns used
// in the actual name-frame projects.
const motifs: Record<Discipline, React.ReactNode> = {
  ai: (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-ai" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="16" r="5" />
      <circle cx="52" cy="16" r="5" />
      <circle cx="32" cy="40" r="6" />
      <circle cx="12" cy="52" r="4" />
      <circle cx="52" cy="52" r="4" />
      <path d="M12 21 L28 36 M52 21 L36 36 M32 46 L14 50 M32 46 L50 50" />
    </svg>
  ),
  dev: (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-dev" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16 L8 32 L22 48" />
      <path d="M42 16 L56 32 L42 48" />
      <path d="M36 12 L28 52" strokeWidth="3" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-data" fill="currentColor">
      <rect x="8" y="36" width="10" height="20" />
      <rect x="24" y="24" width="10" height="32" />
      <rect x="40" y="10" width="10" height="46" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-design" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="14" width="36" height="36" />
      <rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)" />
    </svg>
  ),
};

function Thumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="mb-4 aspect-video w-full overflow-hidden border-2 border-paper/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`mb-4 flex aspect-video w-full items-center justify-center border-2 border-paper/10 ${tintBg[project.discipline]}`}
    >
      {motifs[project.discipline]}
    </div>
  );
}

const filters: { key: Discipline | "all"; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "ai", label: disciplines.ai.label },
  { key: "dev", label: disciplines.dev.label },
  { key: "data", label: disciplines.data.label },
  { key: "design", label: disciplines.design.label },
];

export default function Projects() {
  const [active, setActive] = useState<Discipline | "all">("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.discipline === active);

  return (
    <section id="work" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold leading-tight">
            Selected work
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                aria-pressed={active === f.key}
                className={`border-2 px-4 py-1.5 font-body text-sm transition-colors ${
                  active === f.key
                    ? "border-paper bg-paper text-ink"
                    : "border-paper/30 text-muted hover:border-paper hover:text-paper"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-6 sm:grid-cols-3">
          {visible.map((project) => (
            <a
              key={project.title}
              href={project.href ?? "#"}
              className={`group flex flex-col justify-between border-2 border-paper/20 p-6 transition-colors ${accentBorder[project.discipline]} ${sizeClass[project.size]}`}
            >
              <div>
                <Thumbnail project={project} />
                <span
                  className={`font-body text-xs font-medium ${accentText[project.discipline]}`}
                >
                  {disciplines[project.discipline].label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-paper/70">
                  {project.summary}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-paper/20 px-2 py-1 font-body text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 font-body text-sm text-muted">
          These thumbnails are themed placeholders. Add a real screenshot for
          any project by setting its <code>image</code> field in{" "}
          <code>content.ts</code> to a file in <code>/public</code> (or a
          hosted URL) — e.g. a screenshot of your Tableau dashboard, your
          Canva design export, or your deployed CR Frames app.
        </p>
      </div>
    </section>
  );
}
