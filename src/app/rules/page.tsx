import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Team Roping Rules Explained - Catches, Barrier, Numbers & Tie-On | TeamRope.pro",
  description:
    "A complete plain-language team roping rules reference: the three legal head catches, heel catch penalties, barrier penalties by association, the handicap number system, division caps and floors, the Elite rule, and tie-on eligibility. Current as of August 2026.",
  alternates: { canonical: "https://www.teamrope.pro/rules" },
};

/**
 * Team roping is the one event in the portfolio where the same question has
 * different correct answers depending on who is sanctioning. Rather than
 * asserting a single value, every rule that varies carries an association tag.
 * PRCA values are from the 2026 PRCA Rule Book; USTRC and WSTR values are the
 * jackpot-side rules from the TeamRope build map.
 */
function Assoc({ children }: { children: React.ReactNode }) {
  return <span className="assoc-tag">{children}</span>;
}

export default function RulesPage() {
  return (
    <div className="arena-page arena-bg-2 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#150e09]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; TeamRope.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Team Roping Rules
          </h1>
          <p className="mt-3 text-muted">
            A plain-language reference to the rules that decide runs and money.
            Current as of 3 August 2026.
          </p>

          <div className="mt-6 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-[#e0d2bd]">
              <strong className="text-brand">Read this first.</strong> Team
              roping is the one event where the same question has different
              correct answers depending on who is sanctioning — the barrier
              penalty, the crossfire call, and tie-on eligibility all differ.
            </p>
            <p className="mt-3 text-sm text-[#e0d2bd]">
              This page leads with{" "}
              <strong className="text-brand">USTRC and WSTR</strong>, because
              that is what most of us are actually roping: numbered jackpots and
              weekend ropings. PRCA values are given alongside, tagged, for when
              you enter a rodeo — but if you are backing into the box at a
              Saturday roping, the jackpot rules are the ones that apply to you.
            </p>
            <p className="mt-3 text-sm text-[#e0d2bd]">
              Always confirm the ground rules of the specific roping you are
              entering. Minor variations in score length and go-round count are
              routinely approved, and the producer&apos;s ground rules override
              association rules for that roping.
            </p>
          </div>

          <h2>The run</h2>
          <p>
            The header starts from the left box and the heeler from the right.
            The steer is released and must reach the score line before the
            ropers may leave the box. The header ropes the steer, turns it, and
            the heeler catches the hind feet. Time is taken when both ropes are
            tight and dallied, both horses are facing the steer in line with the
            ropes, the heel horse&apos;s front feet are on the ground, and both
            ropers are mounted. <Assoc>PRCA</Assoc>
          </p>
          <p>
            The time limit is 30 seconds. <Assoc>PRCA</Assoc> A whistle ends the
            run with no time.
          </p>
          <p>
            Time is taken when the flag drops, but it is not official until the
            field judge indicates it to the timer. A flagger may retroactively
            flag a team out after a time has been taken — for an illegal catch,
            an insecure steer, or anything not visible at the moment of the
            flag. A run&apos;s status stays reversible by an official until the
            round is finalized.
          </p>

          <h3>Flag on the heels</h3>
          <p>
            Some events and divisions permit a heel-flag finish with no facing
            required. The heeler needs a full dally, control, a tight rope from
            steer to horn, the heel horse facing the steer with front feet on
            the ground, and both ropers mounted. The header needs possession of
            the rope and to be fully mounted. This is set per class, not
            assumed.
          </p>

          <h2>Legal and illegal catches</h2>
          <h3>Head catches — exactly three are legal</h3>
          <ul>
            <li>Around both horns</li>
            <li>
              Half a head — the loop around one horn and the head, with one eye
              of the steer looking through the loop
            </li>
            <li>Around the neck</li>
          </ul>
          <p>Illegal head catches:</p>
          <ul>
            <li>Hondo over one horn with the loop over the other</li>
            <li>
              A loop that crosses itself — this applies to head catches only,
              not heel catches
            </li>
            <li>
              Any bridle catch, meaning the rope hangs in the steer&apos;s mouth
            </li>
          </ul>
          <p>
            If the header ropes any leg of the steer, or the horse, it is an
            automatic no time, and the header may not fish the leg out.
          </p>

          <h3>Heel catches</h3>
          <p>
            Any catch behind both shoulders is legal as long as the rope goes up
            the heels.
          </p>
          <ul>
            <li>
              <strong>Both hind feet</strong> — clean catch, no penalty
            </li>
            <li>
              <strong>One hind foot</strong> — 5-second penalty
            </li>
            <li>
              <strong>Front foot or feet in the heel loop</strong> — foul catch.
              If the front foot comes free before the team calls for time, the
              time counts. The flagger will not allow extra time for a front leg
              to come free.
            </li>
          </ul>
          <p>
            Roping without releasing the loop from the hand is a no catch. No
            rider may ride up to remove or reposition a loop by hand. Questioned
            catches go to the field judge, and refusing to hold the steer for
            inspection can produce a no time.
          </p>

          <h2>The barrier</h2>
          <p>
            An automatic barrier is used, and breaking or beating it carries a
            time penalty added to the raw time.
          </p>
          <ul>
            <li>
              <strong>5 seconds</strong> <Assoc>USTRC</Assoc> — the rulebook
              states that the penalty for beating the heel barrier will always
              be the same as the penalty for beating the head barrier. This is
              the one that applies at most numbered jackpots.
            </li>
            <li>
              <strong>10 seconds</strong> <Assoc>PRCA</Assoc> — at rodeos
            </li>
          </ul>
          <p>
            This difference is the single most common misconfiguration in team
            roping software, and it doubles or halves the cost of a broken
            barrier depending on which way it is wrong. Confirm which rule set a
            class is running before you enter, and never assume the number
            carried over from the last roping you entered.
          </p>
          <p>
            Barrier eye height is 32 to 36 inches at the center of the box.
            Header eye distance is 9 feet from the header&apos;s butt bar and
            heeler eye 11 feet from the heeler&apos;s butt bar, unless box
            construction prevents it. Steer eye distance is 9 inches from the
            end of the open chute gates, and a contractor may set up to 18
            inches in higher divisions based on cattle speed. <Assoc>USTRC</Assoc>
          </p>
          <p>
            Score line length is set by the producer according to arena
            conditions and steer speed, with the stated goal of avoiding
            5-second runs and having the majority of the herd turn at the middle
            of the arena.
          </p>
          <p>
            If the barrier or timer malfunctions, the flagger may award a rerun
            or remove the barrier penalty. When a barrier penalty was already
            assessed and the rerun results from a field issue, the penalty
            carries to the rerun as a lap and tap with no additional barrier
            penalty.
          </p>

          <h2>Crossfire</h2>
          <p>
            Crossfire is not permitted, and it is one of the most argued calls
            in the sport. The standard for when the call is made differs by
            association:
          </p>
          <ul>
            <li>
              <Assoc>USTRC</Assoc> The animal must be in tow before the heel
              rope is released. The call is made on the release.
            </li>
            <li>
              <Assoc>PRCA</Assoc> A heeler throwing before the header has
              control and has changed the steer&apos;s direction is a no time.
            </li>
          </ul>
          <p>
            Because the two bodies judge this on different moments — release
            versus contact — a run that is legal at a jackpot can be a no time at
            a rodeo. The class you enter decides which standard applies.
          </p>

          <h2>Ropes, loops and dallies</h2>
          <ul>
            <li>Each contestant may carry only one rope.</li>
            <li>
              At one- and two-go-round rodeos, only two loops total are allowed
              per team — one at each end. More loops are permitted in rodeos
              with three or more go-rounds. <Assoc>PRCA</Assoc>
            </li>
            <li>
              A dropped rope that has to be recoiled counts as a thrown rope for
              loop-count purposes.
            </li>
            <li>
              A dally is required. Hard and fast is permitted for certain age
              and gender categories under specific rules — see tie-on
              eligibility below.
            </li>
          </ul>

          <h2>Tie-on eligibility</h2>
          <p>
            Tie-on rules apply to <strong>heelers only</strong>. A header tying
            on is an automatic disqualification, with no exceptions.
          </p>
          <p>
            Under the jackpot associations, eligibility is set by year of birth
            with one notable exception: <Assoc>USTRC</Assoc>{" "}
            <Assoc>WSTR</Assoc>
          </p>
          <ul>
            <li>A male heeler 60 or older may tie on at any classification</li>
            <li>
              A male heeler 55 or older with a classification of 5.5 or below may
              tie on
            </li>
            <li>
              A female heeler may tie on from her 13th birthday — effective on
              the day of the birthday, not the calendar year. This is the one
              age rule in the book that is day-based rather than year-of-birth
              based. No one 12 or under may tie on, ever.
            </li>
            <li>
              Medical exemptions are granted case by case by Global Handicaps
            </li>
          </ul>
          <p>
            The PRCA permits hard and fast for certain age and gender categories
            under its own rules. <Assoc>PRCA</Assoc> The thresholds are not the
            same as the jackpot rules above, so check the rule set the class is
            running rather than carrying one answer between them.
          </p>
          <p>General tie-on rules:</p>
          <ul>
            <li>
              Dallying over the top of a tied-on rope or tie-on device is an
              automatic disqualification
            </li>
            <li>A loose tied-on rope may not be reattached or dallied</li>
            <li>
              If a tied rope comes loose from the horn during a run, it is a
              disqualification
            </li>
            <li>
              A quick release is encouraged, and a hazardous tied rope may be cut
              at the heeler&apos;s expense
            </li>
          </ul>

          <h2>The number system</h2>
          <p>
            Headers are classified 1 through 9 and heelers 1 through 10. Half
            numbers are standard — the plus system became the industry norm
            after WSTR moved to an 18-point scale, and USTRC and TRIAD followed.
            A number is a decimal value, not an integer.
          </p>
          <p>
            A roper can hold a different classification for heading and for
            heeling. These are two separate numbers, and every eligibility check
            has to ask which end you are entering.
          </p>
          <p>
            <strong>Team division = header number + heeler number.</strong> A 5
            header with a 5 heeler enters the #10.
          </p>

          <h3>The Elite flag</h3>
          <p>
            An Elite flag marks a roper with a documented competitive advantage
            or disadvantage at their number. Two Elite ropers cannot enter the
            same division together and must move up one division. An Elite 5
            header with a plain 5 heeler can enter the #10; an Elite 5 header
            with an Elite 5 heeler must enter the #11. The rule triggers only
            when the pair&apos;s total equals the division number.
          </p>

          <h3>Caps and floors</h3>
          <p>
            Divisions carry a <strong>cap</strong> — the maximum individual
            number allowed — and the higher divisions also carry a{" "}
            <strong>floor</strong>, a minimum number required on at least one
            end. Published USTRC floors: <Assoc>USTRC</Assoc>
          </p>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand">Division</th>
                  <th className="py-2 font-bold text-brand">Requirement</th>
                </tr>
              </thead>
              <tbody className="text-[#e0d2bd]">
                <tr className="border-b border-ink-border/50">
                  <td className="py-2 pr-4 font-semibold">#15</td>
                  <td className="py-2">At least a #6 header or a #7 heeler</td>
                </tr>
                <tr className="border-b border-ink-border/50">
                  <td className="py-2 pr-4 font-semibold">#13</td>
                  <td className="py-2">At least a #5 header or a #6 heeler</td>
                </tr>
                <tr className="border-b border-ink-border/50">
                  <td className="py-2 pr-4 font-semibold">#12</td>
                  <td className="py-2">At least a #4 header or a #6 heeler</td>
                </tr>
                <tr className="border-b border-ink-border/50">
                  <td className="py-2 pr-4 font-semibold">#11</td>
                  <td className="py-2">At least a #4 header or a #5 heeler</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">#10</td>
                  <td className="py-2">Capped at Elite 6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            These change. Any app or spreadsheet that hardcodes them will be
            wrong within a season — they belong in versioned configuration bound
            to a dated rule set.
          </p>

          <h3>How numbers move</h3>
          <p>
            Classification is issued and adjusted by Global Handicaps, which
            serves USTRC, WSTR, and many other associations and arenas. Numbers
            can move mid-year based on performance data. Appeals require current
            USTRC or WSTR membership.
          </p>
          <p>
            The Global Handicaps 2.0 direction, from 2025 onward, evaluates
            results against a national par time per division. Wins at or slower
            than par do not push a number up. Too fast is too fast regardless of
            the size or age bracket of the roping — which makes par delta, not
            raw money won, the number to watch.
          </p>
          <p>
            Misrepresenting a number is a major offense. Winning money at a
            number lower than the official handicap triggers an upward
            adjustment for not less than one year, and it applies to whoever
            falsified on another&apos;s behalf as well.
          </p>

          <h2>Other run rules</h2>
          <ul>
            <li>
              A team that calls for a steer before the arena is clear, and is
              then interfered with, does not get a rerun.
            </li>
            <li>
              <strong>Three strike notice</strong> — if a roper cannot get a
              horse in the box or under control and it is holding up the roping,
              the flagger issues a three strike notice. Failing to call for the
              steer on the third attempt allows a no time.
            </li>
            <li>
              A roper may not rope the same end for the same partner twice in one
              division. Switch ends or switch partners.
            </li>
            <li>
              A team with a no time on any head is out of the average but may
              still have placed in a round.
            </li>
          </ul>

          <h2>What this means for entries</h2>
          <p>
            Nearly every rule above is something an entry screen can check
            before it takes your money: the team total against the division, the
            individual caps, the floor, the Elite rule, the entry limit, the
            switch-ends rule, and tie-on eligibility against your birth date,
            gender, and current classification. Getting any of them wrong at the
            arena costs a roper their fees.
          </p>
          <p>
            That validation is what{" "}
            <Link href="/">TeamRope.pro</Link> is built around.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              <strong className="text-brand">Sources and currency.</strong>{" "}
              USTRC values are from the published USTRC rulebook; the 5-second
              barrier and the heel-equals-head provision were verified against
              it directly. WSTR values are the jackpot-side rules as documented
              in the TeamRope.pro build map, rules-verified 24 July 2026. PRCA
              values are from the 2026 PRCA Rule Book. Rodeo rules change
              annually and mid-season. This page is a reference, not a
              rulebook — the association&apos;s current published rulebook and
              the ground rules of the specific roping always govern.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
