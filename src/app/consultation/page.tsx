"use client"

import { Navigation } from '@/components/navigation'
import { FadeIn } from '@/components/fade-in'
import { useState } from 'react'
import { CheckCircle, Mail, Globe, DollarSign, User } from 'lucide-react'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    adSpend: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateUrl = (url: string) => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.storeUrl.trim()) {
      newErrors.storeUrl = 'Store URL is required'
    } else if (!validateUrl(formData.storeUrl)) {
      newErrors.storeUrl = 'Please enter a valid URL'
    }

    if (!formData.adSpend) {
      newErrors.adSpend = 'Please select your ad spend range'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid - simulate submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setErrors({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1a1f36] flex items-center justify-center px-6">
        <Navigation />
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Strategy Call Booked!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Thank you, {formData.name}! We've received your information and will contact you within 24 hours to schedule your personalized strategy call.
            </p>
            <p className="text-gray-400 mb-8">
              Check your email at <span className="text-[#00bfff]">{formData.email}</span> for confirmation and next steps.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[#00bfff] hover:text-[#20b2aa] transition-colors"
            >
              Submit Another Form
            </button>
          </div>
        </FadeIn>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1f36]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f36] via-[#1a1f36] to-[#2d3748] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn duration={800}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Book Your Free
              <br />
              <span className="bg-gradient-to-r from-[#00bfff] to-[#20b2aa] bg-clip-text text-transparent">
                Strategy Call
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200} duration={800}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's analyze your store and create a custom advertising roadmap. No obligations, no upfront fees—just actionable insights for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn delay={100}>
              <div className="bg-[#2d3748] border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Tell Us About Your Store</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1f36] border ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      } rounded-lg px-4 py-3 text-white focus:border-[#00bfff] focus:ring-2 focus:ring-[#00bfff]/20 transition-all outline-none`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1f36] border ${
                        errors.email ? 'border-red-500' : 'border-gray-600'
                      } rounded-lg px-4 py-3 text-white focus:border-[#00bfff] focus:ring-2 focus:ring-[#00bfff]/20 transition-all outline-none`}
                      placeholder="john@store.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Store URL Field */}
                  <div>
                    <label htmlFor="storeUrl" className="block text-gray-300 font-medium mb-2">
                      <Globe className="inline w-4 h-4 mr-2" />
                      Store URL
                    </label>
                    <input
                      type="text"
                      id="storeUrl"
                      name="storeUrl"
                      value={formData.storeUrl}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1f36] border ${
                        errors.storeUrl ? 'border-red-500' : 'border-gray-600'
                      } rounded-lg px-4 py-3 text-white focus:border-[#00bfff] focus:ring-2 focus:ring-[#00bfff]/20 transition-all outline-none`}
                      placeholder="mystore.com"
                    />
                    {errors.storeUrl && <p className="text-red-400 text-sm mt-1">{errors.storeUrl}</p>}
                  </div>

                  {/* Ad Spend Field */}
                  <div>
                    <label htmlFor="adSpend" className="block text-gray-300 font-medium mb-2">
                      <DollarSign className="inline w-4 h-4 mr-2" />
                      Monthly Ad Spend
                    </label>
                    <select
                      id="adSpend"
                      name="adSpend"
                      value={formData.adSpend}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1f36] border ${
                        errors.adSpend ? 'border-red-500' : 'border-gray-600'
                      } rounded-lg px-4 py-3 text-white focus:border-[#00bfff] focus:ring-2 focus:ring-[#00bfff]/20 transition-all outline-none`}
                    >
                      <option value="">Select range</option>
                      <option value="0-5k">$0 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                    {errors.adSpend && <p className="text-red-400 text-sm mt-1">{errors.adSpend}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00bfff] to-[#20b2aa] text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Book Strategy Call
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Benefits */}
            <FadeIn delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Store Analysis',
                        description: 'In-depth review of your current advertising performance and opportunities',
                      },
                      {
                        title: 'Custom Strategy',
                        description: 'Personalized roadmap for scaling across Meta, Google, and TikTok',
                      },
                      {
                        title: 'Commission Model Details',
                        description: 'Clear explanation of our risk-free, performance-based pricing',
                      },
                      {
                        title: 'ROI Projections',
                        description: 'Data-driven estimates based on stores similar to yours',
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#00bfff] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#2d3748] border border-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-3">Why Commission-Based?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    We don't charge upfront fees because we believe in sharing risk and reward. When your store grows, we grow together.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-gradient-to-r from-[#00bfff] to-[#20b2aa] rounded-full"></div>
                    <span className="text-[#00bfff] text-sm font-semibold">100% Aligned</span>
                  </div>
                </div>

                <div className="bg-[#2d3748] border border-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-3">Typical Timeline</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Strategy Call</span>
                      <span className="text-[#00bfff]">30-45 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Agreement & Setup</span>
                      <span className="text-[#00bfff]">1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Campaign Launch</span>
                      <span className="text-[#00bfff]">3-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">First Results</span>
                      <span className="text-[#00bfff]">7-14 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1219] border-t border-gray-800 py-12">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Machtech Enterprises. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
