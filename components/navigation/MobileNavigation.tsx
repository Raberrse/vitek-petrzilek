'use client'
import { iconItems, navigationItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

interface MobileNavigationProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    additionalClasses?: string
}

export default function MobileNavigation({setIsOpen, additionalClasses}: MobileNavigationProps) {
  return (
    <div className={`text-white w-full h-screen absolute top-0 left-0 backdrop-blur-[18px] ${additionalClasses}`}>
        <div className='absolute w-full h-full bg-black opacity-50 z-0' />

        <div className='relative flex flex-col gap-14 items-start z-10 pl-[60px] max-sm:pl-[30px]  mt-[80px] pt-[30px] pb-[150px] h-full overflow-scroll'>
        
            <ul className='flex flex-col gap-4'>
            {navigationItems.map((item, index) => (
                <li key={index}>
                    <Link href={item.href} onClick={() => setIsOpen(false)} className='text-[20px]'>
                        {item.text}
                    </Link>
                </li>
            ))}
            </ul>

            <ul className='flex gap-5 items-center'>
            {iconItems.map((item, index) => (
                <li key={index} className='flex'>
                    <a href={item.href} target='_black' className='scale-[1.2]'>
                        {item.svg}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}
