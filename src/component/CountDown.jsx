"use client";
import React, { use, useEffect, useState } from "react";

const CountDown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, miniute: 0, sec: 0 });

  useEffect(() => {
    const target = new Date("2025-12-31T23:59:59").getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = target - now;
        setTime({
            days : Math.max(0,Math.floor(difference/(1000*60*60*24)))
        })
    }, 1000);
    console.log(timer);
  }, []);

  return <div></div>;
};

export default CountDown;
