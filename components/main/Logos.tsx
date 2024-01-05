import { imageArray } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Logos() {
    return (
      <div className='relative w-full flex justify-center items-center pt-[70px] '>
        <div id='scroll-container-logos'>
          <div className='flex w-full max-w-[1600px] max-lg:w-[1300px] justify-between gap-[40px] px-[150px] max-xl:px-[90px] max-lg:px-[60px] items-center'>
            {imageArray.map((image, index) => (
              <Link href={image.href} target={'_blank'} key={index} className='relative'>
                <Image
                src={image.component}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='object-contain duration-[400ms] hover:grayscale-0 active:grayscale-0 grayscale  bg-gray-100'
                />
            </Link>
            ))}
          </div>
        </div>
          
      </div>
    );
  }
