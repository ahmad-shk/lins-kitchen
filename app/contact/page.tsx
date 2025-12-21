import InnerBanner from '@/components/inner-banner'
import PageInfo from '@/components/page-info'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const Contact = () => {
  return (
    <main>
      <InnerBanner image="/images/contact-banner.png" title="Kontaktieren Sie uns" />
      <PageInfo
        badge="Lasst uns in Kontakt bleiben."
        title="Wir würden uns freuen, von Ihnen zu hören."
        description="Bei Fragen, Reservierungen, Feedback oder Sonderwünschen steht Ihnen unser Team gerne zur Verfügung."
      />
      <div className='offers-bg py-20 text-white'>
        <div className='container-sm'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='text-center'>
              <h4 className='font-playfair font-semibold text-2xl md:text-3xl mb-2'>Öffnungszeiten</h4>
              <p className='font-normal text-[16px]'>MO: Ruhetag<br />DI - SO: 11:30 - 14:30 und 17:30 - 22:00<br />Feiertag: 11:30 - 14:30 und 17:30 - 22:00</p>
            </div>
            <div className='text-center'>
              <h4 className='font-playfair font-semibold text-2xl md:text-3xl mb-2'>Adresse</h4>
              <p className='font-normal text-[16px]'>KETZERGASSE 299 <br />2380 PERCHTOLDSDORF</p>
            </div>
            <div className='text-center'>
              <h4 className='font-playfair font-semibold text-2xl md:text-3xl whitespace-nowrap mb-2'>E-Mail und Telefon</h4>
              <p className='font-normal text-[16px]'>Phone: 01 / 88 99 308</p>
              <p className='font-normal text-[16px]'>Email: office@lins-kitchen.at</p>
            </div>
          </div>
          <Badge className="border-[.5px] border-white text-white rounded-full bg-transparent font-inter text-[15px] px-6 py-1.5 font-normal mt-7 italic mx-auto table">Montags geschlossen</Badge>
        </div>
      </div>
      <div className='container-sm'>
        <div className='text-center py-20'>
          <h2 className='font-playfair text-3xl md:text-4xl lg:text-5xl mb-7' >ANFAHRT</h2>
          <div className='relative text-center overflow-hidden rounded-2xl'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.908942878355!2d16.2800135!3d48.131885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da8a62a064d6b%3A0xc733b11e3156ec0!2sKetzergasse%20299%2C%202380%20Perchtoldsdorf%2C%20Austria!5e0!3m2!1sen!2sat!4v1733760000000"
              className="w-full h-[395px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className='text-xl md:text-2xl text-black mt-7'>Route planen in Google Maps</p>
        </div>
      </div>
    </main>
  )
}

export default Contact