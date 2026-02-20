import Link from 'next/link'
import { CheckCircle2, Home } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12 px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Thank you for subscribing to PvtPLC. Your payment has been processed successfully.
            We&apos;ve sent a confirmation email with your subscription details.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What&apos;s Next?
            </h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Check your email for subscription confirmation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Access all premium features immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Manage your subscription in your account settings</span>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            <Home className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        <p className="mt-8 text-gray-600">
          Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our support team</Link>
        </p>
      </div>
    </div>
  )
}
