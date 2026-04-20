import { z } from "zod";

export const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid work email"),
  firm: z.string().min(1, "Firm name is required"),
  clients: z.enum(["1-10", "11-50", "51-200", "200+"], {
    message: "Please select a client range",
  }),
});

export type Lead = z.infer<typeof leadSchema>;

export interface LeadFormState {
  ok: boolean;
  error?: string;
}

export const initialLeadFormState: LeadFormState = { ok: false };
