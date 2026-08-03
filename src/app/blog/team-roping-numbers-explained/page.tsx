import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Roping Numbers Explained: How the Handicap System Works",
  description:
    "Headers are classified 1 to 9, heelers 1 to 10, half numbers are standard, and your division is the two added together. A plain-language guide to team roping numbers, double numbers, the Elite flag, and how classifications move.",
  alternates: {
    canonical: "https://www.teamrope.pro/blog/team-roping-numbers-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-copper">
        Team Roping Numbers Explained: How the Handicap System Works
      </h1>

      <p>
        If you are new to numbered roping, the system looks like arithmetic and
        turns out to be a whole social structure. Here is what the number
        actually is, how it is set, and what it controls.
      </p>

      <h2>The scale</h2>

      <p>
        Headers are classified <strong>1 through 9</strong>. Heelers are
        classified <strong>1 through 10</strong>. Higher is better. A 2 is a
        beginner; a 9 or 10 is a professional.
      </p>

      <p>
        Half numbers are standard. WSTR moved to an 18-point scale in 2010 and
        half numbers became the industry norm, with USTRC and TRIAD following.
        So 5.5 is a real number, not a rounding artifact — which is why any
        system storing your classification as a whole number is already broken.
      </p>

      <h2>Your division is just addition</h2>

      <p>
        <strong>Team division = header number + heeler number.</strong>
      </p>

      <p>
        A 5 header with a 5 heeler enters the #10. A 4 header with a 6 heeler
        also enters the #10. That is the whole basic idea, and it is why the
        system works: it lets a weekend roper and a professional enter the same
        event in different divisions and both have a real chance at a check.
      </p>

      <p>
        The complications come from caps, floors, and the Elite rule — covered
        in{" "}
        <Link href="/blog/team-roping-divisions-caps-and-floors">
          divisions, caps and floors
        </Link>
        .
      </p>

      <h2>Double numbers</h2>

      <p>
        A roper can hold a different classification for heading than for
        heeling. Plenty do. Someone might be a 6 heeler and a 4 header, and
        which number applies depends entirely on which end they are entering on
        that particular team.
      </p>

      <p>
        This trips up more software than anything else in the sport. There is no
        such thing as &ldquo;your number&rdquo; in the singular — there are two
        nullable fields, and every eligibility check has to ask which end first.
      </p>

      <h2>The Elite flag</h2>

      <p>
        An Elite flag marks a roper with a documented competitive advantage at
        their number — someone who is, in practice, better than the number
        suggests.
      </p>

      <p>
        The rule: <strong>two Elite ropers cannot enter the same division
        together</strong> and must go up one. An Elite 5 header with a plain 5
        heeler can enter the #10. An Elite 5 header with an Elite 5 heeler must
        enter the #11.
      </p>

      <p>
        Note the precision — the rule triggers only when the pair&apos;s total
        equals the division number. An Elite 5 and an Elite 4 entering a #10 are
        fine, because they add to 9.
      </p>

      <h2>Who sets your number</h2>

      <p>
        Classification is issued and adjusted by{" "}
        <strong>Global Handicaps</strong>, which serves USTRC, WSTR, and many
        other associations and arenas. Numbers can move mid-year based on
        performance data. Appeals require current USTRC or WSTR membership.
      </p>

      <p>
        Because a number can move mid-season, an entry has to freeze the
        classification onto it at entry time. Otherwise a roper who paid to
        enter a #10 in April finds themselves retroactively ineligible in June,
        which is nobody&apos;s idea of fair.
      </p>

      <h2>What actually moves a number</h2>

      <p>
        The Global Handicaps 2.0 direction, from 2025 onward, evaluates results
        against a <strong>national par time per division</strong>. The
        consequence is worth internalizing:
      </p>

      <ul>
        <li>Wins at or slower than par do not push your number up</li>
        <li>
          Too fast is too fast regardless of the size or age bracket of the
          roping
        </li>
      </ul>

      <p>
        So the metric to watch is not money won. It is your{" "}
        <strong>par delta</strong> — how your times compare to the national par
        for the division you are roping. That is the number that will actually
        move your number, and it is what our analytics are built around.
      </p>

      <h2>Roping your number honestly</h2>

      <p>
        Misrepresenting a number is a major offense. Winning money at a number
        lower than your official handicap triggers an upward adjustment for not
        less than one year — and it applies to whoever falsified on
        someone else&apos;s behalf as well as to the roper themselves.
      </p>

      <p>
        This is why partner ratings in our app include &ldquo;ropes their number
        honestly&rdquo; as an explicit dimension. In a handicapped sport it is
        the single most important thing you can know about someone before you
        enter with them.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
