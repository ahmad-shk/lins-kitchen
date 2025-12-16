"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function AboutUs() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Button variant="outline" className="mb-6 rounded-full bg-transparent border-gray-400">
            {t.about.badge}
          </Button>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-pretty">{t.about.description}</p>
        </div>
      </div>
    </section>
  )
}
