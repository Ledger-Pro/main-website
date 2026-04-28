import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Ledge vs Digits",
  description:
    "A firm-first comparison of Ledge and Digits across workflow fit, control model, and implementation approach.",
};

const DIFFERENCES = [
  {
    title: "Deployment model",
    ledge: "Workflow layer for firms that can coexist with existing ledgers and client tooling.",
    other: "Ledger-replacement architecture designed around an AI-native general ledger.",
  },
  {
    title: "Firm operations depth",
    ledge: "Emphasizes client operations workflow: intake, review queues, and collaborator controls.",
    other: "Strong automation narrative with growing partner motion and centralized accounting workflows.",
  },
  {
    title: "Change-management overhead",
    ledge: "Lower migration pressure for firms that cannot force all clients onto one accounting stack at once.",
    other: "Higher upside if firms are ready to standardize and migrate clients to a new core ledger model.",
  },
];

const CONTENT_TO_ADD = [
  "Public implementation timeline by firm size (e.g., 10, 50, 200 clients)",
  "Sample reviewer workflow showing confidence gates and escalation path",
  "Audit evidence export examples (CSV fields, immutable event log shape)",
  "Case study focused on migration-light rollout for multi-client firms",
];

export default function CompareDigitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare · Digits"
        title="Ledge vs Digits:"
        italic="what matters for firms."
        lead="Both promise accounting automation. The decision usually comes down to operating model: replacing the core ledger or upgrading the firm's workflow and controls first."
      />

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>How to position Ledge</h2>
          <div className="prose-body">
            <p>
              Position Ledge as the practical choice for firms that need immediate throughput gains
              without a full ledger migration motion. Lead with control, review workflows, and client
              relationship continuity.
            </p>
            <p>
              Use language around "migration-light adoption" and "firm-owned operating model" rather
              than feature parity framing.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <div className="tile-grid">
            {DIFFERENCES.map((item) => (
              <article className="tile" key={item.title}>
                <div className="tile-kicker">{item.title}</div>
                <div className="tile-title">Ledge</div>
                <p className="tile-body">{item.ledge}</p>
                <div className="tile-title" style={{ marginTop: 10 }}>
                  Digits
                </div>
                <p className="tile-body">{item.other}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Content to add on main website</h2>
          <div className="prose-body">
            <ul>
              {CONTENT_TO_ADD.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <Link href="/trust-center">Trust Center</Link> and <Link href="/security">Security</Link>{" "}
              should link back here to support procurement and partner-evaluation conversations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
