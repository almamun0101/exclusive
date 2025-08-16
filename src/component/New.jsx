import React from "react";
import Heading from "./Heading";

const New = () => {
  return (
    <div className="container py-5">
      <Heading title={"Featured"} heading={"New Arrival"} />
      
      <div className="flex gap-10 items-center justify-between">
        <div className="bg-amber-500 h-80 w-1/2 "></div>
        <div className="w-1/2 gap-5 h-80 flex flex-col items-center justify-between">
            <div className="w-full h-40  bg-blue-400  ">
s
            </div>
            <div className="w-full h-40   flex justify-between gap-5 not-even:">
                    <div className="w-1/2 bg-red-500 "></div>
                    <div className="w-1/2 bg-red-500 "></div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default New;
