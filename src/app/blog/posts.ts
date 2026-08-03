export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const posts: BlogPost[] = [
  {
    slug: "introducing-teamrope-pro",
    title: "Introducing TeamRope.Pro",
    excerpt:
      "Team roping is the largest participation event in the western world and more than 200,000 ropers carry a number. Nobody has built the app around that number. Here is what we are building.",
    date: "2026-08-03",
  },
  {
    slug: "best-team-roping-app",
    title: "The Best Team Roping App for 2026",
    excerpt:
      "What a team roping app actually has to do: match partners who can legally enter together, validate eligibility before it takes your money, and get the barrier penalty right for the association you are roping under.",
    date: "2026-08-03",
  },
  {
    slug: "team-roping-numbers-explained",
    title: "Team Roping Numbers Explained: How the Handicap System Works",
    excerpt:
      "Headers 1 to 9, heelers 1 to 10, half numbers throughout, and a division that is just the two added together. Plus double numbers, the Elite flag, and why your number is stored as a decimal.",
    date: "2026-08-03",
  },
  {
    slug: "team-roping-rules-explained",
    title: "Team Roping Rules Explained: Catches, Barrier and Crossfire",
    excerpt:
      "The three legal head catches, what a one-foot heel catch costs you, and why the barrier penalty and the crossfire call are different depending on who is sanctioning the roping.",
    date: "2026-08-03",
  },
  {
    slug: "team-roping-divisions-caps-and-floors",
    title: "Divisions, Caps and Floors: Why Your Entry Got Rejected",
    excerpt:
      "A #10 is not just any two ropers adding to ten. Caps limit the highest individual number, floors require a minimum on one end, and two Elite ropers at the division number have to move up.",
    date: "2026-08-03",
  },
  {
    slug: "team-roping-tie-on-rules",
    title: "Tie-On Rules: Who Can Go Hard and Fast, and When",
    excerpt:
      "Heelers only, never headers. Age and classification thresholds that differ by association, and the one rule in the book that runs on the day of your birthday instead of the year.",
    date: "2026-08-03",
  },
  {
    slug: "team-roping-events-and-formats",
    title: "Draw Pots, Averages and Enter-Up: Team Roping Formats Explained",
    excerpt:
      "Team roping producers run more format variety than any other event. One-go, progressive, averages, short rounds, draw pots, pick pots, enter-up, up-and-back, incentives and century classes — what each one means.",
    date: "2026-08-03",
  },
  {
    slug: "how-to-find-a-team-roping-partner",
    title: "How to Find a Team Roping Partner Who Actually Fits",
    excerpt:
      "Matching on numbers alone produces teams that cannot win. Catch percentage compatibility, par-time deltas, travel radius, horsepower, and whether they pay their share all matter more than the arithmetic.",
    date: "2026-08-03",
  },
];
