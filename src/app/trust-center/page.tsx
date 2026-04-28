import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust center",
  description:
    "Where Ledge stores data, how long we keep it, and what happens when you ask us to delete it.",
};

const COMPLIANCES = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "CCPA / CPRA",
  "HIPAA (BAA)",
  "Penetration Testing",
];

const CONTROLS = [
  {
    domain: "Data security",
    points: ["Encryption at rest and in transit", "Data retention and deletion controls"],
  },
  {
    domain: "Application security",
    points: ["Secure SDLC with PR review gates", "Quarterly dependency and vuln scans"],
  },
  {
    domain: "Network security",
    points: ["Segregated VPC and least-privilege access", "Monitoring for anomalous behavior"],
  },
  {
    domain: "Corporate security",
    points: ["Security awareness training", "Documented incident response playbooks"],
  },
];

const RESOURCES = [
  "Information Security Policy",
  "Business Continuity & Disaster Recovery Policy",
  "Data Classification Policy",
  "Access Control Policy",
  "Vulnerability Disclosure Policy",
  "Subprocessor Management Policy",
];

const SUBPROCESSORS = [
  { vendor: "AWS", category: "Cloud infrastructure" },
  { vendor: "OpenAI", category: "Model inference" },
  { vendor: "Anthropic", category: "Model inference" },
  { vendor: "Stripe", category: "Billing infrastructure" },
  { vendor: "Sentry", category: "Error monitoring" },
  { vendor: "Google Workspace", category: "Business operations" },
];

export default function TrustCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust center"
        title="Security and privacy"
        italic="you can verify."
        lead="Built for security reviews. See our compliance posture, controls, subprocessors, and policy library in one place."
      />

      <section className="prose-section">
        <div className="container">
          <div className="trust-intro">
            <p>
              Request access to full documents, reports, and control evidence for your security review.
            </p>
            <div className="trust-intro-cta">
              <a className="btn btn-primary" href="mailto:security@getledge.ai?subject=Trust%20Center%20Access%20Request">
                Request access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="prose-section trust-muted">
        <div className="container">
          <h2 className="trust-section-title">Compliances</h2>
          <div className="trust-grid">
            {COMPLIANCES.map((item) => (
              <div className="trust-card trust-ok" key={item}>
                <div className="trust-card-title">{item}</div>
                <div className="trust-status">
                  <span className="trust-tick" aria-hidden>
                    ✓
                  </span>
                  Compliant
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <h2 className="trust-section-title">Controls</h2>
          <div className="trust-grid">
            {CONTROLS.map((control) => (
              <div className="trust-card" key={control.domain}>
                <div className="trust-card-title">{control.domain}</div>
                <ul className="trust-list">
                  {control.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section trust-muted">
        <div className="container">
          <h2 className="trust-section-title">Resources</h2>
          <div className="trust-card trust-gated">
            <div className="trust-card-title">Policy and report library</div>
            <p className="trust-muted-text">Listed below. Full files are shared after access approval.</p>
            <ul className="trust-list">
              {RESOURCES.map((resource) => (
                <li key={resource}>
                  <span className="trust-lock" aria-hidden>
                    🔒
                  </span>
                  {resource}
                </li>
              ))}
            </ul>
            <a className="btn btn-ghost btn-sm" href="mailto:security@getledge.ai?subject=Request%20Policy%20Documents">
              Request policy pack
            </a>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <h2 className="trust-section-title">Subprocessors</h2>
          <div className="trust-grid">
            {SUBPROCESSORS.map((sp) => (
              <div className="trust-card" key={sp.vendor}>
                <div className="trust-card-title">{sp.vendor}</div>
                <div className="trust-muted-text">{sp.category}</div>
              </div>
            ))}
          </div>
          <div className="trust-footnote">
            Full list, regions, and change notices:{" "}
            <Link href="/trust-center/subprocessors">/trust-center/subprocessors</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
