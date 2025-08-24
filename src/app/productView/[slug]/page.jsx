"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import Heading from "@/component/Heading";

const thumbnails = ["product13.png", "product14.png", "product15.png", "product16.png"];

const products = [
  { name: "HAVIT HV-G92 Gamepad", img: "product1.png", offer: "120", price: "160", discount: "4", rating: "5", review: "88", slug: "havic-hv-g92-gamepad" },
  { name: "AK-900 Wired Keyboard", img: "product2.png", offer: "1160", price: "960", discount: "35", rating: "4", review: "76", slug: "ak-900-wired-keyboard" },
  // more products ...
];

const ProductView = ({ params }) => {
  const [count, setCount] = useState(1);
  const [mainImg, setMainImg] = useState(thumbnails[0]);

  // find product from slug
  const product = products.find((p) => p.slug === params.slug);

  return (
    <div className="container mx-auto ">
      <div className="py-10 ">
        <h2>Account / Product / {product?.name}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mx-auto my-20 items-start">
        {/* Left - Thumbnails */}
        <div className="lg:col-span-2 flex lg:flex-col gap-4 justify-center ">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setMainImg(img)}
              className={`w-30 h-30 p-5 bg-black/2 rounded-xl cursor-pointer border-2 ${
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

        {/* Right - Product Details */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">{product?.name}</h2>
          <div className="flex  items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <span className="text-gray-500 text-sm">({product?.review} Reviews)</span>
            <p className="text-green-600 font-medium mt-1">✔ In Stock</p>
          </div>

          <p className="text-3xl font-semibold text-black">${product?.offer}.00</p>
          <p>PlayStation 5 Controller Skin ...</p>
          <hr />

          {/* Colors */}
          <div className="flex items-center gap-6">
            <h3 className="font-medium mb-2">Colours:</h3>
            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-black cursor-pointer border-2 border-gray-300"></span>
              <span className="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></span>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-6">
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

          {/* Cart buttons */}
          <div className="flex items-center gap-2">
            <div className="border rounded flex items-center justify-between gap-5">
              <button
                onClick={() => count > 1 && setCount(count - 1)}
                className="flex border-r items-center px-3 py-2"
              >
                <FaMinus size={20} />
              </button>
              <p className="px-3">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="flex items-center gap-2 bg-red-500 text-white px-3 py-2"
              >
                <FaPlus size={20} />
              </button>
            </div>
            <button className="px-5 py-2 bg-red-500 text-white border rounded-sm hover:scale-95 transition">
              Buy Now
            </button>
            <button className="flex items-center justify-center px-2 py-1 border rounded-xl text-gray-500 hover:bg-red-100 hover:text-red-500">
              <CiHeart size={30} />
            </button>
          </div>

          {/* Delivery */}
          <div className="border flex flex-col justify-between items-center ">
            <div className="p-4 flex gap-5 justify-between">
              <TbTruckDelivery size={100} />
              <div>
                <h4 className="font-semibold mb-2">Delivery & Returns</h4>
                <p className="text-sm text-gray-600">
                  Free delivery on orders over $100. Easy returns within 30 days.
                </p>
              </div>
            </div>

            <div className="p-4 flex gap-5 items-center border-t">
              <img src="/return.png" alt="" />
              <div>
                <h4 className="font-semibold mb-2">Delivery & Returns</h4>
                <p className="text-sm text-gray-600">
                  Free delivery on orders over $100. Easy returns within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-10 pb-20">
        <Heading title="Related" product={products} design="design1" />
      </div>
    </div>
  );
};

export default ProductView;
