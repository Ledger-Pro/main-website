import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "What's shipped recently in Ledge — models, integrations, reviewer tools, and API updates.",
};

interface Entry {
  version: string;
  date: string;
  title: string;
  items: string[];
}

const ENTRIES: Entry[] = [
  {
    version: "2.4",
    date: "Apr 18, 2026",
    title: "Autopilot gates per-client",
    items: [
      "Set different confidence thresholds per client — high-volume retail can run at 95%, new clients can start at 98%.",
      "New reviewer bulk-actions: accept a merchant across every pending transaction in one click.",
      "Xero integration now writes back the reasoning as a memo field (toggle in firm settings).",
    ],
  },
  {
    version: "2.3",
    date: "Mar 26, 2026",
    title: "Continuous reconciliation v2",
    items: [
      "Reconciliation runs hourly instead of nightly for banks that push webhooks.",
      "Transfer pairing across sibling accounts — Chase checking ↔ Chase savings no longer creates a review item.",
      "Duplicate detection catches ~14% more cases by looking at merchant + amount ± $0.50 ± 3 days.",
    ],
  },
  {
    version: "2.2",
    date: "Feb 14, 2026",
    title: "Client portal",
    items: [
      "Clients now receive a single weekly digest of flagged transactions — one-tap categorize, one-tap approve.",
      "White-label mode for firms over 100 clients: subdomain, logo, color, and email sender.",
      "Approvals sync back to the ledger with the client user attached as the source.",
    ],
  },
  {
    version: "2.1",
    date: "Jan 9, 2026",
    title: "QuickBooks Online two-way sync",
    items: [
      "QBO is now a first-class ledger destination alongside Xero — bidirectional by default.",
      "Firm-wide chart of accounts templates roll forward when a new client is onboarded.",
      "Audit log export (CSV) includes the model version that posted each entry.",
    ],
  },
  {
    version: "2.0",
    date: "Nov 2025",
    title: "v2 · confidence scoring",
    items: [
      "Every booking now ships with a numeric confidence score and the contributing factors.",
      "New reviewer console — flagged, queued, and auto-booked tabs with keyboard nav.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="What we've shipped"
        italic="this quarter."
        lead="We release weekly. Big ones get called out here. Customers on active plans get release notes in-product the moment they ship."
      />

      <section className="prose-section">
        <div className="container">
          <div className="changelog-list">
            {ENTRIES.map((e) => (
              <div className="changelog-entry" key={e.version}>
                <div className="changelog-meta">
                  <span className="version">v{e.version}</span>
                  <div style={{ marginTop: 8 }}>{e.date}</div>
                </div>
                <div className="changelog-body">
                  <h3>{e.title}</h3>
                  <ul>
                    {e.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
