import React from "react";
import Image from "next/image";
import image9 from "../../../public/images/gallary_2.png";

export default function AboutIntro() {
  return (
    <div className="px-2 md:px-[90px] py-10 md:py-[20px]">
      <div className="flex flex-col md:flex-row w-full items-center gap-5 ">
        <div className="w-full md:w-[30%]">
          <Image
            src={image9}
            alt="djd profile"
            priority
            quality={100}
            width={800}
            height={200}
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <article className="flex flex-col items-start gap-1  ">
            <p className="text-lg md:text-5xl font-serif text-center md:text-start ">Welcome</p>
            <h1 className="text-2xl md:text-7xl font-bold text-center md:text-start">My Biography</h1>
            <p className="p-1 md:p-7 text-center md:text-start">
              DJ DANSCO knows how to move your mind, body, and soul by
              delivering tracks that stand out from the norm. His music is a
              fusion of energy, rhythm, and creativity, captivating audiences
              with its unique beats and unforgettable melodies. With every
              release, he pushes boundaries, crafting sounds that resonate on
              the dance floor and beyond. As if this impressive succession of
              high-impact, floor-filling bombs wasn’t enough to sustain his
              momentum.
            </p>
            <button className="mt-5 ">
              <a
                href="about"
                className="bg-white px-4 md:px-6 py-4 rounded-md text-black hover:bg-orange-300 text-xl hover:text-white "
              >
                Read More
              </a>
            </button>
          </article>
        </div>
      </div>
    </div>
  );
}
