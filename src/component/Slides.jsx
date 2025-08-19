"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation, Grid } from "swiper/modules";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Slides = ({ product, prevEl, nextEl, design }) => {
  const offer = (discount, price) => {
    return price - (price * discount) / 100;
  };

  let screen = 3; // default
  if (design === "design1") screen = 4;
  if (design === "design2") screen = 6;
  if (design === "design3") screen = 4;
  if (design === "design4") screen = 4;

  const renderDesign = (item) => {
    switch (design) {
      case "design1":
        return (
          <div className="bg-gray-200  group">
            {/* image part of the product  */}
            <div className="  flex flex-col p-5 relative">
              <div className="flex justify-between items-center">
                {item?.discount && (
                  <span className="bg-pri rounded-sm text-white p-1">
                    -{item.discount}%
                  </span>
                )}
                <span className="absolute top-5 right-6 text-2xl bg-gray-100 rounded-full p-1">
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
                {item.discount && (
                  <h2 className="text-pri font-medium">
                    ${offer(item.discount, item.price)}
                  </h2>
                )}
                <h2
                  className={`${
                    item.discount ? "text-gray-400 line-through" : "text-pri "
                  } `}
                >
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
              <div className="flex items-center gap-3">
                <div className="bg-pri border rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case "design2":
        return (
          <div className="">
            <div className="py-6 border-2 border-gray-300 rounded-sm flex justify-center items-center  hover:bg-pri hover:text-white">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="text-green-400"
                />
                <h2>{item.name}</h2>
              </div>
            </div>
          </div>
        );
      case "design3":
        return (
          <div className="bg-gray-200  group ">
            {/* image part of the product  */}
            <div className="  flex flex-col p-5 relative">
              <div className="flex justify-between items-center">
                <span className=""></span>
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
                <h2 className="text-gray-400 line-through">${item.price}</h2>
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
        );
      case "design4":
        return (
          <div className="bg-gray-200  group">
            {/* image part of the product  */}
            <div className="  flex flex-col p-5 relative">
              <div className="flex justify-between items-center">
                {item?.discount && (
                  <span className="bg-pri rounded-sm text-white p-1">
                    -{item.discount}%
                  </span>
                )}
                <span className="absolute top-5 right-6 text-2xl bg-gray-100 rounded-full p-1">
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
                {item.discount && (
                  <h2 className="text-pri font-medium">
                    ${offer(item.discount, item.price)}
                  </h2>
                )}
                <h2
                  className={`${
                    item.discount ? "text-gray-400 line-through" : "text-pri "
                  } `}
                >
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
              <div className="flex items-center gap-3">
                <div className="bg-pri border rounded-full"></div>
              </div>
            </div>
          </div>
        );
    }
  };
  return (
    <div>
      <div className="w-full mx-auto">
        {" "}
        <Swiper
          modules={[Navigation, Grid]}
          navigation={{
            prevEl: prevEl,
            nextEl: nextEl,
          }}
          spaceBetween={20}
          grid={design == "design4" ? { rows: 2, fill: "row" } : undefined}
          slidesPerView={1} // default (mobile)
          breakpoints={{
            640: {
              slidesPerView: 2, // large screen
              slidesPerGroup: 1, // slide 1 item at a time
              grid: { row: 1, fill: "row" },
            },
            768: {
              slidesPerView: 3, // large screen
              slidesPerGroup: 1, // slide 1 item at a time
              //  grid: { row: 2, fill: "row" },
            },
            1024: {
              slidesPerView: screen, // large screen
              slidesPerGroup: 2, // slide 1 item at a time
              //  grid: { rows: 2, fill: "row" },
            },
          }}
        >
          {product.map((item, index) => (
            <SwiperSlide
              className="flex items-center justify-center  h-32 rounded-lg"
              key={index}
            >
              {renderDesign(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slides;
