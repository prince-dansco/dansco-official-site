"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email) {
      toast.error("Please fill in the email field!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return; // Do not proceed if validation fails
    }

    
    toast.success("you will be updated on any event that will be coming up", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setData({ email: "" }); // Reset the email field
  };

  return (
    <div className="bg-orange-300 px-2 md:px-20 py-4 md:py-8 w-full text-white">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold md:text-start text-center mb-3">
          DJ Dansco
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 text-lg">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Address</h2>
            <p>23 Government Vebar Plus, Ikeja</p>
            <p>Lagos State, Nigeria</p>
            <p>Africa continent</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>(+234)  080-6012-3380</p>
            <p>name@dansco.com</p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
              <a href="https://web.facebook.com/djdansco11/?_rdc=1&_rdr">
                <FaFacebook
                  size={40}
                  className="text-xl cursor-pointer hover:text-blue-600 transition-colors"
                />
              </a>
              <a href="https://www.instagram.com/djdansco/">
                <FaInstagram
                  size={40}
                  className="text-xl cursor-pointer hover:text-pink-600 transition-colors"
                />
              </a>
              <a
                href="https://x.com/iam_djdansco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={40}
                  className="text-xl cursor-pointer hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Stay Updated</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full max-w-[250px] py-5 px-3 border border-gray-300 rounded-md text-xl text-black"
              />
              <button
                type="submit"
                className="bg-orange-400 py-5 px-5 text-white text-md rounded-md hover:bg-red-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
