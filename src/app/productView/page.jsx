import Navbar from "@/component/Navbar";
import Topbar from "@/component/Topbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container pb-200">
        {/* routing bar */}
        <div className="py-15 mx-5 ">
          <h2>Account / Gaming / Havic Hv G-92 Gamepad</h2>
        </div>

        {/* product part  */}
        <div className="flex justify-between items-center gap-5 ">
          {/* Side Pic */}
          <div className="flex flex-col gap-5 w-1/5">
            <img src="" alt="" />
          </div>

          {/* Main Pic */}
          <div className="w-2/5">
            <img src="" alt="" />
          </div>

          {/* prodct details */}
          <div className="w-2/5 flex flex-col gap-5 ">
            <h2>Havic HV G-92 Gamepad</h2>
            {/* Review */}
            <div className="flex items-center gap-5">
              {/* star */}
              <div className=""></div>
              <h3>(150 Reviews )</h3>
              <p className="text-green-400 text-sm ">In Stock</p>
            </div>

            {/* price */}
            <div className="">$120.00</div>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr className="text-gray-300" />

            {/* Colors  */}
            <div className="flex  items-center gap-5">
              <h3>Colors : </h3>
              <div className="w-4 h-4 rounded-full ring-2 ">
                <div className="bg-red-700 w-full h-full rounded-full ring-4 ring-transparent"></div>
              </div>
            </div>

            {/* size */}
            <div className="flex items-center gap-5 ">
              <h3>Sizes :</h3>
                <div className="w-10 border-2 p-2 rounded-sm ">
                  XS
                </div>
                <div className="w-10 border-2 p-2 rounded-sm ">
                  M
                </div>
                <div className="w-10 border-2 p-2 rounded-sm ">
                  L
                </div>
            </div>

            {/* buttons */}
            <div className="flex justify-between gap-2">
              {/* Count Button  */}
              <div className="border rounded-sm flex justify-between items-center">
                  <button className="px-3 border-r py-2">
                    -
                  </button>
                  <p className="px-5 ">2</p>
                  <button className="border-l px-3 bg-red-600 text-white py-2">
                    +
                  </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
