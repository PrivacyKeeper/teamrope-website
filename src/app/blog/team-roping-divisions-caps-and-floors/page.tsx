import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Divisions, Caps and Floors: Why Your Entry Got Rejected",
  description:
    "A #10 is not just any two ropers adding to ten. Caps limit the highest individual number, floors require a minimum on at least one end, and two Elite ropers at the division number have to move up.",
  alternates: {
    canonical:
      "https://www.teamrope.pro/blog/team-roping-divisions-caps-and-floors",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-copper">
        Divisions, Caps and Floors: Why Your Entry Got Rejected
      </h1>

      <p>
        You and your partner add up to ten. The roping has a #10. The office
        says no. Here is why that happens, and it is almost always one of four
        rules.
      </p>

      <h2>1. The cap</h2>

      <p>
        A division carries a <strong>cap</strong> — the maximum individual
        number allowed on either end, regardless of the total.
      </p>

      <p>
        A #10 capped at 6 means a 7 header cannot enter it even with a 3 heeler,
        because 7 exceeds the cap. The arithmetic works; the cap does not. Caps
        exist to stop a professional from carrying a beginner and winning
        everything.
      </p>

      <p>
        Caps can also be expressed against the Elite scale — a #10 &ldquo;capped
        at Elite 6&rdquo; is a different constraint than a #10 capped at 6.
      </p>

      <h2>2. The floor</h2>

      <p>
        The higher divisions run the opposite constraint: a{" "}
        <strong>floor</strong>, meaning a minimum number required on at least
        one end. Published USTRC floors:
      </p>

      <div className="overflow-x-auto">
        <table className="mt-4 w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink-border text-left">
              <th className="py-2 pr-4 font-bold text-copper">Division</th>
              <th className="py-2 font-bold text-copper">Requirement</th>
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
        The floor is what stops two mid-numbered ropers from stacking into a
        high division where the added money is better. Note that it is an{" "}
        <em>either</em> condition — you need the minimum on one end, not both.
      </p>

      <p>
        These numbers change. Any app or spreadsheet that hardcodes them will be
        wrong within a season. They belong in versioned configuration bound to a
        dated rule set, which is exactly how we store them.
      </p>

      <h2>3. The Elite rule</h2>

      <p>
        Two Elite ropers cannot enter the same division together — they must go
        up one. An Elite 5 header with a plain 5 heeler enters the #10; two
        Elite 5s must enter the #11.
      </p>

      <p>
        The rule only triggers when the pair&apos;s total{" "}
        <strong>equals</strong> the division number. Two Elite ropers adding to
        9 can enter a #10 without issue.
      </p>

      <h2>4. Switch ends or switch partners</h2>

      <p>
        This one catches more people at numbered ropings than the other three
        combined: <strong>a roper may not rope the same end for the same
        partner twice in one division.</strong>
      </p>

      <p>
        If you head for someone in the #11, you cannot head for that same person
        again in the #11. You can heel for them (up and back), or you can head
        for somebody else. Enter-up formats make this easy to trip over, because
        you are entering the same division several times and losing track of
        which combinations you have already used.
      </p>

      <h2>The other things that will stop an entry</h2>

      <ul>
        <li>
          <strong>Entry limits</strong> — how many times one roper may enter a
          given division
        </li>
        <li>
          <strong>Combined age</strong> — century and age-protected classes
          require the two ropers&apos; ages to add above a threshold
        </li>
        <li>
          <strong>Tie-on eligibility</strong> — validated against birth date,
          gender, and classification. See{" "}
          <Link href="/blog/team-roping-tie-on-rules">tie-on rules</Link>.
        </li>
      </ul>

      <h2>All of this is checkable before you pay</h2>

      <p>
        Every rule above is deterministic. Given two ropers, their numbers,
        their ends, their ages, and the class configuration, a computer can tell
        you yes or no in milliseconds — before the entry fee is taken, not after
        the office catches it.
      </p>

      <p>
        That is the validator TeamRope.pro is built around, and when it rejects
        an entry it tells you which rule caused it and which rulebook edition
        that rule came from. Getting this wrong at the arena costs a roper their
        fees.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
