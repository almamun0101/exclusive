"use client";
import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import Heading from "@/component/Heading";

const ProductView = () => {
  const thumbnails = [
    "product13.png",
    "product14.png",
    "product15.png",
    "product16.png",
  ];
  const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    img: "product1.png",
    offer: "120",
    price: "160",
    discount: "4",
    rating: "5",
    review: "88",
  },
  {
    name: "AK-900 Wired Keyboard",
    img: "product2.png",
    offer: "1160",
    price: "960",
    discount: "35",
    rating: "4",
    review: "76",
  },
  {
    name: "IPS LCD Gaming Monitor",
    img: "product3.png",
    offer: "370",
    price: "400",
    discount: "30",
    rating: "5",
    review: "99",
  },
  {
    name: "S-Series Comfort Chair ",
    img: "product4.png",
    offer: "375",
    price: "400",
    discount: "25",
    rating: "4.5",
    review: "78",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    img: "product1.png",
    offer: "120",
    price: "160",
    discount: "40",
    rating: "5",
    review: "88",
  },
  {
    name: "AK-900 Wired Keyboard",
    img: "product2.png",
    offer: "1160",
    price: "960",
    discount: "35",
    rating: "4",
    review: "76",
  },
  {
    name: "IPS LCD Gaming Monitor",
    img: "product3.png",
    offer: "370",
    price: "400",
    discount: "30",
    rating: "5",
    review: "99",
  },
  {
    name: "S-Series Comfort Chair ",
    img: "product4.png",
    offer: "375",
    price: "400",
    discount: "25",
    rating: "4.5",
    review: "78",
  },
];

  const [mainImg, setMainImg] = useState(thumbnails[0]);

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mx-auto my-20 items-start">
        {/* Left Side - Thumbnails */}
        <div className="lg:col-span-2 flex lg:flex-col gap-4 justify-center ">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setMainImg(img)}
              className={`w-30 h-30 p-5  rounded-xl cursor-pointer border-2 ${
                mainImg === img ? "border-black" : "border-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Middle - Main Image */}
        <div className="lg:col-span-6 flex justify-center ">
          <img
            src={mainImg}
            alt="main product"
            className="w-full py-15 h-[75vh] px-20 object-contain rounded-xl shadow-md bg-black/10"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Title & Rating */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Havic HV G-92 Gamepad
            </h2>
            <div className="flex  items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <span className="text-gray-500 text-sm">(120 Reviews)</span>
              <p className="text-green-600 font-medium mt-1">✔ In Stock</p>
            </div>
          </div>

          {/* Price */}
          <p className="text-3xl font-semibold text-black">$199.00</p>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          {/* Color Options */}
          <div className="flex jbetween items-center gap-6">
            <h3 className="font-medium mb-2">Colous:</h3>
            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-black cursor-pointer border-2 border-gray-300"></span>
              <span className="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></span>
            </div>
          </div>

          {/* Size Options */}
          <div className="flex jbetween items-center gap-6">
            <h3 className="font-medium mb-2">Size:</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart & Favourite */}
          <div className="flex  items-center gap-2">
            <div className="border rounded flex items-center justify-between gap-5">
              <button className="flex border-r items-center gap-2  px-3 py-2  transition">
                <FaMinus size={20} />
              </button>
              <p className="px-3">2</p>
              <button className="flex items-center gap-2 bg-red-500 text-white  px-3 py-2  transition">
                <FaPlus size={20} />
              </button>
            </div>
            <button className="px-5 py-2 bg-red-500 text-white   border rounded-sm hover:bg-gray-100 transition">
              Buy Now
            </button>
            <button className="flex items-center justify-center px-2 py-1 border rounded-xl text-gray-500 hover:bg-red-100 hover:text-red-500">
              <CiHeart size={30} />
            </button>
          </div>

          {/* Delivery & Return Info */}
          <div className="border flex flex-col justify-between items-center ">
            <div className="p-4 flex gap-5 justify-between">
              <TbTruckDelivery size={100} />
              <div className="">
                <h4 className="font-semibold mb-2">Delivery & Returns</h4>
                <p className="text-sm text-gray-600">
                  Free delivery on orders over $100. Easy returns within 30
                  days.
                </p>
              </div>
            </div>

            <div className="p-4 flex gap-5 items-center border-t jsutify-between">
              <img src="/return.png" alt="" />
              <div className="">
                <h4 className="font-semibold mb-2">Delivery & Returns</h4>
                <p className="text-sm text-gray-600">
                  Free delivery on orders over $100. Easy returns within 30
                  days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     <Heading
          title={"Related"}
          
        
          product={products}
          design={"design4"}
       
        />
    </div>
  );
};

export default ProductView;
