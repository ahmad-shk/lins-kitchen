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
                <div>
                    <h4 className='font-playfair font-semibold text-3xl md:text-[40px] mb-2'>Öffnungszeiten</h4>
                    <p className='font-semibold text-xl'>Dienstag – Sonntag <br/>11:30 – 14:30 Uhr <br/>17:30 – 22:30 Uhr</p>
                </div>
                <div>
                    <h4 className='font-playfair font-semibold text-3xl md:text-[40px] mb-2'>Adresse</h4>
                    <p className='font-normal text-xl'>KETZERGASSE 299 <br/>2380 PERCHTOLDSDORF</p>
                </div>
                <div>
                    <h4 className='font-playfair font-semibold text-3xl md:text-[40px] whitespace-nowrap mb-2'>E-Mail und Telefon</h4>
                    <p className='font-normal text-xl mb-2'>Phone: 01 / 88 99 308</p>
                    <p className='font-normal text-xl'>Email: office@lins-kitchen.at</p>
                </div>
            </div>
            <Badge className="border-[.5px] border-white text-white rounded-full bg-transparent font-inter text-[15px] px-6 py-1.5 font-normal mt-7 italic mx-auto table">Montags geschlossen</Badge>
        </div>
      </div>
      <div className='container-sm'>
        <div className='text-center py-20'>
            <h2 className='font-playfair text-4xl md:text-5xl lg:text-6xl mb-7' >ANFAHRT</h2>
            <div className='relative text-center overflow-hidden rounded-2xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13594.266313237882!2d74.3000874!3d31.590931400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1766227186988!5m2!1sen!2s" className='w-full h-[395px] border-0' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p className='text-xl md:text-3xl text-black mt-7'>Route in Google Maps planen</p>
        </div>
      </div>
    </main>
  )
}

export default Contact