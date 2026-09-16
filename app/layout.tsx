import type { Metadata } from 'next'
import { Archivo, Karla } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CookieBanner from '@/components/CookieBanner'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['600', '700', '800'],
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.novelticleaning.com'),
  title: {
    default:
      'Novelti Cleaning Services | Cleaners in Cheltenham, Yate & Bristol',
    template: '%s | Novelti Cleaning Services',
  },
  description:
    'Domestic, commercial and end-of-tenancy cleaning across Cheltenham, Gloucester, Yate and Bristol. Fixed quotes, insured cleaners, eco-friendly products.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Novelti Cleaning Services',
    url: 'https://www.novelticleaning.com',
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HouseholdCleaningService',
  name: 'Novelti Cleaning Services',
  url: 'https://www.novelticleaning.com',
  email: 'info@novelticleaning.com',
  telephone: '+447454265760',
  areaServed: [
    'Cheltenham',
    'Gloucester',
    'Yate',
    'Bristol',
    'Gloucestershire',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cheltenham',
    addressRegion: 'Gloucestershire',
    addressCountry: 'GB',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${karla.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
