"use client";

import React, { useState } from "react";
import { ShortArrowSlideshow } from "../svg";
import One from "../../public/main-slideshow/1.jpg";
import Two from "../../public/main-slideshow/2.jpg";
import Three from "../../public/main-slideshow/3.jpg";
import Four from "../../public/main-slideshow/4.jpg";
import Five from "../../public/main-slideshow/5.jpg";
import Image from "next/image";

const images = [One, Two, Three, Four, Five];

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
      <div className="flex gap-5 max-sm:gap-2">
        <button 
          className={`p-3 ${currentImage === 0 ? 'opacity-0  ' : 'opacity-100 '} duration-[300ms] rounded-lg group my-auto `} 
          onClick={prevImage}
          disabled={currentImage === 0}
          aria-label="Další fotka"
        >
          <ShortArrowSlideshow additionalClasses="rotate-180" additionalPathClasses={` fill-[#9F9F9F] ${currentImage !== 0 ? 'lg:group-hover:fill-black max-lg:group-active:fill-black lg:duration-[300ms]' : ' '} `} width="10px" />
        </button>

        <div className="max-w-[400px] relative w-full overflow-hidden">
          <div
            className="flex -z-10 w-full duration-[500ms] ease-in-out"
            style={{transform: `translateX(${-currentImage*100}%)` }}>
            {images.map((image, index) => (
              <Image
                placeholder="blur"
                key={index}
                width={400}
                height={532}
                className={`relative object-contain z-10 `}
                src={image}
                alt={`Fotka ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button 
          className={`p-3 ${currentImage === 4 ? 'opacity-0  ' : 'opacity-100 '} duration-[300ms] rounded-lg group my-auto `} 
          onClick={nextImage}
          disabled={currentImage === 4}
          aria-label="Další fotka"
        >
          <ShortArrowSlideshow additionalPathClasses={` fill-[#9F9F9F] ${currentImage !== 4 ? 'lg:group-hover:fill-black max-lg:group-active:fill-black lg:duration-[300ms]' : ' '} `} width="10px" />
        </button>
      </div>
    </div>
  );
}
