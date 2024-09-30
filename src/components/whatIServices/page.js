import React from "react";
import Image from "next/image";
import { IoMusicalNotesSharp } from "react-icons/io5";
import PodCast from "../musicpodcast/page";

export default function Services() {
  return (
    <div className="">
      <div className="px-2 md:px-[90px] py-10">
        <div className="text-center">
          <p className="text-xl md:text-4xl font-semibold">Services</p>
          <h1 className="text-3xl md:text-6xl font-bold mt-1 mb-9">Where Do I Play</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="text-center">
              <div className="">
                <Image
                  src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="wedding event"
                  width={500}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mt-3">Wedding</h2>
            </div>
            <div className="text-center">
              <div className="">
                <Image
                  src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsdWIlMjBhbmQlMjBiYXJzfGVufDB8fDB8fHww"
                  alt="wedding event"
                  width={500}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mt-3">Club and Bars</h2>
            </div>
            <div className="text-center">
              <div className="">
                <Image
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  alt="wedding event"
                  width={500}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mt-3">Corporate Event</h2>
            </div>
            <div className="text-center">
              <div className="">
                <Image
                  src="https://images.unsplash.com/photo-1528243097678-739049bbf2e7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="wedding event"
                  width={500}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mt-3">Playlist Creation</h2>
              
            </div>
          </div>
        </div>
      </div>
      <PodCast />
    </div>
  );
}
