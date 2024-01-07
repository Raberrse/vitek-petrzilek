
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navigation, ScrollToTop } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Script from 'next/script';

const helveticaNeue = localFont({
  src: [
    { path: '../fonts/HelveticaNeueBold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/HelveticaNeueItalic.ttf', weight: 'normal', style: 'italic' },
    { path: '../fonts/HelveticaNeueLight.otf', weight: '300', style: 'normal' },
    { path: '../fonts/HelveticaNeueLightItalic.otf', weight: '300', style: 'italic' },
    { path: '../fonts/HelveticaNeueMedium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/HelveticaNeueRoman.otf', weight: '400', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  keywords: ['Video', 'Video editor', 'Tvorba videí', 'Natáčení', 'Grafik', 'Kameraman', 'Vítek Petržílek'],
  title: 'Vítek Petžílek',
  description:
    'Jsem vášnivý tvůrce videí již od malička. Má práce spočívá v tom, vytvářet nejen videa, ale skutečné vizuální zážitky.',
  twitter: {
    title: 'Vítek Petržílek',
    description: 'Jsem vášnivý tvůrce videí již od malička. Má práce spočívá v tom, vytvářet nejen videa, ale skutečné vizuální zážitky.',
    images: ['/thumbnail.jpg'],
    card: 'summary_large_image'
  },
  openGraph:{ 
    title: 'Vítek Petržílek',
    description: 'Jsem vášnivý tvůrce videí již od malička. Má práce spočívá v tom, vytvářet nejen videa, ale skutečné vizuální zážitky.',
    url: 'https://www.vitekpetrzilek.cz/',
    images: ['/thumbnail.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="cs">
      <Script defer src="https://smtpjs.com/v3/smtp.js"></Script>
      <body className={`${helveticaNeue.className}`}>
        <header className="relative z-10">
          <Navigation />
        </header>

        <main>
          <ScrollToTop />
          {children}
        </main>
        
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
