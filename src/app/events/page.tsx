import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Team Roping Events & Formats - Jackpots, Averages & Producer Tools | TeamRope.pro",
  description:
    "Every team roping format in one place: one-go, progressive, averages, short rounds, draw pots, pick pots, enter-up, up-and-back, incentives, century classes and sidepots. Plus the producer console for running divisions, draws, steers, scoring and payouts.",
  alternates: { canonical: "https://www.teamrope.pro/events" },
};

const formats = [
  { name: "One-go", structure: "Single steer, fastest time" },
  { name: "Progressive after one", structure: "Advance on a clean first run" },
  { name: "Two-steer average", structure: "Both steers count, average places" },
  {
    name: "Three or four-steer average plus short round",
    structure: "Standard for larger ropings",
  },
  { name: "Short round by place", structure: "Top N on the average come back" },
  { name: "Short round by round", structure: "Each round pays separately" },
  { name: "Draw pot", structure: "Ropers enter individually and draw partners" },
  { name: "Pick pot", structure: "Ropers bring their own partners" },
  { name: "Enter up", structure: "Enter N times, each entry a separate team" },
  { name: "Up and back", structure: "Same partner, switch ends" },
  {
    name: "Incentive",
    structure: "Lower-numbered division inside a higher-numbered roping",
  },
  {
    name: "Century / age-protected",
    structure: "Combined age of the team above a threshold",
  },
  { name: "Handicap sidepot", structure: "Same runs, separate pot" },
];

export default function EventsPage() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#150e09]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; TeamRope.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-muted transition hover:text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-4xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Events &amp; Formats
          </h1>
          <p className="mt-3 text-muted">
            Team roping producers run more format variety than any other event
            in rodeo. Every one of these is a class configuration, not a
            special case.
          </p>

          <h2>Formats</h2>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand">Format</th>
                  <th className="py-2 font-bold text-brand">Structure</th>
                </tr>
              </thead>
              <tbody className="text-[#e0d2bd]">
                {formats.map((f) => (
                  <tr key={f.name} className="border-b border-ink-border/50">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">
                      {f.name}
                    </td>
                    <td className="py-2">{f.structure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Entering</h2>
          <p>
            Browse ropings by division, association, date, and distance from
            home. Follow the ones you are considering and get a reminder before
            entries close.
          </p>
          <p>
            When you pick a division, eligibility is checked live —{" "}
            <strong>before the entry fee is taken</strong>. Team total against
            the division number, individual caps, the floor, the Elite rule,
            your entry limit, the switch-ends rule, and tie-on eligibility
            against your birth date and classification. Every rejection tells
            you which rule caused it and which rulebook edition it came from.
          </p>
          <p>
            Your classification is frozen onto the entry at entry time, so a
            mid-season move by Global Handicaps never retroactively invalidates
            a roping you already paid for.
          </p>

          <h2>Draws and steers</h2>
          <p>
            Draw position and steer number are pushed to your phone as soon as
            the draw is made. Draw pots use a documented random seed and publish
            the draw sheet, so partner assignment is auditable rather than
            taken on faith.
          </p>
          <p>
            Steer draw is the single largest source of variance in a roping. The
            USTRC rulebook explicitly enumerates the steer types that get pulled
            — head duckers, draggers, stoppers, eliminators, unusually slow
            cattle, and cattle that turn back into corners. Producers can tag
            those and sort in real time; ropers can see steer history. Nobody
            else gives a roper that.
          </p>

          <h2>Results and payouts</h2>
          <p>
            Live results as times are entered, with round standings, the
            average, and the short round tracked separately. Payouts are
            calculated by number of teams, with ground money, added money, the
            office charge percentage, and incentive and sidepot cascades all
            handled.
          </p>
          <p>
            A retroactive flag-out after a time has been taken recomputes the
            places downstream and produces a correction record rather than
            silently editing the result.
          </p>

          <h2>For producers</h2>
          <p>
            The producer console is built to be used at the arena, on a tablet,
            with no reliable wifi:
          </p>
          <ul>
            <li>
              Division builder with live validation — build a #10, #11, #12, #13
              ladder with caps, floors, incentives and sidepots in one screen
            </li>
            <li>
              Draw pot management with a documented random seed and a published
              draw sheet
            </li>
            <li>
              Rotation support for multiple flaggers, with the flag-passing
              prohibition enforced
            </li>
            <li>
              Steer draw and sorting, including mid-roping pulls with the reason
              logged
            </li>
            <li>
              Rerun queue, tracking lap-and-tap reruns that carry a barrier
              penalty forward
            </li>
            <li>
              Scoring screen with head catch, heel catch, barrier and time on
              one thumb-reachable panel — offline first
            </li>
            <li>
              Official overrides recorded as their own row with reason and
              notification state, never as an edit to the run
            </li>
            <li>
              Payout calculator, day sheet, back numbers, and earnings export for
              association reporting
            </li>
          </ul>

          <h2>Sanctioning</h2>
          <p>
            Sanctioning status is shown before you enter, so you never take an
            accidental infraction. Money won at a sanctioned roping feeds
            shoot-out and finals qualification; money won at a non-sanctioned
            jackpot is tagged differently and reported separately.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              Producing ropings and want early access to the console?{" "}
              <Link href="/#waitlist">Join the waitlist</Link> and mention that
              you produce — producer accounts are being onboarded first.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
