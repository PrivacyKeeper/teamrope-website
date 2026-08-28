"use client";

import { useState } from "react";
import CrossQuote from "./components/CrossQuote";
import Footer from "./components/Footer";
import Link from "next/link";

/**
 * Feature groups mirror the screens in the build map's §11 route tree.
 *
 * Ordering: this is an everything-app for the team roping community, so the
 * social platform leads — it is what people open daily. Partner matching is
 * second because it is the standout differentiator (per the map, "the single
 * highest-value feature in this entire build"), and no other event in the
 * portfolio has an equivalent.
 *
 * Audience is amateur ropers — weekend jackpots, USTRC and WSTR numbered
 * ropings, high school and college — not PRCA professionals. Copy and rule
 * emphasis follow that throughout.
 *
 * Free tiers are listed first, premium after.
 */
const features = [
  {
    id: "social",
    icon: "👥",
    title: "Social & Community",
    desc: "The Whole Team Roping World, In One Feed",
    detail: [
      "A real feed — post photos and video of your runs, not just results",
      "Stories that disappear in 24 hours",
      "Like, comment, bookmark, repost, and share to anywhere",
      "Follow the ropers you look up to and build your own following",
      "Group chats for your barn, your practice pen, or your travel partners",
      "Direct messaging with read receipts",
      "Find ropers near you, at your number, or heading to the same roping",
      "Regional and arena-based groups — your local roping scene, organized",
      "Celebrate first catches, first checks, and first buckles",
      "Badges for milestones, streaks, and consistency",
      "Block, report, and mute on every account from day one",
    ],
  },
  {
    id: "partners",
    icon: "🤝",
    title: "Partner Matching",
    desc: "The Feature This Whole App Is Built Around",
    detail: [
      "Find a header or a heeler whose number actually works with yours",
      "Division fit checked first — no matches that cannot legally enter together",
      "Catch percentage compatibility, because two low-percentage ends win nothing",
      "Speed compatibility measured as par-time delta at your shared divisions",
      "Travel radius and home arena distance",
      "Practice availability by day, time block, and whose arena",
      "Horsepower: how many head, hauling capability, whether they can mount you",
      "Style tags — fast and aggressive, high percentage, jackpot, rodeo",
      "Partner ratings: shows up on time, pays their share, ropes their number honestly",
      "Every compatibility score broken out by component, never one opaque number",
    ],
  },
  {
    id: "number",
    icon: "🔢",
    title: "Your Number",
    desc: "The Thing Your Whole Roping Identity Runs Through",
    detail: [
      "Header and heeler classifications tracked separately for double-numbered ropers",
      "Half numbers supported properly — stored as decimals, not rounded",
      "Elite flag and what it does to your division eligibility",
      "Classification history, append-only, with the reason for every change",
      "Par-time deltas by division — the metric that actually moves your number",
      "Alerts when your classification changes mid-season",
      "Numbers frozen onto an entry at entry time, so a mid-season move never invalidates it",
      "Global Handicaps, producer, and self-reported sources labeled distinctly",
    ],
  },
  {
    id: "eligibility",
    icon: "✅",
    title: "Entry Eligibility",
    desc: "Know Before You Pay, Not At The Gate",
    detail: [
      "Live validation as you pick a division — before the entry fee is taken",
      "Team total against the division number",
      "Individual caps, including Elite caps",
      "Division floors — the minimum number required on at least one end",
      "The Elite rule: two Elite ropers at the division number must move up",
      "Entry limits per roper per division",
      "Switch ends or switch partners — the most common numbered-roping mistake, caught",
      "Tie-on eligibility validated against birth date, gender, and classification",
      "Combined-age checks for century and age-protected classes",
      "Every rejection cites the rule and the rulebook edition it came from",
    ],
  },
  {
    id: "competition",
    icon: "🏆",
    title: "Competition & Events",
    desc: "Every Format Team Roping Actually Runs",
    detail: [
      "Browse and enter events by division, association, date, and distance",
      "One-go, progressive after one, two-steer average, three and four-steer average",
      "Short round by place or by round",
      "Draw pots with a documented random seed and a published draw sheet",
      "Pick pots, enter-up, and up-and-back",
      "Incentives — a lower division inside a higher-numbered roping",
      "Century and age-protected classes",
      "Handicap sidepots alongside the main pot",
      "Draw position and steer number pushed to your phone",
      "Live results, averages, short-round standings, and payouts by division",
    ],
  },
  {
    id: "steers",
    icon: "🐂",
    title: "Steer History",
    desc: "The Largest Source Of Variance In A Roping",
    detail: [
      "Steer records producers can tag and ropers can actually see",
      "Head duckers, draggers, stoppers, and eliminators flagged",
      "Average time when drawn, and pull rate across the season",
      "Weight, breed, horn wrap status, and temperament notes",
      "Sorted-out and retired status with the reason logged",
      "Real-time sorting so a producer can pull a steer mid-roping",
      "Rerun tracking, including lap-and-tap reruns carrying a barrier penalty forward",
      "Steer run history — something no existing product gives a roper",
    ],
  },
  {
    id: "runs",
    icon: "⏱️",
    title: "Run Log & Practice",
    desc: "Every Run, Both Ends, Filed Properly",
    detail: [
      "Log a run in seconds, from the box, one-handed",
      "Head catch recorded: both horns, half head, neck, illegal, no catch",
      "Heel catch recorded: two feet, one foot, front foot, illegal, no catch",
      "Barrier, loops thrown at each end, dally, and face all captured",
      "Hand-timed practice stays completely separate from official results",
      "Filter by end, division, steer, arena, or partner",
      "Catch percentage and average time trends across the season",
      "Attach video to any run",
      "Practice sessions with partner invites, arena, cattle count, and cost split",
    ],
  },
  {
    id: "horses",
    icon: "🐴",
    title: "Head & Heel Horses",
    desc: "Two Different Animals, Two Different Value Drivers",
    detail: [
      "Role tracking: head, heel, both, or prospect",
      "Face rating for head horses, stop rating for heel horses",
      "Scores well, box manners, and how the horse rates a steer",
      "Dally side preference and divisions the horse is suited to",
      "Arena-specific stats — ground, box, and score length genuinely change a horse",
      "Mounts-others flag for ropers who lend a horse",
      "Full pedigree and bloodline tracking",
      "Auto-generated horse resume with run history, earnings, video, and health",
      "One horse profile that also reads in BarrelConnect and TieDown",
    ],
  },
  {
    id: "marketplace",
    icon: "🛒",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Head horses, heel horses, prospects, broodmares, studs, and leases",
      "Head ropes by lay — XS, S, MS, M, MH, H — heel ropes, practice and kids ropes",
      "Roping saddles, breast collars, bits, reins, cinches, boots and wraps",
      "Horn wraps, rope bags and cans, gloves by hand, quick-release devices",
      "Trailers, living quarters, goosenecks, and trucks",
      "Roping steers, Corriente, chute-broke sets, and practice cattle leases",
      "Dummies, sleds, chutes, timers, barriers, and arena drags",
      "Farrier, vet, chiropractic, hauling, training, lessons, and clinics",
      "Sold-comparable price history by division suitability and earnings",
      "Seller ratings, saved listings, and direct messaging",
    ],
  },
  {
    id: "rules",
    icon: "📖",
    title: "Rules & Officiating",
    desc: "Know The Call Before It Gets Made",
    detail: [
      "Every legal and illegal catch at both ends, illustrated",
      "Barrier penalty by association — 10 seconds PRCA, 5 seconds USTRC",
      "Tie-on eligibility checker keyed to your own birth date and classification",
      "Crossfire standard shown per class, because the call differs by association",
      "Rules versioned by date — a 2026 run is always scored under 2026 rules",
      "Producer ground-rule overrides stated up front, before you pay",
      "Loop counts configured per class, never assumed",
      "A searchable rulebook, not a PDF link",
    ],
  },
  {
    id: "travel",
    icon: "🚗",
    title: "Travel & Safety",
    desc: "Travel Safe, Arrive Ready",
    detail: [
      "Route planner built around where you are actually hauling",
      "Arena finder along your route, with reviews from other ropers",
      "Real-time weather and severe weather alerts",
      "Emergency alert system with one-tap contacts",
      "Hauler directory with reviews, and transport you can book",
      "Coggins and health certificate expiry warnings before you leave",
      "Event biosecurity status surfaced at entry time",
      "Outbreak alerts along a planned route",
      "Gas, feed, and rest stop finder",
    ],
  },
  {
    id: "training",
    icon: "🎯",
    title: "Training & AI",
    desc: "Coaching For People Who Cannot Afford A Coach (Premium)",
    detail: [
      "Film a run on your phone and get it broken down — no special equipment",
      "Progress measured against your own baseline, not against a professional's",
      "Barrier margin in milliseconds, tracked across a whole season",
      "Crossfire risk measured against both standards, reported under whichever the class runs",
      "Header delivery frame, swing count, and loop travel time",
      "Turn frame and handle quality — steer trajectory smoothness after the turn",
      "Heeler position track through the corner, and heel loop open time",
      "Dally and face frames for both ends",
      "Side-by-side against your own reference run",
      "Drill library by focus tag",
      "Book coaching sessions and clinics in the app",
    ],
  },
  {
    id: "health",
    icon: "❤️",
    title: "Equine Health & Care",
    desc: "Complete Health Management (Premium)",
    detail: [
      "Health dashboard at a glance",
      "Vet records and full visit history",
      "Vaccination schedules with reminders",
      "Coggins, health certificates, brand inspection, and import permits",
      "Expiry alerts before they cost you an entry at the gate",
      "Medication schedules with alerts",
      "Nutrition logs and feeding plans",
      "Care scheduler with reusable templates",
      "Farrier visit tracking",
    ],
  },
  {
    id: "youth",
    icon: "🎓",
    title: "Youth, School & College",
    desc: "Junior Cards Through College Rodeo",
    detail: [
      "USTRC Junior Global Card tracking for ropers 15 and under",
      "Junior divisions with age-based caps",
      "Resistol Junior Champs tracking",
      "NHSRA and NIRA team roping standings — both genders",
      "Coach dashboards with roster, entries, travel, and points",
      "School codes for attribution and revenue share",
      "Coach-supervised practice pairing inside a team roster",
      "Scholarship board with deadlines and requirements",
      "Recruiting profile, coaches-only by default for minors",
      "Minors cannot receive partner requests from adults outside a linked school or barn",
    ],
  },
  {
    id: "producers",
    icon: "💼",
    title: "Producers & Pros",
    desc: "Build The Ladder, Run The Roping (Premium)",
    detail: [
      "Division builder with live validation — caps, floors, incentives, sidepots in one screen",
      "Draw pot management with a documented random seed and published draw sheet",
      "Rotation support for multiple flaggers, with flag-passing rules enforced",
      "Steer draw, sorting, and mid-roping pulls with the reason logged",
      "Rerun queue, including lap-and-tap reruns carrying a barrier penalty",
      "Scoring screen: head catch, heel catch, barrier, time — one thumb-reachable panel",
      "Offline-first scoring, because arena wifi does not exist",
      "Official override tracked as its own record, never an edit to the run",
      "Payout calculator with ground money, added money, office charge, and sidepot cascades",
      "Day sheet, back numbers, and earnings export for association reporting",
    ],
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    perks: [
      "Roper profile with header and heeler numbers",
      "Partner browsing and requests",
      "Event discovery and entries",
      "Entry eligibility validation",
      "Run log and practice sessions",
      "Horse profiles",
      "Marketplace access",
      "Rules reference and tie-on checker",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    featured: true,
    perks: [
      "Everything in Free",
      "Full compatibility scoring and matchup history",
      "AI run analysis and crossfire margin tracking",
      "Video breakdown and side-by-side comparison",
      "Drill library and coaching bookings",
      "Horse resume export",
      "Equine health dashboard and vet records",
      "Priority support",
    ],
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/yr",
    best: true,
    perks: [
      "Everything in Premium",
      "Save $10 versus monthly",
      "Early access to new features",
      "Exclusive community badge",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot. Hidden from real visitors, so anything here came from a bot.
  // Not named "company": browsers autofill organization fields, and a real
  // person whose browser filled it would be silently dropped as a bot.
  const [honeypot, setHoneypot] = useState("");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, hp_company: honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error ?? "");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      // Prefer the server's reason when it gave one: "that address has a typo"
      // and "the mail service is down" need very different things from the
      // visitor, and the generic line tells them neither.
      setErrorMessage(err instanceof Error ? err.message : "");
      setStatus("error");
    }
  };

  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#150e09]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TeamRope.pro" className="h-14 w-auto" />
            <span className="hidden text-lg font-bold tracking-wide text-brand sm:block">
              TEAMROPE<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wider text-muted uppercase md:flex">
            <a href="#features" className="transition hover:text-brand">
              Features
            </a>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
            <a href="#pricing" className="transition hover:text-brand">
              Pricing
            </a>
            <Link href="/blog" className="transition hover:text-brand">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="TeamRope.pro"
          className="w-[300px] drop-shadow-2xl md:w-[400px]"
        />
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
          TeamRope<span className="text-brand-2">.pro</span>
        </h1>
        <p className="mt-4 text-xl font-bold tracking-wide text-brand italic md:text-2xl">
          &ldquo;Two ropers. Two numbers. One time.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Team roping is the largest participation event in the western world,
          and the vast majority of us are weekend ropers — numbered jackpots,
          local ropings, high school and college. Right now that whole world
          runs on Facebook groups, group texts, and a spreadsheet somebody keeps
          in a truck.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          This is the app for all of it. The feed, the community, and the
          people. Finding a partner who actually fits your number. Entering the
          right division without getting turned away at the office. Your runs,
          your horses, your gear, and every roping within driving distance —{" "}
          <span className="text-cream">
            if you team rope, you should not need another app.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-cream">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Download on the
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  App Store
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 512 512" className="h-8 w-8 fill-cream">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Get it on
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  Google Play
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="mt-8 rounded-lg bg-brand px-8 py-4 text-lg font-bold tracking-wider text-[#150e09] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Every Number", note: "Your first #8 to the open" },
            { label: "Both Ends", note: "Headers and heelers alike" },
            { label: "Families", note: "Juniors, parents, and grandparents" },
            { label: "Producers", note: "Weekend jackpots to big ropings" },
          ].map((who) => (
            <div
              key={who.label}
              className="rounded-xl border border-ink-border bg-ink-raised/70 p-4 text-center"
            >
              <p className="text-sm font-bold tracking-wider text-brand uppercase">
                {who.label}
              </p>
              <p className="mt-1 text-xs text-muted">{who.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-wider text-brand uppercase">
          What&apos;s Inside
        </h2>
        <p className="mx-auto mt-4 mb-14 max-w-2xl text-center text-muted">
          Fifteen feature groups — the social side, the competing side, and
          everything in between. Built for weekend ropers, not just the ones on
          TV. Tap any card for the full list.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setOpenModal(i)}
              className="group rounded-xl border border-ink-border bg-ink-raised p-6 text-left transition-all hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-brand group-hover:underline">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold text-brand-2">
                See all {f.detail.length} features &rarr;
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink-border bg-ink-panel p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-brand">
              {features[openModal].title}
            </h3>
            <p className="mt-1 text-sm text-muted">{features[openModal].desc}</p>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#e0d2bd]">
                  <span className="mt-0.5 text-brand-2">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 rounded-lg bg-brand px-6 py-2 font-semibold text-[#150e09] transition hover:bg-brand-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why it is different */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Why Team Roping Needed Its Own App
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "Built for the numbered roping, not the NFR",
              d: "Most of us rope USTRC and WSTR jackpots on a weekend, not PRCA rodeos on TV. Every default in this app — the barrier penalty, the divisions, the formats — assumes the roping you are actually entering on Saturday.",
            },
            {
              t: "The number is the whole sport",
              d: "A roper's identity is \"I'm a 5.5 header.\" Divisions, partners, entry eligibility, and bragging rights all run through it. Every other app treats it as a field on a profile. Here it is the spine.",
            },
            {
              t: "Everything is a pair, not a person",
              d: "Two contestants, two independent handicaps, two ends, penalties attributable to each. Entries are teams. Software built for a single contestant and retrofitted always gets this wrong.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h3 className="text-lg font-semibold text-brand-2">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.featured
                  ? "border-brand bg-ink-panel shadow-lg shadow-brand/15"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.featured && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand-2 uppercase">
                  Most Popular
                </p>
              )}
              {plan.best && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand uppercase">
                  Best Value
                </p>
              )}
              <h3 className="text-xl font-bold text-brand">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[#e0d2bd]"
                  >
                    <span className="mt-0.5 text-brand-2">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-brand uppercase">
          Get Early Access
        </h2>
        <p className="mb-8 text-muted">
          Drop your email and be the first to know when TeamRope.pro launches.
        </p>
        {status === "success" ? (
          <p className="text-lg font-semibold text-brand">
            &#127881; You&apos;re on the list! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleWaitlist}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="text"
              name="hp_company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-ink-border bg-ink-raised px-4 py-3 text-cream placeholder-muted-dim focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-brand px-6 py-3 font-bold tracking-wider text-[#150e09] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            {errorMessage || "Something went wrong. Try again."}
          </p>
        )}
      </section>

      <Footer />
      <CrossQuote />
    </div>
  );
}
