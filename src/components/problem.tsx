import { Reveal } from "./reveal";

const PROBLEMS = [
  {
    idx: "01 / Categorization",
    t: "Every\u00a0transaction gets a manual second-look.",
    d: "Rules break the moment a vendor renames itself. Staff rebuild the same mental map for every client, every month.",
    stat: "~38% of a bookkeeper's week",
  },
  {
    idx: "02 / Reconciliation",
    t: "Bank\u00a0feeds go stale, statements don't tie.",
    d: "A two-day close turns into a two-week hunt for a 4-cent variance. The client doesn't care — they want a number.",
    stat: "~11 days median close",
  },
  {
    idx: "03 / Month-end",
    t: "Reports\u00a0are copy-pasted out of four tools.",
    d: "Formatting the P&L eats the window where you could have done advisory work — the actual billable piece.",
    stat: "3–6 hrs per client, per month",
  },
];

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="eclipse ec-violet" />
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Why now</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "14ch" }}>
              Bookkeeping is <span className="ital">drowning</span> in transactions.
            </h2>
          </div>
          <p className="lead">
            Firms are taking on more clients than ever, but the work per client hasn&apos;t shrunk.
            The bottleneck is the same three things, every month.
          </p>
        </div>

        <Reveal className="problem-grid" stagger>
          {PROBLEMS.map((p) => (
            <div className="problem-cell" key={p.idx}>
              <span className="idx">{p.idx}</span>
              <div className="t">{p.t}</div>
              <div className="d">{p.d}</div>
              <div className="stat">{p.stat}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
