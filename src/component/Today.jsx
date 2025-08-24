import React from "react";
import Heading from "./Heading";
import { products } from "@/app/data/products";

const Today = () => {
  return (
    <div>
      <div className="px-5 container py-20">
        {/* heading */}
        <Heading
          title={"Today's"}
          heading={"Flash Sale's"}
          endTime={"2025-12-31T23:59:59"}
          product={products}
          design={"design1"}
       
        />

        <div className="flex justify-center py-5 lg:py-15">
          <button className="bg-pri px-10 py-5 text-center text-white  rounded-lg">
            View All Products
          </button>
        </div>
        <hr className="text-[#b5b5b5]" />
      </div>
    </div>
  );
};

export default Today;
