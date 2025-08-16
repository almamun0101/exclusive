"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading";

const product = [
  {
    img: "./Categories1.png",
    name: "Phone",
  },
  {
    img: "./Categories2.png",
    name: "Computers",
  },
  {
    img: "./Categories3.png",
    name: "Smart Watch",
  },
  {
    img: "./Categories4.png",
    name: "Camera",
  },
  {
    img: "./Categories5.png",
    name: "HeadPhones",
  },
  {
    img: "./Categories6.png",
    name: "Gaming",
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
    <div className="container ">
      <Heading
        title={"Catagoreys"}
        heading={"Browse By Category"}
        product={product}
        design={"design2"}
      />

      <hr className="text-[#b5b5b5] my-10" />
    </div>
  );
};

export default Categories;
