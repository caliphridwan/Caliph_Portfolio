"use client";

import { useReveal } from "./Reveal";

// A department panel with a soft light that follows the pointer.
export default function SpotlightCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  const r = useReveal<HTMLElement>(delay);

  function move(e: React.MouseEvent<HTMLElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
  }

  return (
    <article
      ref={r.ref}
      onMouseMove={move}
      style={r.style}
      className={`spotlight group ${className} ${r.className}`}
    >
      <span aria-hidden="true" className="spotlight-glow" />
      {children}
    </article>
  );
}
