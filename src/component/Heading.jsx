"use client"
import { useRef, useState, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CountDown from "./CountDown";
import Slides from "./Slides";

const Heading = ({ title, heading, endTime ,product , design}) => {
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
          {!isNaN(new Date(endTime).getTime()) && <CountDown endTime={endTime} design={design} />}
        </div>
        {
          product && 

        <div className="flex items-center gap-5">
          <div ref={prevRef}>
            <IoIosArrowRoundBack className="bg-gray-200 p-1 text-4xl rounded-full" />
          </div>
          <div ref={nextRef}>
            <IoIosArrowRoundForward className="bg-gray-200 p-1 text-4xl rounded-full" />
          </div>
        </div>
        }
      </div>

      {/* Pass refs after they are ready */}
      {product && navReady.prev && navReady.next && (
        <Slides product={product} prevEl={navReady.prev} nextEl={navReady.next} design={design}/>
      )}
    </div>
  );
};

export default Heading;
