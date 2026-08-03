import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Team Roping Blog - Numbers, Rules, Partners & Gear",
  description:
    "Team roping rules explained, the handicap number system, division caps and floors, tie-on eligibility, and how to find a partner who fits — from TeamRope.Pro.",
  alternates: { canonical: "https://www.teamrope.pro/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-brand">
        TeamRope.Pro Blog
      </h1>
      <p className="mt-3 text-muted">
        Numbers, rules, partners, and formats — written for people who actually
        back into the box.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-ink-border bg-ink-raised/70 p-6 transition hover:border-brand"
          >
            <p className="text-xs tracking-wider text-muted-dim uppercase">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#e0d2bd]">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-2 hover:underline"
            >
              Read more &rarr;
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
