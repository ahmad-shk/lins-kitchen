"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const { t } = useLanguage()

  return (
    <nav className="bg-[#0A1929] text-white py-4 px-4 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🏮</div>
          <div>
            <h1 className="font-bold text-xl tracking-wide">LIN&apos;S KITCHEN</h1>
            <p className="text-xs text-gray-400 tracking-widest">ASIAN CUISINE</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">
            {t.nav.home}
          </a>
          <a href="#menu" className="hover:text-gray-300 transition-colors">
            {t.nav.menu}
          </a>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-white hover:bg-white hover:text-[#0A1929] bg-transparent"
          >
            {t.nav.contact}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
