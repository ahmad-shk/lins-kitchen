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
            description="Genießen Sie frische asiatische Küche mit Wok-Gemüse, knuspriger Ente, duftenden Currys und Sushi. Jedes Gericht wird mit aromatischen Gewürzen und leichten Saucen sorgfältig zubereitet; es gibt eine große Auswahl an vegetarischen Optionen."
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
                        src="/images/Menu-3.png"
                        alt="Menu 3"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-1.png"
                        alt="Menu 1"
                        className="mx-auto"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                        src="/images/Menu-2.png"
                        alt="Menu 2"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-3.png"
                        alt="Menu 3"
                        className="mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="/images/Menu-1.png"
                        alt="Menu 1"
                        className="mx-auto"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                        src="/images/Menu-2.png"
                        alt="Menu 2"
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