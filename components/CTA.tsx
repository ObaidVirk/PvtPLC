import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to discover your next opportunity?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join thousands of professionals using PvtPLC to find companies, track funding, 
            and stay ahead of market trends.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-lg border border-white/20"
            >
              Request Demo
            </Link>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
