import Image from "next/image"
import { Button } from "@/components/ui/button"

const offers = [
  {
    title: "Traditionelle Thai-Hähnchen-Kuchen",
    description:
      "Fein gehacktes Hähnchen, verfeinert mit roter Curry-Paste und asiatischen Kräutern. Thai-rot-golden gebraten.",
    image: "/thai-chicken-cakes-with-cucumber-salad.jpg",
  },
  {
    title: "Traditionelle Thai-Hähnchen-Kuchen",
    description:
      "Fein gehacktes Hähnchen, verfeinert mit roter Curry-Paste und asiatischen Kräutern. Thai-rot-golden gebraten.",
    image: "/fresh-sushi-rolls-with-shrimp-and-vegetables.jpg",
  },
]

export function SpecialOffers() {
  return (
    <section className="py-20 bg-[#0A1929] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Button
            variant="outline"
            className="mb-6 rounded-full border-white text-white hover:bg-white hover:text-[#0A1929] bg-transparent"
          >
            Monatsangebot
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">SPEZIELLE ANGEBOTE FÜR DEZEMBER</h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {offers.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-[#0A1929]">5 Stück — 6,80 €</p>
              </div>
              <div className="w-full md:w-64 h-48 relative rounded-xl overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
