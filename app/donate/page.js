"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import { useSearchParams, useRouter } from "next/navigation"

export default function Donate() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const donationType = searchParams.get("type") || "one-time"

  const [activeTab, setActiveTab] = useState(donationType)
  const [oneTimeAmount, setOneTimeAmount] = useState("")
  const [monthlyAmount, setMonthlyAmount] = useState("")
  const [oneTimePaymentMethod, setOneTimePaymentMethod] = useState("card")
  const [monthlyPaymentMethod, setMonthlyPaymentMethod] = useState("card")
  const [selectedOneTimeAmount, setSelectedOneTimeAmount] = useState(null)
  const [selectedMonthlyAmount, setSelectedMonthlyAmount] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    oneTime: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    monthly: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  })

  useEffect(() => {
    // Update URL when tab changes
    if (activeTab !== donationType) {
      router.push(`/donate?type=${activeTab}`, { scroll: false })
    }
  }, [activeTab, donationType, router])

  const handleOneTimeAmountSelect = (amount) => {
    setSelectedOneTimeAmount(amount)
    setOneTimeAmount("")
  }

  const handleMonthlyAmountSelect = (amount) => {
    setSelectedMonthlyAmount(amount)
    setMonthlyAmount("")
  }

  const handleInputChange = (e, type) => {
    const { id, value } = e.target
    const fieldName = id.replace("Monthly", "")

    setFormData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [fieldName]: value,
      },
    }))
  }

  const handleOneTimeSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const amount = selectedOneTimeAmount || oneTimeAmount
    if (!amount) {
      setSubmitStatus({ type: "error", message: "Please select or enter a donation amount." })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donationType: "one-time",
          amount,
          ...formData.oneTime,
          paymentMethod: oneTimePaymentMethod,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message })
        // In a real application, you might redirect to a payment gateway or thank you page
        setTimeout(() => {
          router.push("/thank-you")
        }, 2000)
      } else {
        setSubmitStatus({ type: "error", message: data.message })
      }
    } catch (error) {
      console.error("Error processing donation:", error)
      setSubmitStatus({
        type: "error",
        message: "There was an error processing your donation. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMonthlySubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const amount = selectedMonthlyAmount || monthlyAmount
    if (!amount) {
      setSubmitStatus({ type: "error", message: "Please select or enter a donation amount." })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donationType: "monthly",
          amount,
          ...formData.monthly,
          paymentMethod: monthlyPaymentMethod,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message })
        // In a real application, you might redirect to a payment gateway or thank you page
        setTimeout(() => {
          router.push("/thank-you")
        }, 2000)
      } else {
        setSubmitStatus({ type: "error", message: data.message })
      }
    } catch (error) {
      console.error("Error processing donation:", error)
      setSubmitStatus({
        type: "error",
        message: "There was an error processing your donation. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Donate" description="Your contribution helps us protect and care for India's sacred cows" />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
              </TabsList>

              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <TabsContent value="one-time">
                <div className="bg-amber-50 p-6 md:p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-green-800">Make a One-Time Donation</h3>

                  <form className="space-y-6" onSubmit={handleOneTimeSubmit}>
                    <div>
                      <h4 className="font-medium mb-3">Select Amount</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedOneTimeAmount === "500" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleOneTimeAmountSelect("500")}
                        >
                          ₹500
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedOneTimeAmount === "1000" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleOneTimeAmountSelect("1000")}
                        >
                          ₹1,000
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedOneTimeAmount === "2500" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleOneTimeAmountSelect("2500")}
                        >
                          ₹2,500
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedOneTimeAmount === "5000" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleOneTimeAmountSelect("5000")}
                        >
                          ₹5,000
                        </Button>
                      </div>
                      <div className="mt-3">
                        <label htmlFor="customAmount" className="text-sm font-medium">
                          Other Amount (₹)
                        </label>
                        <Input
                          id="customAmount"
                          placeholder="Enter amount"
                          className="mt-1"
                          value={oneTimeAmount}
                          onChange={(e) => {
                            setOneTimeAmount(e.target.value)
                            setSelectedOneTimeAmount(null)
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Personal Information</h4>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input
                              id="firstName"
                              placeholder="First Name"
                              required
                              value={formData.oneTime.firstName}
                              onChange={(e) => handleInputChange(e, "oneTime")}
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
                              value={formData.oneTime.lastName}
                              onChange={(e) => handleInputChange(e, "oneTime")}
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
                            value={formData.oneTime.email}
                            onChange={(e) => handleInputChange(e, "oneTime")}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            placeholder="Your Phone Number"
                            value={formData.oneTime.phone}
                            onChange={(e) => handleInputChange(e, "oneTime")}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Payment Method</h4>
                      <RadioGroup
                        defaultValue="card"
                        value={oneTimePaymentMethod}
                        onValueChange={setOneTimePaymentMethod}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi">UPI</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Label htmlFor="netbanking">Net Banking</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg"
                      disabled={isSubmitting || (!selectedOneTimeAmount && !oneTimeAmount)}
                    >
                      {isSubmitting ? "Processing..." : "Donate Now"}
                    </Button>

                    <p className="text-sm text-center text-gray-600">
                      Your donation is tax-deductible under Section 80G of the Income Tax Act.
                    </p>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="monthly">
                <div className="bg-amber-50 p-6 md:p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-green-800">Become a Monthly Donor</h3>

                  <form className="space-y-6" onSubmit={handleMonthlySubmit}>
                    <div>
                      <h4 className="font-medium mb-3">Select Monthly Amount</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedMonthlyAmount === "200" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleMonthlyAmountSelect("200")}
                        >
                          ₹200/mo
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedMonthlyAmount === "500" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleMonthlyAmountSelect("500")}
                        >
                          ₹500/mo
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedMonthlyAmount === "1000" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleMonthlyAmountSelect("1000")}
                        >
                          ₹1,000/mo
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className={`border-2 ${selectedMonthlyAmount === "2000" ? "bg-green-700 text-white" : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"}`}
                          onClick={() => handleMonthlyAmountSelect("2000")}
                        >
                          ₹2,000/mo
                        </Button>
                      </div>
                      <div className="mt-3">
                        <label htmlFor="customMonthlyAmount" className="text-sm font-medium">
                          Other Monthly Amount (₹)
                        </label>
                        <Input
                          id="customMonthlyAmount"
                          placeholder="Enter amount"
                          className="mt-1"
                          value={monthlyAmount}
                          onChange={(e) => {
                            setMonthlyAmount(e.target.value)
                            setSelectedMonthlyAmount(null)
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Personal Information</h4>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="firstNameMonthly" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input
                              id="firstNameMonthly"
                              placeholder="First Name"
                              required
                              value={formData.monthly.firstName}
                              onChange={(e) => handleInputChange(e, "monthly")}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastNameMonthly" className="text-sm font-medium">
                              Last Name
                            </label>
                            <Input
                              id="lastNameMonthly"
                              placeholder="Last Name"
                              required
                              value={formData.monthly.lastName}
                              onChange={(e) => handleInputChange(e, "monthly")}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="emailMonthly" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="emailMonthly"
                            type="email"
                            placeholder="Your Email"
                            required
                            value={formData.monthly.email}
                            onChange={(e) => handleInputChange(e, "monthly")}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phoneMonthly" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input
                            id="phoneMonthly"
                            placeholder="Your Phone Number"
                            value={formData.monthly.phone}
                            onChange={(e) => handleInputChange(e, "monthly")}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Payment Method</h4>
                      <RadioGroup
                        defaultValue="card"
                        value={monthlyPaymentMethod}
                        onValueChange={setMonthlyPaymentMethod}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="cardMonthly" />
                          <Label htmlFor="cardMonthly">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="upi" id="upiMonthly" />
                          <Label htmlFor="upiMonthly">UPI</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="netbanking" id="netbankingMonthly" />
                          <Label htmlFor="netbankingMonthly">Net Banking</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg"
                      disabled={isSubmitting || (!selectedMonthlyAmount && !monthlyAmount)}
                    >
                      {isSubmitting ? "Processing..." : "Become a Monthly Donor"}
                    </Button>

                    <p className="text-sm text-center text-gray-600">
                      Your donation is tax-deductible under Section 80G of the Income Tax Act. You can cancel your
                      monthly donation at any time.
                    </p>
                  </form>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-green-800">How Your Donation Helps</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">₹500</div>
                  <p>Provides food for one cow for a week</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">₹2,000</div>
                  <p>Covers basic medical care for an injured cow</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">₹5,000</div>
                  <p>Helps maintain shelter facilities for multiple cows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Other Ways to Give</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-green-700">Sponsor a Cow</h3>
                <p className="mb-4">Form a special bond by sponsoring a specific cow at our sanctuary.</p>
                <Link href="/sponsor">
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-green-700">Corporate Giving</h3>
                <p className="mb-4">Partner with us through corporate donations, matching gifts, or sponsorships.</p>
                <Link href="/corporate-partnerships">
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-green-700">Legacy Giving</h3>
                <p className="mb-4">Create a lasting impact by including Gau Sanskriti in your will or estate plans.</p>
                <Link href="/legacy-giving">
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
