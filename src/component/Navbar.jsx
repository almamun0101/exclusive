"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch, CiHeart, CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/20">
      <div className="container px-10 ">
        <nav className="flex justify-between items-center">
          <h2 className="font-extrabold text-xl ">Exclusive</h2>
          <ul className="hidden  md:flex  transform items-center gap-5  text-center ">
            <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
              <a href="">Home</a>
            </li>
            <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
              <a href="">Contact</a>
            </li>
            <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
              <a href="">About</a>
            </li>
            <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
             <Link href={"/signup"}>Sign up</Link>
            </li>
          </ul>

          {isOpen && (
            <ul className="border-b py-2 left-0 absolute flex flex-col md:flex transform items-center gap-5 top-[15%] text-left w-full mx-auto ">
              <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
                <a href="">Home</a>
              </li>
              <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
                <a href="">Contact</a>
              </li>
              <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
                <a href="">About</a>
              </li>
              <li className="relative inline-block after:absolute after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full after:h-[2px] after:bg-black/60 after:-bottom-1 after:rounded-2xl after:left-0 after:w-0">
                <a href="">Sign Up</a>
              </li>
            </ul>
          )}
          <div className=" py-5 flex items-center gap-2 text-xl">
            <div className="relative">
              <CiSearch className="absolute -top-2 md:top-1 right-0 md:right-5" />
              <input
                type="text"
                placeholder="what Are you looking for ?"
                className="text-sm pl-4 pr-10 py-2 hidden md:block bg-gray-200 p-1 rounded focus:outline-0 "
              />
            </div>
            <CiHeart />
            <IoCartOutline />
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <CiMenuFries />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
