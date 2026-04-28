import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trust center",
  description:
    "Where Ledge stores data, how long we keep it, and what happens when you ask us to delete it.",
};

const COMPLIANCES = [
  { name: "SOC 2 Type II", status: "In progress", icon: "/trust/icon-shield.svg" },
  { name: "ISO 27001", status: "Compliant", icon: "/trust/icon-shield.svg" },
  { name: "GDPR", status: "Compliant", icon: "/trust/icon-shield.svg" },
  { name: "CCPA / CPRA", status: "Compliant", icon: "/trust/icon-shield.svg" },
  { name: "HIPAA (BAA)", status: "Compliant", icon: "/trust/icon-shield.svg" },
  { name: "Penetration Testing", status: "Compliant", icon: "/trust/icon-controls.svg" },
] as const;

const CONTROLS = [
  {
    domain: "Data security",
    icon: "/trust/icon-shield.svg",
    points: ["Encryption at rest and in transit", "Data retention and deletion controls"],
  },
  {
    domain: "Application security",
    icon: "/trust/icon-controls.svg",
    points: ["Secure SDLC with PR review gates", "Quarterly dependency and vuln scans"],
  },
  {
    domain: "Network security",
    icon: "/trust/icon-cloud.svg",
    points: ["Segregated VPC and least-privilege access", "Monitoring for anomalous behavior"],
  },
  {
    domain: "Corporate security",
    icon: "/trust/icon-resource.svg",
    points: ["Security awareness training", "Documented incident response playbooks"],
  },
];

const RESOURCES = [
  { name: "Information Security Policy", icon: "/trust/icon-resource.svg" },
  { name: "Business Continuity & Disaster Recovery Policy", icon: "/trust/icon-resource.svg" },
  { name: "Data Classification Policy", icon: "/trust/icon-resource.svg" },
  { name: "Access Control Policy", icon: "/trust/icon-resource.svg" },
  { name: "AI Model Governance Policy", icon: "/trust/icon-controls.svg" },
  { name: "AI Output Review & Escalation Policy", icon: "/trust/icon-controls.svg" },
  { name: "Vulnerability Disclosure Policy", icon: "/trust/icon-shield.svg" },
  { name: "Subprocessor Management Policy", icon: "/trust/icon-cloud.svg" },
];

const FIRM_PROOF = [
  {
    title: "Client boundaries enforced by design",
    body: "Per-client access controls, firm-level tenancy boundaries, and least-privilege defaults keep client data scoped to approved team members.",
  },
  {
    title: "Evidence-ready activity logs",
    body: "Exportable logs include action, actor, timestamp, source document, and review status to support audit and quality-control workflows.",
  },
  {
    title: "Human review control points",
    body: "Confidence thresholds and reviewer gates let firms enforce when entries can auto-post versus when human approval is required.",
  },
];

const REVIEW_PACK = [
  "Most recent SOC 2 Type II report",
  "Security whitepaper and architecture overview",
  "Subprocessor list with categories and regions",
  "Standard security questionnaire responses",
  "DPA and privacy terms",
];

