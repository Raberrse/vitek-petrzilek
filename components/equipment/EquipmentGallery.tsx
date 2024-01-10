import { pieces } from "@/constants";
import Image from "next/image";
import React from "react";
import Placeholder from '../../public/white_placeholder.jpg'

export default function EquipmentGallery() {
  const oneRemainingItem = pieces.length % 3 === 1;

  return (
    <div className="px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px]">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[110px] gap-x-[60px] justify-items-center">
        {pieces.map((piece, index) => (
          <div key={index} className={`relative flex flex-col justify-start w-full gap-5 justify-self-auto ${oneRemainingItem && index === pieces.length - 1 ? 'lg:col-start-2' : ''}`}>
            <Image
              width={1000}
              height={640}
              className="object-contain self-center max-w-[360px] h-auto duration-200  bg-gray-100"
              src={piece.image}
              alt={`${piece.imageAlt}`}
            />

            <div className="flex flex-col gap-[8px]">
              <h4 className="text-[20px] font-bold">{piece.title}</h4>
              <p className="text-[16px] font-light text-[#9F9F9F]">{piece.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

