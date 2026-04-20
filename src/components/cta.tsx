import { DemoForm } from "./demo-form";

export function Cta() {
  return (
    <section id="demo">
      <div className="container">
        <div className="cta-block">
          <div>
            <h2>
              <span>See your </span>
              <span className="ital">close</span>
              <br />
              <span>in under </span>
              <span className="ital">24 hours.</span>
            </h2>
            <p className="sub">
              Book a 30-minute demo. We&apos;ll run LedgerAI against a sample month of your actual
              data and show you the confidence map before you commit to anything.
            </p>
          </div>

          <DemoForm />
        </div>
      </div>
    </section>
  );
}
