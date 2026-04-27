import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "API docs",
  description:
    "The Ledge REST API lets firms push transactions, fetch categorization decisions, and sync back to their own tools.",
};

interface Endpoint {
  method: "GET" | "POST" | "PATCH";
  path: string;
  title: string;
  body: string;
}

const ENDPOINTS: Endpoint[] = [
  {
    method: "POST",
    path: "/v1/transactions",
    title: "Ingest transactions",
    body: "Batch up to 1,000 transactions per call. Each returns a confidence score and proposed category in the response.",
  },
  {
    method: "GET",
    path: "/v1/transactions/:id",
    title: "Fetch a transaction",
    body: "Full decision record: score, contributing factors, history, model version, and reviewer (if human-touched).",
  },
  {
    method: "POST",
    path: "/v1/transactions/:id/review",
    title: "Submit a human review",
    body: "Accept the proposal, choose an alternative, or provide a custom category. Feedback retrains the client-scoped model within 24 hours.",
  },
  {
    method: "GET",
    path: "/v1/clients/:id/ledger",
    title: "Stream ledger changes",
    body: "Server-sent events as transactions are booked. Useful for custom reviewer consoles or pushing into your own firm portal.",
  },
  {
    method: "PATCH",
    path: "/v1/clients/:id/settings",
    title: "Update client settings",
    body: "Change confidence gate, reviewer assignment, or chart-of-accounts mapping without touching the UI.",
  },
];

export default function ApiDocsPage() {
  return (
    <>
      <PageHero
        eyebrow="API · v1"
        title="A small, typed API"
        italic="under the same pipeline."
        lead="The Ledge API is the same surface our reviewer console and integrations run on. OpenAPI spec, typed SDKs for TypeScript and Python, and a shared sandbox account for every firm on paid plans."
      />

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Base URL &amp; auth</h2>
          <div className="prose-body">
            <p>
              <code
                style={{
                  fontFamily: "var(--mono)",
                  background: "var(--brand-bone)",
                  padding: "3px 8px",
                  borderRadius: 6,
                  fontSize: 13,
                }}
              >
                https://api.getledge.ai/v1
              </code>
            </p>
            <p>
              Auth is per-firm bearer tokens scoped to a role. Rotate at will from the firm console;
              deleted tokens stop working within 30 seconds.
            </p>
            <p>
              Rate limit: <strong>600 requests per minute</strong> per firm, burst to 1,200. Higher
              limits are available on Enterprise plans.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Core endpoints</div>
          <div className="role-list">
            {ENDPOINTS.map((e) => (
              <div
                key={e.path}
                className="tile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  color:
                    e.method === "POST"
                      ? "var(--brand-success)"
                      : e.method === "PATCH"
                        ? "var(--brand-warning)"
                        : "var(--brand-forest)",
                  background:
                    e.method === "POST"
                      ? "var(--brand-forest-100)"
                      : e.method === "PATCH"
                        ? "var(--brand-gold-100)"
                        : "var(--brand-forest-100)",
                    display: "inline-block",
                    padding: "5px 10px",
                    borderRadius: 6,
                    textAlign: "center",
                  }}
                >
                  {e.method}
                </div>
                <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 14,
                    color: "var(--brand-ink)",
                    fontWeight: 500,
                  }}
                >
                    {e.path}
                  </div>
                  <div className="tile-title" style={{ marginTop: 6 }}>
                    {e.title}
                  </div>
                  <div className="tile-body" style={{ marginTop: 4 }}>{e.body}</div>
                </div>
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
          <h2>SDKs &amp; spec</h2>
          <div className="prose-body">
            <p>
              Typed SDKs are generated from the same OpenAPI spec we ship in-product —{" "}
              <code style={{ fontFamily: "var(--mono)" }}>@getledge/node</code> and{" "}
              <code style={{ fontFamily: "var(--mono)" }}>getledge</code> on PyPI. Both are
              maintained in lockstep with the API.
            </p>
            <p>
              Full reference and a runnable sandbox are rolling out to pilot firms. Want early
              access? Email{" "}
              <a href="mailto:developers@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                developers@getledge.ai
              </a>{" "}
              with your firm name and we&apos;ll provision a sandbox key within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
