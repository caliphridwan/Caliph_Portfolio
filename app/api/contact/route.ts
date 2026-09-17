import { NextRequest, NextResponse } from "next/server";

// Forwards new contact-form submissions to your existing Formspree
// endpoint (so you keep getting notified exactly as before), then
// sends an automatic "thanks for reaching out" reply to the customer
// via Resend (https://resend.com — free tier, no domain required to
// start using their onboarding@resend.dev sender).

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbgjnnjo";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1. Forward to Formspree — this is what actually notifies you.
    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!formspreeRes.ok) {
      return NextResponse.json(
        { error: "Could not deliver your message. Please try again." },
        { status: 502 }
      );
    }

    // 2. Auto-reply to the customer via Resend.
    // Set RESEND_API_KEY in your environment (Vercel → Project →
    // Settings → Environment Variables). If it's missing, we skip the
    // auto-reply but still treat the submission as successful, since
    // the message already reached you via Formspree.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Swap for "Ridwan Abdulkareem <hello@yourdomain.com>" once
          // you've verified a domain in Resend. Until then, Resend's
          // shared sender works for testing.
          from: "Ridwan Abdulkareem <onboarding@resend.dev>",
          to: [email],
          subject: "Thanks for reaching out!",
          text: `Hi ${name},\n\nThanks for your message — I've received it and will get back to you within 1–2 business days.\n\nFor reference, here's what you sent:\n"${message}"\n\nBest,\nRidwan`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
