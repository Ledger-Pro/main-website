import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ledge collects, uses, stores, and protects personal data, including GDPR and CCPA rights.",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "April 28, 2026";

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        italic="Policy."
        lead="This policy explains how Ledge handles personal data for website visitors, prospects, and customers."
      />

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Overview</h2>
          <div className="prose-body">
            <p>
              Effective date: <strong>{effectiveDate}</strong>
            </p>
            <p>
              Ledge is a brand/division of <strong>Spur Global Ventures Inc.</strong> This policy
              applies to data processed through our website and services.
            </p>
            <p>
              Controller details: Spur Global Ventures Inc., 3200 Wilcrest Drive, Suite 575,
              Houston, TX 77042, United States.
            </p>
            <p>
              Questions can be sent to{" "}
              <a href="mailto:privacy@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                privacy@getledge.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Scope</h2>
          <div className="prose-body">
            <p>This policy covers personal data processed when you:</p>
            <ul>
              <li>Visit our website, trust center, and legal pages.</li>
              <li>Request a demo, pricing, or security documentation.</li>
              <li>Use the Ledge product as a customer, evaluator, or invited team member.</li>
              <li>Contact support, legal, sales, or security teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Categories of Data We Collect</h2>
          <div className="prose-body">
            <p>Depending on your interaction, we may collect:</p>
            <ul>
              <li>Identity and contact details (name, work email, company, title, phone).</li>
              <li>Account and workspace data (firm, team membership, role, client associations).</li>
              <li>Usage telemetry (login events, feature usage, error traces, audit activity).</li>
              <li>Technical metadata (IP, device type, browser version, approximate geo).</li>
              <li>Support and communication records (tickets, emails, meeting notes).</li>
              <li>Commercial data (plan, invoices, payment metadata from billing providers).</li>
            </ul>
            <p>
              We do not intentionally collect sensitive personal data unless it is required for a
              specific legal or contractual process.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>How We Use Data</h2>
          <div className="prose-body">
            <ul>
              <li>Provide, maintain, and secure the Ledge service.</li>
              <li>Authenticate users and enforce tenant/client-level access controls.</li>
              <li>Deliver onboarding, support, product updates, and security notices.</li>
              <li>Prevent abuse, detect threats, investigate incidents, and enforce terms.</li>
              <li>Process billing and contract administration.</li>
              <li>Improve product quality, reliability, and performance.</li>
              <li>Comply with applicable laws, regulations, and legal requests.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Legal Bases (GDPR/UK GDPR)</h2>
          <div className="prose-body">
            <p>Where GDPR applies, we rely on one or more legal bases:</p>
            <ul>
              <li>Performance of a contract (service delivery and account administration).</li>
              <li>Legitimate interests (security, fraud prevention, service improvement).</li>
              <li>Legal obligation (compliance with law and regulatory requirements).</li>
              <li>Consent (where required, such as certain marketing communications).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>GDPR Rights (EEA/UK)</h2>
          <div className="prose-body">
            <p>
              Subject to local law, you may request access, correction, deletion, restriction,
              portability, and objection to processing.
            </p>
            <p>You also have the right to lodge a complaint with your supervisory authority.</p>
            <p>
              To submit a GDPR request, email{" "}
              <a href="mailto:privacy@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                privacy@getledge.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>CCPA/CPRA (California Privacy Notice)</h2>
          <div className="prose-body">
            <p>
              California residents may have rights to know, access, correct, delete, and limit
              certain uses of personal information.
            </p>
            <p>We do not sell personal information in the traditional sense.</p>
            <p>
              We may disclose data to service providers and subprocessors strictly for business
              purposes such as hosting, analytics, support, and security monitoring.
            </p>
            <p>
              You can request categories, sources, business purposes, and disclosures of personal
              information by contacting{" "}
              <a href="mailto:privacy@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                privacy@getledge.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Sharing & Subprocessors</h2>
          <div className="prose-body">
            <p>We share data only as needed with trusted subprocessors and service providers.</p>
            <ul>
              <li>Cloud hosting and infrastructure providers.</li>
              <li>Authentication, analytics, and monitoring providers.</li>
              <li>Customer support and communication tooling.</li>
              <li>Payment and subscription processors.</li>
            </ul>
            <p>
              Current subprocessor categories and vendors are listed in our Trust Center and may be
              updated from time to time.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>International Transfers</h2>
          <div className="prose-body">
            <p>
              Where personal data is transferred across borders, we implement appropriate safeguards
              such as contractual protections and equivalent security controls.
            </p>
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)" }}
      >
        <div className="container prose-grid">
          <h2>Data Retention, Security & Updates</h2>
          <div className="prose-body">
            <p>
              We retain data only as long as needed for service delivery, legal obligations, and
              dispute resolution. We use layered technical and organizational controls to protect
              data against unauthorized access, loss, or misuse.
            </p>
            <p>
              We may update this policy periodically. Material updates will be reflected with a new
              effective date.
            </p>
            <p>
              Privacy contact:{" "}
              <a href="mailto:privacy@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                privacy@getledge.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
