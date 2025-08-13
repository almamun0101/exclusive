import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Heading = ({ title,heading }) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="bg-pri w-4 h-8 rounded-sm"></div>
        <h2 className="text-pri font-bold ">{title}</h2>
      </div>
      <div className="flex justify-between py-5">
        <div className="flex  flex-wrap justify-between items-center gap-2 lg:gap-20">
          <h3 className="font-bold  text-4xl">{heading} </h3>

    
        </div>
        <div className="flex items-center gap-5 ">
          <IoIosArrowRoundBack className="bg-gray-200 p-1 text-4xl  rounded-full " />
          <IoIosArrowRoundForward className="bg-gray-200 p-1 text-4xl  rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default Heading;
