"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Menu, Search } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="w-full">
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" className="hover:text-green-200">
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" className="hover:text-green-200">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" className="hover:text-green-200">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://youtube.com" className="hover:text-green-200">
              <Youtube size={18} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://linkedin.com" className="hover:text-green-200">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div>
            <a href="mailto:info@gausanskriti.org" className="text-sm hover:text-green-200">
              info@gausanskriti.org
            </a>
          </div>
        </div>
      </div>

      <div className={`bg-white ${isScrolled ? "shadow-md" : ""} transition-shadow duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-16 mr-2">
                <Image src="/images/logo.png" alt="Gau Sanskriti Logo" fill className="object-contain rounded-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">Gau Sanskriti</h1>
                <p className="text-xs text-gray-600">Protecting India's Sacred Cows</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/about"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Our Story</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Learn about our mission, vision, and the team behind Gau Sanskriti
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/about#team"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Our Team</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Meet the dedicated individuals working to protect India's sacred cows
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/about#impact"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Our Impact</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                See the difference we've made in the lives of cows across India
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/about#testimonials"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Testimonials</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Read what others say about our work and impact
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Ways to Help</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/donate"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Donate</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Support our work through one-time or monthly donations
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/ways-to-help#volunteer"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Volunteer</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Contribute your time and skills to help our cause
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/ways-to-help#sponsor"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Sponsor a Cow</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Form a special bond by sponsoring a specific cow at our sanctuary
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/ways-to-help#fundraise"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Fundraise</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Start your own fundraising campaign to support our work
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/what-we-do#rescue"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Rescue & Rehabilitation</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Learn about our rescue operations and rehabilitation programs
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/what-we-do#shelter"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Shelter & Care</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Discover our sanctuary facilities and cow care practices
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/what-we-do#medical"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Medical Treatment</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                See how we provide healthcare for injured and sick cows
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/what-we-do#education"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Education & Awareness</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Explore our educational programs and awareness initiatives
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact-us" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/donate">
                <Button className="bg-orange-500 hover:bg-orange-600 ml-2">Donate</Button>
              </Link>

              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>

            <div className="lg:hidden flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-auto py-4">
                      <nav className="flex flex-col space-y-4">
                        <Link href="/" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                          Home
                        </Link>
                        <div>
                          <div className="px-4 py-2 font-medium">About</div>
                          <div className="pl-8 flex flex-col space-y-2 mt-2">
                            <Link href="/about" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Our Story
                            </Link>
                            <Link href="/about#team" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Our Team
                            </Link>
                            <Link href="/about#impact" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Our Impact
                            </Link>
                            <Link href="/about#testimonials" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Testimonials
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="px-4 py-2 font-medium">Ways to Help</div>
                          <div className="pl-8 flex flex-col space-y-2 mt-2">
                            <Link href="/donate" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Donate
                            </Link>
                            <Link href="/ways-to-help#volunteer" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Volunteer
                            </Link>
                            <Link href="/ways-to-help#sponsor" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Sponsor a Cow
                            </Link>
                            <Link href="/ways-to-help#fundraise" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Fundraise
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="px-4 py-2 font-medium">What We Do</div>
                          <div className="pl-8 flex flex-col space-y-2 mt-2">
                            <Link href="/what-we-do#rescue" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Rescue & Rehabilitation
                            </Link>
                            <Link href="/what-we-do#shelter" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Shelter & Care
                            </Link>
                            <Link href="/what-we-do#medical" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Medical Treatment
                            </Link>
                            <Link href="/what-we-do#education" className="px-4 py-1 hover:bg-gray-100 rounded-md">
                              Education & Awareness
                            </Link>
                          </div>
                        </div>
                        <Link href="/contact-us" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                          Contact Us
                        </Link>
                        <Link href="/blog" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                          Blog
                        </Link>
                      </nav>
                    </div>
                    <div className="pt-4 pb-6 border-t">
                      <Link href="/donate" className="block px-4">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Donate</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
