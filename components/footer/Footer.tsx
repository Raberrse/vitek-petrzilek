import React from 'react'
import { Signature } from '../svg'
import { iconItems } from '@/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-[#070707] text-white flex px-[4%] max-lg:px-[30px] py-[30px] w-full items-center justify-between'>
        <span className='text-[#9F9F9F]'>
            ©&nbsp;2023&nbsp;Vítek&nbsp;Petržílek
        </span>

        <Link href={'/'}>
            <Signature additionalClasses='relative' height='100%' width='70px' />
        </Link>
        
        <ul className='flex gap-4'>
            {iconItems.map((item, index) => (
                <li key={index} className=''>
                <button>
                    {item.svg}
                </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
