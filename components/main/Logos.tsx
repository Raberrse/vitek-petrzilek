import { imageArray } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function Logos() {
    return (
      <div className='relative w-full flex justify-center items-center pt-[70px] '>
          <div className='flex w-full max-w-[1600px] justify-between gap-[40px] px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-lg:hidden items-center'>
            {imageArray.map((image, index) => (
            <Link href={image.href} target={'_blank'} key={index} className='relative'>
                <Image
                src={image.component}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder='blur'
                className='object-contain duration-[400ms] hover:grayscale-0 active:grayscale-0 grayscale'
            />
            </Link>
            ))}
          </div>

          <div className='lg:hidden'>
            <Marquee className='' speed={60}>
              {imageArray.map((image, index) => (
                <Link href={image.href} target={'_blank'} key={index} className='inline-block relative ml-14'>
                    <Image
                    src={image.component}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    placeholder='blur'
                    className='object-contain duration-[400ms] active:grayscale-0 grayscale'
                />
                </Link>
              ))}
            </Marquee>
          </div>
        
      </div>
    );
  }
4