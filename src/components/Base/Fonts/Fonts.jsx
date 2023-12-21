import localFont from 'next/font/local'

const Tstar = localFont({
  variable: '--font-tstar',
  src: [
    {
      path: '../../../assets/fonts/TStarProLight.woff',
      weight: '300',
    },
    {
      path: '../../../assets/fonts/TStarProRegular.woff',
      weight: '400',
    },
    {
      path: '../../../assets/fonts/TStarProMedium.woff',
      weight: '500',
    },
    {
      path: '../../../assets/fonts/TStarProBold.woff',
      weight: '700',
    },
    {
      path: '../../../assets/fonts/TStarProHeavy.woff',
      weight: '800',
    },
  ],
  adjustFontFallback: 'Arial',
})

const Trebuc = localFont({
  src: '../../../assets/fonts/trebuc.woff',
  variable: '--font-trebuc',
  display: 'swap',
  adjustFontFallback: 'Arial',
})

export { Tstar, Trebuc }
