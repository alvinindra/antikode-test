import Head from 'next/head'
import { Tstar, Trebuc } from '@/components/Base/Fonts/Fonts'
import clsx from 'clsx'
import HomeJumbotron from '@/components/Home/HomeJumbotron/HomeJumbotron'
import HomeExpertise from '@/components/Home/HomeExpertise/HomeExpertise'
import HomeCareer from '@/components/Home/HomeCareer/HomeCareer'
import Footer from '@/components/Base/Footer/Footer'
import HomeNews from '@/components/Home/HomeNews/HomeNews'
import HomeProgram from '@/components/Home/HomeProgram/HomeProgram'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daya Dimensi</title>
        <meta
          name="description"
          content="Daya Dimensi Indonesia is a world-class strategic partner for individual and organisational transformation through humanity-based and technology-supported solutions to help you hire, promote, and develop exceptional leaders."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx(Tstar.variable, Trebuc.variable)}>
        <HomeJumbotron />
        <HomeExpertise />
        <HomeProgram />
        <HomeNews />
        <HomeCareer />
        <Footer />
      </main>
    </>
  )
}
