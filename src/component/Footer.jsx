import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white ">
        <div className="container flex items-center justify-between">
          
          {/* left side bottom */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Exclusive</h2>
            <h2 className="text-xl">Subscribe</h2>
            <h2 className="text-xl">Get 10% off your first order</h2>
            <div className="">
              <input type="text" placeholder="Enter your email " />
            </div>
          </div>

          {/* left side bottom */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Support</h2>
            <h2 className="text-xl">exclusive@gmail.com111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h2>
            <h2 className="text-xl">exclusive@gmail.com</h2>
            <h2 className="text-xl">+88015-88888-9999</h2>
          </div>

          {/* left side bottom */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Account</h2>
            <h2 className="text-xl">My Account</h2>
            <h2 className="text-xl">Login / Register</h2>
            <h2 className="text-xl">Cart</h2>
            <h2 className="text-xl">Wishlistart</h2>
            <h2 className="text-xl">Shop</h2>
          </div>
          {/* left side bottom */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Quick Link</h2>
            <h2 className="text-xl"> Privacy Policy</h2>
            <h2 className="text-xl">Terms Of Use</h2>
            <h2 className="text-xl">FAQ</h2>
            <h2 className="text-xl">Contact</h2>
          </div>
          {/* left side bottom */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Download App</h2>
            <h2 className="text-xl"> Save $3 with App New User Only</h2>
          <div className="flex">
            
          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
