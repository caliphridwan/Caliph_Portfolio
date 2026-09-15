"use client";

import { useState } from "react";
import { profile } from "@/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbgjnnjo";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSend() {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-4 max-w-prose font-body text-lg text-muted">
              Open to remote roles and freelance projects across AI
              automation, full-stack development, data analysis, or design —
              tell me what you&apos;re building.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  className="border-2 border-paper/30 px-4 py-2 font-body text-sm text-paper transition-colors hover:border-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="font-body text-sm text-muted">
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border-2 border-paper/30 bg-transparent px-4 py-3 font-body text-paper outline-none focus:border-dev"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-sm text-muted">
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full border-2 border-paper/30 bg-transparent px-4 py-3 font-body text-paper outline-none focus:border-dev"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-body text-sm text-muted">
                What are you building?
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full border-2 border-paper/30 bg-transparent px-4 py-3 font-body text-paper outline-none focus:border-dev"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full border-2 border-paper bg-paper px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-paper disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="font-body text-xs text-dev">
                Message sent — thanks for reaching out, I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-body text-xs text-data">
                Something went wrong sending that. Please try again, or email
                me directly at {profile.email}.
              </p>
            )}
            {status === "idle" && (
              <p className="font-body text-xs text-muted">
                Looking forward to hearing from you.
              </p>
            )}
          </form>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t-3 border-paper/10 pt-8 font-body text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Caliph Ridwan</span>
        </div>
      </div>
    </section>
  );
}
