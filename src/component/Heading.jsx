"use client"
import { useRef, useState, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CountDown from "./CountDown";
import Slides from "./Slides";
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
const Heading = ({ title, heading, endTime }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [navReady, setNavReady] = useState({ prev: null, next: null });

  useEffect(() => {
    // set refs after they are attached to the DOM
    setNavReady({ prev: prevRef.current, next: nextRef.current });
  }, []);

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="bg-pri w-4 h-8 rounded-sm"></div>
        <h2 className="text-pri font-bold ">{title}</h2>
      </div>

      <div className="flex justify-between py-5">
        <div className="flex flex-wrap items-center gap-5 lg:gap-20">
          <h3 className="font-bold text-4xl">{heading}</h3>
          {!isNaN(new Date(endTime).getTime()) && <CountDown endTime={endTime} />}
        </div>

        <div className="flex items-center gap-5">
          <div ref={prevRef}>
            <IoIosArrowRoundBack className="bg-gray-200 p-1 text-4xl rounded-full" />
          </div>
          <div ref={nextRef}>
            <IoIosArrowRoundForward className="bg-gray-200 p-1 text-4xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Pass refs after they are ready */}
      {navReady.prev && navReady.next && (
        <Slides product={product} prevEl={navReady.prev} nextEl={navReady.next} />
      )}
    </div>
  );
};

export default Heading;
