import React from "react";
import Heading from "./Heading";
import { products } from "@/app/data/products";


const Explore = () => {
  return (
    <div className="container px-5 ">
      <Heading
        title={"Catagoreys"}
        heading={"Browse By Category"}
        product={products}
        design={"design4"}
      />
      <div className="flex justify-center py-5 lg:py-15">
        <button className="bg-pri px-10 py-5 text-center text-white  rounded-lg">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Explore;
