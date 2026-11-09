// Small inline icons so the page needs no icon library.
type P = { className?: string };

export function Mark({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" rx="3" fill="#4A44E8" />
      <rect x="18" y="2" width="12" height="12" rx="3" fill="#D4FF3F" />
      <rect x="2" y="18" width="12" height="12" rx="3" fill="#FF4D8D" />
      <rect x="18" y="18" width="12" height="12" rx="3" fill="#FFA23E" />
    </svg>
  );
}

export function Sun({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function Moon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function ArrowUpRight({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Chevron({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Menu({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// Large line motifs, one per department.
export function Glyph({ kind, className }: { kind: "ai" | "dev" | "data" | "design" } & P) {
  const common = { viewBox: "0 0 64 64", className, fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (kind === "ai")
    return (
      <svg {...common}>
        <circle cx="12" cy="14" r="5" />
        <circle cx="52" cy="14" r="5" />
        <circle cx="32" cy="38" r="6" />
        <circle cx="12" cy="54" r="4" />
        <circle cx="52" cy="54" r="4" />
        <path d="M16 18 28 33M48 18 36 33M32 44 14 51M32 44 50 51" />
      </svg>
    );
  if (kind === "dev")
    return (
      <svg {...common}>
        <path d="M22 16 8 32l14 16M42 16l14 16-14 16M36 10 28 54" />
      </svg>
    );
  if (kind === "data")
    return (
      <svg {...common}>
        <path d="M8 54h48M14 54V36M26 54V22M38 54V30M50 54V10" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="14" y="14" width="36" height="36" />
      <rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)" />
      <circle cx="32" cy="32" r="6" />
    </svg>
  );
}
