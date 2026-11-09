"use client";

import { useEffect, useState } from "react";
import { hq } from "@/content";
import { computeBoard, type Board, type Run } from "@/lib/overlap";

const pct = (n: number) => `${(n / 96) * 100}%`;

function Bars({ runs, className, delay }: { runs: Run[]; className: string; delay?: number }) {
  return (
    <>
      {runs.map((r, i) => (
        <span
          key={i}
          className={`absolute inset-y-0 ${className}`}
          style={{ left: pct(r.start), width: pct(r.len), animationDelay: delay ? `${delay}ms` : undefined }}
        />
      ))}
    </>
  );
}

// Live board: when the studio's working day overlaps with a 9 to 5 day in
// other cities. Computed in the browser so it is always right for today.
export default function ReceptionBoard() {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    const compute = () =>
      setBoard(
        computeBoard(
          new Date(),
          { tz: hq.timezone, start: hq.coreStart, end: hq.coreEnd },
          hq.partners
        )
      );
    compute();
    const id = window.setInterval(compute, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="board-title"
      className="rounded-3xl border border-subtle/25 bg-surface p-5 shadow-xl shadow-black/10 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="board-title" className="font-display text-2xl font-semibold">
            Working hours overlap
          </h2>
          <p className="mt-1 text-sm text-subtle">
            My day in {hq.city}, {String(hq.coreStart).padStart(2, "0")}:00 to{" "}
            {String(hq.coreEnd).padStart(2, "0")}:00 {hq.zoneLabel}, against a 9 to 5 day elsewhere.
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl font-semibold tabular-nums" aria-live="off">
            {board ? board.homeTime : "--:--"}
          </p>
          <p className="text-sm text-subtle">{hq.city} now</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {(board?.rows ?? hq.partners.map((p) => ({ label: p.label, time: "--:--", overlapHours: 0, theirRuns: [], overlapRuns: [] }))).map(
          (row, idx) => (
            <li key={row.label} className="grid grid-cols-[5.5rem_1fr_3.5rem] items-center gap-3 sm:grid-cols-[7rem_1fr_4rem]">
              <div>
                <p className="text-sm font-semibold leading-tight">{row.label}</p>
                <p className="text-xs tabular-nums text-subtle">{row.time}</p>
              </div>
              <div
                className="relative h-4 overflow-hidden rounded-full bg-subtle/15"
                role="img"
                aria-label={`${row.label}: ${row.overlapHours} hours of overlap`}
              >
                <Bars runs={row.theirRuns} className="bg-subtle/30" />
                <Bars runs={row.overlapRuns} className="board-grow bg-block-dev" delay={900 + idx * 120} />
                {board && (
                  <span
                    className="absolute inset-y-0 w-0.5 bg-ink"
                    style={{ left: `${board.homeFraction * 100}%` }}
                  />
                )}
              </div>
              <p className="text-right text-sm font-semibold tabular-nums">{row.overlapHours}h</p>
            </li>
          )
        )}
      </ul>

      <div
        className="mt-3 grid grid-cols-[5.5rem_1fr_3.5rem] gap-3 text-xs text-subtle sm:grid-cols-[7rem_1fr_4rem]"
        aria-hidden="true"
      >
        <span />
        <span className="flex justify-between">
          <span>00</span>
          <span>06</span>
          <span>12</span>
          <span>18</span>
          <span>24</span>
        </span>
        <span />
      </div>

      <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-subtle/20 pt-4 text-xs text-subtle">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-5 rounded-full bg-block-dev" /> Both teams online
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-5 rounded-full bg-subtle/30" /> Their 9 to 5
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-0.5 bg-ink" /> Now
        </span>
      </p>
    </section>
  );
}
