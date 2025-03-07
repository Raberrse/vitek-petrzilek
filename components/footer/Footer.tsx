'use client'

import React from 'react'
import { Signature } from '../svg'
import { iconItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Footer() {
  const pathname = usePathname()

  return (
    <div 
        id={'footer-container'}
        className='flex px-[4%] max-lg:px-[30px] py-[30px] w-full items-center justify-between'
        data-black-path={pathname.replaceAll('/','') === 'portfolio' ? 'true' : 'false'}
    >
        <span className='max-md:hidden'>
            ©&nbsp;{new Date().getFullYear()}&nbsp;Vítek&nbsp;Petržílek
        </span>

        <Link aria-label={'Domů'}  href={'/'}>
            <Signature additionalClasses='relative' height='100%' width='60px' />
        </Link>
        
        <ul className='flex gap-3 items-center'>
            {iconItems.map((item, index) => (
                <li key={index} className=''>
                    <a aria-label={item.label} href={item.href} target='_black'>
                        {item.svg}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}
