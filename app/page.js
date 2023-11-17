import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="hero-image">
        <Image
            src="/images/hero.png"
            alt="Next.js Logo"
            height="300"
            width="1000"
            priority
          />
        </div>
    </main>
  )
}
