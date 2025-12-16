"use client"

import { MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function VisitInfo() {
  const { t } = useLanguage()

  return (
    <header className="bg-[#0A1929] text-white py-8 border-t-4 border-[#E53935]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">{t.visit.title}</h1>
        <p className="text-center text-gray-300 mb-8 text-balance">{t.visit.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">{t.visit.timing.title}</h3>
              <p className="text-gray-300">{t.visit.timing.weekdays}</p>
              <p className="text-gray-300">{t.visit.timing.holidays}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">{t.visit.location.title}</h3>
              <p className="text-gray-300">{t.visit.location.address1}</p>
              <p className="text-gray-300">{t.visit.location.address2}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
