'use client'
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function PodCast() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); 

 
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="px-2 md:px-[85px] py-2 md:py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Video Section */}
        <div className="max-w-[600px] w-full">
          <video ref={videoRef} width="100%" height="225" className="w-full">
            <source src="/video/videoplayback.mp4" type="video/mp4" />
          </video>

          {/* Play/Pause Button */}
          <div className="mt-4 flex items-center">
            <button
              onClick={handlePlayPause}
              className="bg-orange-300 text-white py-2 px-4 rounded-lg focus:outline-none mr-4"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            {/* Volume Control */}
            <div className="flex items-center">
              <label htmlFor="volume" className="mr-2">
                Volume
              </label>
              <input
                id="volume"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-32 h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="ml-4 text-center md:text-start pt-4">
          <p className="text-xl md:text-2xl font-sans">Supermix</p>
          <h1 className="text-2xl md:text-5xl font-bold">DJ Dansco</h1>
          <p className="p-2 md:p-7">
            DJ Dansco knows how to move your mind, body, and soul by delivering
            tracks that stand out from the norm. As if this impressive
            succession of high-impact, floor-filling bombs wasn&rsquo;t enough to
            sustain.
          </p>
          <button className="bg-orange-400 text-white py-3 px-5 rounded-lg mt-4 hover:bg-white hover:text-black"><a href="https://music.apple.com/us/artist/dj-dansco/1583023100" target='_black'> AppleSound</a>
           
          </button>
        </div>
      </div>
    </div>
  );
}
