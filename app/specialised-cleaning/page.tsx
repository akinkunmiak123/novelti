import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Photo from '@/components/Photo'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Specialised cleaning: windows, patios & after builders | Cheltenham',
  description:
    'Window cleaning, patio and jet washing, and after-builders cleans across Cheltenham, Gloucester, Yate and Bristol. Quoted on the job, not a standard rate.',
  alternates: { canonical: '/specialised-cleaning' },
}

const jobs = [
  {
    name: 'Window cleaning',
    body: "Outside glass, frames and sills cleaned on a one-off or a regular round — monthly is the usual interval, but we'll work to what you want.",
    brief: 'exterior window cleaning in progress, pole and water-fed system',
    image: '/Images/specialized/exterior_window.jpg',
  },
  {
    name: 'Patios & driveways',
    body: 'Pressure washing that lifts algae, moss and general build-up from paving, block driveways and decking, without damaging the surface.',
    brief: 'before-and-after of a patio or driveway being jet washed',
    image: '/Images/specialized/jet_wash.jpg',
  },
  {
    name: 'After builders',
    body: "Building dust gets everywhere — on sills, in light fittings, in the corners of every room. We clear it out before the property's handed over or lived in.",
    brief:
      'a newly built or renovated room mid-clean, dust sheets, fine detail work',
    image: '/Images/specialized/Building.jpg',
  },
  {
    name: 'New build cleans',
    body: 'Developer-standard sparkle clean before a new home is handed over to its buyer: glass, fittings, floors, and every surface a snagging inspection checks.',
    brief: 'a new-build interior finished and ready for handover',
    image: '/Images/specialized/new_build.jpg',
  },
]

const process = [
  {
    title: 'Describe the job',
    body: "Send a couple of photos if you can — a patio, a set of windows, a room after building work. It's the fastest way for us to price it accurately.",
  },
  {
    title: 'We quote the job itself',
    body: 'These jobs vary too much for a fixed rate card, so we price each one on size, condition and access rather than guessing.',
  },
  {
    title: 'We book a date that suits',
    body: "Weather-dependent work like jet washing gets scheduled with a bit of flexibility built in, so a rained-off day doesn't mean starting the quote again.",
  },
]

const faqs = [
  {
    q: 'Do you jet wash in winter?',
    a: "Yes, though we'll work around frost and heavy rain for safety and to get a proper result. If your date needs to move because of weather, we'll rearrange rather than cancel.",
  },
  {
    q: 'How often should windows be cleaned?',
    a: "Monthly is common for a noticeable difference, but plenty of customers book quarterly. One-off cleans are fine too — there's no minimum commitment.",
  },
  {
    q: 'Will jet washing damage my patio or block paving?',
    a: "Done properly, no. We adjust pressure and technique to the surface — old, soft stone needs a gentler approach than modern block paving. If we're ever unsure, we'll say so before starting rather than risk it.",
  },
  {
    q: 'How do you price an after-builders clean?',
    a: 'On the size of the property and how much building dust and debris there is. A snagging-list clean before a new owner moves in is priced differently to a light dust-down after a small renovation.',
  },
  {
    q: 'Can you do a specialised job alongside a regular clean?',
    a: "Yes — plenty of customers book a one-off patio or window clean on top of a regular house clean. Just mention it when you get in touch and we'll quote both.",
  },
  {
    q: 'Are you insured for exterior and building work?',
    a: 'Yes. We hold public liability cover with [confirm insurer] for [confirm amount], which covers our specialised and after-builders work as well as domestic and commercial cleaning.',
  },
]

export default function SpecialisedCleaningPage() {
  return (
    <>
      <PageHero
        title="The jobs that need the right kit, not the right roster."
        lead="Window cleaning, patio and driveway jet washing, and after-builders cleans across Cheltenham, Gloucester, Yate and Bristol. Quoted on the job in front of us."
        photoAlt="Exterior jet washing of a patio"
        photoBrief="a patio, driveway or set of windows mid-clean — the most visual proof-of-work page on the site, so a strong before-and-after matters most here"
        photoSrc="/Images/specialized/patio.jpeg"
      />

      {/* Jobs — alternating, matches the other service pages */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-[22ch] text-3xl sm:text-4xl">What we cover.</h2>

        <div className="mt-14 space-y-16">
          {jobs.map((job, i) => (
            <article
              key={job.name}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <Photo
                alt={job.name}
                src={job.image}
                brief={job.brief}
                className={`min-h-[240px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              />
              <div>
                <h3 className="text-2xl sm:text-3xl">{job.name}</h3>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-steel">
                  {job.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why quoted differently */}
      <section className="border-y border-line bg-moss-pale">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-[22ch] text-3xl sm:text-4xl">
            How we quote this work.
          </h2>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3">
            {process.map((step, i) => (
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

      {/* Honesty section */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">
              Worth knowing before you book.
            </h2>
            <p className="mt-5 max-w-[48ch] leading-relaxed text-steel">
              This kind of work depends more on the state of the surface or site
              than most cleaning — so a couple of things are worth flagging up
              front.
            </p>
          </div>
          <ul className="grid gap-3 text-[15px] leading-relaxed text-ink">
            {[
              "Very old or damaged paving may not come fully clean — we'll tell you honestly what to expect before starting",
              'Jet washing is weather-dependent and may need rescheduling',
              'Heavy building debris (rubble, offcuts) needs clearing before we can clean around it',
              'Very high or difficult-access windows may be outside what we can safely reach',
            ].map((item) => (
              <li key={item} className="border-l-2 border-amber pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq heading="Questions about specialised jobs." items={faqs} />

      <CtaBand
        heading="Send us a couple of photos."
        body="Windows, a patio, or a room after building work — a quick photo and a postcode is usually enough for us to quote the job properly."
      />
    </>
  )
}
