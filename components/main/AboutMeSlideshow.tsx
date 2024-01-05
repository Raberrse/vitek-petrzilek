"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShortArrowSlideshow } from "../svg";
import One from "../../public/main-slideshow/1.jpg";
import Two from "../../public/main-slideshow/2.jpg";
import Three from "../../public/main-slideshow/3.jpg";
import Four from "../../public/main-slideshow/4.jpg";
import Image from "next/image";

const images = [One, Two, Three, Four];

export default function AboutMeSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-5 max-sm:gap-2 ">
        <button 
          className={`p-3 ${currentImage === 0 ? 'opacity-0 ' : 'opacity-100'} duration-200`} 
          onClick={prevImage}
          disabled={currentImage === 0}
          aria-label="Předchozí fotka"
        >
          <ShortArrowSlideshow width="10px" additionalClasses="rotate-180" />
        </button>

        <div className="relative max-w-[400px] overflow-hidden w-full">
          {images.map((image, index) => (
            <Image
              priority
              key={index}
              width={400}
              height={532}
              className={`relative object-contain opacity-0 z-10 ${
                index === currentImage ? "animation-slideshow" : "hidden"
              }`}
              src={image}
              alt={`Fotka ${index + 1}`}
            />
          ))}

          {/* Background ????*/}

          {/* <Image
              width={400}
              height={1}
              className={`object-contain absolute top-0 left-0`}
              src={One}
              alt={`Fotka `}
            /> */}
        </div>

        <button 
          className={`p-3 ${currentImage === 3 ? 'opacity-0 ' : 'opacity-100'} duration-200`} 
          onClick={nextImage}
          disabled={currentImage === 3}
          aria-label="Další fotka"
        >
          <ShortArrowSlideshow width="10px" />
        </button>
      </div>
    </div>
  );
}
