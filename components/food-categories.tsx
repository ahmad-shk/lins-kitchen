"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const categoryIcons = ["🥐", "🍽️", "🍜", "🍰"]

const foodImages = [
  {
    src: "/crispy-fried-asian-dumplings-with-dipping-sauce.jpg",
    alt: "Frittierte Teigtaschen",
  },
  {
    src: "/colorful-stir-fry-vegetables-with-peppers-and-lime.jpg",
    alt: "Gebratenes Gemüse",
  },
  {
    src: "/fresh-sushi-rolls-with-shrimp-and-vegetables.jpg",
    alt: "Sushi Rollen",
  },
  {
    src: "/thai-chicken-cakes-with-cucumber-salad.jpg",
    alt: "Thai Hähnchen Kuchen",
  },
]

export function FoodCategories() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Button variant="outline" className="mb-6 rounded-full bg-transparent">
            {t.categories.badge}
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t.categories.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">{t.categories.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {t.categories.items.map((item, index) => (
            <div
              key={item.label}
              className="bg-[#0A1929] text-white p-8 rounded-xl hover:bg-[#1a2f45] transition-colors cursor-pointer"
            >
              <div className="text-5xl mb-4 text-center">{categoryIcons[index]}</div>
              <h3 className="font-bold text-center text-lg tracking-wide">{item.label}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#0A1929] hover:bg-[#1a2f45] text-white">
            {t.categories.cta}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {foodImages.map((image, index) => (
            <div key={index} className="aspect-square relative rounded-xl overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
