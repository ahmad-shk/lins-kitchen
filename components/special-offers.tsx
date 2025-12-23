"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "./ui/badge"

const offerImages = ["/images/image-19.jpeg", 
  // "/fresh-sushi-rolls-with-shrimp-and-vegetables.jpg"
]

export function SpecialOffers() {
  const { t } = useLanguage()

  return (
    <section className="md:py-20 py-15 offers-bg text-white">
      <div className="container-sm mx-auto px-4">
        <div className="text-center mb-5 max-w-187.5 mx-auto">
          <Badge className="border-[.5px] border-btnSecondary text-navyBlue rounded-full bg-btnSecondary text-base md:text-xl px-6 py-1 font-normal mb-6">
            {t.offers.badge}
          </Badge>
          <h2 className="font-playfair uppercase md:text-4xl text-3xl lg:text-5xl ">{t.offers.title}</h2>
        </div>

        <div className="space-y-4 mx-auto">
          {t.offers.items.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl p-4 md:pl-9 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="flex-1">
                <div className="md:max-w-110.75">
                  <h3 className="text-xl md:text-[26px] font-inter font-semibold text-navyBlue mb-2 leading-none">{item.title}</h3>
                  <p className="text-navyBlue font-light mb-5 md:mb-9 text-base leading-snug">{item.description}</p>
                  <p className="text-lg md:text-2xl font-semibold text-navyBlue">{item.price}</p>
                </div>
              </div>
              <div className="w-full md:w-93.75 h-48 relative rounded-sm overflow-hidden shrink-0">
                <Image src={offerImages[index] || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
