import Head from 'next/head'
import { Live } from '../components/Live'
import { Participate } from '../components/Participate'
import { Carousel } from '../components/Carousel'
import { Banner } from '../components/Banner'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { WhatsApp } from '../components/WhatsApp'
export default function Home() {
  return (
    <> 
      <WhatsApp/>
      <Head>
        <title>MaMa Live | A sua WebRádio de Campo Mourão - MaMa Live</title> 
      </Head>
      <Live/>
      <Participate/>
      <Carousel/>
      <Banner/>
      <Contact/>
      <Footer/>
    </>
  )
}
