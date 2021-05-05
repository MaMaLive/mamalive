import Head from 'next/head'
import { Live } from '../components/Live'
import { Participate } from '../components/Participate'
export default function Home() {
  return (
    <>
      <Head>
        <title>MaMa Live | A sua WebRádio de Campo Mourão - MaMa Live</title> 
      </Head>
      <Live/>
      <Participate/>
    </>
  )
}
