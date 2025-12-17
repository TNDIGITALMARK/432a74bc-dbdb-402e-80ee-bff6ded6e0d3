import { Navigation } from '@/components/navigation'
import { Counter } from '@/components/counter'
import { FadeIn } from '@/components/fade-in'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function ResultsPage() {
  const caseStudies = [
    {
      id: 'A',
      category: 'E-commerce Fashion',
      before: { revenue: 12, roas: 2.1 },
      after: { revenue: 89, roas: 7.3 },
      timeframe: '6 months',
      improvements: [
        '641% revenue increase',
        '7.3x ROAS achieved',
        '340% conversion rate boost',
      ],
    },
    {
      id: 'B',
      category: 'Electronics Dropship',
      before: { revenue: 24, roas: 1.8 },
      after: { revenue: 156, roas: 6.2 },
      timeframe: '8 months',
      improvements: [
        '550% revenue growth',
        '244% ROAS improvement',
        '67% cost per acquisition reduction',
      ],
    },
    {
      id: 'C',
      category: 'Home & Lifestyle',
      before: { revenue: 18, roas: 2.4 },
      after: { revenue: 98, roas: 5.9 },
      timeframe: '5 months',
      improvements: [
        '444% revenue increase',
        '146% ROAS improvement',
        '520% engagement boost on TikTok',
      ],
    },
  ]

  const aggregateStats = [
    { label: 'Average ROAS Improvement', value: 248, suffix: '%' },
    { label: 'Average Revenue Growth', value: 545, suffix: '%' },
    { label: 'Client Success Rate', value: 92, suffix: '%' },
    { label: 'Active Campaigns', value: 247, suffix: '+' },
  ]

  return (
    <div className="min-h-screen bg-[#1a1f36]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f36] via-[#1a1f36] to-[#2d3748] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn duration={800}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Real Results From
              <br />
              <span className="bg-gradient-to-r from-[#00bfff] to-[#20b2aa] bg-clip-text text-transparent">
                Real Client Campaigns
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200} duration={800}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Data-driven advertising strategies that deliver measurable ROI. See how we've scaled dropshipping stores across Meta, Google, and TikTok.
            </p>
          </FadeIn>

          {/* Aggregate Stats */}
          <FadeIn delay={400} duration={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {aggregateStats.map((stat, index) => (
                <div key={index} className="bg-[#2d3748]/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="text-4xl md:text-5xl text-[#00bfff] mb-2 font-bold">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#2d3748]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Anonymized client success stories showcasing our performance-based approach
            </p>
          </FadeIn>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.id} delay={index * 100}>
                <div className="bg-[#1a1f36] border border-gray-700 rounded-xl p-8 hover:border-[#00bfff] transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Client {study.id}</h3>
                      <p className="text-gray-400">{study.category}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm">Timeframe</span>
                      <p className="text-[#00bfff] font-semibold">{study.timeframe}</p>
                    </div>
                  </div>

                  {/* Before / After Metrics */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#2d3748]/50 border border-gray-700 rounded-lg p-6">
                      <h4 className="text-gray-400 text-sm uppercase mb-4">Before Partnership</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-500 text-sm">Monthly Revenue</span>
                          <p className="text-3xl font-bold text-red-400">${study.before.revenue}K</p>
                        </div>
                        <div>
                          <span className="text-gray-500 text-sm">ROAS</span>
                          <p className="text-2xl font-bold text-red-400">{study.before.roas}x</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#2d3748]/50 border border-[#00bfff] rounded-lg p-6">
                      <h4 className="text-[#00bfff] text-sm uppercase mb-4">After {study.timeframe}</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-500 text-sm">Monthly Revenue</span>
                          <p className="text-3xl font-bold text-[#00bfff]">${study.after.revenue}K</p>
                        </div>
                        <div>
                          <span className="text-gray-500 text-sm">ROAS</span>
                          <p className="text-2xl font-bold text-[#00bfff]">{study.after.roas}x</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Improvements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Improvements</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {study.improvements.map((improvement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5 text-[#20b2aa]" />
                          <span className="text-gray-300">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Breakdown Section */}
      <section className="py-20 bg-[#1a1f36]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Performance By Platform
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Multi-platform advertising optimization delivering consistent results
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-[#2d3748] border border-gray-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Meta Ads</h3>
                <div className="text-5xl font-bold text-[#00bfff] mb-2">
                  <Counter end={340} suffix="%" />
                </div>
                <p className="text-gray-400 mb-4">Avg. Conversion Rate Increase</p>
                <p className="text-gray-500 text-sm">Based on 147 active campaigns</p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-[#2d3748] border border-gray-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#20b2aa] to-[#00bfff] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">G</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Google Ads</h3>
                <div className="text-5xl font-bold text-[#20b2aa] mb-2">
                  <Counter end={67} suffix="%" />
                </div>
                <p className="text-gray-400 mb-4">Avg. CPA Reduction</p>
                <p className="text-gray-500 text-sm">Based on 68 active campaigns</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-[#2d3748] border border-gray-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">TikTok Ads</h3>
                <div className="text-5xl font-bold text-[#00bfff] mb-2">
                  <Counter end={520} suffix="%" />
                </div>
                <p className="text-gray-400 mb-4">Avg. Engagement Boost</p>
                <p className="text-gray-500 text-sm">Based on 32 active campaigns</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2d3748]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how our commission-based model can scale your advertising performance with zero upfront risk.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00bfff] to-[#20b2aa] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              <span>Book Your Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1219] border-t border-gray-800 py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-white font-bold font-['Montserrat']">Machtech</span>
              </div>
              <p className="text-gray-400 text-sm">
                Performance-based advertising that grows with your success.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-[#00bfff] transition-colors">Home</Link></li>
                <li><Link href="/results" className="text-gray-400 hover:text-[#00bfff] transition-colors">Results</Link></li>
                <li><Link href="/consultation" className="text-gray-400 hover:text-[#00bfff] transition-colors">Get Started</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Meta Ads</li>
                <li className="text-gray-400">Google Ads</li>
                <li className="text-gray-400">TikTok Ads</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">Email: hello@machtech.agency</p>
              <p className="text-gray-400 text-sm">Partnership inquiries welcome</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Machtech Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
