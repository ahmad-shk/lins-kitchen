"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  const { t } = useLanguage()
  return (
    <section className="py-20 ambience-bg">
      <div className="container-sm mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-navyBlue text-4xl md:text-6xl mb-6 text-balance">{t.ambiance.title}</h2>
          <p className="text-lg md:text-2xl text-black max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.ambiance.description}
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ambianceImages.map((image, index) => (
          <SwiperSlide key={index} className="w-auto flex justify-center">
            <div className="h-full relative rounded-xl overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                // layout="fill"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
    </section>
  )
}
