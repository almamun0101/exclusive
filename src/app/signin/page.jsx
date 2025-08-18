"use client";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Topbar from "@/component/Topbar";
import React, { useState } from "react";

const page = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    const userLoginInfo = {
      name : nameInput,
      email: emailInput,
      password : passwordInput,
    }
    console.log(userLoginInfo)
  }

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container flex justify-between py-10 ">
        <div className="w-1/2">
          <img src="SideImage.png" alt="SideImage" />
        </div>

        <div className="w-1/3">
          <h2 className="text-3xl font-medium tracking-wider py-2">
            Create an account
          </h2>
          <p className="">Enter Details Below</p>
          <form onSubmit={handleSubmit} action="" className="flex flex-col py-5 gap-5">
            <input
              type="text"
              className="border-b-3 border-gray-400 p-2"
              placeholder="Name"
              onChange={(e) => setNameInput(e.target.value)}
              required
            />
            <input
              type="email"
              className="border-b-3 border-gray-400 p-2"
              placeholder="Email@email.com"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
            <input
              type="password"
              className="border-b-3 border-gray-400 p-2 "
              placeholder="Password"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            <button className="mt-5 bg-pri text-white rounded-sm w-full py-5">
              Create Account
            </button>
            <button  type={"submit"} className="border-2 flex items-center justify-center text-lg gap-5 border-black/20 text-black rounded-sm w-full p-2">
              {" "}
              <img src="./googleicon.png" alt="googleicon" className="w-10 " />
              Sign up With Google
            </button>
            <p className="text-gray-500 pb-10 text-center">
              Already have Account ?{" "}
              <a href="" className="underline">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
