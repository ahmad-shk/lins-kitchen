import { MapPin, Clock } from "lucide-react"

export function VisitInfo() {
  return (
    <header className="bg-[#0A1929] text-white py-8 border-t-4 border-[#E53935]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">BESUCHEN SIE LIN&apos;S KITCHEN</h1>
        <p className="text-center text-gray-300 mb-8 text-balance">
          Wir sind leicht zu erreichen und jeden Tag zum Mittag- und Abendessen geöffnet.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">ÖFFNUNGSZEITEN</h3>
              <p className="text-gray-300">DI - SO: 11:30 - 14:30 und 17:30 - 22:00</p>
              <p className="text-gray-300">Feiertage: 11:30 - 14:30 und 17:30 - 22:00</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">STANDORT</h3>
              <p className="text-gray-300">Ketzergasse 299</p>
              <p className="text-gray-300">2380 Perchtoldsdorf</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
