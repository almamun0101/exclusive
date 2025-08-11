import Link from "next/link";
import React from "react";

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
          <div className="p-10">
            <div className="bg-black w-full p-100"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
