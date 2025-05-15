"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function ContactUs() {
  const searchParams = useSearchParams()
  const initialSubject = searchParams.get("subject") || ""

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: initialSubject,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({ type: "error", message: data.message })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "There was an error submitting your form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Contact Us" description="Get in touch with our team - we're here to help" />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Get In Touch</h2>
              <p className="mb-8">
                Have questions about our work or how you can help? We'd love to hear from you. Fill out the form and our
                team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800">Phone</h3>
                      <p>+91 98765 43210</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800">Email</h3>
                      <p>info@gausanskriti.org</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800">Address</h3>
                      <p>
                        123 Gau Marg, Sector 5<br />
                        New Delhi, 110001
                        <br />
                        India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800">Hours</h3>
                      <p>
                        Monday - Saturday: 9:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <form className="bg-amber-50 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold mb-6 text-green-800">Send Us a Message</h3>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-md ${
                      submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid gap-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="donation">Donation Question</SelectItem>
                        <SelectItem value="volunteer">Volunteering</SelectItem>
                        <SelectItem value="sponsorship">Cow Sponsorship</SelectItem>
                        <SelectItem value="report">Report a Cow in Need</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit Our Sanctuary</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We welcome visitors to our main sanctuary in New Delhi. Come meet our rescued cows and learn more about our
            work firsthand.
          </p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md"
            onClick={() => {
              window.location.href = "/contact-us?subject=visit"
              window.scrollTo(0, 0)
            }}
          >
            Schedule a Visit
          </Button>
        </div>
      </section>
    </div>
  )
}
