"use client";
import React, {  useEffect, useState } from "react";

const CountDown = ({endTime}) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

   useEffect(() => {
    const target = new Date(endTime).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      setTime({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return(

  <div>
      <div className="grid grid-flow-col gap-5 w-1/3">
        <Box label={"Days"} value={time.days}/>
        <Box label={"Hour"} value={time.hours}/>
        <Box label={"Miniute"} value={time.minutes}/>
        <Box label={"Secound"} value={time.seconds}/>
      </div>
  </div>
  )
};
function Box({ label, value }) {
  return (
    <div className="flex flex-col  items-center">
      <div className="text-sm font-bold font-sans text-gray-500">{label}</div>
      <div className="text-2xl font-mono font-bold">{value}</div>
    </div>
  );
}
export default CountDown;
