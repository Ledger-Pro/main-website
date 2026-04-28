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
          <h2>Data We Collect</h2>
          <div className="prose-body">
            <p>We may collect:</p>
            <ul>
              <li>Contact information (name, email, company, phone).</li>
              <li>Account and usage information needed to provide the service.</li>
              <li>Support communications and security-related event logs.</li>
              <li>Website analytics and device/browser metadata.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>How We Use Data</h2>
          <div className="prose-body">
            <ul>
              <li>To operate, secure, and improve the Ledge platform.</li>
              <li>To provide onboarding, support, and service communications.</li>
              <li>To detect fraud, abuse, or unauthorized activity.</li>
              <li>To comply with legal and contractual obligations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>GDPR (EEA/UK)</h2>
          <div className="prose-body">
            <p>
              If GDPR applies, we process personal data under one or more legal bases, including
              contract necessity, legitimate interests, legal obligation, and consent where required.
            </p>
            <p>You may have rights to access, correct, delete, restrict, or port your data.</p>
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
          <h2>CCPA/CPRA (California)</h2>
          <div className="prose-body">
            <p>
              California residents may have rights to know, delete, correct, and opt out of certain
              data sharing. We do not sell personal information in the traditional sense.
            </p>
            <p>
              You can request details of personal information categories and disclosures by contacting{" "}
              <a href="mailto:privacy@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                privacy@getledge.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)" }}
      >
        <div className="container prose-grid">
          <h2>Data Retention & Security</h2>
          <div className="prose-body">
            <p>
              We retain data only as long as needed for service delivery, legal obligations, and
              dispute resolution. We use layered technical and organizational controls to protect
              data against unauthorized access, loss, or misuse.
            </p>
            <p>
              Mailing address: 3200 Wilcrest Drive, Suite 575, Houston, TX 77042, United States.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
