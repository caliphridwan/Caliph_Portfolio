"use client";

import { useEffect, useRef, useState } from "react";

type State = "idle" | "hidden" | "in";

// Scroll reveal. Content is fully visible until the browser has run this
// code, so a visitor without JavaScript still sees everything. Anything
// already on screen at load stays put; only content below the fold is
// held back, then eased in once as it arrives.
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return {
    ref,
    className: state === "idle" ? "" : state === "hidden" ? "reveal" : "reveal in",
    style: { "--d": `${delay}ms` } as React.CSSProperties,
  };
}

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
};

export default function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const r = useReveal<HTMLElement>(delay);
  const Tag = as as React.ElementType;
  return (
    <Tag ref={r.ref} className={`${className} ${r.className}`.trim()} style={r.style}>
      {children}
    </Tag>
  );
}
