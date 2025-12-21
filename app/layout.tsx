import type { Metadata } from 'next'
import { Inter, Playfair, Playfair_Display, } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from './providers'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LogoSection } from '@/components/logo-section'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata: Metadata = {
  title: "Lin's Kitchen - Authentische Asiatische Küche | Perchtoldsdorf",
  description:
    "Genießen Sie frische asiatische Gerichte bei Lin's Kitchen. Geöffnet täglich zum Mittag- und Abendessen in Perchtoldsdorf.",
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body  className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          <Navigation />
          {children}
          <LogoSection />
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
