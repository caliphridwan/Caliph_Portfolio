"use client";

import { useState } from "react";
import { disciplines, projects, type Discipline } from "@/content";

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

const sizeClass: Record<string, string> = {
  lg: "sm:col-span-2 sm:row-span-2",
  md: "sm:col-span-1 sm:row-span-2",
  sm: "sm:col-span-1 sm:row-span-1",
};

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
          to be updated
        </p>
      </div>
    </section>
  );
}