const SUBPROCESSORS = [
  { vendor: "AWS", category: "Cloud infrastructure", logo: "/trust/aws.svg" },
  { vendor: "OpenAI", category: "Model inference", logo: "/trust/openai.svg" },
  { vendor: "Anthropic", category: "Model inference", logo: "/trust/anthropic.svg" },
  { vendor: "Stripe", category: "Billing infrastructure", logo: "/trust/stripe.svg" },
  { vendor: "Sentry", category: "Error monitoring", logo: "/trust/sentry.svg" },
  { vendor: "Google Workspace", category: "Business operations", logo: "/trust/google-workspace.svg" },
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
              Request access to full documents, reports, and control evidence for your client and internal security reviews.
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
          <div className="trust-section-head">
            <h2 className="trust-section-title trust-title-icon">
              <Image src="/trust/icon-shield.svg" alt="" width={18} height={18} aria-hidden />
              Why firms choose Ledge
            </h2>
            <span className="trust-section-meta">Operator view</span>
          </div>
          <div className="trust-grid">
            {FIRM_PROOF.map((item) => (
              <div className="trust-card" key={item.title}>
                <div className="trust-card-title">{item.title}</div>
                <p className="trust-muted-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="trust-section-head">
            <h2 className="trust-section-title trust-title-icon">
              <Image src="/trust/icon-shield.svg" alt="" width={18} height={18} aria-hidden />
              Compliances
            </h2>
            <span className="trust-section-meta">Details</span>
          </div>
          <div className="trust-grid">
            {COMPLIANCES.map((item) => (
              <div className="trust-card trust-ok" key={item.name}>
                <div className="trust-card-title trust-item-title">
                  <Image src={item.icon} alt="" width={16} height={16} aria-hidden />
                  {item.name}
                </div>
                <div className="trust-status">
                  <span className="trust-tick" aria-hidden>
                    ✓
                  </span>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="trust-section-head">
            <h2 className="trust-section-title trust-title-icon">
              <Image src="/trust/icon-controls.svg" alt="" width={18} height={18} aria-hidden />
              Controls
            </h2>
            <span className="trust-section-meta">Details</span>
          </div>
          <div className="trust-grid">
            {CONTROLS.map((control) => (
              <div className="trust-card" key={control.domain}>
                <div className="trust-card-title trust-item-title">
                  <Image src={control.icon} alt="" width={16} height={16} aria-hidden />
                  {control.domain}
                </div>
                <ul className="trust-list">
                  {control.points.map((point) => (
                    <li key={point} className="trust-point-item">
                      <Image src={control.icon} alt="" width={14} height={14} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="trust-section-head">
            <h2 className="trust-section-title trust-title-icon">
              <Image src="/trust/icon-resource.svg" alt="" width={18} height={18} aria-hidden />
              Security review pack
            </h2>
            <span className="trust-section-meta">Fast lane</span>
          </div>
          <div className="trust-card trust-gated">
            <div className="trust-card-title">Standard evidence package</div>
            <p className="trust-muted-text">
              Built for vendor reviews and procurement workflows. Send your questionnaire and we will map evidence to each control domain.
            </p>
            <ul className="trust-list">
              {REVIEW_PACK.map((resource) => (
                <li key={resource}>
                  <Image src="/trust/icon-resource.svg" alt="" width={14} height={14} aria-hidden />
                  {resource}
                </li>
              ))}
            </ul>
            <a className="btn btn-ghost btn-sm" href="mailto:security@getledge.ai?subject=Request%20Security%20Review%20Pack">
              Request review pack
            </a>
          </div>
        </div>
      </section>

      <section className="prose-section trust-muted">
        <div className="container">
          <div className="trust-section-head">
            <h2 className="trust-section-title trust-title-icon">
              <Image src="/trust/icon-resource.svg" alt="" width={18} height={18} aria-hidden />
              Resources
            </h2>
            <span className="trust-section-meta">Details</span>
          </div>
          <div className="trust-tabs">
            <span className="trust-tab trust-tab-active">All</span>
            <span className="trust-tab">Policies</span>
            <span className="trust-tab">Documents</span>
          </div>
          <div className="trust-card trust-gated">
            <div className="trust-card-title">Policy and report library</div>
            <p className="trust-muted-text">Listed below. Full files are shared after access approval.</p>
            <ul className="trust-list">
              {RESOURCES.map((resource) => (
                <li key={resource.name}>
                  <Image src={resource.icon} alt="" width={14} height={14} aria-hidden />
                  {resource.name}
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
          <div className="trust-section-head">
            <h2 className="trust-section-title trust-title-icon">
              <Image src="/trust/icon-cloud.svg" alt="" width={18} height={18} aria-hidden />
              Subprocessors
            </h2>
            <span className="trust-section-meta">Details</span>
          </div>
          <div className="trust-grid">
            {SUBPROCESSORS.map((sp) => (
              <div className="trust-card" key={sp.vendor}>
                <div className="trust-logo-wrap">
                  <Image src={sp.logo} alt={`${sp.vendor} logo`} width={22} height={22} className="trust-logo" />
                </div>
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
