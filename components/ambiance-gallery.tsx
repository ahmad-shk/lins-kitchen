"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from "react";

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

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const swiperRef = useRef(null)

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])
  
  return (
    <section className="md:py-20 py-15 ambience-bg">
      <div className="container-sm mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair uppercase text-navyBlue md:text-4xl text-3xl lg:text-6xl mb-6 text-balance">{t.ambiance.title}</h2>
          <p className="text-base md:text-xl lg:text-2xl  text-black max-w-4xl mx-auto text-pretty leading-snug">
            {t.ambiance.description}
          </p>
        </div>
      </div>
      <div className="w-full mx-auto ambiance-swiper relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          centeredSlides
          spaceBetween={24}
          loop
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {ambianceImages.map((image, index) => (
            <SwiperSlide key={index} className="ambiance-slide">
              <div className="relative rounded-xl overflow-hidden h-[420px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          <div
            ref={prevRef}
            className="arrow slick-arrow-prev cursor-pointer text-primary"
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.7041" cy="12.7041" r="12.0689" transform="matrix(-1 0 0 1 25.4082 0)" stroke="#0F1C2A" strokeWidth="1.27041" />
              <path d="M15.0629 18.2024C15.3735 18.2024 15.6111 18.1385 15.7755 18.0105C15.9217 17.8644 15.9948 17.7364 15.9948 17.6268C15.9948 17.5354 15.9766 17.4349 15.94 17.3253C15.8852 17.2156 15.8395 17.1243 15.803 17.0512C15.4923 16.7588 15.1725 16.4847 14.8436 16.2289C14.5147 15.9548 14.1858 15.6898 13.8568 15.434C13.4914 15.1416 13.1259 14.831 12.7604 14.502C12.3767 14.1731 11.9473 13.7528 11.4721 13.2412C11.8011 12.8209 12.1026 12.5011 12.3767 12.2818C12.6325 12.0625 12.8883 11.8615 13.1442 11.6788C13.4 11.4778 13.665 11.2859 13.9391 11.1032C14.2132 10.9204 14.4873 10.7286 14.7614 10.5276C15.3096 10.1073 15.739 9.72352 16.0497 9.37633C16.342 9.02913 16.4882 8.70021 16.4882 8.38956C16.4882 8.29819 16.4974 8.2251 16.5156 8.17027C16.5156 8.09718 16.5156 8.02409 16.5156 7.95099C16.5156 7.80481 16.4791 7.69516 16.406 7.62207H15.9948C15.4832 7.62207 15.0537 7.76826 14.7066 8.06063L10.1839 12.1448C9.70875 12.5833 9.4712 12.9945 9.4712 13.3782C9.4712 13.6889 9.58084 13.9721 9.80012 14.2279C9.85494 14.301 9.9189 14.3741 9.99199 14.4472C10.0651 14.502 10.1473 14.5751 10.2387 14.6665C10.3301 14.7396 10.4306 14.8218 10.5402 14.9132C10.6498 15.0046 10.7503 15.1051 10.8417 15.2147C10.9696 15.3243 11.1798 15.4979 11.4721 15.7355C11.7462 15.9731 12.0569 16.238 12.4041 16.5304C12.7513 16.8045 13.0711 17.0695 13.3635 17.3253C13.6558 17.5628 13.8751 17.7456 14.0213 17.8735C14.405 18.0928 14.7522 18.2024 15.0629 18.2024Z" fill="#0F1C2A" />
            </svg>
          </div>
          <div
            ref={nextRef}
            className="arrow slick-arrow-next cursor-pointer text-primary"
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.7041" cy="12.7041" r="12.0689" stroke="#0F1C2A" strokeWidth="1.27041" />
              <path d="M10.3453 18.2024C10.0347 18.2024 9.79712 18.1385 9.63265 18.0105C9.48647 17.8644 9.41337 17.7364 9.41337 17.6268C9.41337 17.5354 9.43165 17.4349 9.46819 17.3253C9.52301 17.2156 9.5687 17.1243 9.60524 17.0512C9.91589 16.7588 10.2357 16.4847 10.5646 16.2289C10.8935 15.9548 11.2224 15.6898 11.5514 15.434C11.9168 15.1416 12.2823 14.831 12.6478 14.502C13.0315 14.1731 13.4609 13.7528 13.9361 13.2412C13.6071 12.8209 13.3056 12.5011 13.0315 12.2818C12.7757 12.0625 12.5199 11.8615 12.264 11.6788C12.0082 11.4778 11.7432 11.2859 11.4691 11.1032C11.195 10.9204 10.9209 10.7286 10.6468 10.5276C10.0986 10.1073 9.6692 9.72352 9.35855 9.37633C9.06618 9.02913 8.91999 8.70021 8.91999 8.38956C8.91999 8.29819 8.91085 8.2251 8.89258 8.17027C8.89258 8.09718 8.89258 8.02409 8.89258 7.95099C8.89258 7.80481 8.92913 7.69516 9.00222 7.62207H9.41337C9.92503 7.62207 10.3545 7.76826 10.7017 8.06063L15.2243 12.1448C15.6994 12.5833 15.937 12.9945 15.937 13.3782C15.937 13.6889 15.8274 13.9721 15.6081 14.2279C15.5533 14.301 15.4893 14.3741 15.4162 14.4472C15.3431 14.502 15.2609 14.5751 15.1695 14.6665C15.0781 14.7396 14.9776 14.8218 14.868 14.9132C14.7584 15.0046 14.6579 15.1051 14.5665 15.2147C14.4386 15.3243 14.2284 15.4979 13.9361 15.7355C13.662 15.9731 13.3513 16.238 13.0041 16.5304C12.6569 16.8045 12.3371 17.0695 12.0448 17.3253C11.7524 17.5628 11.5331 17.7456 11.3869 17.8735C11.0032 18.0928 10.656 18.2024 10.3453 18.2024Z" fill="#0F1C2A" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
