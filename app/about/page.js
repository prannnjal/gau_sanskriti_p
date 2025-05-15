import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import TeamSection from "@/components/team-section"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="About Us" description="Learn about our mission, vision, and the team behind Gau Sanskriti" />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">Our Story</h2>
              <p className="mb-4">
                Gau Sanskriti was founded in 2020 with a mission to protect and care for India's sacred cows. What began
                as a small shelter has grown into a comprehensive network of care facilities, medical centers, and
                educational programs across the country.
              </p>
              <p className="mb-4">
                Our foundation is built on the principle that cows deserve respect, care, and protection. In Indian
                culture, cows hold a sacred place, and we work to honor that tradition while providing modern,
                compassionate care.
              </p>
              <p>
                Today, we operate multiple shelters, run mobile veterinary units, and work with communities to create
                sustainable solutions for cow welfare.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/brown-cows-herd.jpeg" alt="Cows at our sanctuary" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-800">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Our Mission</h3>
              <p>
                To create a compassionate network of care for cows across India through rescue, rehabilitation, and
                education, ensuring these sacred animals live with dignity and respect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Our Vision</h3>
              <p>
                A world where every cow in India is treated with respect and compassion, where communities understand
                the importance of cow protection, and where sustainable practices ensure the welfare of these sacred
                animals for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="py-12 md:py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Cause</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether through donations, volunteering, or spreading awareness, your support makes our work possible.
            Together, we can create a better future for India's sacred cows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ways-to-help">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md">
                Ways to Help
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-800 font-bold py-3 px-8 rounded-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
