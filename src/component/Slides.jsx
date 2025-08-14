"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Slides = ({ product , prevEl , nextEl  }) => {
  return (
    <div>
      <div className="w-full mx-auto">
        {" "}
        <Swiper
          modules={[Navigation]}
           navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
        }}
          spaceBetween={20}
          slidesPerView={1} // default (mobile)
          breakpoints={{
            // 640: {
            //   slidesPerView: 2, // large screen
            //   slidesPerGroup: 1, // slide 1 item at a time
            // },
            // 768: {
            //   slidesPerView: 3, // large screen
            //   slidesPerGroup: 1, // slide 1 item at a time
            // },
            1024: {
              slidesPerView: 4, // large screen
              slidesPerGroup: 1, // slide 1 item at a time
            },
          }}
        >
          {product.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-200  group">
                {/* image part of the product  */}
                <div className="  flex flex-col p-5 relative">
                  <div className="flex justify-between items-center">
                    <span className="bg-pri rounded-sm text-white p-1">
                      -{item.discount}%
                    </span>
                    <span className="text-2xl bg-gray-100 rounded-full p-1">
                      <CiHeart />
                    </span>
                  </div>
                  <span className="absolute top-15 right-6 text-xl bg-gray-100 rounded-full p-1 ">
                    <IoEyeOutline />
                  </span>
                  <img
                    src={item.img}
                    alt=""
                    className="object-contain p-5 w-full h-64"
                  />
                </div>
                <a
                  href=""
                  className="opacity-0 hover:transform hover:duration-300 group-hover:opacity-100 text-white  p-2 block text-center bg-black/80"
                >
                  Add To Cart
                </a>
                {/* text part of product */}
                <div className="py-3 bg-white">
                  <h2 className="font-medium text-xl">{item.name}</h2>
                  <div className="flex gap-5 py-1">
                    <h2 className="text-pri font-medium">${item.offer}</h2>
                    <h2 className="text-gray-400 line-through">
                      ${item.price}
                    </h2>
                  </div>
                  <div className="flex items-center text-yellow-500 gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-400">({item.review})</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slides;
