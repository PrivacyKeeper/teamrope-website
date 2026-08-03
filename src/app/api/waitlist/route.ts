import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "TeamRope.Pro <support@teamrope.pro>",
      to: email,
      subject: "You're on the TeamRope.Pro waitlist! 🤠",
      html: `
        <div style="background-color:#150e09;color:#f3e7d3;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#d2803f;font-size:28px;margin:0;">TEAMROPE.PRO</h1>
            <p style="color:#b09a82;font-size:14px;margin-top:5px;">Find the partner. Know the number.</p>
          </div>
          <h2 style="color:#d2803f;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#e0d2bd;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#d2803f;">TeamRope.Pro</strong> — the complete platform for headers, heelers, producers, and coaches.
          </p>
          <p style="color:#e0d2bd;font-size:16px;line-height:1.6;">
            Over 200,000 ropers carry a handicap number, and that number decides everything — who you can rope with, what you can enter, and what you can win. Nobody has built the app around it. We are.
          </p>
          <h3 style="color:#d2803f;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#e0d2bd;font-size:15px;line-height:1.8;">
            <li>🤝 Partner matching that respects your number, your end, and your division</li>
            <li>🔢 Classification tracking with par-time deltas and history</li>
            <li>✅ Entry eligibility checked before you pay — caps, floors, and the Elite rule</li>
            <li>🏆 Entries, draws, live results, averages, and short rounds</li>
            <li>🐂 Steer history — duckers, draggers, stoppers, and eliminators</li>
            <li>🐴 Head horse and heel horse profiles with arena-specific stats</li>
            <li>🛒 A marketplace built for ropes, tack, cattle, and rigs</li>
            <li>🎯 AI run analysis with crossfire margin measured against both standards</li>
            <li>🎓 USTRC Junior, NHSRA and NIRA standings, coaches, and scholarships</li>
          </ul>
          <p style="color:#e0d2bd;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Keep swinging. 🤠
          </p>
          <p style="color:#b09a82;font-size:14px;margin-top:30px;">
            — The TeamRope.Pro Team<br/>
            <a href="https://teamrope.pro" style="color:#d2803f;">teamrope.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #4a3423;margin:30px 0;" />
          <p style="color:#7d6a56;font-size:12px;text-align:center;">
            &copy; 2026 Apps 1, LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "TeamRope.Pro <support@teamrope.pro>",
      to: "support@teamrope.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
