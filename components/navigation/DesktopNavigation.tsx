'use client'
import { iconItems, navigationItems } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface DesktopNavigationProps {
    additionalClasses: string
}

export default function DesktopNavigation({additionalClasses}: DesktopNavigationProps) {
    const router = useRouter()
    const pathname = usePathname()

  return (
    <div className={additionalClasses}>
        <div id='desktop-navigation-container' className='flex gap-7 items-center'>
            <ul className='flex gap-5'>
            {navigationItems.map((item, index) => (
                <li key={index} className='relative overflow-hidden'>
                <button onClick={() => router.push(item.href)} aria-label={item.text} className={`relative text-[16px]`}>
                    {item.text}
                </button>
                    <span className={`mb-[4px] underline-navigation absolute bottom-0 left-0 w-full bg-black h-[1px]  z-0 ${pathname.replaceAll('/','') === item.href.replaceAll('/','') ? 'translate-x-0' : '-translate-x-[calc(100%+2px)]'}`}/>
                </li>
            ))}
            </ul>

            <ul className='flex gap-3 items-center'>
            {iconItems.map((item, index) => (
                <li key={index} className='flex'>
                    <a aria-label={item.label} href={item.href} target='_black'>
                        {item.svg}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}
