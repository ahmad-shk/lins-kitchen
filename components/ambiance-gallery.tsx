import Image from "next/image"

const ambianceImages = [
  {
    src: "/elegant-restaurant-table-setting-with-greenery-run.jpg",
    alt: "Tischdekoration",
  },
  {
    src: "/long-elegant-dining-table-with-white-plates-and-gr.jpg",
    alt: "Restaurantinterieur",
  },
  {
    src: "/cozy-restaurant.png",
    alt: "Gemütlicher Essbereich",
  },
]

export function AmbianceGallery() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">AMBIENTE & ERLEBNIS</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-pretty leading-relaxed">
            Lin&apos;s Kitchen ist ein warmer, entspannter Ort, um frische asiatische Küche zu genießen. Der Raum ist
            einfach, sauber und komfortabel, damit Sie sich entspannen können, während Ihre Mahlzeit frisch zubereitet
            wird.
          </p>
        </div>

        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <button className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            {ambianceImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] relative rounded-xl overflow-hidden">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <button className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
