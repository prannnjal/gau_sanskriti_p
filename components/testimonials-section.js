"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function TestimonialsSection() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const testimonials = [
    {
      quote:
        "The work Gau Sanskriti is doing is truly inspiring. Their dedication to cow welfare has transformed how our community views and treats these sacred animals.",
      name: "Rajesh Sharma",
      title: "Community Leader, Delhi",
      image: "/images/cow-closeup-sunset.jpeg",
    },
    {
      quote:
        "As a volunteer, I've seen firsthand the incredible impact Gau Sanskriti has on the lives of cows. Their compassionate approach and dedication is unmatched.",
      name: "Priya Patel",
      title: "Regular Volunteer",
      image: "/images/white-cow-portrait.webp",
    },
    {
      quote:
        "Supporting Gau Sanskriti has been one of the most rewarding experiences. Knowing that my contributions help provide care for these gentle creatures brings me joy.",
      name: "Amit Verma",
      title: "Monthly Donor",
      image: "/images/three-cows-portrait.jpeg",
    },
    {
      quote:
        "The educational programs by Gau Sanskriti have completely changed how our students understand cow protection and animal welfare. It's been transformative.",
      name: "Sunita Gupta",
      title: "School Principal",
      image: "/images/brown-cows-herd.jpeg",
    },
  ]

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  const handlePrevious = () => {
    api?.scrollPrev()
  }

  const handleNext = () => {
    api?.scrollNext()
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>

        <Carousel
          className="max-w-5xl mx-auto"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2"}>
                <Card className={`bg-green-700 border-0 h-full ${current === index ? "ring-2 ring-green-400" : ""}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-lg italic mb-6 flex-grow">"{testimonial.quote}"</div>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-green-200 text-sm">{testimonial.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? "bg-white" : "bg-green-500"}`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselPrevious onClick={handlePrevious} className="bg-green-600 hover:bg-green-500 text-white" />
          <CarouselNext onClick={handleNext} className="bg-green-600 hover:bg-green-500 text-white" />
        </Carousel>
      </div>
    </section>
  )
}
