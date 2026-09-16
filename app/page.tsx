import Link from "next/link";
import Photo from "@/components/Photo";
import QuoteForm from "@/components/QuoteForm";
import Image from 'next/image'

const services = [
  {
    slug: '/domestic-cleaning',
    title: 'Domestic cleaning',
    lead: "Weekly, fortnightly or a one-off before the family arrive. The same cleaner each visit, so you're not explaining the house twice.",
    includes: [
      'Regular house cleans',
      'Deep cleans and spring cleans',
      'Ovens, inside and out',
      'Carpets and upholstery',
    ],
    image: '/Images/client_kitchen.jpg',
  },
  {
    slug: '/commercial-cleaning',
    title: 'Commercial cleaning',
    lead: 'Offices, shops and commercial kitchens, cleaned outside your trading hours. Invoiced monthly, keyholding by arrangement.',
    includes: [
      'Offices and retail units',
      'Commercial kitchens',
      'Airbnb changeovers',
      'Scheduled deep cleans',
    ],
    image: '/Images/office_clean.jpg',
  },
  {
    slug: '/specialised-cleaning',
    title: 'Specialised cleaning',
    lead: 'The jobs that need the right kit rather than the right roster — outside surfaces, glass, and properties being handed over.',
    includes: [
      'End of tenancy cleans',
      'After builders and new builds',
      'Window cleaning',
      'Patios and jet washing',
    ],
    image: '/Images/jet_wash.jpg',
  },
]

const steps = [
  {
    title: "Tell us about the job",
    body: "Postcode, rough size, what needs doing. Two minutes on the form or a phone call, whichever you prefer.",
  },
  {
    title: "We send a fixed price",
    body: "A written quote by email, usually within one working day. No hourly estimates that creep upward on the day.",
  },
  {
    title: "We clean, you check",
    body: "Insured cleaners, eco-friendly products, and a walk-round at the end. If something's been missed, we come back.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_1fr]">
          <div className="bg-moss px-6 py-14 text-white sm:px-10 lg:py-20">
            <h1 className="max-w-[16ch] text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
              Cleaners who turn up, in Cheltenham, Yate and Bristol.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85">
              Novelti is a small Cheltenham-based team cleaning homes, offices
              and rentals across Gloucestershire. Fixed prices, eco-friendly
              products, and the same faces each visit.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/get-a-quote"
                className="bg-white px-7 py-4 font-display text-base font-bold text-moss transition-colors hover:bg-amber hover:text-ink"
              >
                Get a fixed quote
              </Link>
              <a
                href="tel:+447454265760"
                className="border border-white/45 px-7 py-4 font-display text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Call 07454 265760
              </a>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:min-h-full">
            <Image
              src="/Images/cleaners_working.jpg"
              alt="Novelti cleaners working in a customer's home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Hard facts, not feature cards */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl divide-y divide-white/12 px-5 py-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="py-4 sm:px-6 sm:first:pl-0">
            <p className="font-display text-2xl font-bold">Fully insured</p>
            <p className="mt-1 text-sm text-paper/65">
              Public liability cover — [add insurer and amount]
            </p>
          </div>
          <div className="py-4 sm:px-6">
            <p className="font-display text-2xl font-bold">Fixed quotes</p>
            <p className="mt-1 text-sm text-paper/65">
              Priced before we start, in writing
            </p>
          </div>
          <div className="py-4 sm:px-6">
            <p className="font-display text-2xl font-bold">Eco products</p>
            <p className="mt-1 text-sm text-paper/65">
              Safe around children and pets
            </p>
          </div>
          <div className="py-4 sm:px-6 sm:last:pr-0">
            <p className="font-display text-2xl font-bold">4 towns</p>
            <p className="mt-1 text-sm text-paper/65">
              Cheltenham, Gloucester, Yate, Bristol
            </p>
          </div>
        </div>
      </section>

      {/* Services — alternating, not a three-card grid */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-[20ch] text-3xl sm:text-4xl">
          Three kinds of work, one team.
        </h2>

        <div className="mt-14 space-y-16">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <Photo
                src={service.image}
                alt={service.title}
                brief="a cleaner working in a real client kitchen, natural light"
                className={`min-h-[260px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              />
              <div>
                <h3 className="text-2xl sm:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-steel">
                  {service.lead}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-moss pl-3 text-[15px] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.slug}
                  className="mt-7 inline-block border-b-2 border-amber pb-0.5 font-display font-bold text-ink hover:border-moss"
                >
                  What {service.title.toLowerCase()} covers
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process — numbered because it genuinely is a sequence */}
      <section className="border-y border-line bg-moss-pale">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-[22ch] text-3xl sm:text-4xl">
            How booking a clean works.
          </h2>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-moss pt-5">
                <p className="font-display text-sm font-bold text-moss">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-3 max-w-[38ch] leading-relaxed text-steel">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-[24ch] text-3xl sm:text-4xl">
          What customers say.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <blockquote
              key={n}
              className="border border-line bg-white p-7 text-[15px] leading-relaxed text-steel"
            >
              <p>
                Real Google review {n} goes here — pull the wording, first name
                and town straight from the Google Business Profile.
              </p>
              <footer className="mt-5 font-display font-bold text-ink">
                Name, Town
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Get a fixed quote.</h2>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-steel">
              Send the details and Bunmi will price the job properly rather than
              guessing. Most quotes go out the same day.
            </p>
            <p className="mt-8 font-display text-lg font-bold text-ink">
              Would rather talk?
            </p>
            <a
              href="tel:+447454265760"
              className="mt-1 block font-display text-3xl font-bold text-moss hover:text-moss-deep"
            >
              07454 265760
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
