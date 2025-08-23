"use client";
import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";

const ProductView = () => {
  const thumbnails = [
    "product13.png",
    "product14.png",
    "product15.png",
    "product16.png",
  ];

  const [mainImg, setMainImg] = useState(thumbnails[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 max-w-7xl mx-auto">
      {/* Left Side - Thumbnails */}
      <div className="lg:col-span-2 flex lg:flex-col gap-4 justify-center">
        {thumbnails.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            onClick={() => setMainImg(img)}
            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
              mainImg === img ? "border-black" : "border-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Middle - Main Image */}
      <div className="lg:col-span-5 flex justify-center">
        <img
          src={mainImg}
          alt="main product"
          className="w-full max-h-[500px] object-contain rounded-xl shadow-md"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Title & Rating */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Nike Air Max Pro 2023
          </h2>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <span className="text-gray-500 text-sm">(120 Reviews)</span>
          </div>
          <p className="text-green-600 font-medium mt-1">✔ In Stock</p>
        </div>

        {/* Price */}
        <p className="text-3xl font-semibold text-black">$199.00</p>

        {/* Color Options */}
        <div>
          <h3 className="font-medium mb-2">Color:</h3>
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-black cursor-pointer border-2 border-gray-300"></span>
            <span className="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></span>
          </div>
        </div>

        {/* Size Options */}
        <div>
          <h3 className="font-medium mb-2">Size:</h3>
          <div className="flex gap-3">
            {['S', 'M', 'L', 'XL'].map((size) => (
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
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            <ShoppingCart size={20} />
            Add to Cart
          </button>
          <button className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition">
            Buy Now
          </button>
          <button className="flex items-center justify-center w-12 h-12 border rounded-xl hover:bg-red-100 text-red-500">
            <FaHeart />
          </button>
        </div>

        {/* Delivery & Return Info */}
        <div className="text-sm text-gray-600 space-y-2">
          <p>🚚 Free delivery within 3-5 business days</p>
          <p>🔄 30-day return & refund policy</p>
          <p>💳 Cash on Delivery Available</p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
