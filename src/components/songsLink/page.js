import React from 'react'

export default function SongsLink() {
  return (
    <div className='py-10'>
        <div className="">
  <h1 className="text-center text-xl md:text-2xl font-bold my-4 ">
    Click on any of these platforms to see more of DJ Dansco's songs
  </h1>
  <div className=" px-6 md:px-[95px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 justify-center place-content-center gap-8 mt-4 ">
    <a
      href="https://www.boomplay.com/artists/28348675"  
      target="_blank"
      rel="noopener noreferrer"
    >
      Boomplay
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWAFt53oFMS4HAw81GuFfJqKX8LQBNuMxTQ&s" 
        alt="Boomplay"
        className="w-26 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
    <a
      href="https://music.apple.com/us/artist/dj-dansco/1583023100" 
      target="_blank"
      rel="noopener noreferrer"
    >AppleSound
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeWuzGOE5Dt7Oyo3QjfQfOGiwnX5m9PfxAw&s"
        alt="Apple Music"
        className="w-12 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
    <a
      href="https://www.deezer.com/en/album/455175035" 
      target="_blank"
      rel="noopener noreferrer"
    >Deezer
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoWuw85Z9beLkT9DcSRfGBUWTapfp86MbsA&s" 
        className="w-12 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
    <a
      href="https://soundcloud.com/dj_dansco" 
      target="_blank"
      rel="noopener noreferrer"
    >SoundClould
      <img
        src="https://img.freepik.com/premium-vector/soundcloud-logo_578229-231.jpg" 
        className="w-12 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
    <a
      href="https://audiomack.com/djdansco" 
      rel="noopener noreferrer"
    >
        AudioMark
      <img
        src="https://i.pinimg.com/564x/12/30/3f/12303f66fb01efc47c9783e5204fe7f6.jpg"
        alt="Audiomack"
        className="w-12 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
    <a
      href="https://open.spotify.com/artist/0Hm1UvfbKTkQ0ro6sibrPD" 
      target="_blank"
      rel="noopener noreferrer"
    >
      Spotify
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" 
        alt="Spotify"
        className="w-12 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
    <a
      href="https://www.youtube.com/results?search_query=dj+dansco" 
      target="_blank"
      rel="noopener noreferrer"
    >
      Youtube
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" 
        alt="YouTube"
        className="w-12 h-12 hover:scale-110 transition-transform mt-4 text-white"
      />
    </a>
  </div>
</div>

    </div>
  )
}
