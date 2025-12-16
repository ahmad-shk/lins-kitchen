import { Button } from "@/components/ui/button"

export function AboutUs() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Button variant="outline" className="mb-6 rounded-full bg-transparent border-gray-400">
            Über uns
          </Button>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-pretty">
            Lin&apos;s Kitchen dreht sich um frische, einfache asiatische Küche, die vor Ort zubereitet wird. Wir kochen
            mit guten Zutaten und halten die Aromen ehrlich und komfortabel.
          </p>
        </div>
      </div>
    </section>
  )
}
