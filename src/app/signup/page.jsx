"use client";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Topbar from "@/component/Topbar";
import React, { useState } from "react";
import firebaseConfig from "@/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";


const page = () => {
  const auth = getAuth();
  const route = useRouter();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed up
        console.log("Accout Create Successfully");
        route.push("/signin")
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
      <div className="flex justify-between items-center py-20 gap-5">
        <div className="hidden md:block md:w-1/2">
        <img src="SideImage.png" alt="SideImage" className="w-full"/>
        </div>

        <div className="md:w-1/3 w-full container">
          <h2 className="text-3xl font-medium tracking-wider py-2">
            Create an account
          </h2>
          <p className="">Enter Details Below</p>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col py-5 gap-5"
          >
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
              Already have Account ?{" "}
              <Link href="/signin" className="underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
