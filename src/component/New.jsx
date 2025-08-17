import React from "react";
import Heading from "./Heading";

const New = () => {
  return (
    <div className="container p-5 ">
      <Heading title={"Featured"} heading={"New Arrival"} />
      {/* new Arraival */}
      <div className="flex gap-5 h-full flex-col lg:flex-row justify-between text-white">
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
        <div className="w-full h-full gap-4 flex flex-col justify-between ">
          <div className="bg-black relative w-full h-full px-10 ">
            <img
              src="./women.png"
              alt=""
              className="w-full  h-full object-contain"
            />
            <div className="absolute bottom-5 left-5">
              <h2 className=" text-lg lg:text-2xl font-bold">
                Women’s Collections
              </h2>
              <p className=" text-sm lg:text-base w-70 text-white/80 py-2">
                Featured woman collections that give you another vibe.
              </p>
              <a href="" className="underline text-lg font-bold">
                Shop Now
              </a>
            </div>
          </div>
          {/* right bottom left */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-5 ">
            <div className="bg-black relative w-full h-70 px-10 py-5">
              <img
                src="./speakers.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-5 left-5">
                <h2 className="text-2xl font-bold">Speakers</h2>
                <p className="text-sm  text-white/80 py-2">
                  Amazon wireless speakers
                </p>
                <a href="" className="underline text-lg font-bold">
                  Shop Now
                </a>
              </div>
            </div>
            {/* right bottom right */}
            <div className="bg-black relative w-full  h-70 px-10 py-5">
              <img
                src="./perfume.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-5 left-5">
                <h2 className="text-2xl font-bold">Perfume</h2>
                <p className="text-sm  text-white/80 py-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <a href="" className="underline text-lg font-bold">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service */}
      <div className="flex gap-10 justify-between items-center py-40 px-20 ">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-black rounded-full p-3 ring-gray-300 ring-10">
            <img src="./delivery.png" alt="delivery" className="" />
          </div>
          <h2 className="text-lg font-bold pt-4">FREE AND FAST DELIVERY</h2>
          <p className="font-extralight">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-black rounded-full p-3 ring-gray-300 ring-10">
            <img src="./customerservice.png" alt="delivery" className="" />
          </div>
          <h2 className="text-lg font-bold pt-4">24/7 CUSTOMER SERVICE</h2>
          <p className="font-extralight">
           Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-black rounded-full p-3 ring-gray-300 ring-10">
            <img src="./shield-tick.png" alt="delivery" className="" />
          </div>
          <h2 className="text-lg font-bold pt-4">MONEY BACK GUARANTEE</h2>
          <p className="font-extralight">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default New;
