import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Ledge is SOC 2 Type II compliant, uses bank-grade encryption, and connects to financial data read-only by default.",
};

interface Pillar {
  kicker: string;
  title: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    kicker: "Encryption",
    title: "AES-256 at rest, TLS 1.3 in transit",
    body:
      "All firm data is encrypted at rest in AWS-managed KMS and encrypted in transit via TLS 1.3. Database-level encryption is per-firm, so key rotation happens on a per-firm cadence.",
  },
  {
    kicker: "Access",
    title: "Read-only bank connections by default",
    body:
      "We connect to financial institutions via Plaid, Teller, and direct OFX/API feeds — all read-only. Ledge can pull transactions; it cannot move money, ever.",
  },
  {
    kicker: "Isolation",
    title: "Per-firm data boundary",
    body:
      "Your firm's data never trains a model that serves another firm. Peer benchmarks are opt-in, aggregate, and anonymized. No cross-tenant queries are possible at the infrastructure level.",
  },
  {
    kicker: "Audit",
    title: "Full audit trail, exportable",
    body:
      "Every booking has an immutable record of source, model version, confidence score, reviewer, and timestamp. Export the full log to CSV in one click — the exact format auditors expect.",
  },
  {
    kicker: "Identity",
    title: "SSO & role-based access",
    body:
      "SAML 2.0 SSO, Google and Microsoft OAuth out of the box. Per-client role assignments — a staff accountant can review but not post above the firm's confidence gate.",
  },
  {
    kicker: "Compliance",
    title: "SOC 2 Type II",
    body:
      "Annual Type II audit by a Big Four firm. GDPR and CCPA support including data portability and right-to-delete within 30 days. HIPAA BAAs for firms serving healthcare clients.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Built for firms that handle"
        italic="other people's money."
        lead="Ledge touches the same data your clients trust you with. Our security posture is the only way the product is allowed to exist — so we invest in it the way a bank does."
      />

      <section className="prose-section">
        <div className="container">
          <div className="tile-grid">
            {PILLARS.map((p) => (
              <div className="tile" key={p.title}>
                <div className="tile-kicker">{p.kicker}</div>
                <div className="tile-title">{p.title}</div>
                <div className="tile-body">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)" }}
      >
        <div className="container prose-grid">
          <h2>Incident response &amp; uptime</h2>
          <div className="prose-body">
            <p>
              Ledge runs on AWS across two regions with automated failover. Our SLA for
              paid plans is <strong>99.9% monthly uptime</strong>, and our public status page
              (coming soon) reports real-time availability for every component.
            </p>
            <p>
              Security incidents are disclosed to affected firms within 24 hours, always.
              Our incident response runbooks are reviewed quarterly and executed at least annually
              during simulations.
            </p>
            <p>
              To request the full security whitepaper, SOC 2 report, or a mutual NDA, email{" "}
              <a href="mailto:security@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                security@getledge.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
