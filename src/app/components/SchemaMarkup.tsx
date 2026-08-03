export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TeamRope.pro",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS, Android",
    description:
      "The everything app for team roping. A social platform for the whole community, partner matching that respects the number system, entry eligibility validated against division caps and floors, entries, draws, live results, steer history, horses, gear, and rules. Built for amateur ropers at USTRC and WSTR numbered jackpots — every number, both ends.",
    url: "https://www.teamrope.pro",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
      },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Premium Monthly",
      },
      {
        "@type": "Offer",
        price: "49.99",
        priceCurrency: "USD",
        name: "Premium Annual",
      },
    ],
    author: {
      "@type": "Organization",
      name: "TeamRope.pro",
      url: "https://www.teamrope.pro",
      email: "support@teamrope.pro",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TeamRope.pro",
    url: "https://www.teamrope.pro",
    description:
      "The complete team roping platform. Partners, numbers, events, entries, results, steers, horses, and rules in one app.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.teamrope.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // The rules reference is the page most likely to earn a featured snippet,
  // so the questions ropers actually search are marked up explicitly. Every
  // answer names the sanctioning body, because team roping rules genuinely
  // differ between PRCA and the jackpot associations.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the legal head catches in team roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are exactly three legal head catches: around both horns, a half head (the loop around one horn and the head, with one eye of the steer looking through the loop), and around the neck. Illegal head catches include the hondo over one horn with the loop over the other, a loop that crosses itself, and any bridle catch with the rope in the steer's mouth.",
        },
      },
      {
        "@type": "Question",
        name: "What is the barrier penalty in team roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on who is sanctioning. At USTRC numbered jackpots the barrier penalty is 5 seconds, and the penalty for beating the heel barrier is always the same as for beating the head barrier. At PRCA rodeos it is 10 seconds. This difference is the single most common misconfiguration in team roping software, so always confirm which rule set a class is running before you enter.",
        },
      },
      {
        "@type": "Question",
        name: "How does the team roping number system work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Headers are classified 1 through 9 and heelers 1 through 10, with half numbers standard since the industry moved to the plus system. A team's division is the header's number plus the heeler's number, so a 5 header with a 5 heeler enters the #10. Divisions carry a cap on the highest individual number allowed, and the higher divisions also carry a floor requiring a minimum number on at least one end. Classifications are issued and adjusted by Global Handicaps and can move mid-season based on results.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Elite rule in team roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Elite flag marks a roper with a documented competitive advantage at their number. Two Elite ropers cannot enter the same division together and must move up one division. An Elite 5 header with a plain 5 heeler can enter the #10, but an Elite 5 header with an Elite 5 heeler must enter the #11. The rule only triggers when the pair's total equals the division number.",
        },
      },
      {
        "@type": "Question",
        name: "What is the penalty for heeling one hind foot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Catching one hind foot carries a 5-second penalty. Any catch behind both shoulders is legal as long as the rope goes up the heels. A front foot or feet in the heel loop is a foul catch, though if the front foot comes free before the team calls for time the run still counts. If the header ropes any leg of the steer or the horse it is an automatic no time.",
        },
      },
      {
        "@type": "Question",
        name: "Who is allowed to tie on in team roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tie-on rules apply to heelers only — a header tying on is an automatic disqualification. Under USTRC and WSTR rules a male heeler 60 or older may tie on at any classification, a male heeler 55 or older classified 5.5 or below may tie on, and a female heeler may tie on from her 13th birthday. That female rule is day-based rather than year-of-birth based, which is unique in the rulebook. PRCA permits hard and fast for certain age and gender categories under its own rules, so always check the rule set the class is running.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
