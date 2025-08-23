import React from "react";
import Heading from "./Heading";
const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    img: "product1.png",
    offer: "120",
    price: "160",
    discount: "4",
    rating: "5",
    review: "88",
  },
  {
    name: "AK-900 Wired Keyboard",
    img: "product2.png",
    offer: "1160",
    price: "960",
    discount: "35",
    rating: "4",
    review: "76",
  },
  {
    name: "IPS LCD Gaming Monitor",
    img: "product3.png",
    offer: "370",
    price: "400",
    discount: "30",
    rating: "5",
    review: "99",
  },
  {
    name: "S-Series Comfort Chair ",
    img: "product4.png",
    offer: "375",
    price: "400",
    discount: "25",
    rating: "4.5",
    review: "78",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    img: "product1.png",
    offer: "120",
    price: "160",
    discount: "40",
    rating: "5",
    review: "88",
  },
  {
    name: "AK-900 Wired Keyboard",
    img: "product2.png",
    offer: "1160",
    price: "960",
    discount: "35",
    rating: "4",
    review: "76",
  },
  {
    name: "IPS LCD Gaming Monitor",
    img: "product3.png",
    offer: "370",
    price: "400",
    discount: "30",
    rating: "5",
    review: "99",
  },
  {
    name: "S-Series Comfort Chair ",
    img: "product4.png",
    offer: "375",
    price: "400",
    discount: "25",
    rating: "4.5",
    review: "78",
  },
];
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
