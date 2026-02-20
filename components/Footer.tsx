import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/search" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Company Search
                </Link>
              </li>
              <li>
                <Link href="/features/prospector" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Prospector
                </Link>
              </li>
              <li>
                <Link href="/features/insights" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/features/api" className="text-gray-600 hover:text-gray-900 transition-colors">
                  API Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/sales" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sales Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/investors" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/solutions/research" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Market Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Image
              src="/PvtPLC.png"
              alt="PvtPLC Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm">
            © 2026 PvtPLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
