
import React, { useState } from 'react';
import Link from 'next/link';
import { TopThreeImages } from '.';



export default function TopThree() {

  return (
    <div className='relative flex flex-col items-center gap-10 '>
      <h2 className='text-center relative z-20 text-black text-[38px] font-bold w-full px-[30px] trailin leading-[46px]'>
        Moje top 3 projekty
      </h2>

      <div className='flex h-[800px] max-lg:flex-col max-lg:h-[2400px] w-full'>
        <TopThreeImages/>
      </div>

      <Link href={'/portfolio'} className='group font-bold text-[#6D6D6D] lg:hover:text-black active:text-black relative overflow-hidden w-fit lg:duration-[300ms]'>
          <span className={`relative text-[16px]`}>
            Více projektů zde...
          </span>
          <span className={`mb-[4px] underline-navigation absolute left-0 w-full lg:group-hover:bg-black bg-[#6D6D6D] h-[1px] active:text-black z-0 lg:duration-[300ms] bottom-[-1px] lg:group-hover:translate-x-[calc(-100%-2px)] -translate-x-0 `}/>
      </Link>
    </div>
  );
}
