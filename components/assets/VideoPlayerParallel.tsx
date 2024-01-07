'use client'
import { projects } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface VideoPlayerParallel {
  additionalClasses?: string
  projectId: string
  defaultRoute?: string
}

export default function VideoPlayerParallel({additionalClasses, projectId, defaultRoute = '/'}: VideoPlayerParallel) {
  const router = useRouter()
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    if (isClosed) {
      setTimeout(() => {
        router.push(defaultRoute, { scroll: false })
      }, 300)
    }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosed]);

  return (
    <div className={`fixed top-0 left-0 w-full h-screen overflow-scroll fade-in-opacity z-40 `}>
      <div className={`w-full h-full flex items-center justify-center ${additionalClasses} ${isClosed ? 'opacity-0' : 'opacity-100'} duration-[300ms]`}>
        <div className="relative aspect-video w-[850px] m-4 z-10">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width={850}
            height={480}
            src={projects.find(project => project.idPathname === projectId)?.videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ></iframe>
        </div>

        <button
          className="absolute top-7 right-7 z-20 w-8 h-8 "
          onClick={() => setIsClosed(true)}
        >
          <div
            className={`bg-white w-[27px] h-[4px] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg] top-1/2 `}
          />
          <div
            className={`bg-white hamburger-menu w-[27px] h-[4px] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] top-1/2 `}
          />
        </button>

        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-screen z-0' onClick={() => setIsClosed(true)}/>
      </div>
    </div>
  )
}
