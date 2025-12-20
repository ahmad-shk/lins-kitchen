"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function HeroBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[600px] md:h-[750px] overflow-hidden">
      <Image src="/images/home-page/home-banner.png" alt="Asiatische Speisen" fill className="object-cover" priority />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="font-playfair uppercase md:text-4xl text-3xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-2xl leading-none text-secondary">
          {t.hero.title}
          <span className="block" >{t.hero.titleAccent}</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-4xl text-pretty drop-shadow-lg font-normal">{t.hero.subtitle}</p>
        <Button
          size="lg"
          className="bg-btnSecondary text-navyBlue hover:text-white cursor-pointer text-base md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full shadow-xl"
        >
          {t.hero.cta}
        </Button>
      </div>
    </section>
  )
}
