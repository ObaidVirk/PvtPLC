'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Globe, Check } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { Language } from '@/lib/translations'

const languages = [
  { code: 'en' as Language, name: 'English', flag: 'us' },
  { code: 'es' as Language, name: 'Spanish', flag: 'es' },
  { code: 'fr' as Language, name: 'French', flag: 'fr' },
  { code: 'de' as Language, name: 'German', flag: 'de' },
  { code: 'it' as Language, name: 'Italian', flag: 'it' },
  { code: 'pt' as Language, name: 'Portuguese', flag: 'pt' },
  { code: 'nl' as Language, name: 'Dutch', flag: 'nl' },
  { code: 'ru' as Language, name: 'Russian', flag: 'ru' },
  { code: 'zh' as Language, name: 'Chinese', flag: 'cn' },
  { code: 'ja' as Language, name: 'Japanese', flag: 'jp' },
  { code: 'ko' as Language, name: 'Korean', flag: 'kr' },
  { code: 'ar' as Language, name: 'Arabic', flag: 'sa' },
  { code: 'hi' as Language, name: 'Hindi', flag: 'in' },
  { code: 'tr' as Language, name: 'Turkish', flag: 'tr' },
  { code: 'pl' as Language, name: 'Polish', flag: 'pl' },
  { code: 'sv' as Language, name: 'Swedish', flag: 'se' },
  { code: 'no' as Language, name: 'Norwegian', flag: 'no' },
  { code: 'da' as Language, name: 'Danish', flag: 'dk' },
  { code: 'fi' as Language, name: 'Finnish', flag: 'fi' },
  { code: 'el' as Language, name: 'Greek', flag: 'gr' }
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    setLanguage(lang.code)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Image
          src={`https://flagcdn.com/24x18/${selectedLanguage.flag}.png`}
          width={24}
          height={18}
          alt={selectedLanguage.name}
          className="rounded"
          unoptimized
        />
        <span className="hidden md:inline text-gray-700 font-medium text-sm">{selectedLanguage.name}</span>
        <Globe className="w-4 h-4 text-gray-500 md:hidden" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 py-3">
          <div className="px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">Select Language</h3>
          </div>
          <div className="grid grid-cols-2 gap-1 p-2 max-h-96 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors ${
                  selectedLanguage.code === lang.code ? 'bg-blue-50' : ''
                }`}
              >
                <Image
                  src={`https://flagcdn.com/24x18/${lang.flag}.png`}
                  width={24}
                  height={18}
                  alt={lang.name}
                  className="rounded flex-shrink-0"
                  unoptimized
                />
                <span className="text-sm text-gray-700 font-medium flex-1 text-left">
                  {lang.name}
                </span>
                {selectedLanguage.code === lang.code && (
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
