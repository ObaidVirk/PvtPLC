'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, X, ArrowRight } from 'lucide-react'

interface Plan {
  name: string
  description: string
  monthlyPrice: number | null
  annualPrice: number | null
  features: string[]
  notIncluded: string[]
  cta: string
  highlighted: boolean
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual')
  const [loading, setLoading] = useState<string | null>(null)

  const plans: Plan[] = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 100 company profiles per month',
        'Basic search filters',
        'Company funding data',
        'Email support',
        'Export to CSV'
      ],
      notIncluded: [
        'Advanced search filters',
        'API access',
        'Custom reports',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'For growing teams that need advanced features',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Unlimited company profiles',
        'Advanced search & filters',
        'Real-time funding alerts',
        'People & leadership data',
        'CRM integrations',
        'Priority email support',
        'Custom reports',
        'Team collaboration (up to 5 users)'
      ],
      notIncluded: [
        'API access',
        'Dedicated account manager'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Full API access',
        'Custom data integrations',
        'Dedicated account manager',
        'Premium support (24/7)',
        'Custom training & onboarding',
        'Advanced security & compliance',
        'Custom contract terms'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  const handleCheckout = async (plan: Plan) => {
    // For Enterprise plan, redirect to contact page
    if (plan.cta === 'Contact Sales') {
      window.location.href = '/contact'
      return
    }

    // Calculate the amount based on billing period
    const amount = billingPeriod === 'monthly' 
      ? plan.monthlyPrice! 
      : plan.annualPrice!
    
    const interval = billingPeriod === 'monthly' ? 'month' : 'year'
    
    setLoading(plan.name)

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          planName: plan.name,
          amount,
          interval
        }),
      })

      const data = await response.json()

      if (response.ok && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        alert('Failed to create checkout session. Please try again.')
        setLoading(null)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('An error occurred. Please try again.')
      setLoading(null)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              Choose the plan that&apos;s right for you. All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs text-green-600 font-semibold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 md:pb-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105 md:scale-110 z-10'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-8">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline">
                        <span className={`text-5xl font-semibold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : Math.round((plan.annualPrice ?? plan.monthlyPrice * 12) / 12)}
                        </span>
                        <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                          /month
                        </span>
                      </div>
                      {billingPeriod === 'annual' && (
                        <p className={`text-sm mt-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                          Billed annually (${plan.annualPrice ?? plan.monthlyPrice * 12}/year)
                        </p>
                      )}
                    </>
                  ) : (
                    <div className={`text-3xl font-semibold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      Custom
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleCheckout(plan)}
                  disabled={loading !== null}
                  className={`block w-full py-3 px-6 rounded-lg font-medium text-center transition-colors mb-8 disabled:opacity-50 disabled:cursor-not-allowed ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {loading === plan.name ? 'Loading...' : plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-blue-600'
                      }`} />
                      <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 opacity-50">
                      <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-gray-400'
                      }`} />
                      <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-500'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: 'Do you offer a free trial?',
                  a: 'Yes! All plans come with a 14-day free trial. No credit card required.'
                },
                {
                  q: 'Can I change plans later?',
                  a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.'
                },
                {
                  q: 'Is there a long-term contract?',
                  a: 'No. All plans are month-to-month or annual with no long-term commitment. Cancel anytime.'
                },
                {
                  q: 'Do you offer discounts for nonprofits or educational institutions?',
                  a: 'Yes! We offer special pricing for qualifying nonprofits and educational institutions. Contact our sales team for details.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Our team is here to help you find the perfect plan for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg gap-2"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
