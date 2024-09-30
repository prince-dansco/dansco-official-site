import React from "react";
import Image from "next/image";
import image1 from "../../../public/images/gallary_1.jpeg";
import Link from "next/link";

export default function IPlay() {
  return (
    <div className="px-[90px] py-6">
      <div className="flex flex-col md:flex-row justify-center gap-7 items-center">
        <div className=" md:text-left text-3xl flex flex-col items-center">
          <p className="capitalize text-gray-500 text-start ">What I Play</p>
          <h1 className=" text-4xl md:text-7xl font-bold mr-[-45px]">Music Styles</h1>
          <div className="flex flex-wrap justify-center py-[30px] md:justify-start gap-5 px-3">
            <div>
              <ul className="list-none space-y-2 items-center">
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Deep House
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Techno
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Synthwave
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Soul
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Funk
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none space-y-2">
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Disco
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Electronic
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Pop
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Jazz
                </li>
                <li className="before:content-['■'] before:mr-2 before:text-red-500">
                  Reggae
                </li>
              </ul>
            </div>
          </div>
          <button className="hover:bg-red-500 bg-white text-black hover:text-white px-12 py-5 mt-6 rounded-md text-center">
            <Link
              href="https://music.apple.com/ng/artist/dj-dansco/1583023100"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                AppleSound
              </a>
            </Link>
          </button>
        </div>
        <div className="mt-6 md:mt-0 w-full md:w-1/2">
          <Image
            src={image1}
            alt="DJ Dansco"
            quality={100}
            width={300}
            height={100}
            priority
            className="object-cover w-full h-full md:h-[80%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
