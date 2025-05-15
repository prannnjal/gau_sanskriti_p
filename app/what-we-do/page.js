import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export default function WhatWeDo() {
  const programs = [
    {
      title: "Rescue & Rehabilitation",
      description:
        "We rescue abandoned, injured, and neglected cows and provide them with medical care and rehabilitation at our sanctuaries.",
      image: "/images/white-cow-portrait.webp",
      link: "/what-we-do/rescue",
    },
    {
      title: "Shelter & Care",
      description:
        "Our shelters provide a safe haven for cows with nutritious food, clean water, and regular health check-ups.",
      image: "/images/feeding-cows.jpeg",
      link: "/what-we-do/shelter",
    },
    {
      title: "Medical Treatment",
      description:
        "Our veterinary teams provide emergency care, routine check-ups, and specialized treatments for cows in need.",
      image: "/images/three-cows-portrait.jpeg",
      link: "/what-we-do/medical",
    },
    {
      title: "Education & Awareness",
      description:
        "We conduct workshops, school programs, and community outreach to promote cow welfare and protection.",
      image: "/images/cow-closeup-sunset.jpeg",
      link: "/what-we-do/education",
    },
    {
      title: "Sustainable Practices",
      description:
        "We develop and promote sustainable practices for cow care, including organic farming and cow-based products.",
      image: "/images/brown-cows-herd.jpeg",
      link: "/what-we-do/sustainable",
    },
    {
      title: "Advocacy",
      description:
        "We work with government agencies and policymakers to strengthen laws and policies for cow protection.",
      image: "/images/feeding-cows.jpeg",
      link: "/what-we-do/advocacy",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="What We Do" description="Our comprehensive approach to cow welfare and protection" />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">Our Approach</h2>
            <p className="text-lg">
              At Gau Sanskriti, we take a holistic approach to cow welfare, addressing immediate needs while working
              toward long-term solutions. Our programs span from direct care to education and advocacy, creating a
              comprehensive system of protection for India's sacred cows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-700">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{program.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={program.link} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">Our Impact</h2>
              <p className="mb-4">
                Since our founding, we have made a significant impact in the lives of cows across India:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Rescued and rehabilitated over 500 cows</li>
                <li>Provided shelter to more than 1,000 cows</li>
                <li>Conducted 5,000+ medical treatments</li>
                <li>Reached 10,000+ people through education programs</li>
                <li>Established 5 sanctuaries across India</li>
                <li>Trained 200+ community volunteers</li>
              </ul>
              <Link href="/impact">
                <Button className="bg-green-700 hover:bg-green-800">See Our Full Impact Report</Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/three-cows-portrait.jpeg" alt="Our impact in numbers" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Support Our Work</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Your contribution helps us continue our vital work protecting and caring for India's sacred cows. Every
            donation makes a difference in the lives of these gentle animals.
          </p>
          <Link href="/donate">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
