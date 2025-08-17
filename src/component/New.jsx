import React from "react";
import Heading from "./Heading";

const New = () => {
  return (
    <div className="container p-5 ">
      <Heading title={"Featured"} heading={"New Arrival"} />

      <div className="flex gap-10 h-full flex-col lg:flex-row justify-between text-white">
        {/* left side */}
        <div className="bg-black relative w-full h-full px-10 pt-20">
          <img
            src="./ps5.png"
            alt=""
            className="w-full  h-full object-contain"
          />
          <div className="absolute bottom-15 left-5">
            <h2 className="text-2xl font-bold">PlayStation 5</h2>
            <p className="text-base w-70 text-white/80 py-3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="" className="underline text-lg font-bold">
              Shop Now
            </a>
          </div>
        </div>
        {/* right top  */}
        <div className="w-full gap-2 flex flex-col justify-between">
          <div className="bg-black relative w-full h-full px-10 ">
            <img
              src="./women.png"
              alt=""
              className="w-full  h-full object-contain"
            />
            <div className="absolute bottom-5 left-5">
              <h2 className="text-2xl font-bold">Women’s Collections</h2>
              <p className="text-base w-70 text-white/80 py-3">
                Featured woman collections that give you another vibe.
              </p>
              <a href="" className="underline text-lg font-bold">
                Shop Now
              </a>
            </div>
          </div>
          {/* right bottom left */}
          <div className="w-full flex justify-between gap-5">
            <div className="bg-black relative w-full h-full px-10 ">
              <img
                src="./speakers.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-5 left-5">
                <h2 className="text-2xl font-bold">Women’s Collections</h2>
                <p className="text-base w-70 text-white/80 py-3">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="" className="underline text-lg font-bold">
                  Shop Now
                </a>
              </div>
            </div>
            {/* right bottom right */}
            <div className="bg-black relative w-full h-full px-10">
              <img
                src="./perfume.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-5 left-5">
                <h2 className="text-2xl font-bold">Women’s Collections</h2>
                <p className="text-base w-70 text-white/80 py-3">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="" className="underline text-lg font-bold">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
