"use client";

import { useState } from "react";
import { profile, ways } from "@/content";
import { Mark } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-block-dev focus:outline-none";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function send(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-block-ai text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Tell me what you need built
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/85">
              Send a few lines about the role or project. I reply within 1 to 2 business days.
            </p>

            <ul className="mt-10 space-y-5">
              {ways.map((w) => (
                <li key={w.title} className="border-t border-white/25 pt-4">
                  <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-1 text-white/80">{w.text}</p>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-white/85">
              Prefer email?{" "}
              <a href={`mailto:${profile.email}`} className="font-semibold underline underline-offset-4">
                {profile.email}
              </a>
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/40 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-block-ai"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={send} className="space-y-5 rounded-3xl bg-black/20 p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Your name
              </label>
              <input id="name" type="text" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Your email
              </label>
              <input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                What are you building?
              </label>
              <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-block-dev px-6 py-3.5 font-semibold text-block-dev-fg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <div role="status" aria-live="polite" className="min-h-[3rem] text-sm">
              {status === "sent" && (
                <p className="rounded-xl bg-white/15 p-3">
                  Message sent. A confirmation is on its way to your inbox, and I will reply within 1 to 2 business days.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl bg-black/30 p-3">
                  The message did not send. Try again, or email {profile.email} directly.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/25 pt-6 text-sm text-white/80 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2.5">
            <Mark className="h-5 w-5" /> © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="underline underline-offset-4">
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
