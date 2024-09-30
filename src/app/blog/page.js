"use client";
import React from "react";
import Image from "next/image";
import dansco1 from "../../../public/images/gallary_8.jpg";
import dansco2 from "../../../public/images/gallary_14.jpg";
import dansco3 from "../../../public/images/gallary_9.jpeg";
import { TypeAnimation } from "react-type-animation";

export default function Blog() {
  return (
    <div className="">
      {/* Background Section */}
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
              sequence={["DJ Dansco Blog post", 1000, ""]}
              speed={50}
              className="text-white text-4xl font-bold p-4"
              repeat={Infinity}
            />
            <h1 className="text-4xl mt-3 text-[#c9c3a3] px-3 py-3">
              post of Dj Dansco event and blogs
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 py-8">
        <p className="text-center font-mono text-4xl uppercase">Blog</p>
        <h1 className="text-center font-bold text-4xl md:text-6xl uppercase mt-4">
          Music News
        </h1>

        {/* Blog Posts */}
        <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-8 py-4 md:py-10 px-1 md:px-4 lg:px-20">
          {/* Blog post 1 */}
          <div className="flex flex-col items-center p-4 w-full lg:w-1/3">
            <Image
              src={dansco1}
              alt="Endless Remix Cover"
              width={400}
              height={300}
              quality={100}
              className="w-full h-auto object-cover rounded"
            />
            <div className="mt-4   text-center">
              <h2 className="text-2xl font-semibold hover:text-orange-400 cursor-pointer">
                Endless Remix
              </h2>
              <span className="text-orange-500 hover:text-orange-400 cursor-pointer">
                Coming up Soon
              </span>
              <p className="mt-2 text-md text-start md:text-center">
                The first remix is from DJD, who is well known for many great
                releases on his own label Endless. Expect a fresh take on
                classic sounds. This project promises to push boundaries with
                unique beats and production techniques...
              </p>
            </div>
          </div>

          {/* Blog post 2 */}
          <div className="flex flex-col items-center p-4 w-full lg:w-1/3">
            <Image
              src={dansco2}
              alt="Burning Man Event"
              width={400}
              height={300}
              quality={100}
              className="w-full h-auto object-cover rounded"
            />
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-semibold hover:text-orange-400 cursor-pointer">
                Burning Man
              </h2>
              <span className="text-orange-500 hover:text-orange-400 cursor-pointer">
                Coming Soon
              </span>
              <p className="mt-2 text-md text-start md:text-center">
                DJ Dansco is preparing for an unforgettable performance at
                Burning Man. Known for his electrifying sets, Dansco is expected
                to deliver a transformative musical experience that will leave
                attendees in awe...
              </p>
            </div>
          </div>

          {/* Blog post 3 */}
          <div className="flex flex-col items-center p-4 w-full lg:w-1/3">
            <Image
              src={dansco3}
              alt="Vento EP Cover"
              width={400}
              height={300}
              quality={100}
              className="w-full h-auto object-cover rounded"
            />
            <div className="mt-4 text-center">
              <a
                href="https://www.shazam.com/song/1765375537/supreme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-2xl font-semibold hover:text-orange-400 cursor-pointer">
                  <q>Vento EP</q> Endless
                </h2>
                <span className="text-orange-500 hover:text-orange-400 cursor-pointer">
                  Coming Up Soon
                </span>
              </a>
              <p className="mt-2 text-md text-start md:text-center">
                In a year filled with creativity, DJ Dansco&rsquo;s "Vento EP" is
                finally on the horizon. With a blend of new tracks and remixes,
                this EP promises to offer a sonic journey that fans of
                electronic music won't want to miss...
              </p>
            </div>
          </div>
        </div>

        {/* Additional content */}
        <div className="mt-10 md:mt-16  px-2 md:px-4 lg:px-20">
          <h2 className="text-center font-bold text-xl md:text-6xl uppercase mb-6">
            More News About DJ Dansco
          </h2>
          <p className="text-start md:text-center text-md md:text-lg leading-7 max-w-3xl md:mx-auto mx-0 ">
            DJ Dansco has been steadily rising in the music industry, known for
            his versatile sound that blends house, techno, and Afrobeat. With
            upcoming performances at major festivals, including Tomorrowland and
            Ultra, he is set to make waves on the international scene. His
            latest projects are infused with cultural elements and futuristic
            sounds, making him a standout in the global DJ scene. Stay tuned for
            more updates on his latest releases and performances!
          </p>
        </div>
      </div>
    </div>
  );
}
