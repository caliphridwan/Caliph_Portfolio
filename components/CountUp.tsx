"use client";

import { useEffect, useRef, useState } from "react";

// Counts a figure such as "20+" up from zero the first time it is seen.
// The final value is what the server renders and what reduced-motion
// visitors get.
export default function CountUp({ value }: { value: string }) {
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setN(0);
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const run = (t: number) => {
        const k = Math.min(1, (t - start) / 1400);
        setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) frame = requestAnimationFrame(run);
      };
      frame = requestAnimationFrame(run);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
