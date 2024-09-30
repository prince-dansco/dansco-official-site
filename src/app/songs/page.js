"use client";
import Link from "next/link";
import SongsLink from "@/components/songsLink/page";
import { useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const getAllsongs = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export default function Songs() {
  const [data, setData] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true); // Start loading
    try {
      const ViewSongs = await getAllsongs();
      setData(ViewSongs.songs);
    } catch (error) {
      console.error("Error fetching slider content:", error);
    } finally {
      setLoading(false); // End loading
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
      <h1 className="text-3xl font-bold mb-4 text-center">
        List of some of DJ Dansco's songs and mixes
      </h1>

      {/* Show loading indicator */}
      {loading && <p className="text-center">Loading...</p>}

      {!loading && (
        <div className="w-full px-2 md:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-xl bg-gray-300/50 p-5 rounded-lg max-w-[300px] w-full md:min-w-[350px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square rounded-t-lg mb-2"
                />
                <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <h2 className="text-sm text-orange-400">{item.artist}</h2>
                  <div className="flex items-center gap-3">
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
                    {/* Link to respective page */}
                    <a
                      href={item.link}
                      target="_blank"
                      data-tooltip-id="linkTooltip"
                      data-tooltip-content="Listen to the complete song here"
                    >
                      <IoLink size={40} />
                    </a>
                    <Tooltip id="linkTooltip" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <SongsLink />
    </div>
  );
}
