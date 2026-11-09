import { departments, disciplines, skills, type Discipline } from "@/content";
import { Glyph } from "./icons";

const order: Discipline[] = ["ai", "dev", "data", "design"];

const panel: Record<Discipline, string> = {
  ai: "bg-block-ai text-block-ai-fg md:col-span-7",
  dev: "bg-block-dev text-block-dev-fg md:col-span-5",
  data: "bg-block-data text-block-data-fg md:col-span-5",
  design: "bg-block-design text-block-design-fg md:col-span-7",
};

export default function Departments() {
  return (
    <section id="departments" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
        Four departments, one person to talk to
      </h2>
      <p className="mt-4 max-w-xl text-lg text-subtle">
        Most small teams hire for these separately. Here they share one brief, one schedule and one invoice.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        {order.map((key) => {
          const items = skills.find((s) => s.discipline === key)?.items ?? [];
          return (
            <article key={key} className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-9 ${panel[key]}`}>
              <Glyph kind={key} className="pointer-events-none absolute -right-4 -top-4 h-40 w-40 opacity-20" />
              <div className="relative">
                <p className="text-sm font-semibold opacity-80">{disciplines[key].label}</p>
                <h3 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight">
                  {departments[key].name}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed opacity-90">{departments[key].line}</p>
              </div>
              <ul className="relative mt-8 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-full bg-black/15 px-3 py-1 text-sm">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
