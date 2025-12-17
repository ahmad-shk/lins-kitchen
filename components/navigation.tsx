"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Navigation() {
  const { t } = useLanguage()

  return (
    <nav className="bg-navyBlue text-white py-7 md:px-4">
      <div className="container-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="images/home-page/logo.svg" width={234} height={40} alt="logo" />
        </div>
        <div className="flex items-center md:gap-6 gap-3">
          <div className="md:flex hidden items-center md:gap-6 gap-3">
            <a href="#" className="hover:text-gray-300 transition-colors text-xl">
              {t.nav.home}
            </a>
            <a href="#menu" className="hover:text-gray-300 transition-colors text-xl">
              {t.nav.menu}
            </a>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-navyBlue border-navyBlue bg-white hover:border-white hover:bg-transparent hover:text-white text-base cursor-pointer px-5" 
            >
              {t.nav.contact}
            </Button>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
