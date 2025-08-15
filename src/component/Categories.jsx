"use client"
import React, { useEffect, useRef, useState } from "react";

import Heading from "./Heading";
// import Swiper from "./Swiper";
import Slides from "./Slides";
const product = [

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
const Categories = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
    const [navReady, setNavReady] = useState({ prev: null, next: null });
  
    useEffect(() => {
      // set refs after they are attached to the DOM
      setNavReady({ prev: prevRef.current, next: nextRef.current });
    }, []);
  
  return (
    <div>
   <Heading
          title={"Catagoreys"}
          heading={"Browse By Category"}
        
          product={product}
        />
       {/* <Slides product={product} prevEl={navReady.prev} nextEl={navReady.next} />
      <Swiper/> */}
    </div>
  );
};

export default Categories;
