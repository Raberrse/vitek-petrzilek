'use client'

import React, { useEffect, useState } from 'react'
import { HeroArrow, Signature } from '../svg'

export default function Hero() {
  const [videoSource, setVideoSource] = useState('');

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
    const initialVideoSource = isSmallScreen
      ? '/hero_video_md.mp4'
      : window.innerWidth <= 1024
      ? '/hero_video_lg.mp4'
      : '/hero_video.mp4';

    setVideoSource(initialVideoSource);

    // Cleanup the event listener on component unmount
    return () => {
      // No need for any cleanup in this case
    };
  }, []);

  return (
    <div>
      <div className='relative w-full min-h-[450px] h-screen z-0'>
        {videoSource !== '' && (<video
          playsInline
          controls={false}
          width={'100%'}
          id="myVideo" 
          src={videoSource}
          autoPlay
          muted
          loop
          className='min-h-[450px] h-screen object-cover relative bg-[#000000c4]'
        />)
        }
        
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.5] z-10'/>
        
        <HeroArrow additionalClasses='absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-sm:w-[30px] '/>
        <Signature additionalClasses='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 fade-in-opacity-signature' />
      </div>  
    </div>
  );
}