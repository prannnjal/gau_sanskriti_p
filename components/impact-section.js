import { CircleDollarSign, Heart, Users, Home, Stethoscope, GraduationCap } from "lucide-react"

export default function ImpactSection() {
  const stats = [
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      value: "500+",
      label: "Cows Rescued",
    },
    {
      icon: <Home className="h-8 w-8 text-orange-500" />,
      value: "5",
      label: "Sanctuaries",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-orange-500" />,
      value: "5,000+",
      label: "Medical Treatments",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      value: "200+",
      label: "Volunteers",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
      value: "10,000+",
      label: "People Educated",
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-orange-500" />,
      value: "₹1 Crore+",
      label: "Funds Raised",
    },
  ]

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Our Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
