import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Setting from "../components/Setting"

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <main className='flex h-full relative justify-end'>
          <Navbar />
          {/* <Setting /> */}
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className='flex h-full w-full relative  px-5 pt-20 md:max-w-[calc(100%_-_15rem)] lg:max-w-[calc(100%_-_25rem)]'>
            <Component {...pageProps} />
          </div>
        </main>)
}

export default MyApp
