'use client'

import Link from 'next/link'
import { Search, TrendingUp, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="section-spacing bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-200 p-2">
              <Search className="w-6 h-6 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder={t.hero.searchPlaceholder}
                className="flex-1 px-4 py-4 text-lg outline-none"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                {t.hero.searchButton}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {t.hero.searchSuggestion}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center gap-2"
            >
              {t.hero.startFreeTrial}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg border border-gray-300"
            >
              {t.hero.requestDemo}
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>{t.hero.companiesCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>{t.hero.investorsCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>{t.hero.trustedBy}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
