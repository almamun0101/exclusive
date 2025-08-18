"use client"
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React, { useState } from "react";

const page = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div>
      <Navbar />
      <div className="container flex justify-between">
        <div className="w-1/2">

       
        </div>

        <div className="w-1/3">
          <h2 className="text-3xl font-medium tracking-wider py-2">Create an account</h2>
          <p className="">Enter Details Below</p>
          <form action="" className="flex flex-col py-5 gap-5">
            <input
              type="text"
              className="border-b-3 border-gray-400 p-2"
              placeholder="Name"
              onChange={(e) => setNameInput(e.target.value)}
            />
            <input
              type="email"
              className="border-b-3 border-gray-400 p-2"
              placeholder="Email@email.com"
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <input
              type="password"
              className="border-b-3 border-gray-400 p-2 "
              placeholder="Password"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button className="mt-10 bg-pri text-white rounded-sm w-full py-5">Create Account</button>
            <button className="border-2 border-black text-black rounded-sm w-full py-5">Sign up With Google</button>
              <p className="text-gray-500 pb-10 text-center">Already have Account ? <a href="" className="underline">Log In</a></p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
