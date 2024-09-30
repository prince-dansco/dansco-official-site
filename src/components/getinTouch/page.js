"use client";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetInTouch() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!data.name || !data.email || !data.message || !data.agree) {
      toast.error("Please fill in all fields and agree to terms!", {
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

    // Success message and reset form fields
    toast.success("Message sent successfully!", {
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

    setData({
      name: "",
      email: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div className="bg-transparent text-white py-3 md:py-10 px-3 md:px-24">
      <div className="text-center mb-10">
        <p className="text-3xl">Send a Message</p>
        <h1 className="text-5xl font-bold mt-2">Get In Touch</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="YOUR NAME *"
              className="w-full p-3 text-md text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              // required
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="YOUR EMAIL *"
              className="w-full p-3 text-md text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              // required
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE *"
              className="w-full p-3 text-md text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="5"
              value={data.message}
              // required
              onChange={handleChange}
            ></textarea>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={data.agree}
                onChange={handleChange}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-red-500"
                // required
              />
              <label htmlFor="agree" className="text-gray-700">
                I agree that my data is collected and stored.
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 max-w-[200px] mx-auto bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full max-w-lg mt-10 md:mt-0 md:ml-10 text-center border-white border-[1px] text-white p-[6px] shadow-md rounded-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">General Enquiries</h2>
            <p className="mt-2">123 Momo Street</p>
            <p>Monmnonm, LI 3000008</p>
            <p className="mt-4 font-semibold">Phone: 1-245-345-1345</p>
            <p className="font-semibold">Email: djdansco@gmail.com</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">General Encounter</h2>
            <p className="mt-2">Beautiful experience</p>
            <p>With the baddest DJ Dansco</p>
            <p className="mt-4 font-semibold">Best Entertainment</p>
            <p className="font-semibold">DKD BLAST RECORD</p>
          </div>
        </div>
      </div>
      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
}
