import type { ReactNode } from "react";
import { Reveal } from "./reveal";

interface Feature {
  span: 4 | 6 | 8 | 12;
  dark?: boolean;
  icon: ReactNode;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    span: 6,
    dark: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Confidence-gated autopilot",
    body: "Auto-book anything scoring above the threshold you set — 95%, 98%, or human-only. Everything below goes to a review queue with reasoning attached.",
  },
  {
    span: 6,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Continuous reconciliation",
    body: "Bank feeds and ledger reconcile daily, not monthly. By the time the 1st rolls around, the books are already closed.",
  },
  {
    span: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Firm-wide COA templates",
    body: "Define how categorization works once, apply it across every client — with per-client overrides.",
  },
  {
    span: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M2 8l2 2 4-4 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Anomaly detection",
    body: "Flags duplicate charges, vendor changes, categorization drift, and amounts out of character for the account.",
  },
  {
    span: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 6h12M6 2v12" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Client portal & approvals",
    body: "Flagged items get pushed to a client portal with one-tap categorization — no email threads, no screenshots.",
  },
  {
    span: 8,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M2 12V4a1 1 0 011-1h6l4 4v5a1 1 0 01-1 1H3a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Two-way QuickBooks & Xero sync",
    body: "Ledge writes directly to your existing GL. Keep the tools your firm already runs on — your clients never need to migrate, and your reports come out of the software they know.",
  },
  {
    span: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v12M4 6l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Auditable by design",
    body: "Every booking has a reason, a source, and a model version. Export a full audit log to CSV in one click.",
  },
];

export function Features() {
  return (
    <section className="features-sec" id="features">
      <div className="eclipse ec-blue" />
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Features</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "16ch" }}>
              Built for firms that serve <span className="ital">real</span> businesses.
            </h2>
          </div>
          <p className="lead">
            Every feature is designed to remove a specific manual step — not to be flashy. Turn on
            what you need, roll it across your entire book of business in a day.
          </p>
        </div>

        <Reveal className="feat-grid" stagger>
          {FEATURES.map((f, i) => (
            <div key={i} className={`feat span-${f.span}${f.dark ? " dark" : ""}`}>
              <div className="ico">{f.icon}</div>
              <div className="t">{f.title}</div>
              <div className="d">{f.body}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
