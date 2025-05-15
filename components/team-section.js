import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Anand Sharma",
      role: "Founder & President",
      bio: "With over 20 years of experience in veterinary medicine and animal welfare, Dr. Sharma founded Gau Sanskriti to create a comprehensive approach to cow protection in India.",
      image: "/images/white-cow-portrait.webp",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Meera Patel",
      role: "Director of Operations",
      bio: "Meera oversees the day-to-day operations of our sanctuaries and programs, ensuring that our work meets the highest standards of care and compassion.",
      image: "/images/cow-closeup-sunset.jpeg",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Dr. Vikram Singh",
      role: "Chief Veterinarian",
      bio: "Dr. Singh leads our medical team, developing protocols for cow care and treatment while providing hands-on veterinary services at our sanctuaries.",
      image: "/images/three-cows-portrait.jpeg",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Priya Reddy",
      role: "Education Director",
      bio: "Priya develops and implements our educational programs, working with schools, communities, and organizations to promote awareness about cow welfare.",
      image: "/images/brown-cows-herd.jpeg",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-800">Our Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-green-700">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.facebook} className="text-gray-400 hover:text-green-700">
                    <Facebook size={18} />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-green-700">
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-green-700">
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
