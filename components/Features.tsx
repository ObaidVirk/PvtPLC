import { Search, TrendingUp, Users, BarChart3, Globe, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Search,
      title: 'Advanced Company Search',
      description: 'Find companies based on funding, location, industry, growth signals, and 50+ other criteria with our powerful search engine.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Funding Data',
      description: 'Stay updated with the latest funding rounds, valuations, and investment trends as they happen across global markets.'
    },
    {
      icon: Users,
      title: 'People & Leadership Intel',
      description: 'Access detailed profiles of founders, executives, and investors. Track career moves and company relationships.'
    },
    {
      icon: BarChart3,
      title: 'Market Intelligence',
      description: 'Analyze market trends, identify emerging sectors, and discover investment opportunities with comprehensive analytics.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Explore companies and investors across 195 countries with localized data and insights in multiple languages.'
    },
    {
      icon: Zap,
      title: 'API & Integrations',
      description: 'Seamlessly integrate our data into your workflow with our powerful API and pre-built integrations with leading tools.'
    }
  ]

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Everything you need to discover and connect
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Powerful features designed to help you find the right companies, understand market trends, 
            and make informed decisions faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
