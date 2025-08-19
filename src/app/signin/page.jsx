"use client";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Topbar from "@/component/Topbar";
import React, { useState } from "react";
import firebaseConfig from "@/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/navigation";

const page = () => {
  const auth = getAuth();
  const router = useRouter();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed up
        console.log("Login Successfully");
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className=" flex justify-between py-20 gap-5 items-center min-h-screen">
        <div className="hidden md:block w-1/2">
          <img src="SideImage.png" alt="SideImage" />
        </div>

        <div className="container w-full mx-auto md:w-1/3 ">
          <h2 className="text-3xl font-bold tracking-wide py-2">
            Login To Your account
          </h2>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col py-5 gap-5"
          >
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
            <button className="mt-5 bg-pri text-white rounded-sm w-full py-3">
              Create Account
            </button>
            <button
              type={"submit"}
              className="border-2 flex items-center justify-center text-lg gap-5 border-black/20 text-black rounded-sm w-full p-2"
            >
              {" "}
              <img src="./googleicon.png" alt="googleicon" className="w-8 " />
              Sign up With Google
            </button>
            <p className="text-gray-500 pb-10 text-center">
              Login Problem ?{" "}
              <a href="" className="underline">
                Need Help
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
