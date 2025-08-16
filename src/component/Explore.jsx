import React from "react";
import Heading from "./Heading";
import rating from "daisyui/components/rating";

const product = [
  {
    img: "product5.png",
    name: "Breed Dry Dog Food",
    price: "100",
    rating: "4",
    review: "35",
    color: ["#fa1414", "#db4444"],
  },
  {
    img: "product6.png",
    name: "CANON EOS DSLR Camera",
    price: "360",
    rating: "3",
    review: "95",
    color: ["#fa1414", "#db4444"],
  },
  {
    img: "product7.png",
    name: "ASUS FHD Gaming Laptop",
    price: "700",
    rating: "4",
    review: "335",
    color: ["#fa1414", "#db4444"],
  },
  {
    img: "product8.png",
    name: "Curology Product Set ",
    price: "600",
    rating: "4",
    review: "135",
    color: ["#fa1414", "#db4444"],
  },
  {
    img: "product9.png",
    name: "Kids Electric Car",
    price: "960",
    rating: "3",
    review: "67",
    color: ["#fa1414", "#db4444"],
  },
  {
    img: "product10.png",
    name: "Jr. Zoom Soccer Cleats",
    price: "1160",
    rating: "4",
    review: "35",
    color: ["#efff61 ", "#db4444"],
  },
  {
    img: "product11.png",
    name: "GP11 Shooter USB Gamepad",
    price: "660",
    rating: "4",
    review: "55",
  },
  {
    img: "product12.png",
    name: "Quilted Satin Jacket",
    price: "10s0",
    rating: "4",
    review: "3s5",
  },
];
const Explore = () => {
  return (
    <div className="container pb-100 ">
      <Heading
        title={"Catagoreys"}
        heading={"Browse By Category"}
        product={product}
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
