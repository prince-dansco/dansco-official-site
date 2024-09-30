"use client";

import Image from "next/image";
import image3 from "../../../public/images/gallary_3.webp";
import image4 from "../../../public/images/gallary_4.webp";
import image6 from "../../../public/images/gallary_6.webp";
import image7 from "../../../public/images/gallary_7.jpg";
import image8 from "../../../public/images/gallary_8.jpg";
import image9 from "../../../public/images/gallary_9.jpeg";
import image10 from "../../../public/images/gallary_10.jpg";
import image11 from "../../../public/images/gallary_11.jpg";
import image12 from "../../../public/images/gallary_12.jpg";
import image13 from "../../../public/images/gallary_13.jpg";
import { FaInstagram, FaModx } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AboutPageImage() {
  const router = useRouter();
  const handleClick1 = () => {
    router.push("/gallary");
  };
  const aboutGallary = [
    image3,
    image4,

    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <div className="py-6 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 relative p-2 ">
        {aboutGallary.map((image, index) => (
          <div
            key={index}
            className="w-full h-auto hover:border-[15px] border-[orange] hover:inset-0 "
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              layout="responsive"
              width={700}
              height={500}
              className="rounded-md object-cover"
            />
          </div>
        ))}

        <div className=" max-w-[650px] bg-white absolute top-[31%] md:left-[20%] left-0 md:p-9 p-3 text-black">
          <h1 className=" text-2xl md:text-5xl font-bold">
            {" "}
            FOLLOW ME ON INSTAGRAM{" "}
            <span className="text-orange-400">#DJDansco</span>
          </h1>
          <div className="flex  items-center gap-3 mt-5">
            <button>
              <a
                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdjdansco%2F&is_from_rle" target='_blank'
                className=" flex items-center gap-2 text-white hover:text-black border-t-2 border-b-2 p-1 md:p-3 bg-orange-400 hover:bg-transparent"
              >
                {" "}
                <FaInstagram /> INSTAGRAM
              </a>
            </button>
            <button
              onClick={handleClick1}
              className="flex items-center gap-2 hover:text-white border-t-2 border-b-2 p-1 md:p-3 border-r-2 hover:bg-orange-400"
            >
              {" "}
              <FaModx />
              MORE GALLARY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
