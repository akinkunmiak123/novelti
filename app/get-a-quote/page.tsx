import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'
import Faq from '@/components/Faq'

export const metadata: Metadata = {
  title: 'Get a free quote',
  description:
    'Tell us about the job and get a fixed price back, usually the same working day. Domestic, commercial, end of tenancy and specialised cleaning.',
  alternates: { canonical: '/get-a-quote' },
}

const reasons = [
  {
    title: 'One fixed price',
    body: 'Agreed before we start. Not an hourly estimate that grows on the day.',
  },
  {
    title: 'Usually same-day',
    body: 'Most quotes go out within one working day of you getting in touch.',
  },
  {
    title: 'No pressure',
    body: "You'll get a price and a straight answer. Book when you're ready, not before.",
  },
]

const faqs = [
  {
    q: 'Is the quote really free?',
    a: "Yes. There's no charge for a quote and no obligation to book once you have one.",
  },
  {
    q: 'How quickly will I hear back?',
    a: "Usually within one working day. If it's urgent, ring 07454 265760 and we'll try to give you a price over the phone.",
  },
  {
    q: 'What details do you need from me?',
    a: 'Your postcode, the type of clean, and roughly the size of the property. The more detail you give us in the notes field, the more accurate the first price will be.',
  },
  {
    q: 'Can I get a quote without booking?',
    a: 'Of course. Plenty of people get a quote to compare or to plan ahead, and book later or not at all.',
  },
]

export default function GetAQuotePage() {
  return (
    <>
      <section className="border-b border-line bg-moss text-white">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <h1 className="text-4xl leading-[1.05] sm:text-5xl">
            Get a free, fixed quote.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85">
            Tell us what needs cleaning and where. You'll get a price in
            writing, usually the same working day, with nothing to sign until
            you're ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 border-y border-line py-10 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h2 className="font-display text-lg font-bold text-ink">
                {reason.title}
              </h2>
              <p className="mt-2 max-w-[32ch] text-[15px] leading-relaxed text-steel">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <QuoteForm />
      </section>

      <section className="border-t border-line bg-moss-pale">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <p className="font-display text-lg font-bold text-ink">
            Would rather talk it through?
          </p>
          <a
            href="tel:+447454265760"
            className="mt-2 block font-display text-3xl font-bold text-moss hover:text-moss-deep"
          >
            07454 265760
          </a>
          <p className="mt-2 text-[15px] text-steel">
            Or email{' '}
            <a href="mailto:info@novelticleaning.com" className="underline">
              info@novelticleaning.com
            </a>
          </p>
        </div>
      </section>

      <Faq heading="Quick questions about getting a quote." items={faqs} />
    </>
  )
}
