import Link from 'next/link'
import Logo from './Logo'

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-paper/70">
            Domestic, commercial and specialist cleaning across Gloucestershire
            and the Bristol fringe.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-paper">Cleaning</h2>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            <li>
              <Link href="/domestic-cleaning" className="hover:text-amber">
                Domestic cleaning
              </Link>
            </li>
            <li>
              <Link href="/commercial-cleaning" className="hover:text-amber">
                Commercial cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/end-of-tenancy-cleaning"
                className="hover:text-amber"
              >
                End of tenancy cleaning
              </Link>
            </li>
            <li>
              <Link href="/specialised-cleaning" className="hover:text-amber">
                Specialised cleaning
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-paper">Where we work</h2>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            <li>Cheltenham</li>
            <li>Gloucester</li>
            <li>Yate</li>
            <li>Bristol</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-paper">Get in touch</h2>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            <li>
              <a href="tel:+447454265760" className="hover:text-amber">
                07454 265760
              </a>
            </li>
            <li>
              <a href="tel:+447577742329" className="hover:text-amber">
                07577 742329
              </a>
            </li>
            <li>
              <a
                href="mailto:info@novelticleaning.com"
                className="hover:text-amber"
              >
                info@novelticleaning.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Novelti Cleaning Services</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-amber">
              Privacy policy
            </Link>
            <Link href="/cookie-preferences" className="hover:text-amber">
              Cookie preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
