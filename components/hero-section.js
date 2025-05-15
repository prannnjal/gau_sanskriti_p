import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cow-closeup-sunset.jpeg"
          alt="Cow in a sanctuary at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            A BETTER LIFE FOR INDIA'S SACRED COWS
          </h1>
          <p className="text-xl text-white mb-8">
            We are shelter and foster focused, working to build a strong, compassionate cow welfare network across
            India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/donate">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg">
                DONATE
              </Button>
            </Link>
            <Link href="/what-we-do">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-800 font-bold py-3 px-8 rounded-md text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
