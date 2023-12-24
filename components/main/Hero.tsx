import React from 'react'
import { HeroArrow, Signature } from '../svg'

export default function Hero() {
  return (
    <div>
        <div className='relative w-full min-h-[500px] h-screen'>
            <video id="myVideo" width={'100%'}  loop muted className='min-h-[500px] h-screen object-cover relative'>
                <source src="hero_video.mp4" type="video/mp4" />
                Váš prohlížeč nepodporuje video tag.
            </video>
            <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.5] z-10'/>

            <HeroArrow additionalClasses='absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-sm:w-[30px]'/>
            <Signature additionalClasses='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ' />
        </div>  
    </div>
  )
}
