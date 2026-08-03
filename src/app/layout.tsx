import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "TeamRope.pro - #1 Team Roping App | Partners, Handicaps, Events & Results",
  description:
    "The complete team roping app. Find a header or a heeler who actually fits your number, enter events with live eligibility checking, track every run, and follow USTRC, WSTR and PRCA standings. Division validation, steer draws, partner matching, and a marketplace built for team ropers.",
  keywords:
    "team roping, team roping app, header, heeler, USTRC, WSTR, Global Handicaps, team roping number, team roping partner, team roping events, team roping results, roping jackpot, #10 roping, #12 roping, dally team roping, PRCA team roping, heel horse, head horse, team roping classification, elite roper, tie on rules",
  authors: [{ name: "TeamRope.pro" }],
  creator: "TeamRope.pro",
  publisher: "TeamRope.pro",
  metadataBase: new URL("https://www.teamrope.pro"),
  alternates: {
    canonical: "https://www.teamrope.pro",
  },
  openGraph: {
    title: "TeamRope.pro - #1 Team Roping App",
    description:
      "Find the partner, know the number, enter the right division. The complete team roping platform for headers, heelers, producers, and coaches.",
    url: "https://www.teamrope.pro",
    siteName: "TeamRope.pro",
    type: "website",
    images: [
      {
        url: "https://www.teamrope.pro/logo.png",
        width: 1200,
        height: 630,
        alt: "TeamRope.pro",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeamRope.pro - #1 Team Roping App",
    description:
      "Find the partner, know the number, enter the right division. The complete team roping platform.",
    images: ["https://www.teamrope.pro/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
