import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedPrograms() {
  const programs = [
    {
      title: "Rescue & Rehabilitation",
      description:
        "We rescue abandoned, injured, and neglected cows and provide them with medical care and rehabilitation.",
      image: "/images/white-cow-portrait.webp",
      link: "/what-we-do#rescue",
    },
    {
      title: "Shelter & Care",
      description:
        "Our shelters provide a safe haven for cows with nutritious food, clean water, and regular health check-ups.",
      image: "/images/feeding-cows.jpeg",
      link: "/what-we-do#shelter",
    },
    {
      title: "Education & Awareness",
      description:
        "We conduct workshops, school programs, and community outreach to promote cow welfare and protection.",
      image: "/images/three-cows-portrait.jpeg",
      link: "/what-we-do#education",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Our Programs</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          We take a comprehensive approach to cow welfare, addressing immediate needs while working toward long-term
          solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 w-full">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-700">{program.title}</h3>
                <p className="mb-4 text-gray-600">{program.description}</p>
                <Link href={program.link}>
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/what-we-do">
            <Button className="bg-green-700 hover:bg-green-800">View All Programs</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
