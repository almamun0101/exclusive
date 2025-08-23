import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  return (
    <div>
      {" "}
      {/* top bar */}
      <div className="bg-black relative  w-full mx-auto py-4 text-white justify-between flex px-5 lg:px-10">
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-5 text-xs text-center">
          <h2>
            Summer SoleFor all Seim Suit and Free Express Deliver - 50%o OFF{" "}
          </h2>
          <a href="#" className="underline lg:text-base font-bold">
            Shop Now
          </a>
        </div>
        <div className="hidden ml-auto sm:flex items-center gap-1 text-xs  ">
          <button>English</button>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
