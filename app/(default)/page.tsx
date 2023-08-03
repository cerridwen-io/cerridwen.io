export const metadata = {
  title: 'Cerridwen.io',
  description: 'Agtech innovation',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Newsletter /> */}
    </>
  )
}
