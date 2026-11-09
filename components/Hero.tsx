import { hq, profile } from "@/content";
import { ArrowUpRight } from "./icons";
import ReceptionBoard from "./ReceptionBoard";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-subtle/30 px-4 py-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
            </span>
            {hq.availability}
          </p>

          <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            Full-stack developer, AI automation and data, working from {hq.city} for teams anywhere.
          </p>
          <p className="mt-5 max-w-xl text-lg text-subtle">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-block-dev px-7 py-3.5 font-semibold text-block-dev-fg transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-subtle/50 px-7 py-3.5 font-semibold transition-colors hover:border-ink"
            >
              Download resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <ReceptionBoard />
      </div>
    </section>
  );
}
