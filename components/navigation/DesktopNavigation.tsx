import { iconItems, navigationItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface DesktopNavigationProps {
    additionalClasses: string
}

export default function DesktopNavigation({additionalClasses}: DesktopNavigationProps) {
  const pathname = usePathname()

  return (
    <div className={additionalClasses}>
        <div id='desktop-navigation-container' className='flex gap-7 items-center'>
            <ul className='flex gap-5'>
            {navigationItems.map((item, index) => (
                <li key={index}>
                <Link href={item.href} className={`relative text-[16px] overflow-clip`}>
                    {item.text}
                    <span className={`underline-navigation absolute bottom-0 left-0 w-full bg-black h-[1px] duration-[200ms] ${pathname === item.href ? 'translate-x-0' : '-translate-x-full'}`}/>
                </Link>
                </li>
            ))}
            </ul>

            <ul className='flex gap-3 items-center'>
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
