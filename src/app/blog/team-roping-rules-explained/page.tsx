import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Roping Rules Explained: Catches, Barrier and Crossfire",
  description:
    "The three legal head catches, what a one-foot heel catch costs, and why the barrier penalty and the crossfire call differ depending on which association is sanctioning the roping.",
  alternates: {
    canonical: "https://www.teamrope.pro/blog/team-roping-rules-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Team Roping Rules Explained: Catches, Barrier and Crossfire
      </h1>

      <p>
        Most team roping rule arguments come down to three things: whether the
        catch was legal, whether the barrier was broken, and whether the heeler
        threw too early. Here is each one, plainly — and where the answer
        depends on who is sanctioning.
      </p>

      <h2>Head catches: exactly three are legal</h2>

      <ul>
        <li>Around both horns</li>
        <li>
          Half a head — the loop around one horn and the head, with one eye of
          the steer looking through the loop
        </li>
        <li>Around the neck</li>
      </ul>

      <p>Everything else is illegal, specifically:</p>

      <ul>
        <li>Hondo over one horn with the loop over the other</li>
        <li>
          A loop that crosses itself — note this applies to head catches only,
          not to heel catches
        </li>
        <li>Any bridle catch, meaning the rope hangs in the steer&apos;s mouth</li>
      </ul>

      <p>
        And the one that ends a run instantly: if the header ropes any leg of
        the steer, or the horse, it is an automatic no time. The header may not
        fish the leg out.
      </p>

      <h2>Heel catches and the five-second penalty</h2>

      <p>
        Any catch behind both shoulders is legal as long as the rope goes up the
        heels.
      </p>

      <ul>
        <li>
          <strong>Both hind feet</strong> — clean, no penalty
        </li>
        <li>
          <strong>One hind foot</strong> — 5-second penalty
        </li>
        <li>
          <strong>A front foot in the heel loop</strong> — foul catch
        </li>
      </ul>

      <p>
        There is a useful subtlety on that last one. If the front foot comes
        free <em>before</em> the team calls for time, the time counts. But the
        flagger will not allow extra time for a front leg to come free — you do
        not get to sit there and wait for it.
      </p>

      <h2>The barrier, and the number that gets misconfigured constantly</h2>

      <p>
        Breaking or beating the barrier adds a penalty to the raw time. The size
        of that penalty is <strong>not the same everywhere</strong>:
      </p>

      <ul>
        <li>
          <strong>5 seconds</strong> under USTRC rules — and the penalty for
          beating the heel barrier is always the same as for beating the head
          barrier. This is the one that applies at most numbered jackpots.
        </li>
        <li>
          <strong>10 seconds</strong> under PRCA rules, at rodeos
        </li>
      </ul>

      <p>
        This is the single most common misconfiguration in team roping software.
        A spreadsheet built for a jackpot and reused at a rodeo will quietly
        halve every barrier penalty in the go-round — and one built the other
        way around will double it. It should be an explicit choice at class
        creation, shown on the entry screen, every time.
      </p>

      <p>
        The score line itself is set by the producer according to arena
        conditions and steer speed, with the goal of avoiding 5-second runs and
        having the majority of the herd turn at the middle of the arena.
      </p>

      <h2>Crossfire: the most argued call in the sport</h2>

      <p>
        Crossfire is not permitted anywhere. What differs is{" "}
        <em>the moment the call is made</em>:
      </p>

      <ul>
        <li>
          <strong>PRCA</strong> — a heeler throwing before the header has
          control and has changed the steer&apos;s direction is a no time
        </li>
        <li>
          <strong>USTRC</strong> — the animal must be in tow before the heel
          rope is released; the call is made on the release
        </li>
      </ul>

      <p>
        Because the two bodies judge on different moments, the same run can be
        legal at a jackpot and a no time at a rodeo. This is why our run
        analysis reports crossfire margin against{" "}
        <strong>both standards</strong>, and then tells you the margin under
        whichever one your class is actually running.
      </p>

      <h2>When the run is over</h2>

      <p>
        Time is taken when both ropes are tight and dallied, both horses are
        facing the steer in line with the ropes, the heel horse&apos;s front
        feet are on the ground, and both ropers are mounted. There is a 30-second
        limit.
      </p>

      <p>
        One thing worth knowing: <strong>the flag is not final</strong>. Time is
        taken when the flag drops but is not official until the field judge
        indicates it to the timer, and a flagger may retroactively flag a team
        out after a time has been taken — for an illegal catch, an insecure
        steer, or anything not visible at the moment of the flag.
      </p>

      <p>
        Any results system worth using has to handle that: a run&apos;s status
        must stay reversible by an official until the round is finalized, and
        the correction has to recompute places downstream rather than silently
        editing a row.
      </p>

      <h2>The full reference</h2>

      <p>
        This post covers the calls that decide most runs. Caps, floors, the
        Elite rule, tie-on eligibility, three-strike notices and the rest are on
        the <Link href="/rules">full rules page</Link>, with every
        association-dependent value labeled.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
