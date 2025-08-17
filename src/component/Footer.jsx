import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white ">
        <div className="container flex  justify-between py-20 px-10">
          
          {/* left side bottom */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Exclusive</h2>
            <h2 className="">Subscribe</h2>
            <h2 className="">Get 10% off your first order</h2>
            <div className="">
              <input type="text" placeholder="Enter your email " />
            </div>
          </div>

          {/* left side bottom */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Support</h2>
            <h2 className="">  Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h2>
            <h2 className="">exclusive@gmail.com</h2>
            <h2 className="">+88015-88888-9999</h2>
          </div>

          {/* left side bottom */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Account</h2>
            <h2 className="">My Account</h2>
            <h2 className="">Login / Register</h2>
            <h2 className="">Cart</h2>
            <h2 className="">Wishlistart</h2>
            <h2 className="">Shop</h2>
          </div>
          {/* left side bottom */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Quick Link</h2>
            <h2 className=""> Privacy Policy</h2>
            <h2 className="">Terms Of Use</h2>
            <h2 className="">FAQ</h2>
            <h2 className="">Contact</h2>
          </div>
          {/* left side bottom */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Download App</h2>
            <h2 className=""> Save $3 with App New User Only</h2>
          <div className="flex items-center">

            <img src="./Qrcode.png" alt="Qrcode" />
            <div className="">
              <img src="./playstore.png" alt="playstore" />
              <img src="./Appstore.png" alt="playstore" />
            </div>
          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
