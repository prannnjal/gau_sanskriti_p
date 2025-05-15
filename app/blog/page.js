"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import PageHeader from "@/components/page-header"

export default function Blog() {
  const [email, setEmail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)

  const blogPosts = [
    {
      id: 1,
      title: "The Sacred Bond: Understanding the Cultural Significance of Cows in India",
      excerpt:
        "Explore the deep cultural and spiritual connections between cows and Indian society throughout history.",
      date: "May 10, 2025",
      author: "Priya Sharma",
      category: "Culture",
      image: "/images/white-cow-portrait.webp",
    },
    {
      id: 2,
      title: "Modern Challenges Facing Cow Protection in Urban India",
      excerpt: "As cities expand, cows face new challenges. Learn about the issues and how we're addressing them.",
      date: "April 28, 2025",
      author: "Rahul Verma",
      category: "Advocacy",
      image: "/images/cow-closeup-sunset.jpeg",
    },
    {
      id: 3,
      title: "Success Story: Lakshmi's Journey from Injury to Recovery",
      excerpt:
        "The inspiring story of Lakshmi, a cow rescued from severe injury and nursed back to health at our sanctuary.",
      date: "April 15, 2025",
      author: "Ananya Patel",
      category: "Success Stories",
      image: "/images/three-cows-portrait.jpeg",
    },
    {
      id: 4,
      title: "Sustainable Cow Care: Traditional Practices for Modern Times",
      excerpt:
        "How ancient wisdom about cow care can be applied in today's context for sustainable and ethical practices.",
      date: "March 30, 2025",
      author: "Dr. Vikram Singh",
      category: "Education",
      image: "/images/feeding-cows.jpeg",
    },
    {
      id: 5,
      title: "The Benefits of Cow-Based Products: Beyond Milk",
      excerpt: "Discover the various sustainable and beneficial products derived from cows that don't require harm.",
      date: "March 15, 2025",
      author: "Meera Joshi",
      category: "Sustainability",
      image: "/images/brown-cows-herd.jpeg",
    },
    {
      id: 6,
      title: "Community Spotlight: The Village That Transformed Cow Care",
      excerpt: "How one rural community revolutionized their approach to cow welfare and became a model for others.",
      date: "February 28, 2025",
      author: "Arjun Kumar",
      category: "Community",
      image: "/images/white-cow-portrait.webp",
    },
    {
      id: 7,
      title: "Celebrating Cow Festivals: Traditions Across India",
      excerpt: "A look at the various festivals and celebrations dedicated to cows across different regions of India.",
      date: "February 15, 2025",
      author: "Deepak Sharma",
      category: "Culture",
      image: "/images/cow-closeup-sunset.jpeg",
    },
    {
      id: 8,
      title: "Veterinary Care for Cows: Latest Advancements",
      excerpt: "New medical treatments and technologies improving healthcare for cows in sanctuaries and shelters.",
      date: "January 30, 2025",
      author: "Dr. Anjali Desai",
      category: "Education",
      image: "/images/feeding-cows.jpeg",
    },
    {
      id: 9,
      title: "Volunteer Spotlight: Meet the Dedicated Team Behind Our Work",
      excerpt: "Profiles of the volunteers who dedicate their time and energy to helping cows at our sanctuaries.",
      date: "January 15, 2025",
      author: "Sanjay Patel",
      category: "Community",
      image: "/images/three-cows-portrait.jpeg",
    },
  ]

  const categories = [
    "All Categories",
    "Culture",
    "Advocacy",
    "Success Stories",
    "Education",
    "Sustainability",
    "Community",
    "Events",
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with ${email}! You'll receive our blog updates soon.`)
      setEmail("")
    }
  }

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length))
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Blog"
        description="Stories, updates, and insights from our work protecting India's sacred cows"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative">
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              {displayedPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {displayedPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-green-700 font-medium">{post.category}</span>
                          <span className="text-sm text-gray-500">• {post.date}</span>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>By {post.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/blog/${post.id}`} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                          >
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All Categories")
                      setSearchQuery("")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {filteredPosts.length > visiblePosts && (
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                    onClick={handleLoadMore}
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>

            <div className="md:w-1/4">
              <div className="bg-amber-50 p-6 rounded-lg sticky top-4">
                <h3 className="text-xl font-bold mb-4 text-green-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left p-2 rounded hover:bg-amber-100 ${
                          selectedCategory === category ? "bg-amber-100 font-medium" : ""
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-green-800">Subscribe</h3>
                <p className="mb-4">Stay updated with our latest news and stories.</p>
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
