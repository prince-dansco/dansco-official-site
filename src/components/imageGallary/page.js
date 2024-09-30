
"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/images/gallary_1.jpeg";
import image2 from "../../../public/images/gallary_2.png";
import image3 from "../../../public/images/gallary_3.webp";
import image4 from "../../../public/images/gallary_4.webp";
import image5 from "../../../public/images/gallary_5.webp";
import image6 from "../../../public/images/gallary_6.webp";
import image7 from "../../../public/images/gallary_7.jpg";
import image8 from "../../../public/images/gallary_8.jpg";
import image9 from "../../../public/images/gallary_9.jpeg";
import image10 from "../../../public/images/gallary_10.jpg";
import image11 from "../../../public/images/gallary_11.jpg";
import image12 from "../../../public/images/gallary_12.jpg";
import image13 from "../../../public/images/gallary_13.jpg";
import image14 from "../../../public/images/gallary_14.jpg";
import image15 from "../../../public/images/gallary_15.jpg";

export default function GalleryImage() {
  const allImages = [
    [
      image1,
      image3,
      image4,
      image2,
      image5,
      image6,
      image11,
      image15,
      image13,
      image9,
      image14,
    ],
    [
      image6,
      image7,
      image8,
      image9,
      image1,
      image10,
      image14,
      image12,
      image5,
      image3,
    ],
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setCurrentSet(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="px-2 md:px-20 py-2 md:py-4">
      <h1 className="text-center text-2xl font-bold mb-6">DJ Dansco Gallery</h1>

      {/* Image Gallery */}
      <div className="bg-slate-400 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 w-full">
        {allImages[currentSet].map((item, index) => (
          <div
            className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer hover:inset-3 hover:border-pink-50 hover:border-[15px]"
            key={index}
            onClick={() => openModal(item)}
          >
            <Image
              src={item}
              alt={`Gallery Image ${index + 1}`}
              width={250}
              height={100}
              className="object-cover w-full h-32 rounded-lg"

              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={() => handleClick(0)}
          className={`px-4 py-2 gap-4 mt-5 ${
            currentSet === 0 ? "bg-blue-600 text-white" : "bg-blue-400"
          }`}
        >
          1
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`px-4 py-2 gap-4 mt-5 ${
            currentSet === 1 ? "bg-red-600 text-white" : "bg-blue-400"
          }`}
        >
          2
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 bg-gray-200 p-2 rounded-full"
            >
              X
            </button>
            <Image
              src={selectedImage}
              alt="Selected Image"
              className="object-contain w-full h-auto"
              layout="responsive"
            />
          </div>
        </div>
      )}
    </div>
  );
}
