"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import { Heart, Coins, Gift } from "lucide-react"

export default function WaysToHelp() {
  const [activeTab, setActiveTab] = useState("donate")

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Ways to Help"
        description="Discover how you can contribute to our mission of protecting India's sacred cows"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="donate" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="donate">Donate</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="sponsor">Sponsor</TabsTrigger>
              <TabsTrigger value="fundraise">Fundraise</TabsTrigger>
              <TabsTrigger value="gifts">Gifts</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
            </TabsList>

            <TabsContent value="donate">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Heart className="h-8 w-8 text-orange-500 mb-2" />
                    <CardTitle>One-Time Donation</CardTitle>
                    <CardDescription>Make an immediate impact with a single contribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Your donation helps provide food, shelter, and medical care for cows in need.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/donate" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Donate Now</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <Coins className="h-8 w-8 text-orange-500 mb-2" />
                    <CardTitle>Monthly Giving</CardTitle>
                    <CardDescription>Provide ongoing support with a monthly donation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Become a sustaining supporter and help us plan for the future with consistent funding.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/donate?type=monthly" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Become a Monthly Donor</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <Gift className="h-8 w-8 text-orange-500 mb-2" />
                    <CardTitle>Tribute Gifts</CardTitle>
                    <CardDescription>Honor someone special with a meaningful gift</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Make a donation in honor or memory of a loved one and we'll send a special notification.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/donate?type=tribute" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Give a Tribute Gift</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="volunteer">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">Volunteer Opportunities</h3>
                <p className="mb-4">
                  We have various volunteer opportunities available at our shelters and during our events. Whether you
                  can offer a few hours or regular commitment, your time makes a difference.
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Shelter assistance (feeding, cleaning, maintenance)</li>
                  <li>Event support and coordination</li>
                  <li>Administrative and office help</li>
                  <li>Veterinary assistance (for qualified professionals)</li>
                  <li>Photography and content creation</li>
                  <li>Education and awareness programs</li>
                </ul>
                <Link href="/contact-us?subject=Volunteering">
                  <Button className="bg-green-700 hover:bg-green-800">Apply to Volunteer</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="sponsor">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">Sponsor a Cow</h3>
                <p className="mb-4">
                  Our cow sponsorship program allows you to form a special bond with one of our rescued cows. Your
                  monthly contribution covers food, shelter, and medical care for your sponsored cow.
                </p>
                <p className="mb-6">
                  As a sponsor, you'll receive regular updates, photos, and the opportunity to visit your sponsored cow
                  at our sanctuary.
                </p>
                <Link href="/sponsor">
                  <Button className="bg-green-700 hover:bg-green-800">Sponsor a Cow</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="fundraise">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">Start a Fundraiser</h3>
                <p className="mb-4">
                  Create your own fundraising campaign to support our work. Whether it's for a birthday, in memory of a
                  loved one, or just because you care, your fundraiser can make a significant impact.
                </p>
                <p className="mb-6">We provide all the tools and support you need to run a successful campaign.</p>
                <Link href="/fundraise">
                  <Button className="bg-green-700 hover:bg-green-800">Start Fundraising</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="gifts">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">In-Kind Donations</h3>
                <p className="mb-4">
                  We welcome donations of supplies and equipment that help us care for our cows. Current needs include:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Hay and feed</li>
                  <li>Medical supplies</li>
                  <li>Grooming tools</li>
                  <li>Construction materials for shelter repairs</li>
                  <li>Office supplies</li>
                </ul>
                <Link href="/contact-us?subject=In-Kind%20Donation">
                  <Button className="bg-green-700 hover:bg-green-800">Donate Supplies</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="corporate">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">Corporate Partnerships</h3>
                <p className="mb-4">
                  Partner with Gau Sanskriti to demonstrate your company's commitment to animal welfare and Indian
                  cultural values. We offer various partnership opportunities:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Corporate sponsorships</li>
                  <li>Matching gift programs</li>
                  <li>Cause marketing campaigns</li>
                  <li>Corporate volunteer days</li>
                  <li>Event sponsorships</li>
                </ul>
                <Link href="/corporate-partnerships">
                  <Button className="bg-green-700 hover:bg-green-800">Become a Partner</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Every Contribution Makes a Difference</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether through donations, time, or spreading awareness, your support helps us continue our mission of
            protecting India's sacred cows.
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
