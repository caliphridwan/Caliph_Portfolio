"use client";

import { useState } from "react";
import { disciplines, projects, type Discipline, type Project } from "@/content";
import { ArrowUpRight, Chevron } from "./icons";
import Reveal from "./Reveal";

type Filter = Discipline | "all";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "ai", label: disciplines.ai.label },
  { key: "dev", label: disciplines.dev.label },
  { key: "data", label: disciplines.data.label },
  { key: "design", label: disciplines.design.label },
];

const accent: Record<Discipline, string> = {
  ai: "text-ai",
  dev: "text-dev",
  data: "text-data",
  design: "text-design",
};

const dot: Record<Discipline, string> = {
  ai: "bg-block-ai",
  dev: "bg-block-dev",
  data: "bg-block-data",
  design: "bg-block-design",
};

const link = (p: Project) => p.href ?? p.repo;

function CaseStudy({ project, wide, delay }: { project: Project; wide: boolean; delay: number }) {
  const url = link(project);
  const body = (
    <>
      <div className="aspect-video w-full overflow-hidden bg-subtle/15">
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="p-6 sm:p-7">
        <p className={`text-sm font-semibold ${accent[project.discipline]}`}>
          {disciplines[project.discipline].label}
        </p>
        <h3 className="mt-2 flex items-start justify-between gap-3 font-display text-2xl font-semibold leading-snug">
          {project.title}
          {url && <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-subtle transition-colors group-hover:text-ink" />}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-subtle">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-subtle/15 px-3 py-1 text-sm">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
  const cls =
    "group block overflow-hidden rounded-3xl border border-subtle/25 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-ink/60 hover:shadow-xl hover:shadow-black/10";
  return (
    <Reveal className={wide ? "md:col-span-2" : ""} delay={delay}>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`${cls} h-full`}>
          {body}
        </a>
      ) : (
        <div className={`${cls} h-full`}>{body}</div>
      )}
    </Reveal>
  );
}

function IndexRow({ project, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
  const id = project.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const url = link(project);
  return (
    <li className="border-b border-subtle/25">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`panel-${id}`}
          className="group flex w-full items-center gap-4 py-5 text-left transition-[padding] duration-300 hover:pl-2"
        >
          <span className={`h-3 w-3 shrink-0 rounded-full ${dot[project.discipline]}`} />
          <span className="flex-1 font-display text-xl font-semibold leading-snug">{project.title}</span>
          <span className="hidden text-sm text-subtle sm:inline">{disciplines[project.discipline].label}</span>
          <Chevron className={`h-5 w-5 shrink-0 text-subtle transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </h3>
      {open && (
        <div id={`panel-${id}`} className="pb-6 pl-7 enter">
          <p className="max-w-2xl text-base leading-relaxed text-subtle">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full bg-subtle/15 px-3 py-1 text-sm">
                {t}
              </li>
            ))}
          </ul>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold underline underline-offset-4"
            >
              {project.href ? "Open project" : "View code"} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </li>
  );
}

export default function WorkHub() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const list = filter === "all" ? projects : projects.filter((p) => p.discipline === filter);
  const featured = list.filter((p) => p.featured);
  const rest = list.filter((p) => !p.featured);

  return (
    <section id="work" className="border-y border-subtle/20 bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal><h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Selected work</h2></Reveal>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={filter === f.key}
                onClick={() => {
                  setFilter(f.key);
                  setOpenTitle(null);
                }}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filter === f.key
                    ? "border-ink bg-ink font-semibold text-canvas"
                    : "border-subtle/40 text-subtle hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {featured.length > 0 && (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featured.map((p, i) => (
              <CaseStudy key={p.title} project={p} wide={i === 0 && featured.length % 2 === 1} delay={(i % 2) * 120} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold">
              More projects <span className="text-subtle">({rest.length})</span>
            </h3>
            <ul className="mt-4 border-t border-subtle/25">
              {rest.map((p) => (
                <IndexRow
                  key={p.title}
                  project={p}
                  open={openTitle === p.title}
                  onToggle={() => setOpenTitle(openTitle === p.title ? null : p.title)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
