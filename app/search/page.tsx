'use client'

import { useState } from 'react'
import { Search, Filter, MapPin, Users, DollarSign, TrendingUp, Building2, ExternalLink } from 'lucide-react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const companies = [
    {
      name: 'TechFlow AI',
      description: 'AI-powered workflow automation platform for enterprises',
      industry: 'Artificial Intelligence',
      location: 'San Francisco, CA',
      employees: '150-500',
      funding: '$45M',
      fundingRound: 'Series B',
      founded: '2020',
      tags: ['AI/ML', 'Enterprise', 'B2B SaaS']
    },
    {
      name: 'CloudScale Systems',
      description: 'Infrastructure management and scaling solutions for cloud platforms',
      industry: 'Cloud Infrastructure',
      location: 'Austin, TX',
      employees: '50-150',
      funding: '$12M',
      fundingRound: 'Series A',
      founded: '2021',
      tags: ['Cloud', 'DevOps', 'B2B SaaS']
    },
    {
      name: 'HealthTech Solutions',
      description: 'Patient engagement and telehealth platform for healthcare providers',
      industry: 'Healthcare Technology',
      location: 'Boston, MA',
      employees: '100-250',
      funding: '$28M',
      fundingRound: 'Series B',
      founded: '2019',
      tags: ['Healthcare', 'Telehealth', 'B2B']
    },
    {
      name: 'GreenEnergy Innovations',
      description: 'Renewable energy management and optimization platform',
      industry: 'Clean Energy',
      location: 'Seattle, WA',
      employees: '75-200',
      funding: '$35M',
      fundingRound: 'Series B',
      founded: '2020',
      tags: ['CleanTech', 'Energy', 'Sustainability']
    },
    {
      name: 'DataStream Analytics',
      description: 'Real-time data analytics and business intelligence platform',
      industry: 'Data Analytics',
      location: 'New York, NY',
      employees: '200-500',
      funding: '$60M',
      fundingRound: 'Series C',
      founded: '2018',
      tags: ['Analytics', 'Big Data', 'B2B SaaS']
    },
    {
      name: 'FinanceFlow',
      description: 'Modern financial management platform for SMBs',
      industry: 'FinTech',
      location: 'Chicago, IL',
      employees: '100-300',
      funding: '$40M',
      fundingRound: 'Series B',
      founded: '2019',
      tags: ['FinTech', 'B2B', 'SMB']
    }
  ]

  const filters = [
    { label: 'Series A', value: 'series-a' },
    { label: 'Series B', value: 'series-b' },
    { label: 'AI/ML', value: 'ai-ml' },
    { label: 'B2B SaaS', value: 'b2b-saas' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'FinTech', value: 'fintech' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Discover Companies
          </h1>
          
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-200 p-2 mb-6">
            <Search className="w-6 h-6 text-gray-400 ml-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company name, industry, or keyword..."
              className="flex-1 px-4 py-3 text-lg outline-none"
            />
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Search
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
              <Filter className="w-4 h-4" />
              All Filters
            </button>
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setSelectedFilters(prev =>
                    prev.includes(filter.value)
                      ? prev.filter(f => f !== filter.value)
                      : [...prev, filter.value]
                  )
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilters.includes(filter.value)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{companies.length}</span> companies
            </p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most Relevant</option>
              <option>Recently Funded</option>
              <option>Most Employees</option>
              <option>Funding Amount</option>
            </select>
          </div>

          <div className="space-y-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        {company.name}
                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {company.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {company.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Location</div>
                      <div className="text-sm font-medium text-gray-900">{company.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Employees</div>
                      <div className="text-sm font-medium text-gray-900">{company.employees}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Total Funding</div>
                      <div className="text-sm font-medium text-gray-900">{company.funding}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Last Round</div>
                      <div className="text-sm font-medium text-gray-900">{company.fundingRound}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
              Load More Companies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
