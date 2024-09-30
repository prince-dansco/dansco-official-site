"use client";
import React, { useState, useEffect } from "react";

export default function ExploreStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 10000); // Increased the duration to 10000ms (10 seconds)

    return () => clearInterval(interval);
  }, [activeIndex]);

  const stories = [
    {
      title: "DJ DANSCO ",
      content: `American artist DJ Dansco, who hails from Las Vegas, is a superstar in the African music scene. Dansco, whose roots are firmly planted in the energetic Afrobeat subgenre, creates music with a distinctive fusion of rhythm, melody, and cultural inspiration DJ Dansco incorporates contagious beats, throbbing rhythms, and soul-stirring melodies into his compositions while drawing inspiration from Africa's rich musical legacy. His music carries listeners away to a vibrant, passionate world that celebrates African culture.`,
    },
    {
      title: "DJD.....",
      content: ` DJ Dansco creates a sound that is both authentic and avant-garde because to his expert ability to meld traditional African sounds with modern components. Audiences are enthralled by his music, which transports them throughout the different topographies of the African continent.

DJ Dansco honors the Afrobeat pioneers through his artistic expression while also pushing the envelope and venturing into new musical realms. His music embraces the uplifting energy, contagious rhythms, and brilliant colors of Africa.`,
    },
    {
      title: "Best Dj, DJ Dansco",
      content: `The work of DJ Dansco is evidence of how music has the ability to cross boundaries and unite people from all walks of life. He is unquestionably a force to be reckoned with in the world of African and Afrobeat music thanks to his contagious beats and evident talent. Put on your dance shoes because DJ Dansco is going to get you moving to the enticing African rhythms.`,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  return (
    <div>
      <div
        className="w-full flex items-center flex-col relative"
        style={{
          background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4wlNrj8UZcZWZRweTrM8Xk984dRaMnQRWJX2biWze6-ieUDnw_qwutKwS6OZjXISywc&usqp=CAU) no-repeat center center/cover`,
          height: "fit-content",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <div className="relative z-10 text-center">
          <p className="text-4xl mt-3 text-[#ccc9b5] px-3 py-3">Explore</p>
          <h1 className="text-6xl font-bold">MY STORY</h1>
          <div className="px-4 md:px-[85px]">
            <div className="relative overflow-hidden">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className={`bg-white text-black w-full md:w-[75%] h-full md:h-[30%] py-7 px-2 md:px-5 mt-10 mb-5 md:mt-28 rounded-md transition-transform duration-1000 ease-in-out ${
                    activeIndex === index
                      ? "transform translate-x-0"
                      : "transform translate-x-full"
                  }`}
                  style={{
                    position: activeIndex === index ? "relative" : "absolute",
                    top: activeIndex === index ? "0" : "100%",
                    transitionDelay: `${index * 0.5}s`, // Increased transition delay
                  }}
                >
                  <h1 className="my-3 text-3xl font-bold text-orange-400 ">{story.title}</h1>
                  <p className='font-extralight text-lg text-[#727170]'>{story.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full absolute bottom-10 px-10">
            <button
              onClick={handlePrev}
              className="text-white bg-black py-2 px-4 rounded-lg hidden md:block "
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-black py-2 px-4 rounded-lg hidden md:block"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
