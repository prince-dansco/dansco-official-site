"use client";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Background() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const background = [
    {
      type: "image",
      image: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyscjM6xUZ_326wNsyphEpVj9bqkbsWTjrPHy_qPDAu0z5RTzuO5WK4g8rmF-9r2WInQ&usqp=CAU)`,
      content: "Welcome to DJ Dansco's World!",
    },
    {
      type: "image",
      image: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJea9NJPwa9rrEbVP_o_aA-sOBQolx4LsJe-cArjPIC4SdeNlncsJsKFZpQj7s9lKeLu4&usqp=CAU)`,
      content: "DJ Dansco spinning at the hottest clubs!",
    },
    {
      type: "image",
      image: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRndZRqreZEzAOA8LhUnjd5CxFQLF3gXYAwTboIHicPGML2HLwJfsBLJqw3Ys3diGkfTc&usqp=CAU)`,
      content: "Catch DJ Dansco live at upcoming events!",
    },
    {
      type: "image",
      image: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlOFIANLov0Ta71H2065qfLcZ8BXODtFHqg&s)`,
      content: "Join DJ Dansco's exclusive fan club!",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === background.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [background.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === background.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? background.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center h-screen w-full flex justify-center items-center text-white transition-all duration-500 ease-in-out relative overflow-hidden relative"
        style={{ backgroundImage: background[currentSlide].image }}
      >
        <h2 className="absolute z-20 text-white text-3xl text-center m-0 p-5 leading-relaxed">
          {background[currentSlide].content}
        </h2>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-3 cursor-pointer z-30 rounded"
        >
          <GrPrevious size={40} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-3 cursor-pointer z-30 rounded"
        >
          <GrNext size={40} />
        </button>

        <div className="absolute z-40 bottom-10 text-center p-5 bg-black bg-opacity-50 rounded-lg">
          <TypeAnimation
            sequence={[
              `Welcome to DJ Dansco Entertainment industry\nThe daddest DJ on the mix...`,
              1000,
              "",
            ]}
            speed={50}
            className="whitespace-pre-line text-2xl text-yellow-400 font-bold"
            repeat={Infinity}
          />

          <motion.p
            initail={{ x: -100 }}
            animate={{ x: [0, 900, 0] }}
            transition={{
              delay: 2,
              duration: 2,
            }}
            className="my-5 text-lg"
          >
            Bio. American artist DJ Dansco, who hails from Las Vegas, is a
            superstar in the African music scene. CEO DKD Blast Records and DJ
            Dansco Entertainment Records.
          </motion.p>
          <motion.div
            initail={{ x: -100 }}
            animate={{ x: [900, 0] }}
            transition={{
              delay: 2,
              duration: 2,
            }}
            className="flex items-center justify-center gap-5"
          >
            <button className="border border-spacing-5 text-white p-3 rounded-lg  hover:bg-yellow-400 hover:scale-100">
              <Link href="/contact">Contact</Link>
            </button>
            <button className="border border-spacing-5 text-white p-3 rounded-lg hover:bg-yellow-400 hover:scale-100 ">
              <Link href="/songs">Songs</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
