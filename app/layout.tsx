
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const helveticaNeue = localFont({
  src: [
    { path: '../fonts/helvetica-46-light-italic-587ebdb0ea724.ttf', weight: 'normal', style: 'italic' },
    { path: '../fonts/helvetica-47-light-condensed-587ebd7b5a6f6.ttf', weight: 'normal', style: 'italic' },
    { path: '../fonts/helvetica-75-bold-outline-587ebe00b76ba.ttf', weight: 'normal', style: 'italic' },
    { path: '../fonts/HelveticaBlkIt.ttf', weight: 'normal', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Black.otf', weight: '800', style: 'normal' },
    { path: '../fonts/HelveticaNeue-BlackCond.otf', weight: '800', style: 'normal' },
    { path: '../fonts/HelveticaNeue-BlackCondObl.otf', weight: '800', style: 'italic' },
    { path: '../fonts/HelveticaNeue-BlackExt.otf', weight: '800', style: 'normal' },
    { path: '../fonts/HelveticaNeue-BlackExtObl.otf', weight: '800', style: 'italic' },
    { path: '../fonts/HelveticaNeue-BoldCondObl.otf', weight: '700', style: 'italic' },
    { path: '../fonts/HelveticaNeue-BoldExt.otf', weight: '700', style: 'normal' },
    { path: '../fonts/HelveticaNeue-BoldExtObl.otf', weight: '700', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Condensed.otf', weight: '400', style: 'normal' },
    { path: '../fonts/HelveticaNeue-CondensedObl.otf', weight: '400', style: 'italic' },
    { path: '../fonts/HelveticaNeue-ExtBlackCond.otf', weight: '800', style: 'normal' },
    { path: '../fonts/HelveticaNeue-ExtBlackCondObl.otf', weight: '800', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Extended.otf', weight: '400', style: 'normal' },
    { path: '../fonts/HelveticaNeue-ExtendedObl.otf', weight: '400', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Heavy.otf', weight: '400', style: 'normal' },
    { path: '../fonts/HelveticaNeue-HeavyCond.otf', weight: '400', style: 'normal' },
    { path: '../fonts/HelveticaNeue-HeavyCondObl.otf', weight: '400', style: 'italic' },
    { path: '../fonts/HelveticaNeue-HeavyExt.otf', weight: '400', style: 'normal' },
    { path: '../fonts/HelveticaNeue-HeavyExtObl.otf', weight: '400', style: 'italic' },
    { path: '../fonts/HelveticaNeue-HeavyItalic.otf', weight: '400', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Light.otf', weight: '300', style: 'normal' },
    { path: '../fonts/HelveticaNeue-LightCondObl.otf', weight: '300', style: 'italic' },
    { path: '../fonts/HelveticaNeue-LightExt.otf', weight: '300', style: 'normal' },
    { path: '../fonts/HelveticaNeue-LightExtObl.otf', weight: '300', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/HelveticaNeue-MediumCond.otf', weight: '500', style: 'normal' },
    { path: '../fonts/HelveticaNeue-MediumCondObl.otf', weight: '500', style: 'italic' },
    { path: '../fonts/HelveticaNeue-MediumExt.otf', weight: '500', style: 'normal' },
    { path: '../fonts/HelveticaNeue-MediumExtObl.otf', weight: '500', style: 'italic' },
    { path: '../fonts/HelveticaNeue-Roman.otf', weight: '400', style: 'normal' },
    { path: '../fonts/HelveticaNeue-Thin.otf', weight: '100', style: 'normal' },
    { path: '../fonts/HelveticaNeue-ThinCond.otf', weight: '100', style: 'normal' },
    { path: '../fonts/HelveticaNeue-ThinCondObl.otf', weight: '100', style: 'italic' },
    { path: '../fonts/HelveticaNeue-ThinExtObl.otf', weight: '100', style: 'italic' },
    { path: '../fonts/HelveticaNeue-ThinItalic.otf', weight: '100', style: 'italic' },
    { path: '../fonts/HelveticaNeue-UltraLigCond.otf', weight: '200', style: 'normal' },
    { path: '../fonts/HelveticaNeue-UltraLigCondObl.otf', weight: '200', style: 'italic' },
    { path: '../fonts/HelveticaNeue-UltraLigExt.otf', weight: '200', style: 'normal' },
    { path: '../fonts/HelveticaNeueBold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/HelveticaNeueBoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../fonts/HelveticaNeueCondensedBlack.ttf', weight: '900', style: 'normal' },
    { path: '../fonts/HelveticaNeueCondensedBold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/HelveticaNeueItalic.ttf', weight: 'normal', style: 'italic' },
    { path: '../fonts/HelveticaNeueLight.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/HelveticaNeueLightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../fonts/HelveticaNeueMedium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/HelveticaNeueUltraLight.ttf', weight: '200', style: 'normal' },
    { path: '../fonts/HelveticaNeueUltraLightItal.ttf', weight: '200', style: 'italic' },
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
    <html lang="en">
      <body className={`${helveticaNeue.className}`}>
        {children}
      </body>
    </html>
  )
}
