import React from "react";

import Heading from "./Heading";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CountDown from "./CountDown";
import Slides from "./Slides";
import Swiper from "./Swiper";

const product = [
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
      <div className="px-5 container pb-200">
        {/* heading */}
        <Heading title={"Today's"} heading={"Flash Sale's"} endTime={"2025-12-31T23:59:59"} />
        {/* product */}
      
       {/* <Swiper/> */}
      </div>
    </div>
  );
};

export default Today;
