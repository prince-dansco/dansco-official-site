"use client";
import { useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const getSliderContent = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export default function Slider() {
  const [data, setData] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getData = async () => {
    try {
      const sliderData = await getSliderContent();
      setData(sliderData.songs);
    } catch (error) {
      console.error("Error fetching slider content:", error);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      if (currentSong) {
        currentSong.pause();
        setCurrentSong(null);
      }
    };
  }, []);

  const handlePlayPause = (songUrl) => {
    if (currentSong) {
      if (currentSong.src === songUrl) {
        if (isPlaying) {
          currentSong.pause();
        } else {
          currentSong.play();
        }
        setIsPlaying(!isPlaying);
      } else {
        currentSong.pause();
        playNewSong(songUrl);
      }
    } else {
      playNewSong(songUrl);
    }
  };

  const playNewSong = (songUrl) => {
    const audio = new Audio(songUrl);
    audio.play();
    setCurrentSong(audio);
    setIsPlaying(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">List of songs</h1>
      <div className="overflow-hidden relative w-full">
        <div className="flex gap-5 animate-slide">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-xl bg-gray-300/50 p-5 rounded-lg min-w-[350px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square rounded-t-lg mb-2"
              />
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <h2 className="text-sm text-orange-400">{item.artist}</h2>
                <button
                  onClick={() => handlePlayPause(item.songUrl)}
                  className="text-2xl text-gray-700 mt-2"
                >
                  {currentSong?.src === item.songUrl && isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
