
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

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
  title: 'Vítek Petžílek',
  description:
    'Jsem vášnivý tvůrce videí již od malička. Má práce spočívá v tom, vytvářet nejen videa, ale skutečné vizuální zážitky.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={`${helveticaNeue.className}`}>
        <header className="relative z-10">
          <Navigation />
        </header>
          {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
