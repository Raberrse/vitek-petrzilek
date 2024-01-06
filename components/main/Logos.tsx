'use client'

import { imageArray } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export default function Logos() {
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = scrollContainerRef.current;

    if (!ele) return;

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e: MouseEvent) {
      setIsDragging(true);
      e.preventDefault();

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e: MouseEvent) {
      e.preventDefault();

      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      setIsDragging(false);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    ele.addEventListener('mousedown', mouseDownHandler);

    return () => {
      ele.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [scrollContainerRef]);

  return (
    <div className='relative w-full flex justify-center items-center pt-[70px]'>
      <div id='scroll-container-logos'>
        <div ref={scrollContainerRef} className='flex max-lg:w-[1300px] justify-between gap-[40px] px-[150px] max-xl:px-[90px] max-lg:px-[60px] items-center select-none'>
          {imageArray.map((image, index) => (
            <Link href={image.href} target='_blank' key={index} className={`relative ${isDragging && 'pointer-events-none'}`}>
              <Image
                src={image.component}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='object-contain duration-[400ms] hover:grayscale-0 active:grayscale-0 grayscale bg-gray-100'
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
