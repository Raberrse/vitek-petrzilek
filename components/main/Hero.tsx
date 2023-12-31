import React from 'react'
import { HeroArrow, Signature } from '../svg'

export default function Hero() {
  return (
    <div>
        <div className='relative w-full min-h-[500px] h-screen z-0'>
            <video
              playsInline
              controls={false}
              width={'100%'}
              id="myVideo" 
              src={"/hero_video.mp4"}
              autoPlay
              muted
              loop
              className='min-h-[500px] h-screen object-cover relative bg-[#000000c4]'
            />
            
            <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.5] z-10'/>
            
            <HeroArrow additionalClasses='absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-sm:w-[30px]'/>
            <Signature additionalClasses='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ' />
        </div>  
    </div>
  )
}