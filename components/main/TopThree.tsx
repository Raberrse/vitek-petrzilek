
import React, { useState } from 'react';
import Link from 'next/link';
import { TopThreeImages } from '.';



export default function TopThree() {

  return (
    <div className='relative flex flex-col items-center gap-10'>
      <h2 className='text-center relative z-20 text-black text-[38px] font-bold w-full'>
        Moje top 3 Projekty
      </h2>

      <div className='flex h-[800px] max-lg:flex-col max-lg:h-[2400px] w-full'>
        <TopThreeImages/>
      </div>

      <Link href={'/portfolio'} className='font-bold underline'>
        Více projektů zde...
      </Link>
    </div>
  );
}
