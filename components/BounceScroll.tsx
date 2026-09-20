"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Adds a soft "rubber-band" bounce when the user scrolls past the very
// top or bottom of the page — like iOS/macOS overscroll — without
// touching normal scroll behavior in between (anchor links, scroll
// speed, etc. are all untouched; this only nudges a transform at the
// boundaries and springs it back to 0).
export default function BounceScroll({ children }: { children: React.ReactNode }) {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.4 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const maxOvershoot = 60; // px, how far the bounce can stretch
    let resetTimer: ReturnType<typeof setTimeout>;

    const atTop = () => window.scrollY <= 0;
    const atBottom = () =>
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 1;

    function bounceAndReset(next: number) {
      y.set(next);
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => y.set(0), 120);
    }

    function handleWheel(e: WheelEvent) {
      if (atTop() && e.deltaY < 0) {
        bounceAndReset(Math.min(maxOvershoot, y.get() + Math.abs(e.deltaY) * 0.5));
      } else if (atBottom() && e.deltaY > 0) {
        bounceAndReset(Math.max(-maxOvershoot, y.get() - Math.abs(e.deltaY) * 0.5));
      }
    }

    let touchStartY = 0;
    function handleTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }
    function handleTouchMove(e: TouchEvent) {
      const delta = e.touches[0].clientY - touchStartY;
      if (atTop() && delta > 0) {
        y.set(Math.min(maxOvershoot, delta * 0.4));
      } else if (atBottom() && delta < 0) {
        y.set(Math.max(-maxOvershoot, delta * 0.4));
      }
    }
    function handleTouchEnd() {
      y.set(0);
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      clearTimeout(resetTimer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [y]);

  return <motion.div style={{ y: springY }}>{children}</motion.div>;
}
