import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Draw Pots, Averages and Enter-Up: Team Roping Formats Explained",
  description:
    "Team roping producers run more format variety than any other event. One-go, progressive, averages, short rounds, draw pots, pick pots, enter-up, up-and-back, incentives and century classes — what each one means.",
  alternates: {
    canonical:
      "https://www.teamrope.pro/blog/team-roping-events-and-formats",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-copper">
        Draw Pots, Averages and Enter-Up: Team Roping Formats Explained
      </h1>

      <p>
        Team roping producers run more format variety than any other event in
        rodeo. If you are new to jackpots, the entry sheet can read like a
        foreign language. Here is what each one actually means for how you rope
        and what you can win.
      </p>

      <h2>How many steers</h2>

      <h3>One-go</h3>
      <p>
        A single steer, fastest time wins. Simple, and brutal — one mistake and
        your day is over.
      </p>

      <h3>Progressive after one</h3>
      <p>
        You advance only on a clean first run. It keeps the roping moving and
        rewards catching over speed on the first steer.
      </p>

      <h3>Two-steer average</h3>
      <p>
        Both steers count and the average places. Consistency starts to matter
        more than a single fast run.
      </p>

      <h3>Three or four-steer average plus a short round</h3>
      <p>
        The standard for larger ropings. You rope three or four, the average
        determines who comes back, and a short round decides the money. This is
        where catch percentage compatibility between partners is worth more than
        raw speed — you cannot place in an average you do not finish.
      </p>

      <h2>How the short round works</h2>

      <p>
        <strong>Short round by place</strong> — the top N teams on the average
        come back. <strong>Short round by round</strong> — each round pays
        separately. Which one a roping uses changes your strategy on the last
        steer completely, so check before you back in.
      </p>

      <h2>How you get a partner</h2>

      <h3>Pick pot</h3>
      <p>You bring your own partner. Most jackpots run these.</p>

      <h3>Draw pot</h3>
      <p>
        You enter individually and draw a partner. Great for anyone new to an
        area or short a partner that weekend — and it is the format where a
        documented random seed and a published draw sheet matter most, because
        the assignment has to be auditable rather than taken on faith.
      </p>

      <h3>Enter up</h3>
      <p>
        You enter N times, each entry a separate team. This is where the{" "}
        <strong>switch ends or switch partners</strong> rule catches people —
        you may not rope the same end for the same partner twice in one
        division, and it is easy to lose track across four entries.
      </p>

      <h3>Up and back</h3>
      <p>
        Same partner, switch ends. You head for them once and heel for them
        once. It counts as two separate teams, and it is legal precisely because
        the ends switched.
      </p>

      <h2>Extra pots inside the roping</h2>

      <h3>Incentive</h3>
      <p>
        A lower-numbered division running inside a higher-numbered roping. Same
        runs, but a team whose numbers also fit the incentive is eligible for
        both. It is how a #9 team entered in the #11 still has something to
        shoot at.
      </p>

      <h3>Handicap sidepot</h3>
      <p>Same runs, separate pot, separate fee. Optional, and usually cheap.</p>

      <h3>Century and age-protected</h3>
      <p>
        The combined age of the two ropers has to exceed a threshold — a
        &ldquo;century&rdquo; roping requires the pair to add to 100 years or
        more. These classes exist because older ropers were being priced out of
        competitive divisions, and they are some of the best-attended pots at
        big ropings.
      </p>

      <h2>Why this all belongs in configuration</h2>

      <p>
        Every format above is the same underlying roping with different
        settings: how many head, how the short round qualifies, how many times
        you can enter, whether up-and-back is allowed, what the incentives and
        sidepots are, and what the barrier penalty is for the sanctioning body.
      </p>

      <p>
        A producer should be able to build a #10 through #15 ladder with caps,
        floors, incentives and sidepots in one screen — and a roper should be
        able to see, before paying, exactly which of those they are eligible
        for. That is what our{" "}
        <Link href="/events">events and producer console</Link> is built to do.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
