'use client'
import React, { useEffect } from 'react'

interface VideoPlayer {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  additionalClasses?: string
}

export default function VideoPlayer({isOpen, setIsOpen, additionalClasses}: VideoPlayer) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);
  

  return (
    <div className={`fixed top-0 left-0 z-40 w-full h-screen overflow-scroll flex items-center justify-center ${additionalClasses}`}>
      <div className="relative aspect-video w-[850px] m-4 z-10">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
            width={850}
            height={480}
            src="https://www.youtube.com/embed/UNZqm3dxd2w?si=TlXZ__3eKI8ULTOn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
      </div>

      <button
        className="absolute top-7 right-7 z-20 w-8 h-8 "
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div
          className={`bg-white w-[27px] h-[4px] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg] top-1/2 `}
        />
        <div
          className={`bg-white hamburger-menu w-[27px] h-[4px] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] top-1/2 `}
        />
      </button>

      <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-screen z-0' onClick={() => setIsOpen(false)}/>
    </div>
  )
}
