import React, { Suspense } from 'react'
import { HeroArrow, Signature } from '../svg'
import { HeroVideo } from '.';
import Image from 'next/image';
import fallbackImage from '../../public/canvas.jpg'

export default function Hero() {

  return (
    <div>
      <div className="relative w-full min-h-[450px] h-screen z-0 bg-black">
        <Image priority src={fallbackImage} fill className='object-cover' alt="afda"/>
        <HeroVideo />
        
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.5] z-10'/>
        
        <HeroArrow additionalClasses='absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-sm:w-[30px] '/>
        <Signature additionalClasses='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-13px)] z-20 fade-in-opacity-signature ' />
      </div>  
    </div>
  );
}