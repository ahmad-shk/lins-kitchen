"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { MenuIcon, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Navigation() {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className="bg-navyBlue text-white py-5 md:py-7 md:px-4 relative">
      <div className="container-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/images/home-page/logo.svg"
              width={234}
              height={40}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>

        <button
          className="md:hidden block text-btnSecondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </button>

        <div
          className={`md:flex items-center md:gap-6 gap-3 mobile-menu ${mobileMenuOpen
              ? "block bg-btnSecondary absolute left-0 top-full w-full z-40 p-4"
              : "hidden"
            }`}
        >
          <div
            className={`flex items-center md:gap-6 ${mobileMenuOpen
                ? "flex-col items-start gap-0 text-navyBlue text-sm"
                : ""
              }`}
          >
            <Link href="/" className="hover:text-gray-300 transition-colors text-base md:text-xl">
              {t.nav.home}
            </Link>

            <div className="w-full my-3 border-b border-navyBlue" />

            <Link href="/menu" className="hover:text-gray-300 transition-colors text-base md:text-xl">
              {t.nav.menu}
            </Link>

            <div className="w-full my-3 border-b border-navyBlue" />
            <Link href="/lunch-menus" className="hover:text-gray-300 transition-colors text-base md:text-xl">
              {t.nav.lunchMenu}
            </Link>

            <div className="w-full my-3 border-b border-navyBlue" />


            <Link
              href="/contact"
              className="inline-block border rounded-full text-navyBlue border-navyBlue bg-white hover:border-white hover:bg-transparent hover:text-white text-base cursor-pointer py-2 px-5 leading-none"
            >
              {t.nav.contact}
            </Link>

            <div className="w-full my-3 border-b border-navyBlue" />
          </div>

          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </nav>
  )
}
