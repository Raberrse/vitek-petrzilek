import Link from 'next/link'
import React from 'react'
import { Signature } from '../svg'

export default function AboutEquipment() {
  return (
    <div className='w-full pt-[170px] pb-[100px] max-lg:pb-[80px] flex items-center justify-center px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px]'>
        <div className='flex gap-14 justify-start w-full max-w-[1200px] '>
            <div className='w-[600px]'>
                <div className='flex flex-col gap-[30px]'>
                    <h2 className='text-[38px] font-bold'>Moje vybavení</h2>

                    <div 
                        className='flex flex-col gap-[22px] about-paragraphs'
                    >
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                        Pracuji s řadou <strong>nejnovější dostupné techniky</strong>, kterou perfektně znám a umím využít její potenciál opravdu na maximum. Techniku vlastním, takže jsem <strong>soběstačný</strong> se svým vybavením, a moje technické zázemí se <strong>neustále rozšiřuje</strong>!
                        </p>
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                        V případě speciálních požadavků nebo větší produkce jsem <strong>schopen</strong> si vybavení <strong>vypůjčit</strong>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
