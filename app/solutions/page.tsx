import Link from 'next/link'
import { Building2, LineChart, Briefcase, Target, CheckCircle2, ArrowRight } from 'lucide-react'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: 'Sales & Business Development',
      description: 'Accelerate your sales pipeline with intelligent prospecting and company insights.',
      benefits: [
        'Identify high-fit prospects based on growth signals',
        'Enrich your CRM with accurate company data',
        'Track customer health and expansion opportunities',
        'Build targeted account lists in minutes'
      ],
      stats: [
        { label: 'Increase in qualified leads', value: '3x' },
        { label: 'Faster prospect research', value: '75%' }
      ],
      color: 'blue'
    },
    {
      icon: LineChart,
      title: 'Venture Capital & Investors',
      description: 'Source deals, monitor portfolios, and stay ahead of market trends.',
      benefits: [
        'Discover investment opportunities before competitors',
        'Track funding rounds and valuations in real-time',
        'Monitor portfolio company performance',
        'Analyze market trends and emerging sectors'
      ],
      stats: [
        { label: 'More deal flow', value: '5x' },
        { label: 'Time saved on research', value: '60%' }
      ],
      color: 'green'
    },
    {
      icon: Briefcase,
      title: 'Corporate Development',
      description: 'Find acquisition targets and strategic partners with precision.',
      benefits: [
        'Identify M&A opportunities matching your criteria',
        'Track competitive landscape and market dynamics',
        'Discover potential partnership opportunities',
        'Monitor industry consolidation trends'
      ],
      stats: [
        { label: 'Faster target identification', value: '80%' },
        { label: 'Deal sources evaluated', value: '10x' }
      ],
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Market Research',
      description: 'Understand markets, analyze trends, and benchmark performance.',
      benefits: [
        'Analyze market size and growth trajectories',
        'Track emerging trends and technologies',
        'Benchmark against competitors',
        'Generate insights for strategic planning'
      ],
      stats: [
        { label: 'Research time reduction', value: '70%' },
        { label: 'Data points accessed', value: '1M+' }
      ],
      color: 'orange'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Solutions built for your success
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              Whether you&apos;re in sales, investing, corporate development, or research, 
              PvtPLC provides the tools and data you need to achieve your goals.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon
        const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
        
        return (
          <section key={index} className={`section-spacing ${bgColor}`}>
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/demo"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg group"
                  >
                    Request a demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-8">
                      {solution.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-4xl md:text-5xl font-semibold text-blue-600 mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm md:text-base text-gray-700">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Join thousands of professionals who trust PvtPLC for their business intelligence needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-lg border border-white/20"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
