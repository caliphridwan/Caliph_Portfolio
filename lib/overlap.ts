// Works out how a home working day overlaps with a 9 to 17 day in other
// cities, using the browser's own time zone data (so daylight saving is
// always right). The home day is split into 96 quarter-hour slots.

export type Zone = { label: string; tz: string };
export type Run = { start: number; len: number };
export type BoardRow = {
  label: string;
  time: string;
  overlapHours: number;
  theirRuns: Run[];
  overlapRuns: Run[];
};
export type Board = {
  homeTime: string;
  homeFraction: number;
  homeRuns: Run[];
  rows: BoardRow[];
};

const SLOTS = 96;

function parts(tz: string, at: Date): Record<string, number> {
  const f = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const out: Record<string, number> = {};
  for (const p of f.formatToParts(at)) {
    if (p.type !== "literal") out[p.type] = Number(p.value);
  }
  return out;
}

export function offsetMinutes(tz: string, at: Date): number {
  const p = parts(tz, at);
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  const real = Math.floor(at.getTime() / 1000) * 1000;
  return Math.round((asUtc - real) / 60000);
}

function toRuns(flags: boolean[]): Run[] {
  const runs: Run[] = [];
  let start = -1;
  flags.forEach((on, i) => {
    if (on && start < 0) start = i;
    if (!on && start >= 0) {
      runs.push({ start, len: i - start });
      start = -1;
    }
  });
  if (start >= 0) runs.push({ start, len: flags.length - start });
  return runs;
}

const pad = (n: number) => String(n).padStart(2, "0");

export function computeBoard(
  now: Date,
  home: { tz: string; start: number; end: number },
  zones: Zone[],
  workday = { start: 9, end: 17 }
): Board {
  const homeOffset = offsetMinutes(home.tz, now);
  const hp = parts(home.tz, now);
  const homeFlags: boolean[] = [];
  for (let i = 0; i < SLOTS; i++) {
    const h = i / 4;
    homeFlags.push(h >= home.start && h < home.end);
  }

  const rows: BoardRow[] = zones.map((z) => {
    const diff = (offsetMinutes(z.tz, now) - homeOffset) / 60;
    const theirFlags: boolean[] = [];
    const overlapFlags: boolean[] = [];
    for (let i = 0; i < SLOTS; i++) {
      const local = (((i / 4 + diff) % 24) + 24) % 24;
      const theirs = local >= workday.start && local < workday.end;
      theirFlags.push(theirs);
      overlapFlags.push(theirs && homeFlags[i]);
    }
    const zp = parts(z.tz, now);
    return {
      label: z.label,
      time: `${pad(zp.hour)}:${pad(zp.minute)}`,
      overlapHours: overlapFlags.filter(Boolean).length / 4,
      theirRuns: toRuns(theirFlags),
      overlapRuns: toRuns(overlapFlags),
    };
  });

  return {
    homeTime: `${pad(hp.hour)}:${pad(hp.minute)}`,
    homeFraction: (hp.hour + hp.minute / 60) / 24,
    homeRuns: toRuns(homeFlags),
    rows,
  };
}
