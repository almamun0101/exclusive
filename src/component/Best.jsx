import React from "react";
import Heading from "./Heading";
import CountDown from "./CountDown";
import { products } from "@/app/data/products";

const endTime="2025-12-31T23:59:59";
const Best = () => {
  return (
    <div className="container w-full px-5">
      <Heading
        title={"This Month"}
        heading={"Best Selling Products"}
        product={products}
        design={"design3"}
      />

      <div className="py-20">
        <div className="bg-black text-white py-30 px-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-between items-center px-5 lg:px-10">
            <div className="flex flex-col justify-center ">
              <h3 className="text-[#06d48f] pb-10">Catagories</h3>
              <h2 className="text-4xl w-80 tracking-wider leading-12 ">Enhance Your Music Experience</h2>
              <div className="flex justify-between gap-2 py-5  ">
                {!isNaN(new Date(endTime).getTime()) && <CountDown endTime={endTime} design={"design2"} />}
              
              </div>
              <button className="bg-[#00ff66] w-40 px-5 py-3 rounded-sm my-10 ">Buy Now</button>
            </div>
            <div className="">
              <img src="./speaker.png" alt="Speaker" className=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
