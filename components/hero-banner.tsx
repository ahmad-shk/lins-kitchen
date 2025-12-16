"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function HeroBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      <Image src="/images/image.png" alt="Asiatische Speisen" fill className="object-cover" priority />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-2xl leading-tight">
          {t.hero.title}
          <br />
          <span className="text-[#90EE90]">{t.hero.titleAccent}</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-pretty drop-shadow-lg">{t.hero.subtitle}</p>
        <Button
          size="lg"
          className="bg-white text-[#0A1929] hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl"
        >
          {t.hero.cta}
        </Button>
      </div>
    </section>
  )
}
