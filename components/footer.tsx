import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A1929] text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 relative rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
              <Image
                src="/professional-asian-restaurant-owner-portrait.jpg"
                alt="Lin Zainiger"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">INHABER</p>
              <p className="font-bold">Lin Zainiger</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-3">KONTAKT</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                01 / 89 19 398
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@linskitchen.at
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-3">FOLGEN</p>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-2">ZAHLUNG AKZEPTIERT</p>
            <p className="text-sm">Bargeld, Karte willkommen</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
