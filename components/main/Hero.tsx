
import React from 'react'
import { HeroArrow, Signature } from '../svg'

export default function Hero() {

  return (
    <div>
      <div className='relative w-full min-h-[450px] h-screen z-0 bg-[#000000]'>
        <video
          playsInline
          controls={false}
          width={'100%'}
          id="myVideo" 
          autoPlay
          muted
          loop
          className='min-h-[450px] h-screen object-cover relative fade-in-opacity'
        >
          <source
            className=""
            src="/hero_video_lg.mp4"
            type="video/mp4"
            media='(min-width: 764px)'
          />
          <source
            className=""
            src="/hero_video_md.mp4"
            type="video/mp4"
          />
        </video>
        
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.5] z-10'/>
        
        <HeroArrow additionalClasses='absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-sm:w-[30px] '/>
        <Signature additionalClasses='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-13px)] z-20 fade-in-opacity-signature ' />
      </div>  
    </div>
  );
}