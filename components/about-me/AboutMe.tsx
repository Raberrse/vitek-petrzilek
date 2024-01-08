import Link from 'next/link'
import React from 'react'
import { Signature } from '../svg'

export default function AboutMe() {
  return (
    <div className='w-full pt-[170px] pb-[110px] max-lg:pb-[80px] flex items-center justify-center px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px]'>
        <div className='flex gap-14 justify-center w-full max-w-[1200px] '>
            <div className='w-full'>
                <div className='flex flex-col gap-[30px]'>
                    <h2 className='text-[38px] font-bold'>O mně</h2>

                    <div 
                        className='flex flex-col gap-[22px] about-paragraphs'
                    >
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                            Neustále se učím a <strong>posouvám kvalitu každého videa dále</strong>, proto můžete mít jistotu, že <strong>vaše video bude to nejlepší</strong>. Práce s mými klienty vždy přerostla v <strong>dlouhodobou spolupráci</strong>, protože vždy vycházím vstříc jejich přáním, jsem flexibilní a jde mi o co <strong>nejpřesnější ztvárnění jejich vize</strong>. To se následně odráží ve vysoké kvalitě zpracování. Co se týče finalizace videa, jednám vždy <strong>velmi rychle</strong>, ať vidíte <strong>výsledek co nejdříve</strong>!
                        </p>
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                            Součástí postprodukce, kromě plynulého střihu, je i <strong>color grading</strong> – barevná úprava, při které je každý záběr <strong>precizně upraven</strong>. Pokud jde o výrobu hudby, <strong>zpracovávání zvukových efektů</strong> a celkový mix, <strong>spolupracuji se zvukařem</strong> s mnohaletou praxí.
                        </p>
                    </div>
                </div>

            </div>

            <div className='relative w-full flex items-center justify-center max-md:px-6 max-lg:hidden'>
                <Signature fill={'#ECECEC'} additionalClasses=' ' width='300px' height='300px'/>
            </div>
        </div>
    </div>
  )
}
