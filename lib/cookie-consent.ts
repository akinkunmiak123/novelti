export type ConsentCategory = 'necessary' | 'analytics'

export type ConsentState = Record<ConsentCategory, boolean>

export const CONSENT_STORAGE_KEY = 'novelti-cookie-consent'

export const defaultConsent: ConsentState = {
  necessary: true, // always on — the site can't function without these
  analytics: false,
}

export const categories: {
  id: ConsentCategory
  label: string
  body: string
  locked?: boolean
}[] = [
  {
    id: 'necessary',
    label: 'Necessary',
    body: "Required for the site to work — remembering your cookie choice and letting the quote and contact forms submit. These can't be switched off.",
    locked: true,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    body: 'Helps us see which pages are useful, using aggregated, anonymised traffic data. Off until you say yes. No analytics tool is wired up yet — this toggle is ready for when one is.',
  },
]

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    return { ...defaultConsent, ...JSON.parse(raw) }
  } catch {
    return null
  }
}

export function writeConsent(state: ConsentState) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state))
    window.dispatchEvent(
      new CustomEvent('novelti-consent-change', { detail: state }),
    )
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently,
    // the banner will just reappear next visit.
  }
}
