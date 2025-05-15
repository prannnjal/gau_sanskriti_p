import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Thank You" description="Your support makes our work possible" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-block bg-green-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-700"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Thank You for Your Donation!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your generous contribution will help us continue our mission of protecting and caring for India's sacred
            cows. We are deeply grateful for your support.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-bold mb-4 text-green-800">What Your Donation Supports</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700 mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Food, shelter, and medical care for rescued cows</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700 mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Rescue operations for cows in distress</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700 mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Educational programs to promote cow welfare</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700 mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Maintenance and expansion of our sanctuary facilities</span>
              </li>
            </ul>
          </div>

          <div className="relative h-64 w-full max-w-3xl mx-auto mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/cow-closeup-sunset.jpeg"
              alt="Happy cows at our sanctuary"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-green-700 hover:bg-green-800">Return to Home</Button>
            </Link>
            <Link href="/sponsor">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                Sponsor a Cow
              </Button>
            </Link>
            <Link href="/ways-to-help">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                Other Ways to Help
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
