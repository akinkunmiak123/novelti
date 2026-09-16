import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How Novelti Cleaning Services collects, uses and protects your personal data.',
  alternates: { canonical: '/privacy' },
}

const sections = [
  {
    heading: 'Who we are',
    body: (
      <>
        <p>
          Novelti Cleaning Services ("we", "us") provides domestic, commercial,
          end of tenancy and specialised cleaning across Cheltenham, Gloucester,
          Yate and Bristol.
        </p>
        <p className="mt-3">
          Registered address: [confirm registered address]
          <br />
          Company number: [confirm Companies House number, if registered]
          <br />
          Contact:{' '}
          <a
            href="mailto:info@novelticleaning.com"
            className="text-moss underline"
          >
            info@novelticleaning.com
          </a>{' '}
          · 07454 265760
        </p>
      </>
    ),
  },
  {
    heading: 'What we collect',
    body: (
      <>
        <p>When you get a quote or get in touch, we ask for:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Your name, phone number and email address</li>
          <li>Your postcode or address, so we can quote and attend the job</li>
          <li>
            Details about the property and the work you'd like done (size,
            service required, access notes)
          </li>
          <li>Any message you send us directly</li>
        </ul>
        <p className="mt-3">
          We don't ask for payment card details through this website. Any
          payment for a job is arranged separately.
        </p>
      </>
    ),
  },
  {
    heading: 'Why we collect it',
    body: (
      <>
        <p>We use your details to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Provide a quote and respond to your enquiry</li>
          <li>Arrange and carry out the cleaning you've booked</li>
          <li>Keep basic records of past jobs and quotes</li>
          <li>Meet our legal and accounting obligations</li>
        </ul>
        <p className="mt-3">
          We rely on your enquiry as the basis for using your details to respond
          to it, and on our contract with you once a job is booked. We don't use
          your details for anything beyond running the business, and we don't
          sell your data to anyone.
        </p>
      </>
    ),
  },
  {
    heading: 'Who we share it with',
    body: (
      <>
        <p>
          The cleaner or team assigned to your job sees what's needed to do the
          work — your address, access details and any notes about the property.
          We may also share details with:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Our accountant, for invoicing and tax purposes</li>
          <li>
            Service providers who help run the site or send emails on our behalf
            (for example, our hosting or email provider)
          </li>
          <li>Authorities, if we're legally required to</li>
        </ul>
        <p className="mt-3">
          We don't share your data with anyone for marketing purposes.
        </p>
      </>
    ),
  },
  {
    heading: 'How long we keep it',
    body: (
      <p>
        We keep enquiry and job details for [confirm retention period — e.g. 6
        years, to match accounting record requirements], after which they're
        deleted. If you ask us to delete your details sooner and we have no
        legal reason to keep them, we will.
      </p>
    ),
  },
  {
    heading: 'Cookies',
    body: (
      <p>
        This site uses a small number of cookies — the essential ones needed for
        the site to function, and, only if you agree, analytics cookies to help
        us understand how the site is used. You can review or change your choice
        any time on the{' '}
        <Link href="/cookie-preferences" className="text-moss underline">
          cookie preferences
        </Link>{' '}
        page.
      </p>
    ),
  },
  {
    heading: 'Your rights',
    body: (
      <>
        <p>Under UK data protection law, you can ask us to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Show you what personal data we hold about you</li>
          <li>Correct anything that's inaccurate</li>
          <li>Delete your data, where we're not required to keep it</li>
          <li>Stop using your data for a particular purpose</li>
        </ul>
        <p className="mt-3">
          To ask about any of this, email{' '}
          <a
            href="mailto:info@novelticleaning.com"
            className="text-moss underline"
          >
            info@novelticleaning.com
          </a>
          . If you're unhappy with how we've handled your data, you can also
          complain to the Information Commissioner's Office (ICO) at{' '}
          <a
            href="https://ico.org.uk"
            className="text-moss underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: 'Changes to this policy',
    body: (
      <p>
        If we change how we handle your data, we'll update this page. Last
        updated: [confirm date of publication].
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl">Privacy policy.</h1>
      <p className="mt-6 max-w-[56ch] leading-relaxed text-steel">
        This explains what personal data Novelti Cleaning Services collects
        through this website, what we do with it, and what rights you have over
        it.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-2xl">{section.heading}</h2>
            <div className="mt-3 max-w-[62ch] leading-relaxed text-steel [&_a]:font-medium">
              {section.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
