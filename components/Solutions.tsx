import Link from 'next/link'
import { ArrowRight, Building2, LineChart, Briefcase, Target } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'Sales & Business Development',
      description: 'Identify and connect with high-potential prospects. Build targeted lists and enrich your CRM with company intelligence.',
      features: ['Lead generation', 'Account enrichment', 'Sales intelligence'],
      link: '/solutions/sales'
    },
    {
      icon: LineChart,
      title: 'Venture Capital & Investors',
      description: 'Discover investment opportunities, track portfolio companies, and stay ahead of market trends with real-time insights.',
      features: ['Deal sourcing', 'Portfolio monitoring', 'Market analysis'],
      link: '/solutions/investors'
    },
    {
      icon: Briefcase,
      title: 'Corporate Development',
      description: 'Find acquisition targets, track competitors, and identify strategic partnership opportunities in your market.',
      features: ['M&A research', 'Competitive intelligence', 'Partnership discovery'],
      link: '/solutions/corporate'
    },
    {
      icon: Target,
      title: 'Market Research',
      description: 'Analyze industry trends, benchmark performance, and understand market dynamics with comprehensive data.',
      features: ['Industry analysis', 'Market sizing', 'Trend tracking'],
      link: '/solutions/research'
    }
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Solutions for every team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you&apos;re in sales, investing, or research, PvtPLC provides the tools and data 
            you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
