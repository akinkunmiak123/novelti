import type { Metadata } from 'next'
import Link from 'next/link'
import TownIcon from '@/components/TownIcon'
import AreaMap from '@/components/AreaMap'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Areas we cover: Cheltenham, Gloucester, Yate & Bristol',
  description:
    'Novelti Cleaning Services covers Cheltenham, Gloucester, Yate and Bristol for domestic, commercial and end of tenancy cleaning.',
  alternates: { canonical: '/areas' },
}

const areas = [
  {
    slug: 'cheltenham',
    name: 'Cheltenham',
    body: "Our home base. Most of our regular domestic rounds and commercial contracts are in and around Cheltenham, so it's where we can offer the most flexibility on timing.",
    brief: 'a recognisable Cheltenham street or building, Regency architecture',
  },
  {
    slug: 'gloucester',
    name: 'Gloucester',
    body: 'Regular cleans and end of tenancy work across Gloucester, including the areas closer to the docks and city centre where a lot of our rental work is.',
    brief: 'a Gloucester street scene or landmark',
  },
  {
    slug: 'yate',
    name: 'Yate',
    body: 'Covered as part of our regular round toward Bristol. Domestic and commercial cleaning available on the same fixed-price basis as our Cheltenham work.',
    brief: 'a Yate town centre or residential street scene',
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    body: 'We take on domestic, commercial and end of tenancy work across Bristol, with end of tenancy jobs especially common given the size of the rental market here.',
    brief: 'a Bristol street or skyline landmark',
  },
]

export default function AreasPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_1fr]">
          <div className="bg-moss px-6 py-14 text-white sm:px-10 lg:py-20">
            <h1 className="max-w-[17ch] text-4xl leading-[1.05] sm:text-5xl">
              Cleaning across Gloucestershire and the Bristol fringe.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85">
              Based in Cheltenham, working regularly across Gloucester, Yate and
              Bristol. If your postcode isn't listed below, ask — we often cover
              a wider radius than this page shows.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/get-a-quote"
                className="bg-white px-7 py-4 font-display text-base font-bold text-moss transition-colors hover:bg-amber hover:text-ink"
              >
                Check your postcode
              </Link>
              <a
                href="tel:+447454265760"
                className="border border-white/45 px-7 py-4 font-display text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Call 07454 265760
              </a>
            </div>
          </div>

          <AreaMap />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-[22ch] text-3xl sm:text-4xl">Where we work.</h2>

        <div className="mt-14 space-y-16">
          {areas.map((area, i) => (
            <article
              key={area.slug}
              id={area.slug}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <TownIcon
                town={
                  area.slug as 'cheltenham' | 'gloucester' | 'yate' | 'bristol'
                }
                className={`min-h-[220px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              />
              <div>
                <h3 className="text-2xl sm:text-3xl">{area.name}</h3>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-steel">
                  {area.body}
                </p>
                <Link
                  href="/get-a-quote"
                  className="mt-6 inline-block border-b-2 border-amber pb-0.5 font-display font-bold text-ink hover:border-moss"
                >
                  Get a quote for {area.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Not sure if we cover you?"
        body="Send your postcode and what you need cleaned — if we can't get to you, we'll say so straight away rather than leave you waiting."
      />
    </>
  )
}
