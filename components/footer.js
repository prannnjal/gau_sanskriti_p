"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Thank you for subscribing to our newsletter!" })
        setEmail("")
      } else {
        setSubmitStatus({ type: "error", message: data.message })
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setSubmitStatus({
        type: "error",
        message: "There was an error subscribing to the newsletter. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-2 bg-white rounded-full overflow-hidden">
                <Image src="/images/logo.png" alt="Gau Sanskriti Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Gau Sanskriti</h2>
                <p className="text-xs text-green-200">Protecting India's Sacred Cows</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              A foundation dedicated to the welfare and protection of cows in India through rescue, rehabilitation, and
              education.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-green-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-green-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-green-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://youtube.com" className="hover:text-green-200">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-green-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ways-to-help" className="hover:text-green-200">
                  Ways to Help
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-green-200">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-green-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-green-200">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span>
                  123 Gau Marg, Sector 5<br />
                  New Delhi, 110001
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-300" />
                <a href="mailto:info@gausanskriti.org" className="hover:text-green-200">
                  info@gausanskriti.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Newsletter</h3>
            <p className="mb-4 text-green-100">
              Subscribe to our newsletter to receive updates on our work and upcoming events.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              {submitStatus && (
                <div
                  className={`p-2 text-sm rounded ${
                    submitStatus.type === "success" ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <Input
                placeholder="Your Email"
                type="email"
                className="bg-green-800 border-green-700 text-white placeholder:text-green-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-green-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-green-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gau Sanskriti. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-green-300">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
