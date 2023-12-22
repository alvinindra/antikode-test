import Head from 'next/head'
import { Tstar, Trebuc } from '@/components/Base/Fonts/Fonts'
import clsx from 'clsx'
import HomeJumbotron from '@/components/Home/HomeJumbotron/HomeJumbotron'
import HomeExpertise from '@/components/Home/HomeExpertise/HomeExpertise'
import HomeCareer from '@/components/Home/HomeCareer/HomeCareer'
import Footer from '@/components/Base/Footer/Footer'
import HomeNews from '@/components/Home/HomeNews/HomeNews'
import HomeProgram from '@/components/Home/HomeProgram/HomeProgram'
import AboutJumbotron from '@/components/About/AboutJumbotron/AboutJumbotron'
import AboutCollaborate from '@/components/About/AboutCollaborate/AboutCollaborate'
import AboutOurClients from '@/components/About/AboutOurClients/AboutOurClients'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Daya Dimensi</title>
        <meta
          name="description"
          content="Daya Dimensi Indonesia is a leadership consultant that supports organisations develop and deliver strategic programmes such as assessment centre, selection, learning, and personal & organisational transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx(Tstar.variable, Trebuc.variable)}>
        <AboutJumbotron />
        <AboutCollaborate />
        <AboutOurClients />
        <HomeCareer />
        <Footer />
      </main>
    </>
  )
}
