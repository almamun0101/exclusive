import React from "react";
import Heading from "./Heading";

const product = [
  {
    name: "The north coat",
    img: "bestproduct1.png",
    offer: "120",
    price: "360",
    rating: "5",
    review: "65",
  },
  {
    name: "Gucci duffle bag",
    img: "bestproduct2.png",
    offer: "1160",
    price: "960",
    rating: "4",
    review: "65",
  },
  {
    name: "RGB liquid CPU Cooler",
    img: "bestproduct3.png",
    offer: "160",
    price: "170",
    rating: "5",
    review: "65",
  },
  {
    name: "Small BookSelf",
    img: "bestproduct4.png",
    offer: "360",
    price: "360",
    rating: "4.5",
    review: "78",
  },
];
const Best = () => {
  return (
    <div className="pb-200 container w-full px-5">
      <Heading
        title={"This Month"}
        heading={"Best Selling Products"}
        product={product}
        design={"design3"}
      />

      <div className="py-20">
        <div className="bg-black text-white py-30 px-20">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center px-20">
              <h3 className="text-[#06d48f] pb-10">Catagories</h3>
              <h2 className="text-4xl w-80">Enhance Your Music Experience</h2>
              <div className="flex justify-between gap-2 py-5  ">
                <div className="w-10 h-10 bg-white rounded-full "></div>
                <div className="w-10 h-10 bg-white rounded-full "></div>
                <div className="w-10 h-10 bg-white rounded-full "></div>
                <div className="w-10 h-10 bg-white rounded-full "></div>
              </div>
              <button className="bg-[#00ff66] w-50 px-5 py-2 rounded-lg my-10 ">Buy Now</button>
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
