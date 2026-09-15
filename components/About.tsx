import { about } from "@/content";

export default function About() {
  return (
    <section id="about" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight">
              About
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-6">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border-t-3 border-ink pt-3">
                  <div className="font-display text-3xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-body text-sm text-mist">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 font-body text-lg leading-relaxed text-ink/90">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="max-w-prose">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
