import type { Metadata } from 'next'
import Link from 'next/link'
import Photo from '@/components/Photo'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Call, email or send a message to Novelti Cleaning Services, based in Cheltenham and covering Gloucester, Yate and Bristol.',
  alternates: { canonical: '/contact' },
}

const details = [
  {
    label: 'Phone',
    value: '07454 265760',
    href: 'tel:+447454265760',
  },
  {
    label: 'Second line',
    value: '07577 742329',
    href: 'tel:+447577742329',
  },
  {
    label: 'Email',
    value: 'info@novelticleaning.com',
    href: 'mailto:info@novelticleaning.com',
  },
]

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>
}) {
  const { sent } = await searchParams

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1fr_1fr]">
          <div className="px-6 py-14 sm:px-10 lg:py-20">
            <h1 className="max-w-[16ch] text-4xl leading-[1.05] sm:text-5xl">
              Get in touch.
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-steel">
              For a priced quote, the{' '}
              <Link href="/get-a-quote" className="text-moss underline">
                quote form
              </Link>{' '}
              is the quickest route. For anything else — a question, an existing
              booking, a commercial enquiry — call, email or use the form below.
            </p>

            <dl className="mt-10 space-y-5">
              {details.map((item) => (
                <div key={item.label} className="flex items-baseline gap-4">
                  <dt className="w-24 shrink-0 text-sm font-semibold text-steel">
                    {item.label}
                  </dt>
                  <dd>
                    <a
                      href={item.href}
                      className="font-display text-xl font-bold text-ink hover:text-moss"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-steel">
                  Areas
                </dt>
                <dd>
                  <Link
                    href="/areas"
                    className="font-display text-xl font-bold text-ink hover:text-moss"
                  >
                    Cheltenham, Gloucester, Yate & Bristol
                  </Link>
                </dd>
              </div>
              <div className="flex items-baseline gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-steel">
                  Hours
                </dt>
                <dd className="font-display text-xl font-bold text-ink">
                  [confirm opening hours]
                </dd>
              </div>
            </dl>
          </div>

          <Photo
            alt="The Novelti team ready to help"
            src="/Images/contact/contact.jpg"
            brief="a friendly, real photo of Bunmi or the team — contact pages convert better with a face, not just a form"
            className="min-h-[280px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        {sent === '1' ? (
          <div className="border border-moss bg-moss-pale p-8">
            <h2 className="text-2xl">Message sent — thanks.</h2>
            <p className="mt-3 max-w-[50ch] leading-relaxed text-ink">
              We'll get back to you shortly. If it's urgent, call 07454 265760.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl">Send a message.</h2>
            <p className="mt-3 max-w-[52ch] leading-relaxed text-steel">
              Not ready for a full quote yet? Leave your details and what you
              need, and we'll get back to you.
            </p>
            {sent === '0' && (
              <p className="mt-6 border-l-4 border-amber bg-white px-4 py-3 text-sm text-ink">
                Please fill in every field before sending.
              </p>
            )}
            <ContactForm />
          </>
        )}
      </section>
    </>
  )
}

// Kept in this file since it's the only page that uses it.
function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="mt-8 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="c-name"
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
            Your name
          </label>
          <input
            id="c-name"
            name="name"
            required
            autoComplete="name"
            className="w-full border border-line bg-white px-3.5 py-3 text-ink focus:border-moss"
          />
        </div>
        <div>
          <label
            htmlFor="c-email"
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-line bg-white px-3.5 py-3 text-ink focus:border-moss"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="c-message"
          className="mb-1.5 block text-sm font-semibold text-ink"
        >
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          className="w-full border border-line bg-white px-3.5 py-3 text-ink focus:border-moss"
        />
      </div>
      <button
        type="submit"
        className="justify-self-start bg-ink px-7 py-3.5 font-display text-base font-bold text-white transition-colors hover:bg-moss"
      >
        Send message
      </button>
    </form>
  )
}
