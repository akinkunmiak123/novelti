import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Photo from '@/components/Photo'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'End of tenancy cleaning in Cheltenham, Gloucester, Yate & Bristol',
  description:
    'Move-out cleaning to letting agent and landlord standards. Fixed price, checklist provided, booked around your move date.',
  alternates: { canonical: '/end-of-tenancy-cleaning' },
}

const checklist = [
  {
    room: 'Kitchen',
    tasks: [
      'Oven, hob and extractor, inside and out',
      'Fridge and freezer cleaned throughout',
      'Cupboards inside and out',
      'Worktops, splashbacks and sink descaled',
      'Floor cleaned',
    ],
  },
  {
    room: 'Bathrooms',
    tasks: [
      'Limescale removed from tiles, taps and screens',
      'Toilet, bath and shower deep cleaned',
      'Extractor fan and mirrors',
      'Grout attended to, not just wiped over',
    ],
  },
  {
    room: 'Bedrooms & living areas',
    tasks: [
      'Skirting boards, doors and frames',
      'Internal windows and sills',
      'Carpets vacuumed (shampoo available on request)',
      'Wardrobes and drawers cleaned out',
    ],
  },
  {
    room: 'Throughout',
    tasks: [
      'Light fittings and switches',
      'Radiators, front and back',
      'Cobwebs and high-level dusting',
      'Bins left empty',
    ],
  },
]

const timeline = [
  {
    title: 'Book your date',
    body: "Give us the move-out date and the property size. We work around agent inspections and the handover, so tell us the deadline you're cleaning to.",
  },
  {
    title: 'We send a fixed price',
    body: 'One price for the whole clean, based on the checklist above — not an hourly rate that runs over on the day.',
  },
  {
    title: 'Clean, then a walk-round',
    body: 'We work through the property room by room and do a final check before we finish. If anything on the checklist was missed, tell us before you hand back the keys.',
  },
]

const faqs = [
  {
    q: 'Will this get my deposit back?',
    a: "A thorough clean to the checklist above covers the cleaning side of most check-outs. Deposit deductions can also come from damage, missing items or unpaid rent, which are outside what a clean can fix — so we can't promise the deposit itself, only that the cleaning won't be the reason you lose part of it.",
  },
  {
    q: 'Do you clean to letting agent standards?',
    a: 'Yes, our checklist is built around what agents and inventory clerks check at a move-out inspection — ovens, limescale, and the insides of cupboards and appliances, not just visible surfaces.',
  },
  {
    q: 'How close to moving day can I book?',
    a: 'We can often fit in short-notice bookings — ask when you call. Booking a week or more ahead gives you the most flexibility on timing.',
  },
  {
    q: 'Does the price include carpets?',
    a: 'Vacuuming is included. Carpet shampooing is available as an add-on and priced separately, since it depends on the size and condition of the carpets.',
  },
  {
    q: "What if the agent isn't happy with something?",
    a: "Let us know what they've flagged and we'll come back to put it right, provided it's within what was agreed on the checklist.",
  },
  {
    q: 'Is the property empty or can you clean around furniture?',
    a: "Either works. An empty property lets us get behind and underneath everything, which is worth knowing if you're able to move furniture out before we arrive.",
  },
]

export default function EndOfTenancyCleaningPage() {
  return (
    <>
      <PageHero
        title="One clean, done properly, before the keys go back."
        lead="Move-out cleaning across Cheltenham, Gloucester, Yate and Bristol, built around what letting agents actually check. Fixed price, agreed before we start."
        photoAlt="A Novelti cleaner deep cleaning a kitchen before a tenancy handover"
        photoBrief="before-and-after shot of an oven or kitchen mid end-of-tenancy clean"
        photoSrc="/Images/tenancy/tenancy.jpg"
      />

      {/* Checklist */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">What's on the checklist.</h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-steel">
              This is the list an inventory clerk actually works through — not
              just the rooms that are easy to see. We check it off before we
              leave.
            </p>
            <p className="mt-4 max-w-[46ch] leading-relaxed text-steel">
              Tell us if the property has anything unusual — a range cooker, a
              second bathroom, a garden room — and we'll price it into the quote
              rather than surprise you on the day.
            </p>
          </div>

          <div className="grid gap-px bg-line sm:grid-cols-2">
            {checklist.map((group) => (
              <div key={group.room} className="bg-paper p-6">
                <h3 className="text-xl">{group.room}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex gap-3 text-[15px] leading-snug text-steel"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-moss"
                      >
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
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-line bg-moss-pale">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-[22ch] text-3xl sm:text-4xl">
            How a move-out clean is booked.
          </h2>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3">
            {timeline.map((step, i) => (
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

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo
            alt="Empty rental property ready for handover"
            src="/Images/tenancy/inspection.jpg"
            brief="an empty, freshly cleaned rental room ready for inspection"
            className="min-h-[260px]"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl">
              Tenants, landlords and agents.
            </h2>
            <p className="mt-5 max-w-[48ch] leading-relaxed text-steel">
              Tenants book us directly before handing back keys. Landlords and
              letting agents book us between tenancies, often on a standing
              arrangement so the property's ready to re-list without a gap.
            </p>
            <p className="mt-4 max-w-[48ch] leading-relaxed text-steel">
              If you manage more than one property, ask about a fixed rate for
              regular turnovers.
            </p>
          </div>
        </div>
      </section>

      <Faq heading="Questions before you book." items={faqs} />

      <CtaBand
        heading="Give us your move-out date."
        body="Property size, address and the date you need it done by — we'll send a fixed price back, usually the same day."
      />
    </>
  )
}
