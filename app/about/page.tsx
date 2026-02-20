import Link from 'next/link'
import { Target, Users, Globe, TrendingUp, ArrowRight, Award, Zap, Shield } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe in democratizing access to business intelligence and making company data accessible to everyone.'
    },
    {
      icon: Shield,
      title: 'Trust & Accuracy',
      description: 'Our data quality and accuracy standards are uncompromising. We verify every data point to ensure reliability.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible with business data and intelligence.'
    },
    {
      icon: Users,
      title: 'Customer-First',
      description: 'Everything we build starts with understanding and solving our customers\' real challenges.'
    }
  ]

  const stats = [
    { value: '2018', label: 'Founded' },
    { value: '75K+', label: 'Active Users' },
    { value: '50M+', label: 'Companies Tracked' },
    { value: '195', label: 'Countries' }
  ]

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Co-Founder', bio: 'Former VP at leading data company' },
    { name: 'Michael Chen', role: 'CTO & Co-Founder', bio: 'Ex-Principal Engineer at tech giant' },
    { name: 'Emily Rodriguez', role: 'VP of Product', bio: '15+ years in B2B SaaS' },
    { name: 'David Kim', role: 'VP of Engineering', bio: 'Previously led engineering at unicorn startup' }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Building the future of business intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              PvtPLC is on a mission to democratize access to comprehensive business data, 
              empowering professionals worldwide to make better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-semibold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2018, PvtPLC was born from a simple observation: accessing reliable 
                information about private companies was incredibly difficult and time-consuming. 
                Our founders, who had worked in venture capital and enterprise sales, experienced 
                this pain firsthand.
              </p>
              <p>
                We set out to build a platform that would make discovering and researching companies 
                as easy as a Google search. Today, PvtPLC serves over 75,000 users across 195 countries, 
                from individual sales professionals to Fortune 500 enterprises.
              </p>
              <p>
                Our database covers 50 million+ companies worldwide, with detailed information on 
                funding, leadership, market trends, and growth signals. We process millions of data 
                points daily to ensure our users always have access to the most current and accurate 
                information available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Experienced leaders passionate about democratizing business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-semibold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-spacing bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              We&apos;re always looking for talented individuals who are passionate about 
              data, technology, and helping businesses succeed.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg gap-2"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
