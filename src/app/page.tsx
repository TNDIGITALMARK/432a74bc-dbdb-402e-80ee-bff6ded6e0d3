import { Navigation } from '@/components/navigation'
import { Counter } from '@/components/counter'
import { FadeIn } from '@/components/fade-in'
import Link from 'next/link'
import { TrendingUp, Target, Zap, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a1f36]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f36] via-[#1a1f36] to-[#2d3748] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,191,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(32,178,170,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn duration={800}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Performance-Based Advertising
              <br />
              <span className="bg-gradient-to-r from-[#00bfff] to-[#20b2aa] bg-clip-text text-transparent">
                We Succeed When You Succeed
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200} duration={800}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Commission-based advertising management for dropshippers and online stores.
              No upfront fees—our success is tied to yours.
            </p>
          </FadeIn>

          {/* Key Metrics */}
          <FadeIn delay={400} duration={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-[#2d3748]/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl md:text-5xl text-[#00bfff] mb-2">
                  <Counter end={485} suffix="%" />
                </div>
                <div className="text-gray-400 text-sm">Average ROAS</div>
              </div>
              <div className="bg-[#2d3748]/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl md:text-5xl text-[#20b2aa] mb-2">
                  <Counter end={247} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Stores Scaled</div>
              </div>
              <div className="bg-[#2d3748]/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl md:text-5xl text-[#00bfff] mb-2">
                  <Counter end={92} suffix="%" />
                </div>
                <div className="text-gray-400 text-sm">Client Retention</div>
              </div>
              <div className="bg-[#2d3748]/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl md:text-5xl text-[#20b2aa] mb-2">
                  <Counter end={8} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={600} duration={800}>
            <Link
              href="/consultation"
              className="inline-block bg-gradient-to-r from-[#00bfff] to-[#20b2aa] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Book Your Strategy Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#2d3748]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Platforms We Master
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Expert campaign management across the most powerful advertising platforms
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-[#1a1f36] border border-gray-700 rounded-xl p-8 hover:border-[#00bfff] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.2)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Meta Ads</h3>
                <p className="text-gray-400 mb-6">
                  Advanced Facebook and Instagram campaign optimization with precision targeting and creative testing.
                </p>
                <div className="flex items-center text-[#00bfff] font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <Counter end={340} suffix="%" /> Conversion Rate Increase
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-[#1a1f36] border border-gray-700 rounded-xl p-8 hover:border-[#20b2aa] transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,178,170,0.2)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#20b2aa] to-[#00bfff] rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Google Ads</h3>
                <p className="text-gray-400 mb-6">
                  Search, Shopping, and Display campaigns engineered for maximum ROI and sustainable growth.
                </p>
                <div className="flex items-center text-[#20b2aa] font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <Counter end={67} suffix="%" /> CPA Reduction
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-[#1a1f36] border border-gray-700 rounded-xl p-8 hover:border-[#00bfff] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.2)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">TikTok Ads</h3>
                <p className="text-gray-400 mb-6">
                  Viral-ready campaigns leveraging TikTok's unique algorithm for explosive brand growth.
                </p>
                <div className="flex items-center text-[#00bfff] font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <Counter end={520} suffix="%" /> Engagement Boost
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/results"
                className="inline-block bg-transparent border-2 border-[#00bfff] text-[#00bfff] px-8 py-3 rounded-lg font-semibold hover:bg-[#00bfff] hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#1a1f36]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              How We Partner
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A simple, transparent process aligned with your success
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy Call',
                description: 'We analyze your store, goals, and current advertising performance to create a custom roadmap.',
              },
              {
                step: '02',
                title: 'Agreement',
                description: 'Commission-based contract—no upfront fees. We only earn when you earn.',
              },
              {
                step: '03',
                title: 'Campaign Launch',
                description: 'Our team builds, tests, and optimizes campaigns across Meta, Google, and TikTok.',
              },
              {
                step: '04',
                title: 'Scale Together',
                description: 'Continuous optimization and scaling. Your growth is our success.',
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative">
                  <div className="text-6xl font-bold text-[#00bfff]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#2d3748]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Expert strategists dedicated to your advertising success
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Martinez',
                role: 'Meta Ads Specialist',
                experience: '6 Years Experience',
                description: 'Expert in Facebook and Instagram campaign optimization with proven track record in e-commerce scaling.',
              },
              {
                name: 'Sarah Chen',
                role: 'Google Ads Strategist',
                experience: '5 Years Experience',
                description: 'Specializes in Search and Shopping campaigns, delivering consistent ROI improvements for online retailers.',
              },
              {
                name: 'Mike Torres',
                role: 'TikTok Campaign Manager',
                experience: '4 Years Experience',
                description: 'TikTok advertising pioneer helping brands achieve viral growth and explosive engagement rates.',
              },
            ].map((member, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-[#1a1f36] border border-gray-700 rounded-xl p-8 text-center hover:border-[#00bfff] transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#00bfff] font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1f36]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Store?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join 247+ successful dropshippers who trust Machtech with their advertising.
              <br />
              <span className="text-[#00bfff] font-semibold">Because trust should be effortless.</span>
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-gradient-to-r from-[#00bfff] to-[#20b2aa] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Book Your Strategy Call
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
