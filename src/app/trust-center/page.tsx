import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Trust center",
  description:
    "Where Ledge stores data, how long we keep it, and what happens when you ask us to delete it.",
};

interface Row {
  q: string;
  a: string;
}

const ROWS: Row[] = [
  {
    q: "Where is firm data stored?",
    a: "US-East (Ohio) primary region, US-West (Oregon) replica. Firm-level choice for EU-only residency is available on request.",
  },
  {
    q: "How long is data retained?",
    a: "Active firm data is retained for the life of the subscription plus 90 days, then securely deleted. Audit logs are retained for 7 years to meet accounting recordkeeping norms.",
  },
  {
    q: "What happens on account deletion?",
    a: "All primary, replica, backup, and cache data is purged within 30 days. A signed deletion certificate is issued to the firm admin.",
  },
  {
    q: "Who can see the data internally?",
    a: "Engineer access to production data is break-glass only, logged, and reviewed quarterly. The standard workflow is scrubbed-in-staging — engineers never touch raw client data during normal development. PII is masked at the database layer and redacted from every log, error report, and analytics event, so it isn't available even to the on-call team.",
  },
  {
    q: "Is data used to train models?",
    a: "Per-firm data is used to improve that firm's personalized model and nothing else. Cross-firm peer signals are aggregate, anonymized, and require opt-in. Your clients' data is never used to train for another firm.",
  },
  {
    q: "What sub-processors does Ledge use?",
    a: "The canonical list — vendor, purpose, region, and data category — is published at /trust-center/subprocessors. Categories today include infrastructure, billing, transactional email, error tracking, bank data aggregation, and model inference (on zero-retention endpoints). We give firms 30 days' written notice before adding or replacing any sub-processor.",
  },
  {
    q: "Can I get a DPA / BAA?",
    a: "DPAs are available to every customer at signup. HIPAA BAAs are available on the Enterprise plan. Email legal@getledge.ai to request either.",
  },
  {
    q: "What frameworks are you audited against?",
    a: "SOC 2 Type II (annual), plus internal controls aligned to ISO 27001. GDPR and CCPA support are standard across all plans.",
  },
];

export default function TrustCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust center"
        title="Where your data"
        italic="lives, and why."
        lead="This page answers the security and privacy questions we get most often. If something here isn't clear, email us — we'd rather you know the answer than guess."
      />

      <section className="prose-section">
        <div className="container">
          <div className="faq-list" style={{ maxWidth: 860 }}>
            {ROWS.map((r) => (
              <details className="q" key={r.q}>
                <summary>
                  {r.q} <span className="plus" />
                </summary>
                <div className="a">{r.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)" }}
      >
        <div className="container">
          <div className="tile-grid">
            <div className="tile">
              <div className="tile-kicker">Report</div>
              <div className="tile-title">SOC 2 Type II</div>
              <div className="tile-body">
                Request the report with a signed NDA at{" "}
                <a href="mailto:security@getledge.ai" style={{ color: "var(--brand-forest-700)" }}>
                  security@getledge.ai
                </a>
                .
              </div>
            </div>
            <div className="tile">
              <div className="tile-kicker">Agreement</div>
              <div className="tile-title">DPA / BAA</div>
              <div className="tile-body">
                Email{" "}
                <a href="mailto:legal@getledge.ai" style={{ color: "var(--brand-forest-700)" }}>
                  legal@getledge.ai
                </a>
                {" "}— counter-signed within 5 business days.
              </div>
            </div>
            <div className="tile">
              <div className="tile-kicker">Disclosure</div>
              <div className="tile-title">Vulnerability reports</div>
              <div className="tile-body">
                Responsible disclosure at{" "}
                <a href="mailto:security@getledge.ai" style={{ color: "var(--brand-forest-700)" }}>
                  security@getledge.ai
                </a>
                . We respond within 72 hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
