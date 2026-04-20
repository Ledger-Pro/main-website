"use server";

import { leadSchema, type LeadFormState } from "@/lib/lead";

/**
 * Server Action invoked when a prospect submits the "Book a demo" form.
 *
 * Current behavior: validates + logs. Wire up a real destination (CRM webhook,
 * email provider, or app-backend `/leads` endpoint) by replacing the `console.log`
 * with the integration of choice.
 */
export async function bookDemo(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const parsed = leadSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return {
      ok: false,
      error: firstIssue?.message ?? "Please double-check your entries.",
    };
  }

  // TODO: forward to CRM / email / app-backend. Example:
  //   await fetch(process.env.LEADS_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(parsed.data) });
  console.log("[ledgerai:lead]", parsed.data);

  return { ok: true };
}
