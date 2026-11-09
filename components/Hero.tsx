import { hq, profile } from "@/content";
import { ArrowUpRight } from "./icons";
import ReceptionBoard from "./ReceptionBoard";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p style={{ "--e": "0ms" } as React.CSSProperties} className="enter inline-flex items-center gap-2.5 rounded-full border border-subtle/30 px-4 py-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
            </span>
            {hq.availability}
          </p>

          <h1 className="mt-7 font-display text-[clamp(3rem,9vw,5.75rem)] font-bold leading-[0.98]">
            {profile.name.split(" ").map((w, i) => (
              <span key={w} className="word mr-[0.25em] last:mr-0">
                <span style={{ "--w": `${150 + i * 120}ms` } as React.CSSProperties}>{w}</span>
              </span>
            ))}
          </h1>
          <p style={{ "--e": "550ms" } as React.CSSProperties} className="enter mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-ink sm:text-[1.75rem]">
            Full-stack developer, AI automation and data, working from {hq.city} for teams anywhere.
          </p>
          <p style={{ "--e": "700ms" } as React.CSSProperties} className="enter mt-5 max-w-xl text-lg text-subtle">{profile.tagline}</p>

          <div style={{ "--e": "850ms" } as React.CSSProperties} className="enter mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-block-dev px-7 py-3.5 font-semibold text-block-dev-fg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgb(212_255_63/0.6)]"
            >
              Start a project
            </a>
            <a
              href={profile.resumeUrl}
              className="group/btn inline-flex items-center gap-2 rounded-full border border-subtle/50 px-7 py-3.5 font-semibold transition-colors hover:border-ink"
            >
              Download resume <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div style={{ "--e": "500ms" } as React.CSSProperties} className="enter">
          <ReceptionBoard />
        </div>
      </div>
    </section>
  );
}
