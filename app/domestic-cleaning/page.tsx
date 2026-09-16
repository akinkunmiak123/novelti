import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Domestic cleaning in Cheltenham, Gloucester, Yate & Bristol",
  description:
    "Weekly, fortnightly and one-off house cleaning from a small Cheltenham team. Fixed prices, eco-friendly products, the same cleaner each visit.",
  alternates: { canonical: "/domestic-cleaning" },
};

const rooms = [
  {
    room: "Kitchen",
    tasks: [
      "Worktops, splashbacks and sink",
      "Hob and extractor wiped down",
      "Outside of all appliances and units",
      "Bins emptied and liners replaced",
      "Floor swept and mopped",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Bath, shower and screen descaled",
      "Toilet cleaned inside and out",
      "Basin, taps and tiles",
      "Mirrors polished",
      "Floor mopped",
    ],
  },
  {
    room: "Bedrooms and living areas",
    tasks: [
      "Dusting, including skirting and sills",
      "Beds made or linen changed",
      "Carpets vacuumed, hard floors mopped",
      "Mirrors and glass",
      "Tidying of surfaces",
    ],
  },
  {
    room: "Throughout",
    tasks: [
      "Light switches and door handles",
      "Stairs and hallways",
      "Internal glass doors",
      "Cobwebs removed",
    ],
  },
];

const options = [
  {
    name: "Regular clean",
    when: "Weekly or fortnightly",
    body: "The same cleaner, the same day each time. Most customers are out at work when we come and leave a key or a code.",
    price: "[confirm hourly rate or minimum visit]",
  },
  {
    name: "One-off deep clean",
    when: "Spring cleans, before guests, after a party",
    body: "Everything in the regular clean, plus inside cupboards and the fridge, behind furniture, and limescale taken back properly.",
    price: "[confirm from-price]",
  },
  {
    name: "Oven cleaning",
    when: "On its own or added to a clean",
    body: "Racks and trays soaked, door glass taken apart where it comes apart, and the inside brought back rather than wiped over.",
    price: "[confirm from-price]",
  },
  {
    name: "Carpets and upholstery",
    when: "Booked separately",
    body: "Hot-water extraction for carpets, stairs and sofas. Drying time depends on the fabric — we'll tell you what to expect.",
    price: "[confirm from-price]",
  },
];

const faqs = [
  {
    q: "Do I need to be at home?",
    a: "No. Most of our regular customers are at work while we clean. You can leave a key with us or give us a key-safe code, and we'll lock up behind us.",
  },
  {
    q: "Will it be the same cleaner every time?",
    a: "Yes, for regular cleans. You won't have to explain the house twice. If your cleaner is ill or on holiday we'll tell you in advance who is coming instead.",
  },
  {
    q: "Do you bring your own products and equipment?",
    a: "We do. Everything we use is eco-friendly and non-toxic, so it's safe around children and pets. If you'd rather we used your own products, just say so and we will.",
  },
  {
    q: "How do you price a regular clean?",
    a: "We ask for your postcode, the number of bedrooms and bathrooms, and how often you'd like us. You get a fixed price in writing before we start, not an hourly estimate that grows on the day.",
  },
  {
    q: "What if I need to cancel or move a visit?",
    a: "Give us [confirm notice period] and there's no charge. Life happens — if something comes up at short notice, ring us and we'll do what we can.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We hold public liability cover with [confirm insurer] for [confirm amount]. We can send you the certificate if you'd like to see it.",
  },
];

export default function DomesticCleaningPage() {
  return (
    <>
      <PageHero
        title="Domestic cleaning, done the same way every visit."
        lead="A small Cheltenham team cleaning homes across Gloucestershire and around Yate and Bristol. Non-toxic products, a fixed price agreed up front, and the same cleaner each time."
        photoAlt="A Novelti cleaner working in a customer's home"
        photoBrief="a cleaner working in a real client's kitchen, natural light"
        photoSrc="/Images/domestic/cleaner.jpg"
      />

      {/* Intro + room-by-room */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">What a clean covers.</h2>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-steel">
              Your home deserves more than a surface wipe-over. This is the list
              we work to on a standard visit, so you know what has been done and
              what hasn't.
            </p>
            <p className="mt-4 max-w-[46ch] leading-relaxed text-steel">
              If your house needs something different — a room left alone, the
              conservatory added, ironing on a Tuesday — tell us and we'll build
              it into your schedule.
            </p>
            <Photo
              alt="Cleaning products used by Novelti"
              src="/Images/domestic/eco.jpg"
              brief="the eco products and kit you actually carry, laid out"
              className="mt-8 min-h-[220px]"
            />
          </div>

          <div className="grid gap-px bg-line sm:grid-cols-2">
            {rooms.map((group) => (
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

      {/* Options */}
      <section className="border-y border-line bg-moss-pale">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-[24ch] text-3xl sm:text-4xl">
            Ways people book us.
          </h2>
          <div className="mt-12 divide-y divide-moss/20 border-y border-moss/20">
            {options.map((option) => (
              <article
                key={option.name}
                className="grid gap-4 py-7 lg:grid-cols-[0.9fr_1.4fr_0.7fr] lg:items-start lg:gap-10"
              >
                <div>
                  <h3 className="text-xl">{option.name}</h3>
                  <p className="mt-1 text-sm text-moss-deep">{option.when}</p>
                </div>
                <p className="max-w-[58ch] leading-relaxed text-steel">
                  {option.body}
                </p>
                <p className="font-display font-bold text-ink lg:text-right">
                  {option.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Honest exclusions */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">What we don't do.</h2>
            <p className="mt-5 max-w-[48ch] leading-relaxed text-steel">
              Worth saying plainly, so nobody is disappointed on the day. Some
              of these we can arrange as a separate job — just ask when you get
              your quote.
            </p>
          </div>
          <ul className="grid gap-3 text-[15px] leading-relaxed text-ink sm:grid-cols-2">
            {[
              'Clearing hoarded or heavily cluttered rooms',
              'Moving heavy furniture on our own',
              'Cleaning above safe ladder height',
              'Biohazard, pest or post-flood work',
              'Garden, garage and loft clearance',
              'Childcare or pet sitting alongside a clean',
            ].map((item) => (
              <li key={item} className="border-l-2 border-amber pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq heading="Questions we get asked most." items={faqs} />

      <CtaBand
        heading="Tell us about your house."
        body="Postcode, bedrooms, bathrooms and how often you'd like us. You'll have a fixed price back, usually within one working day."
      />
    </>
  )
}
