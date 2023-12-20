import localFont from 'next/font/local'

const Tstar = localFont({
  src: [
    {
      path: '../../../assets/fonts/TStarProLight.ttf',
      weight: '200',
    },
    {
      path: '../../../assets/fonts/TStarProMedium.ttf',
      weight: '300',
    },
    {
      path: '../../../assets/fonts/TStarProRegular.ttf',
      weight: '400',
    },
    {
      path: '../../../assets/fonts/TStarProBold.ttf',
      weight: '700',
    },
  ],
})

const Trebuc = localFont({
  src: [
    {
      path: '../../../assets/fonts/trebuc.ttf',
      weight: '400',
    },
  ],
})

export { Tstar, Trebuc }
