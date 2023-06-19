import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Trilochan Behera</title>
      <meta name="description" content="Trilochan Behera Portfolio website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Images/welcome.gif" />
    </Head>
    <div className='bg-primary-dark'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
  )
}
