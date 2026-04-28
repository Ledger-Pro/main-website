type Variant = "yes" | "no" | "mid";

interface Cell {
  variant: Variant;
  label: string;
}

interface Row {
  feature: string;
  us: Cell;
  rules: Cell;
  gl: Cell;
  staff: Cell;
}

const ROWS: Row[] = [
  {
    feature: "Auto-categorization",
    us: { variant: "yes", label: "AI + confidence score" },
    rules: { variant: "mid", label: "Rules break on rename" },
    gl: { variant: "mid", label: "Memorized suggestions" },
    staff: { variant: "no", label: "Manual" },
  },
  {
    feature: "Continuous reconciliation",
    us: { variant: "yes", label: "Daily, automated" },
    rules: { variant: "no", label: "—" },
    gl: { variant: "mid", label: "Manual match" },
    staff: { variant: "no", label: "Monthly sprint" },
  },
  {
    feature: "Audit trail & reasoning",
    us: { variant: "yes", label: "Per-entry explanation" },
    rules: { variant: "mid", label: "Rule matched" },
    gl: { variant: "no", label: "—" },
    staff: { variant: "mid", label: "Analyst memory" },
  },
  {
    feature: "Scales with clients added",
    us: { variant: "yes", label: "Near-zero marginal hours" },
    rules: { variant: "mid", label: "Linear setup" },
    gl: { variant: "no", label: "Linear labor" },
    staff: { variant: "no", label: "Linear headcount" },
  },
  {
    feature: "Typical month-end close",
    us: { variant: "yes", label: "< 24 hours" },
    rules: { variant: "mid", label: "5–8 days" },
    gl: { variant: "no", label: "7–14 days" },
    staff: { variant: "no", label: "7–14 days" },
  },
];

function Mark({ cell }: { cell: Cell }) {
  return (
    <span className={cell.variant}>
      <span className="dot" />
      {cell.label}
    </span>
  );
}

export function Compare() {
  return (
    <section className="compare-sec" id="compare">
      <div className="eclipse ec-amber" />
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Compare</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "18ch" }}>
              Not another <span className="ital">GL.</span> Not another rules engine.
            </h2>
          </div>
          <p className="lead">
            Ledge sits on top of the ledger you already use, and outperforms manual-first and
            rule-first workflows on the dimensions that matter for firm throughput.
          </p>
        </div>

        <div className="compare">
          <table>
            <thead>
              <tr>
                <th>Capability</th>
                <th className="us">Ledge</th>
                <th>Rule-based tools</th>
                <th>GL only (QBO / Xero)</th>
                <th>In-house staff</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature}>
                  <td className="feat-name">{r.feature}</td>
                  <td className="us">
                    <Mark cell={r.us} />
                  </td>
                  <td>
                    <Mark cell={r.rules} />
                  </td>
                  <td>
                    <Mark cell={r.gl} />
                  </td>
                  <td>
                    <Mark cell={r.staff} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lead" style={{ marginTop: 18 }}>
          Need side-by-side evaluation?{" "}
          <a href="/compare" style={{ textDecoration: "underline" }}>
            See detailed comparison briefs
          </a>
          .
        </p>
      </div>
    </section>
  );
}
