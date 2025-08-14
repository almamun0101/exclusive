"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ResponsiveSlider() {


  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1} // default (mobile)
        breakpoints={{
          640: {
            slidesPerView: 2, // large screen
            slidesPerGroup: 1, // slide 1 item at a time
          },
          768: {
            slidesPerView: 3, // large screen
            slidesPerGroup: 1, // slide 1 item at a time
          },
          1024: {
            slidesPerView: 4, // large screen
            slidesPerGroup: 1, // slide 1 item at a time
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-blue-500 text-white p-10 rounded-lg text-center text-lg font-bold">
              {slide.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2></h2>
    </div>
  );
}
