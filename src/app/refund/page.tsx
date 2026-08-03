import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | TeamRope.pro",
  description:
    "Refund terms for TeamRope.pro subscriptions, and how team roping entry fees, office charges, and draw-outs are handled.",
  alternates: { canonical: "https://www.teamrope.pro/refund" },
};

const sections = [
  {
    h: "1. Subscriptions",
    p: "Premium subscriptions are billed monthly or annually and renew automatically until cancelled. You may cancel at any time; cancellation takes effect at the end of your current billing period and you keep premium access until then.",
  },
  {
    h: "2. App Store Purchases",
    p: "Subscriptions purchased through the Apple App Store or Google Play are governed by that store's refund policy and must be requested directly from Apple or Google. We cannot issue refunds for store-processed purchases on their behalf.",
  },
  {
    h: "3. Purchases Made Directly",
    p: "For subscriptions purchased directly through us, contact support@teamrope.pro within 14 days of the charge and we will review the request. Refunds are issued to the original payment method.",
  },
  {
    h: "4. Entry Fees and Office Charges",
    p: "Entry fees are collected on behalf of event producers and are subject to that producer's own entry, draw-out, and refund terms — including the office charge, which is typically non-refundable. Requests to draw out or withdraw an entry must go to the producer. We can help you reach them, but we cannot override a producer's refund terms.",
  },
  {
    h: "5. Entries Rejected on Eligibility",
    p: "Where an entry is rejected by eligibility validation before payment is taken, no charge is made. Where a producer later disqualifies a team on eligibility after fees have been collected, the refund is at the producer's discretion under their stated terms and the rules of the sanctioning body.",
  },
  {
    h: "6. Reruns, Flag-Outs, and Corrections",
    p: "Reruns, retroactive flag-outs, and official overrides change results, not fees. Where a correction changes a payout after money has been distributed, resolution is between the producer and the association under their rules. We record the correction and who was notified.",
  },
  {
    h: "7. Cancelled or Postponed Events",
    p: "If a producer cancels or postpones a roping, refunds are handled by that producer under their stated terms. Where an event is cancelled for biosecurity or venue reasons, we will surface the producer's notice and refund instructions in the app as soon as we receive them.",
  },
  {
    h: "8. Marketplace Transactions",
    p: "Marketplace sales — horses, tack, cattle, rigs, and services — are between buyer and seller. We are not a party to those transactions and do not issue refunds for them.",
  },
  {
    h: "9. Contact",
    p: "Refund questions can be sent to support@teamrope.pro.",
  },
];

export default function Refund() {
  return (
    <div className="arena-page arena-bg-2">
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
        <div className="arena-panel p-8 md:p-10">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-brand hover:underline"
          >
            &larr; Back to Home
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-cream">Refund Policy</h1>
          <p className="mb-10 text-sm text-muted">Last updated: August 2026</p>

          <div className="space-y-8 text-[#e0d2bd]">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="mb-2 text-xl font-bold text-brand">{s.h}</h2>
                <p className="leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
