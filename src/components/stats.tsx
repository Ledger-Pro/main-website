export function Stats() {
  return (
    <section className="stats-sec">
      <div className="container">
        <div className="stats">
          <div className="stats-inner">
            <div>
              <div className="eyebrow">Target market</div>
              <h2 className="h2" style={{ marginTop: 16, color: "#fff" }}>
                Where the <span className="ital">money</span> is.
              </h2>
              <p
                className="lead"
                style={{
                  color: "color-mix(in oklab, #fff 72%, transparent)",
                  marginTop: 20,
                }}
              >
                Bookkeeping is a $60B+ service industry still priced by the hour. LedgerAI converts
                that hour into software margin — for both the firm and the client.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <div className="n">
                  $60<span className="u">B+</span>
                </div>
                <div className="k">US bookkeeping &amp; accounting services market</div>
              </div>
              <div className="stat">
                <div className="n">
                  33<span className="u">M</span>
                </div>
                <div className="k">US small businesses needing monthly books</div>
              </div>
              <div className="stat">
                <div className="n">
                  82<span className="u">%</span>
                </div>
                <div className="k">of firms name staffing as their #1 constraint</div>
              </div>
              <div className="stat">
                <div className="n">
                  11<span className="u">d</span>
                </div>
                <div className="k">median time-to-close today — we target under 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
