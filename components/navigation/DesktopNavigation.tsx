import { iconItems, navigationItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

interface DesktopNavigationProps {
    additionalClasses: string
}

export default function DesktopNavigation({additionalClasses}: DesktopNavigationProps) {
  return (
    <div className={additionalClasses}>
        <div id='desktop-navigation-container' className='flex gap-8 items-center duration-[300ms]'>
            <ul className='flex gap-6'>
            {navigationItems.map((item, index) => (
                <li key={index}>
                <Link href={item.href} className='text-[16px]'>
                    {item.text}
                </Link>
                </li>
            ))}
            </ul>

            <ul className='flex gap-4 items-center'>
            {iconItems.map((item, index) => (
                <li key={index} className='flex'>
                <button>
                    {item.svg}
                </button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}
