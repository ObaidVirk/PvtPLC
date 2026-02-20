import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "PvtPLC has transformed how we identify and engage with potential customers. The data quality and search capabilities are unmatched.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechVentures Inc."
    },
    {
      quote: "As a VC firm, we rely on PvtPLC daily for deal sourcing and market research. It's become an essential part of our investment process.",
      author: "Michael Rodriguez",
      role: "Managing Partner",
      company: "Apex Capital"
    },
    {
      quote: "The comprehensive company data and real-time updates have given us a significant competitive advantage in our market research.",
      author: "Emily Thompson",
      role: "Head of Research",
      company: "Market Insights Co."
    }
  ]

  return (
    <section className="section-spacing bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Join thousands of professionals using PvtPLC to drive business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-blue-100">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
