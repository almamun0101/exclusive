import React from "react";
import Heading from "./Heading";

const product = [
  {
    name: "The north coat",
    img: "bestproduct1.png",
    offer: "120",
    price: "360",
    rating: "5",
    review: "65",
  },
  {
    name: "Gucci duffle bag",
    img: "bestproduct2.png",
    offer: "1160",
    price: "960",
    rating: "4",
    review: "65",
  },
  {
    name: "RGB liquid CPU Cooler",
    img: "bestproduct3.png",
    offer: "160",
    price: "170",
    rating: "5",
    review: "65",
  },
  {
    name: "Small BookSelf",
    img: "bestproduct14.png",
    offer: "360",
    price: "360",
    rating: "4.5",
    review: "78",
  },

];
const Best = () => {
  return (
    <div className="pb-200 container">
      <Heading
        title={"This Month"}
        heading={"Best Selling Products"}
        product={product}
        design={"design3"}
      />
    </div>
  );
};

export default Best;
