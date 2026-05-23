import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finance-platform",
  name: "Finance Platform",
  signingKey: process.env.INNGEST_SIGNING_KEY,
});