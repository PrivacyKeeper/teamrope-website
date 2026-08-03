import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing TeamRope.Pro",
  description:
    "Team roping is the largest participation event in the western world and over 200,000 ropers carry a handicap number. Nobody has built the app around that number. Here is what we are building.",
  alternates: {
    canonical: "https://www.teamrope.pro/blog/introducing-teamrope-pro",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-copper">
        Introducing TeamRope.Pro
      </h1>

      <p>
        Team roping is the largest participation event in the western world by a
        wide margin. More than 200,000 ropers are carrying a handicap number,
        and that number is the entire social and economic organizing principle
        of the sport. A roper&apos;s identity is not &ldquo;I team rope.&rdquo;
        It is <em>&ldquo;I&apos;m a 5.5 header.&rdquo;</em>
      </p>

      <p>
        Divisions run through it. Partners run through it. Entry eligibility
        runs through it. Bragging rights run through it. And every piece of
        software this sport has ever had treats it as a field on a profile
        screen.
      </p>

      <h2>So this is not primarily a results app</h2>

      <p>
        It is a partner and handicap app with results attached. The single
        highest-value thing we can build is header–heeler matching that respects
        the number system and the division caps — and nothing else in the
        portfolio has an equivalent. A barrel racer does not need a partner. A
        bull rider does not need a partner. A team roper cannot enter without
        one.
      </p>

      <p>
        Ask around any jackpot and you will hear the same complaint: finding
        someone who can actually enter with you is harder than the roping.
        Facebook groups, group texts, and a running list of phone numbers. Half
        the matches that get made cannot legally enter the division either
        person wants, and nobody finds out until the office says no.
      </p>

      <h2>The second thing that makes this event different</h2>

      <p>
        Team roping is a two-person event with two independent handicaps. That
        means every data structure that is singular in the other apps is a{" "}
        <strong>pair</strong> here. Entries are teams. Runs have two contestants
        with different roles and penalties attributable to each end. A roper can
        hold one number for heading and a different one for heeling, so every
        eligibility check has to ask which end you are entering before it can
        answer anything.
      </p>

      <p>
        Software built for a single contestant and retrofitted for teams gets
        this wrong every time. We are starting from the pair.
      </p>

      <h2>What we are building first</h2>

      <p>
        The partner finder comes before the producer console. That ordering is
        deliberate — the app has to have a reason to exist before a single
        producer signs on. A roper who finds a partner through us in week one
        does not care whether we run their jackpot yet.
      </p>

      <ul>
        <li>
          <strong>Partner matching</strong> — division fit first, then catch
          percentage compatibility, par-time delta, travel radius, practice
          availability, horsepower, and ratings on whether someone shows up on
          time and ropes their number honestly
        </li>
        <li>
          <strong>Your number</strong> — both ends tracked separately, Elite
          flag, full history, and par deltas by division
        </li>
        <li>
          <strong>Entry eligibility</strong> — caps, floors, the Elite rule,
          entry limits, switch-ends, and tie-on eligibility all checked{" "}
          <em>before</em> the fee is taken
        </li>
        <li>
          <strong>Steer history</strong> — duckers, draggers, stoppers and
          eliminators, visible to ropers, not just producers
        </li>
        <li>
          <strong>Head and heel horses</strong> — two different animals with
          two different value drivers, and arena-specific stats
        </li>
      </ul>

      <h2>Rules as configuration, never as code</h2>

      <p>
        Team roping is the one event where the same question has different
        correct answers depending on who is sanctioning. The barrier penalty is
        10 seconds under PRCA rules and 5 under USTRC. The crossfire call is
        judged on different moments by different bodies. Tie-on eligibility
        thresholds differ too.
      </p>

      <p>
        Any app that hardcodes one answer is wrong somewhere the moment it
        ships. Every rule in our system is versioned configuration bound to a
        dated rule set, and every call the app makes cites the rule and the
        edition it came from. You can read the full reference on our{" "}
        <Link href="/rules">rules page</Link>.
      </p>

      <h2>Where we are</h2>

      <p>
        In build. If you head, heel, produce, or coach, get on the waitlist and
        tell us which — producers and coaches are being onboarded first because
        they bring a whole roping with them.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
