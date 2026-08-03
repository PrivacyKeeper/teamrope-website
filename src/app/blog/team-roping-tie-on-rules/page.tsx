import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tie-On Rules: Who Can Go Hard and Fast, and When",
  description:
    "Tie-on rules apply to heelers only — a header tying on is an automatic disqualification. Age and classification thresholds by association, and the one rule that runs on the day of your birthday.",
  alternates: {
    canonical: "https://www.teamrope.pro/blog/team-roping-tie-on-rules",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-copper">
        Tie-On Rules: Who Can Go Hard and Fast, and When
      </h1>

      <p>
        Tying on — going hard and fast instead of dallying — is one of the few
        places in team roping where the rule depends on who you are rather than
        what you did. It is also one of the easiest ways to lose your fees at
        the arena.
      </p>

      <h2>First, the absolute rule</h2>

      <p>
        <strong>Tie-on applies to heelers only.</strong> A header tying on is an
        automatic disqualification, full stop, with no age or medical exception
        anywhere in the book.
      </p>

      <p>
        The reason is safety. A header who is tied on to a steer that turns
        wrong has no way to get free, and the geometry of the head end makes
        that far more dangerous than the heel end.
      </p>

      <h2>Who may tie on</h2>

      <p>
        Under the jackpot associations — USTRC and WSTR — eligibility works out
        to:
      </p>

      <ul>
        <li>
          A <strong>male heeler 60 or older</strong> may tie on at any
          classification
        </li>
        <li>
          A <strong>male heeler 55 or older</strong> with a classification of{" "}
          <strong>5.5 or below</strong> may tie on
        </li>
        <li>
          A <strong>female heeler from her 13th birthday</strong> may tie on
        </li>
        <li>
          Medical exemptions are granted case by case by Global Handicaps
        </li>
      </ul>

      <p>
        The PRCA permits hard and fast for certain age and gender categories
        under its own rules, and the thresholds are not identical to the above.
        Do not carry one association&apos;s answer into another&apos;s roping.
      </p>

      <h2>The one rule in the book that runs on a birthday</h2>

      <p>
        This is worth its own section because it is genuinely unique.
      </p>

      <p>
        The female heeler rule is effective{" "}
        <strong>on the day of the 13th birthday</strong> — not on 1 January of
        the year she turns 13. Every other age rule in team roping runs on year
        of birth. This one runs on the actual date.
      </p>

      <p>
        And it is hard-edged in the other direction too: no one 12 or under may
        tie on, ever, regardless of size, ability, or classification.
      </p>

      <p>
        For anyone writing software: this means you cannot compute tie-on
        eligibility from a birth year column. You need the date, and you need to
        branch on gender for which comparison to run.
      </p>

      <h2>The rules that apply once you are tied on</h2>

      <ul>
        <li>
          Dallying over the top of a tied-on rope or tie-on device is an
          automatic disqualification
        </li>
        <li>You may not reattach or dally a rope that has come loose</li>
        <li>
          If a tied rope comes loose from the horn during a run, that is a
          disqualification
        </li>
        <li>
          A quick release is encouraged, and a hazardous tied rope may be cut —
          at the heeler&apos;s expense
        </li>
      </ul>

      <h2>Why this belongs in the entry flow</h2>

      <p>
        Tie-on status is not something to discover at the box. The entry flow
        should ask whether you intend to tie on and validate it against your
        birth date, gender, and current classification{" "}
        <em>before accepting the entry</em>.
      </p>

      <p>
        A 54-year-old 6 heeler who enters intending to tie on has made a mistake
        that a database can catch in a millisecond and a flagger will catch at
        the worst possible moment. That check is one of the reasons this app
        exists.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
