import { process } from "@/content";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
        How a project runs
      </h2>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <li key={step.title} className="rounded-3xl border border-subtle/25 bg-surface p-7">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-semibold text-canvas">
              {i + 1}
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-subtle">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
