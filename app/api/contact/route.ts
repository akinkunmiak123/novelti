import { NextResponse } from 'next/server'

/**
 * Plain-form contact endpoint (progressive enhancement — works without JS).
 * Wire to email + Sheet alongside /api/quote in Phase 5.
 */
export async function POST(request: Request) {
  const form = await request.formData()
  const name = String(form.get('name') ?? '').slice(0, 120)
  const email = String(form.get('email') ?? '').slice(0, 160)
  const message = String(form.get('message') ?? '').slice(0, 2000)

  if (!name || !email || !message) {
    return NextResponse.redirect(new URL('/contact?sent=0', request.url), 303)
  }

  console.log('New contact message', {
    receivedAt: new Date().toISOString(),
    name,
    email,
    message,
  })

  return NextResponse.redirect(new URL('/contact?sent=1', request.url), 303)
}
