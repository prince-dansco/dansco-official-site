"use client";
import GallaryImage from "@/components/imageGallary/page";
import { TypeAnimation } from "react-type-animation";

export default function GallaryItem() {
  return (
    <div>
      <div
        className="w-full flex justify-center items-center flex-col relative"
        style={{
          background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RcIh1bv0usYXQO3T-TVXwsk9o8TnoWPPdQ&s) no-repeat center center/cover`,
          height: "90vh",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <div className="relative z-10 text-center">
          <TypeAnimation
            sequence={["Gallary of Dj Dansco ", 1000, ""]}
            speed={50}
            className="text-white text-4xl font-bold p-4"
            repeat={Infinity}
          />
          <h1 className="text-4xl mt-3 text-[#c9c3a3]  px-3 py-3">Gallary </h1>
        </div>
      </div>
      <GallaryImage />
    </div>
  );
}
