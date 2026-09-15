import { disciplines, skills } from "@/content";

const borderClass: Record<string, string> = {
  ai: "border-ai",
  dev: "border-dev",
  data: "border-data",
  design: "border-design",
};

const textClass: Record<string, string> = {
  ai: "text-ai",
  dev: "text-dev",
  data: "text-data",
  design: "text-design",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-semibold leading-tight">
          What I bring to a team
        </h2>
        <p className="mt-3 max-w-prose font-body text-muted">
          Four disciplines, one person — each color-tagged below so you can
          see exactly where a skill fits.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => {
            const meta = disciplines[group.discipline];
            return (
              <div
                key={group.discipline}
                className={`border-l-3 ${borderClass[group.discipline]} pl-6`}
              >
                <h3
                  className={`font-body text-sm font-medium ${textClass[group.discipline]}`}
                >
                  {meta.label}
                </h3>
                <ul className="mt-4 space-y-2 font-body text-lg text-paper/90">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
