import { NextResponse } from "next/server";

/**
 * Lead capture endpoint.
 *
 * Step 5 of the plan wires this to:
 *   1. an email to info@novelticleaning.com (Resend / Postmark)
 *   2. an append to the Google Sheet log
 *
 * Until then it validates, rejects bots, and logs the payload.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never fill this in.
  if (body["company-website"]) {
    return NextResponse.json({ ok: true });
  }

  const required = ["name", "phone", "email", "postcode", "service"];
  const missing = required.filter((key) => !body[key]);
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing: ${missing.join(", ")}` },
      { status: 422 },
    );
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    name: String(body.name).slice(0, 120),
    phone: String(body.phone).slice(0, 40),
    email: String(body.email).slice(0, 160),
    postcode: String(body.postcode).slice(0, 12).toUpperCase(),
    service: String(body.service).slice(0, 80),
    property: String(body.property ?? "").slice(0, 80),
    details: String(body.details ?? "").slice(0, 2000),
  };

  console.log("New enquiry", lead);

  return NextResponse.json({ ok: true });
}
