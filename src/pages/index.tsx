import { Inter } from 'next/font/google'
import Banner from '@/components/AllPages/Banner'

const intr = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main>
        <Banner />
      </main>
    </>
  )
}
