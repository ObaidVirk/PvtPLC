'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, Search, LogOut, User } from 'lucide-react'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/lib/LanguageContext'

interface UserData {
  id: string
  email: string
  firstName?: string
  lastName?: string
  isAdmin: number
}

export default function Navbar() {
  const router = useRouter()
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me')
      const data = await response.json()
      setUser(data.user)
    } catch (error) {
      console.error('Auth check error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const isAdmin = user?.isAdmin === 1

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/PvtPLC.png"
              alt="PvtPLC Logo"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/search" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.navbar.search}
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.navbar.solutions}
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.navbar.pricing}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.navbar.about}
            </Link>
            {isAdmin && (
              <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                {t.navbar.dashboard}
              </Link>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <LanguageSelector />
            {!loading && (
              <>
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{user.email}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:text-gray-900 transition-colors font-medium border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t.navbar.logout}</span>
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    {t.navbar.login}
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-custom py-6 space-y-4">
            <Link 
              href="/search" 
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.search}
            </Link>
            <Link 
              href="/solutions" 
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.solutions}
            </Link>
            <Link 
              href="/pricing" 
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.pricing}
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navbar.about}
            </Link>
            {isAdmin && (
              <Link 
                href="/dashboard" 
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navbar.dashboard}
              </Link>
            )}
            <div className="py-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Language</div>
              <LanguageSelector />
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="flex items-center space-x-2 text-gray-700 py-2">
                        <User className="w-5 h-5" />
                        <span className="font-medium">{user.email}</span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout()
                          setMobileMenuOpen(false)
                        }}
                        className="w-full flex items-center justify-center space-x-2 py-2.5 text-gray-700 hover:text-gray-900 transition-colors font-medium border border-gray-300 rounded-lg"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>{t.navbar.logout}</span>
                      </button>
                    </>
                  ) : (
                    <Link 
                      href="/login" 
                      className="block text-center py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.navbar.login}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
