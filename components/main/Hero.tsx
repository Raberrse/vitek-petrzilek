import React from 'react'
import { HeroArrow, Signature } from '../svg'

export default function Hero() {
  return (
    <div>
        <div className='relative w-full min-h-[500px] h-screen'>
            <video id="myVideo" width={'100%'} loop muted className='min-h-[500px] h-screen object-cover relative'>
                <source src="hero_video.mp4" type="video/mp4" />
                Váš prohlížeč nepodporuje video tag.
            </video>
            <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.5] z-10'/>
            <button className='absolute bottom-[18px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-3'>
                <HeroArrow additionalClasses='max-sm:w-[30px]'/>
            </button>
        </div>
        
        <div className='absolute top-0 w-full h-screen'>
            <Signature additionalClasses='relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-sm:w-[255px]' />
        </div>
    </div>
  )
}
