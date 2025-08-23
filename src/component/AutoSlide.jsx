"use client";
import { useEffect, useState } from "react";

export default function CustomAutoSlider({slides}) {
//   const slides = ["Slide 1", "Slide 2", "Slide 3"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-5">
      <div className="relative h-64 flex items-center justify-center ">
        <img src={slides[current]} alt="" />
        
      </div>
    </div>
  );
}
