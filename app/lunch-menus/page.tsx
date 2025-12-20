"use client"
import React from 'react'
import InnerBanner from '@/components/inner-banner'
import PageInfo from '@/components/page-info'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const Menu = () => {
  return (
    <main>
        <InnerBanner image="/images/menu-banner.png" title="Speisekarte" />
        <PageInfo
            badge="Speisekarte" 
            title="Asiatische Küche mit Sorgfalt zubereitet"
            description="Unsere asiatische Küche verbindet frische Zutaten mit wok-gegartem Gemüse, aromatischen Gewürzen und leichten Saucen. Von knuspriger Ente über duftende Currys bis hin zu Sushi & Maki – wir bereiten jede Speise mit Sorgfalt zu. Vegetarische Optionen sind selbstverständlich verfügbar."
        />
        <div className='bg-navyBlue'>
            <div className='max-w-[1176px] px-4 mx-auto'>
                <Swiper
                modules={[Navigation]}
                navigation
                loop
                centeredSlides={true}
                slidesPerView={1.4}
                spaceBetween={0}
                className="menu-swiper py-20!"
                breakpoints={{
                    767: {
                        slidesPerView: 1.9,
                    },
                }}
                >
                    <SwiperSlide>
                        <img
                        src="/images/Menu-1.jpg"
                        alt="Menu 1"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-2.jpg"
                        alt="Menu 2"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-3.jpg"
                        alt="Menu 3"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-4.jpg"
                        alt="Menu 4"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-5.jpg"
                        alt="Menu 5"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-6.jpg"
                        alt="Menu 6"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-7.jpg"
                        alt="Menu 7"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Mittagsmenu.jpg"
                        alt="Mittagsmenu"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </main>
  )
}

export default Menu