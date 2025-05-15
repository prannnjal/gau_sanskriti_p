import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ImpactSection from "@/components/impact-section"
import FeaturedPrograms from "@/components/featured-programs"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ImpactSection />
      <FeaturedPrograms />
      <TestimonialsSection />

      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Your support helps us provide shelter, medical care, and protection for cows across India. Together, we can
            make a difference in their lives.
          </p>
          <Link href="/donate">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
