import type { Metadata } from "next";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | TeamRope.pro",
  description:
    "Get help with TeamRope.pro — account questions, entries and eligibility, classification disputes, partner and safety reports, producer access, and data requests.",
  alternates: { canonical: "https://www.teamrope.pro/support" },
};

const topics = [
  {
    h: "Account and billing",
    p: "Subscription changes, cancellations, and receipts. Purchases made through the App Store or Google Play must be refunded through those stores.",
    email: "support@teamrope.pro",
    subject: "Account%20and%20billing",
  },
  {
    h: "Entries, draws, and results",
    p: "Entry problems are usually fastest to solve with the event producer, since they control the class, the draw, the steers, and the payout. We can help you reach them.",
    email: "support@teamrope.pro",
    subject: "Entry%20or%20results%20question",
  },
  {
    h: "Classification and eligibility",
    p: "If your header or heeler number looks wrong in the app, tell us and we will check what we hold and where it came from. Classifications themselves are issued and adjusted by Global Handicaps — appeals go to them and require current USTRC or WSTR membership. We can show you the history we have and which entries it was frozen onto.",
    email: "support@teamrope.pro",
    subject: "Classification%20question",
  },
  {
    h: "Partner requests and conduct",
    p: "Partner matching is a messaging surface, so blocking, reporting, and rate limiting all apply to it. If someone is misrepresenting their number, not paying their share, or making the app worse to be in, report it — partner ratings and conduct reports are reviewed.",
    email: "support@teamrope.pro",
    subject: "Partner%20conduct%20report",
  },
  {
    h: "Safety, harassment, or unwanted contact",
    p: "Report it in the app for the fastest response — reports there reach our moderation team directly with the relevant context attached. You can also email us, and if a minor is involved, say so in the subject line so it is prioritized.",
    email: "support@teamrope.pro",
    subject: "Safety%20report",
  },
  {
    h: "Producer access",
    p: "Running a jackpot, series, or rodeo and want the producer console — division builder, draw pot management, steer sorting, scoring screen, and payouts.",
    email: "support@teamrope.pro",
    subject: "Producer%20early%20access",
  },
  {
    h: "Guardian requests",
    p: "Guardians can adjust a minor's visibility, messaging, media sharing, and location settings, and can export or delete the account's data. Minors cannot receive partner requests from adults outside a linked school or barn group.",
    email: "support@teamrope.pro",
    subject: "Guardian%20request",
  },
  {
    h: "Data export or account deletion",
    p: "You can export your data or delete your account in the app. If you would rather we handle it, email us from the address on the account.",
    email: "support@teamrope.pro",
    subject: "Data%20request",
  },
  {
    h: "Rules corrections",
    p: "If something in our rules reference is out of date or wrong, tell us. Include the association and the amendment date if you have it — we version rules by date and team roping rules genuinely differ between bodies, so corrections are welcome.",
    email: "support@teamrope.pro",
    subject: "Rules%20correction",
  },
];

export default function Support() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#150e09]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TeamRope.pro" className="h-12 w-auto" />
            <span className="hidden text-base font-bold tracking-wide text-copper sm:block">
              TEAMROPE<span className="text-patina">.PRO</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-semibold tracking-wider text-muted uppercase">
            <Link href="/" className="transition hover:text-copper">
              Home
            </Link>
            <Link href="/rules" className="transition hover:text-copper">
              Rules
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-cream">
          Support
        </h1>
        <p className="mt-4 text-lg text-muted">
          Email us at{" "}
          <a
            href="mailto:support@teamrope.pro"
            className="text-copper hover:underline"
          >
            support@teamrope.pro
          </a>{" "}
          and we will get back to you. Pick the closest topic below so it
          reaches the right person faster.
        </p>

        <div className="mt-10 space-y-4">
          {topics.map((t) => (
            <div
              key={t.h}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h2 className="text-lg font-semibold text-copper">{t.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#e0d2bd]">
                {t.p}
              </p>
              <a
                href={`mailto:${t.email}?subject=${t.subject}`}
                className="mt-3 inline-block text-sm font-semibold text-patina hover:underline"
              >
                Email about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
