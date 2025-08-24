// data/products.js

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    img: "product1.png",
    offer: "120",
    price: "160",
    discount: "4",
    rating: "5",
    review: "88",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    img: "product2.png",
    offer: "1160",
    price: "960",
    discount: "35",
    rating: "4",
    review: "76",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    img: "product3.png",
    offer: "370",
    price: "400",
    discount: "30",
    rating: "5",
    review: "99",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    img: "product4.png",
    offer: "375",
    price: "400",
    discount: "25",
    rating: "4.5",
    review: "78",
  },
].map((p) => ({
  ...p,
  slug: slugify(p.name), // 👈 auto add slug
}));
