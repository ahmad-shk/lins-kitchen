import Image from "next/image"
import { Badge } from "./ui/badge"

const FeatureItem = () => {
  return (
    <div className="py-16 offers-bg text-white">
      <div className='container-sm relative'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="image rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1 flex items-center justify-center">
            <Image src="/images/image-18.jpg" alt="feature-item" className="object-cover" width={312} height={212} />
          </div>
          <div className="">
            <h3 className="font-playfair font-semibold text-3xl lg:text-3xl leading-none lg:min-h-20 mb-2.5">Mittagsmenü</h3>
            <ul className="lg:text-xl text-base list-disc pl-6">
              <li>Jede Menü Inkludiert eine große Frühlingsrolle oder Minifrühlingsrollen oder pikante säuerliche Suppe</li>
              {/* <li>Mini-Frühlingsrollen</li>
              <li>Scharf-saure Suppe</li> */}
            </ul>
          </div>
          <div className="">
            <h3 className="font-playfair font-semibold text-3xl lg:text-3xl leading-none lg:min-h-20 mb-2.5">Mittagspause</h3>
            <p className="font-inter lg:text-xl text-base mb-2 leading-tight" >Dienstag – Sonntag<br/> 11:30 – 14:30 Uhr</p>
            <p className="font-inter italic text-[15px] leading-tight">Mittagsmenüs am Wochenende sind gegen einen Aufpreis von 2,00 € erhältlich.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureItem