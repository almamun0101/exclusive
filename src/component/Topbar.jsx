import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  return (
    <div>
      {" "}
      {/* top bar */}
      <div className="bg-black relative  w-full mx-auto py-3 text-white justify-between flex px-10">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-center">
          <h2>
            Summer SoleFor all Seim Suit and Free Express Deliver - 50%o OFF{" "}
          </h2>
          <a href="#" className="underline text-base">
            Shop Now
          </a>
        </div>
        <div className="ml-auto flex items-center gap-2  ">
          <button>English</button>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
