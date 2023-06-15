import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen bg-primary-dark'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )



}
