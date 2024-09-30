"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import image1 from "../../../public/images/gallary_2.png";
import AboutPageImage from "@/components/aboutGallary/page";
import IPlay from "@/components/whatIPlay/IPlay";
import ExploreStory from "@/components/exploreStory/page";

export default function About() {
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
            sequence={["Biography  of Dj Dansco ", 1000, ""]}
            speed={50}
            className="text-white text-4xl font-bold p-4"
            repeat={Infinity}
          />
          <h1 className="text-4xl mt-3 text-[#c9c3a3]  px-3 py-3">
            About Dj Dansco{" "}
          </h1>
        </div>
      </div>
      {/*  */}
      <div className=" px-3 md:px-24 py-6 flex  flex-col md:flex-row items-center justify-center gap-12 w-full" id='about'>
        <div className="w-full h-fit">
          <Image
            src={image1}
            alt="Picture of the author"
            width={700}
            height={100}
            className="rounded-md w-full object-cover"
            layout="responsive"
            priority
            quality={100}
          />
        </div>
        <div className="">
          <p className="font-serif text-xl md:text-2xl uppercase text-center md:text-start">How it All Began</p>
          <h1 className=" font-bold text-4xl md:text-7xl text-center md:text-start">Dj Dansco</h1>
          <div>
            <p className="p-4 md:p-9 text-lg">
              Having enjoyed a breathlessly successful 2016, there can be no
              doubting <span className="text-orange-300 text-lg">DJD</span>{" "}
              position as one of the most influential electronic artists of the
              moment. Since 2013, he is a regular guest at a long list of high
              profile clubs and events across the globe, attracting fans from
              all over the world.
            </p>
            <p className="text-lg">
              DJ DANSCO knows how to move your mind, body, and soul by
              delivering tracks that stand out from the norm. As if this
              impressive succession of high impact, floor-filling bombs wasn&rsquo;t
              enough to sustain
            </p>
          </div>
        </div>
      </div>
      <AboutPageImage />
      <IPlay />
      <ExploreStory />
    </div>
  );
}
