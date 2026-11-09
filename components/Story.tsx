import { about, disciplines, experience } from "@/content";

const accent = {
  ai: "text-ai",
  dev: "text-dev",
  data: "text-data",
  design: "text-design",
} as const;

export default function Story() {
  return (
    <section id="background" className="border-t border-subtle/20 bg-surface/50">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Background</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-subtle">
            {about.paragraphs
              .filter((p) => p.trim().length > 0)
              .map((p) => (
                <p key={p}>{p}</p>
              ))}
          </div>
          <dl className="mt-8 flex gap-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-4xl font-semibold">{s.value}</dd>
                <dt className="text-sm text-subtle">{s.label.trim()}</dt>
              </div>
            ))}
          </dl>
        </div>

        <ol className="border-t border-subtle/25">
          {experience.map((e) => (
            <li key={e.role} className="grid gap-1 border-b border-subtle/25 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <p className="text-sm text-subtle">{e.period}</p>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug">{e.role}</h3>
                <p className={`mt-1 text-sm font-semibold ${accent[e.discipline]}`}>
                  {e.org.trim().replace(/,$/, "")} · {disciplines[e.discipline].label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-subtle">{e.description.trim()}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
