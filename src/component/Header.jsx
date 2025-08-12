import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";


const Header = () => {
  return (
    <div>
      <div className="border-t ">
        <div className="container flex justify-between ">
          <div className="w-1/4 py-5 border-r border-black">
            <div className="flex flex-col px-5 gap-3">
              <Link href="/about">Woman’s Fashion</Link>
              <Link href="/about">Men’s Fashion</Link>
              <Link href="/about">Electronics</Link>
              <Link href="/about">Home & Lifestyle</Link>
              <Link href="/about">Medicine</Link>
              <Link href="/about">Sports & Outdoor</Link>
              <Link href="/about">Baby’s & Toys</Link>
              <Link href="/about">Groceries & Pets</Link>
              <Link href="/about">Health & Beauty</Link>
            </div>
          </div>
          <div className="p-5 w-full">
            <div className="bg-black flex justify-between relative">
              <div className="text-white p-10 pt-20">
                <div className="flex items-center pb-5 gap-5 ">
                  <img src="applelogo.png" alt="" />
                  <h2 >Iphone 14 Seriess</h2>
                </div>
                <h1 className="w-50 text-4xl font-bold pb-10">
                  Up to 10% of voucher
                </h1>
                <div className="flex items-center gap-2">
                  <a href="" className="underline text-lg p-1">
                    Show Now
                  </a>
                  <FaArrowRightLong />
                </div>
                <div className="absolute flex justify-center bottom-5 left-1/2 -translate-x-1/2 ">
                  <GoDotFill className="text-gray-400 hover:ring hover:ring-white rounded-full" />
                  <GoDotFill className="text-gray-400 hover:ring hover:ring-white rounded-full" />
                  <GoDotFill className="text-red-400 hover:ring hover:ring-white rounded-full" />
                  <GoDotFill className="text-gray-400 hover:ring hover:ring-white rounded-full" />
                  <GoDotFill className="text-gray-400 hover:ring hover:ring-white rounded-full" />
                </div>
              </div>
              <img src="banner.png" alt="" className=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
