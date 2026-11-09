import { stack } from "@/content";

// A slow, endless strip of the tools used. The list is repeated so the
// loop has no seam; the copy is hidden from screen readers.
export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-subtle/20 py-5"
      role="region"
      aria-label="Tools and technologies"
    >
      <ul className="sr-only">
        {stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="marquee-track flex w-max gap-12">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-12">
            {stack.map((s) => (
              <span key={s} className="flex items-center gap-12 font-display text-2xl font-semibold text-subtle">
                {s}
                <span className="h-2 w-2 rounded-full bg-block-dev" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
