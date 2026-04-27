import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Customer stories",
  description:
    "How accounting and bookkeeping firms use Ledge to close the books faster, take on more clients, and reclaim partner time.",
};

interface Story {
  firm: string;
  size: string;
  vertical: string;
  quote: string;
  author: string;
  metrics: { label: string; value: string }[];
}

const STORIES: Story[] = [
  {
    firm: "Meridian Books",
    size: "34 clients · 6 staff",
    vertical: "E-commerce & SaaS",
    quote:
      "We stopped selling bookkeeping by the hour six months in. Ledge turned our bottom quartile of clients into the most profitable ones — we closed three straight months in under 48 hours each.",
    author: "Managing Partner",
    metrics: [
      { label: "Avg close time", value: "11d → 22h" },
      { label: "Client capacity", value: "+58%" },
      { label: "Auto-categorized", value: "94%" },
    ],
  },
  {
    firm: "Foundry 42 Advisors",
    size: "120 clients · 18 staff",
    vertical: "Services & retail",
    quote:
      "Categorization was eating our associates alive. Rolling Ledge across the full book took 11 days. Our associates now spend their mornings on advisory calls — which we weren't even billing for before.",
    author: "Director of Operations",
    metrics: [
      { label: "Hours reclaimed / wk", value: "~220" },
      { label: "Review queue", value: "< 4%" },
      { label: "Advisory revenue", value: "+40%" },
    ],
  },
  {
    firm: "Keystone & Keep",
    size: "8 clients · solo",
    vertical: "Construction & trades",
    quote:
      "Solo practice, high volume per client. Ledge is effectively my second bookkeeper. I onboarded eight new clients in a quarter without hiring — that used to cap at two.",
    author: "Founder",
    metrics: [
      { label: "Clients added", value: "2 → 10" },
      { label: "Monthly closes", value: "Day 1–3" },
      { label: "Confidence gate", value: "96%" },
    ],
  },
];

export default function CustomerStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer stories"
        title="Firms that"
        italic="scaled without hiring."
        lead="Three very different firms, three very different books of business — same result: more clients, same headcount, faster close. Stories below are adapted from our pilot cohort with identifying details generalized."
      />

      <section className="prose-section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {STORIES.map((s) => (
            <article
              key={s.firm}
              style={{
                background: "var(--brand-cream)",
                border: "1px solid var(--brand-stone)",
                borderRadius: 18,
                padding: "clamp(28px, 4vw, 48px)",
                boxShadow: "0 20px 40px -24px rgba(15, 45, 36, 0.16)",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "clamp(28px, 5vw, 56px)",
                alignItems: "center",
              }}
            >
              <div>
                <div className="eyebrow">{s.vertical}</div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(22px, 2.4vw, 30px)",
                    lineHeight: 1.35,
                    letterSpacing: "-0.015em",
                    marginTop: 16,
                    color: "var(--brand-ink)",
                  }}
                >
                  &ldquo;{s.quote}&rdquo;
                </div>
                <div
                  style={{
                    marginTop: 24,
                    fontSize: 14,
                    color: "var(--brand-slate)",
                    fontFamily: "var(--mono)",
                    letterSpacing: "0.04em",
                  }}
                >
                  — {s.author}, {s.firm} · {s.size}
                </div>
              </div>

              <div
                style={{
                  background: "var(--brand-bone)",
                  border: "1px solid var(--brand-stone)",
                  borderRadius: 14,
                  padding: 24,
                  display: "grid",
                  gap: 18,
                }}
              >
                {s.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      borderBottom: "1px solid var(--brand-stone)",
                      paddingBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--brand-slate)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.label}
                    </span>
                    <span
                      style={{
                        fontSize: 22,
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        color: "var(--brand-forest)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
