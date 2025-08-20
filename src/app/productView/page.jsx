import Navbar from "@/component/Navbar";
import Topbar from "@/component/Topbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container">
        {/* routing bar */}
        <div className="py-15 mx-5 ">
          <h2>Account / Gaming / Havic Hv G-92 Gamepad</h2>
        </div>

        {/* product part  */}
        <div className="flex justify-between items-center gap-5 ">
          {/* Side Pic */}
          <div className="flex flex-col gap-5 ">
            <img src="" alt="" />
          </div>

          {/* Main Pic */}
          <div className="">
            <img src="" alt="" />
          </div>

          {/* prodct details */}
          <div className="flex flex-col gap-5 items-center">
            <h2>Havic HV G-92 Gamepad</h2>
            {/* Review */}
            <div className="flex justify-between items-center gap-5">
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
            <div className="flex justify-between items-center gap-5">
              <h3>Colors : </h3>
            </div>

            {/* size */}
            <div className="">
              <h3>Sizes :</h3>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
