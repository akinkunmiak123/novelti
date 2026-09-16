import type { Metadata } from 'next'
import CookiePreferencesForm from '@/components/CookiePreferencesForm'

export const metadata: Metadata = {
  title: 'Cookie preferences',
  description:
    'Manage which cookies Novelti Cleaning Services is allowed to use on this site.',
  alternates: { canonical: '/cookie-preferences' },
  robots: { index: false, follow: true },
}

export default function CookiePreferencesPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl">Cookie preferences.</h1>
      <p className="mt-6 max-w-[56ch] leading-relaxed text-steel">
        Choose which cookies you're happy for this site to use. Necessary
        cookies can't be switched off, since the site won't work properly
        without them. Your choice is stored on this device and you can change it
        here at any time.
      </p>

      <CookiePreferencesForm />

      <p className="mt-10 max-w-[56ch] text-sm leading-relaxed text-steel">
        For more on what we collect and why, see the{' '}
        <a href="/privacy" className="text-moss underline">
          privacy policy
        </a>
        .
      </p>
    </section>
  )
}
