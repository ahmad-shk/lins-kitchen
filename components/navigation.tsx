"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { CrossIcon, MenuIcon, X } from "lucide-react"
import { Close } from "@radix-ui/react-dialog"
import { useState } from "react"

export function Navigation() {
  const { t } = useLanguage()

  const [mobileMenuOpen, setMobileMenuOpen] =  useState(false);

  window.onresize = () => {
    setMobileMenuOpen(false);
  } 

  return (
    <nav className="bg-navyBlue text-white py-5 md:py-7 md:px-4 relative">
      <div className="container-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="images/home-page/logo.svg" width={234} height={40} alt="logo" />
        </div>
        <button className="md:hidden block text-btnSecondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? 
          <X/>
          :
          <MenuIcon/>
          }
        </button>
        <div className={`md:flex items-center md:gap-6 gap-3 mobile-menu ${mobileMenuOpen ? "block bg-btnSecondary absolute left-0 top-full w-full z-40 p-4 " : "hidden"}`}>
          <div className={`flex items-center md:gap-6 ${mobileMenuOpen ? "flex-col items-start gap-0 text-navyBlue text-sm" : ""}`}>
              <a href="#" className="hover:text-gray-300 transition-colors text-base md:text-xl">
                {t.nav.home}
              </a>
              <div className="w-full my-3 border-b border-navyBlue"></div>
              <a href="#menu" className="hover:text-gray-300 transition-colors text-base md:text-xl">
                {t.nav.menu}
              </a>
              <div className="w-full my-3 border-b border-navyBlue"></div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-navyBlue border-navyBlue bg-white hover:border-white hover:bg-transparent hover:text-white text-base cursor-pointer px-5" 
            >
              {t.nav.contact}
            </Button>
            <div className="w-full my-3 border-b border-navyBlue"></div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
