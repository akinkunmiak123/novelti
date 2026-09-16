import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Commercial cleaning in Cheltenham, Gloucester, Yate & Bristol",
  description:
    "Office, retail and commercial kitchen cleaning outside your trading hours. Fixed contract pricing, insured cleaners, eco-friendly products.",
  alternates: { canonical: "/commercial-cleaning" },
};

const sectors = [
  {
    name: 'Offices',
    body: 'Desks, kitchens and washrooms kept to a standard your team stops noticing — which is the point. Bins, floors, glass and communal areas on every visit.',
    brief:
      'an office floor being cleaned early morning, desks and glass partitions',
    image: '/Images/commercial/partitions.jpg',
  },
  {
    name: 'Retail units',
    body: 'Shop floor, fitting rooms, till points and stockroom, timed around your opening hours so cleaning never gets in the way of trading.',
    brief: 'a shop floor or till area being cleaned before opening',
    image: '/Images/commercial/shop.jpg',
  },
  {
    name: 'Commercial kitchens',
    body: 'Deep cleans that hold up to an EHO visit — extraction, floors, behind equipment — alongside lighter daily or weekly maintenance cleans.',
    brief: 'a commercial kitchen mid-deep-clean, stainless surfaces',
    image: '/Images/commercial/stainless_surfaces.jpg',
  },
  {
    name: 'Airbnb & short-let changeovers',
    body: "Turned around between guests to a consistent standard, with linen and consumables restocked if you'd like us to handle that too.",
    brief: 'a short-let apartment being reset between guests',
    image: '/Images/commercial/luxury_bedroom.jpg',
  },
]

const contractSteps = [
  {
    title: "Walk the site with you",
    body: "We look at the space, ask about your hours and any areas that need particular attention, and note access and keyholding arrangements.",
  },
  {
    title: "Agree a written schedule and price",
    body: "A fixed monthly price and a clear spec of what's covered on each visit, so there's nothing to renegotiate later.",
  },
  {
    title: "Clean to the spec, checked",
    body: "Insured, DBS-checkable cleaners working to the agreed spec. Raise anything with us and it's corrected on the next visit, not the next quarter.",
  },
];

const faqs = [
  {
    q: "Can you clean outside our trading hours?",
    a: "Yes — early morning, evening or overnight by arrangement. Most of our commercial contracts are timed so cleaning never overlaps with customers or staff.",
  },
  {
    q: "Do you supply your own equipment and products?",
    a: "We do, and everything is eco-friendly and non-toxic. If your site has products or protocols you need us to follow instead — food safety, COSHH — we'll work to those.",
  },
  {
    q: "How is commercial cleaning priced?",
    a: "By fixed monthly contract based on the size of the site, the spec, and how often you need us. You'll get a written quote after we've walked the space — not a rate per hour that varies month to month.",
  },
  {
    q: "Can you manage keys or an alarm code?",
    a: "Yes, keyholding and alarm access can be arranged as part of the contract. We'll agree how that's handled with you directly.",
  },
  {
    q: "What happens if we're not happy with a clean?",
    a: "Tell us and we'll come back to fix it. If something's consistently being missed, we'll review the spec with you rather than let it repeat.",
  },
  {
    q: "Are you insured for commercial premises?",
    a: "Yes. We hold public liability cover with [confirm insurer] for [confirm amount], and can provide a certificate for your records before work starts.",
  },
];

export default function CommercialCleaningPage() {
  return (
    <>
      <PageHero
        title="Commercial cleaning that fits around your business."
        lead="Offices, shops, commercial kitchens and short-lets across Gloucestershire, Yate and Bristol. Cleaned outside your hours, priced on a fixed monthly contract."
        photoAlt="A Novelti cleaner working in a commercial premises"
        photoBrief="a cleaner working in a real office or shop, early morning or after hours"
        photoSrc="/Images/commercial/office.jpg"
      />

      {/* Sectors — alternating like the homepage, not a card grid */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-[22ch] text-3xl sm:text-4xl">
          Premises we clean.
        </h2>

        <div className="mt-14 space-y-16">
          {sectors.map((sector, i) => (
            <article
              key={sector.name}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <Photo
                alt={sector.name}
                src={sector.image}
                brief={sector.brief}
                className={`min-h-[240px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              />
              <div>
                <h3 className="text-2xl sm:text-3xl">{sector.name}</h3>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-steel">
                  {sector.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How a contract works — numbered, genuinely a sequence */}
      <section className="border-y border-line bg-moss-pale">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-[22ch] text-3xl sm:text-4xl">
            How a contract starts.
          </h2>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3">
            {contractSteps.map((step, i) => (
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

      {/* What's covered / not — same honesty device as domestic page */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">
              What's in a standard contract.
            </h2>
            <ul className="mt-6 space-y-2.5">
              {[
                'Floors vacuumed and mopped',
                'Kitchens and washrooms cleaned and restocked',
                'Desks and surfaces wiped',
                'Bins emptied, liners replaced',
                'Internal glass and partitions',
                'Communal and reception areas',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-snug text-ink"
                >
                  <span aria-hidden="true" className="mt-1 shrink-0 text-moss">
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <path
                        d="M2 7.5 5.5 11 12 3.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        fill="none"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">What we agree separately.</h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-steel">
              These aren't excluded — they just get scoped and priced as part of
              the walk-round rather than bundled into every contract by default.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {[
                'Deep cleans and periodic carpet cleaning',
                'External window cleaning',
                'Consumable restocking (soap, paper, bin liners)',
                'Keyholding and alarm access',
                'Work above safe ladder height',
              ].map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-amber pl-3 text-[15px] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq heading="Questions from business clients." items={faqs} />

      <CtaBand
        heading="Let's walk the site."
        body="Tell us a bit about the premises and we'll arrange a walk-round, then send a written spec and a fixed monthly price."
      />
    </>
  )
}
