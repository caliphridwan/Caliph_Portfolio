import { disciplines, experience } from "@/content";

const dotClass: Record<string, string> = {
  ai: "bg-ai",
  dev: "bg-dev",
  data: "bg-data",
  design: "bg-design",
};

export default function Experience() {
  return (
    <section id="experience" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-semibold leading-tight">
          Experience
        </h2>

        <div className="mt-12 space-y-0">
          {experience.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 border-t-3 border-ink/10 py-8 first:border-t-0 sm:grid-cols-[160px_auto_1fr]"
            >
              <span className="hidden font-body text-sm text-mist sm:block">
                {item.period}
              </span>
              <span
                className={`mt-2 h-3 w-3 shrink-0 rounded-full ${dotClass[item.discipline]}`}
                aria-hidden
              />
              <div>
                <p className="font-body text-sm text-mist sm:hidden">
                  {item.period}
                </p>
                <h3 className="font-display text-xl font-semibold">
                  {item.role}
                </h3>
                <p className="font-body text-sm text-mist">
                  {item.org} · {disciplines[item.discipline].label}
                </p>
                <p className="mt-2 max-w-prose font-body text-base leading-relaxed text-ink/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
