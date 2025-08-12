import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const product = [
    {
        name :"HAVIT HV-G92 Gamepad", 
        img:"product1.png",
        offer:"120",
        price:"160",
        discount:"40",
        rating:"5",
        review:"88",
    },
    {
        name :"AK-900 Wired Keyboard", 
        img:"product2.png",
        offer:"1160",
        price:"960",
        discount:"35",
        rating:"4",
        review:"76",
    },
    {
        name :"IPS LCD Gaming Monitor", 
        img:"product3.png",
        offer:"370",
        price:"400",
        discount:"30",
        rating:"5",
        review:"99",
    },
    {
        name :"S-Series Comfort Chair ", 
        img:"product4.png",
        offer:"375",
        price:"400",
        discount:"25",
        rating:"4.5",
        review:"78",
    },

]
const Today = () => {
  return (
    <div>
      <div className="px-5 container pb-200">
        {/* heading */}
        <div className="flex items-center gap-2">
          <div className="bg-pri w-4 h-8 rounded-sm"></div>
          <h2 className="text-pri font-bold ">Today's</h2>
        </div>

        {/* flash sell */}
        <div className="flex items-center gap-20 py-5">
          <h3 className="font-bold  text-4xl">Flash Sales </h3>
          <div className="flex  gap-4">
            {/* days */}
            <div className="flex flex-col">
              <h3 className="text-xs">Days</h3>
              <h1 className="text-2xl font-bold">03</h1>
            </div>
            <div>:</div>

            {/* Hours */}
            <div className="flex flex-col">
              <h3 className="text-xs">Hours</h3>
              <h1 className="text-2xl font-bold">03</h1>
            </div>
            <div>:</div>
            {/* Minutes */}
            <div className="flex flex-col">
              <h3 className="text-xs">Minutes</h3>
              <h1 className="text-2xl font-bold">03</h1>
            </div>
            <div>:</div>
            {/* Seconds */}
            <div className="flex flex-col">
              <h3 className="text-xs">Seconds</h3>
              <h1 className="text-2xl font-bold">03</h1>
            </div>
          </div>
        </div>

        {/* product */}
        <div className="grid grid-cols-4 gap-5">
            {product.map((item)=>
            
        <div className="bg-gray-200  group">
            {/* image part of the product  */}
          <div className="  flex flex-col p-5 relative">
            <div className="flex justify-between items-center">
              <span className="bg-pri rounded-sm text-white p-1">-{item.discount}%</span>
              <span className="text-2xl bg-gray-100 rounded-full p-1">
                <CiHeart />
              </span>
            </div>
            <span className="absolute top-15 right-6 text-xl bg-gray-100 rounded-full p-1 ">
              <IoEyeOutline />
            </span>
            <img src={item.img} alt="" className="object-contain p-5 w-full h-64"/>
          </div>
            <a href="" className="opacity-0 hover:transform hover:duration-300 group-hover:opacity-100 text-white  p-2 block text-center bg-black/80">Add To Cart</a>
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
            )}
        </div>
      </div>
    </div>
  );
};

export default Today;
