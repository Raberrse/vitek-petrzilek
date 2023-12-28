'use client'

import React, { useState } from 'react';
import Link from 'next/link';

import { CSSTransition } from 'react-transition-group';
import { VideoPlayer } from '../assets';
import { TopThreeImages } from '.';



export default function TopThree() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
      >
        {(state) => (
          <VideoPlayer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            additionalClasses={` duration-[300ms] ${
              state === "entered"
                ? "opacity-100 "
                : "opacity-0 "
            }`}
          />
        )}
      </CSSTransition>
    
    <div className='relative flex flex-col items-center gap-10'>
      <h2 className='text-center absolute z-20 text-white font-bold text-[19px] top-20 w-full'>
        Moje top 3 Projekty
      </h2>

      <div className='flex h-[800px] max-lg:flex-col max-lg:h-[2400px] w-full'>
        <TopThreeImages setIsOpen={setIsOpen}/>
      </div>

      <Link href={'/portfolio'} className='font-bold underline'>
        Více projektů zde...
      </Link>
    </div>
    </>
  );
}
