export default function Stats() {
  const stats = [
    {
      value: '50M+',
      label: 'Companies Tracked',
      description: 'Comprehensive data on companies worldwide'
    },
    {
      value: '$15T+',
      label: 'Funding Tracked',
      description: 'Historical and real-time funding data'
    },
    {
      value: '75K+',
      label: 'Active Users',
      description: 'Professionals trust our platform daily'
    },
    {
      value: '195',
      label: 'Countries',
      description: 'Global coverage across all markets'
    }
  ]

  return (
    <section className="section-spacing border-y border-gray-200 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
