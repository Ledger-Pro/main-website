"use client";

import { useActionState } from "react";
import { bookDemo } from "@/app/actions";
import { initialLeadFormState } from "@/lib/lead";
import { ArrowRight } from "./icons/arrow";

export function DemoForm() {
  const [state, formAction, pending] = useActionState(bookDemo, initialLeadFormState);

  const buttonText = state.ok
    ? "Thanks — we'll be in touch."
    : pending
      ? "Sending…"
      : "Book demo";

  return (
    <form className="form" action={formAction} noValidate>
      <div className="row">
        <input type="text" name="firstName" placeholder="First name" required />
        <input type="text" name="lastName" placeholder="Last name" required />
      </div>
      <input type="email" name="email" placeholder="Work email" required />
      <input type="text" name="firm" placeholder="Firm name" required />
      <select name="clients" defaultValue="" required>
        <option value="" disabled>
          Clients under management
        </option>
        <option value="1-10">1–10</option>
        <option value="11-50">11–50</option>
        <option value="51-200">51–200</option>
        <option value="200+">200+</option>
      </select>

      <button type="submit" className="btn btn-light" disabled={pending || state.ok}>
        {buttonText}
        {!state.ok && !pending && <ArrowRight />}
      </button>

      {state.error && (
        <div
          className="fine"
          role="alert"
          style={{ color: "color-mix(in oklab, var(--brand-cream) 85%, transparent)" }}
        >
          {state.error}
        </div>
      )}
      {!state.error && (
        <div className="fine">
          30-min call · No commitment · We&apos;ll run a sample close on your data
        </div>
      )}
    </form>
  );
}
