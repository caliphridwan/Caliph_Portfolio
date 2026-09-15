"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content";

const words = [
  { text: "automations", color: "text-ai" },
  { text: "web apps", color: "text-dev" },
  { text: "dashboards", color: "text-data" },
  { text: "interfaces", color: "text-design" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center border-b-3 border-paper/10 px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 font-body text-sm text-muted">
          {profile.location}
        </p>

        <h1 className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tight text-paper sm:text-[9vw] lg:text-[6.5vw]">
          Ridwan
          <br />
          Abdulkareem
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 font-body text-2xl text-muted sm:text-3xl">
          <span>I build</span>
          <span className="relative inline-flex h-[1.2em] min-w-[14ch] items-baseline overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index].text}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute left-0 font-semibold ${words[index].color}`}
              >
                {words[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <p className="mt-8 max-w-prose font-body text-lg text-paper/80">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="border-2 border-paper bg-paper px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-paper"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="border-2 border-paper px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Start a conversation
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-2 gap-px border-t-3 border-paper/10 font-body sm:grid-cols-4">
        {profile.roles.map((role) => (
          <div key={role} className="px-2 py-6 text-sm text-muted sm:px-4">
            {role}
          </div>
        ))}
      </div>
    </section>
  );
}
