const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "Do my clients have to switch off QuickBooks or Xero?",
    a: "No. LedgerAI is additive — it reads from and writes back to the GL your clients already use. Nothing migrates, nothing breaks.",
  },
  {
    q: "What happens when the model gets something wrong?",
    a: "Every entry is reversible with one click and leaves an audit trail. Corrections feed the model back immediately — we retrain on your firm's data nightly, not quarterly.",
  },
  {
    q: "Is our client data used to train models for other firms?",
    a: "No. Per-firm data stays in per-firm scope. Only aggregate, anonymized patterns are shared as optional peer signals, and you can opt out.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most firms are running on 10 pilot clients within a week, and rolled out to the full book within a month. The migration team handles data import from Dext, Keeper, or your existing rule library.",
  },
  {
    q: "What about security and compliance?",
    a: "SOC 2 Type II, bank-grade encryption at rest and in transit, read-only bank connections by default, and granular role-based access. Full security whitepaper available on request.",
  },
  {
    q: "Will this replace my bookkeepers?",
    a: "No — it replaces the part of their job they like least. Teams typically redeploy the reclaimed hours into advisory work, which is where the real client value (and firm margin) lives.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}
    >
      <div className="container">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "14ch" }}>
              Questions we <span className="ital">hear</span> every week.
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Didn&apos;t find what you need? The team replies within a business day.
            </p>
          </div>

          <div className="faq-list">
            {QUESTIONS.map(({ q, a }) => (
              <details className="q" key={q}>
                <summary>
                  {q} <span className="plus" />
                </summary>
                <div className="a">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
