'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  defaultConsent,
  readConsent,
  writeConsent,
  type ConsentState,
} from '@/lib/cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(readConsent() === null)
  }, [])

  function acceptAll() {
    const state: ConsentState = { necessary: true, analytics: true }
    writeConsent(state)
    setVisible(false)
  }

  function rejectNonEssential() {
    writeConsent(defaultConsent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink text-paper"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[62ch] text-sm leading-relaxed text-paper/85">
          We use a small number of cookies to keep this site working and, if you
          agree, to understand which pages are useful. See our{' '}
          <Link href="/cookie-preferences" className="underline">
            cookie preferences
          </Link>{' '}
          for details.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="border border-white/30 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-white/10"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="bg-amber px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
