import Link from 'next/link'
import React from 'react'
import { AboutMeSlideshow } from '.'

export default function AboutMe() {
  return (
    <div className='w-full py-[110px] flex items-center justify-center px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px]'>
        <div className='flex max-lg:flex-col gap-14 gap-y-12  justify-center w-full max-w-[1200px] items-center'>
            <div className='w-full'>
                <div className='flex flex-col gap-[30px]'>
                    <h2 className='text-[38px] font-bold'>O mně</h2>

                    <div 
                        className='flex flex-col gap-[22px] about-paragraphs' 
                    >
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                            Jmenuji se Vítek Petržílek, již od malička jsem vášnivý tvůrce videí. Mým cílem je vždy vytvořit něco <strong>zajímavého</strong> a <strong>unikátního</strong>, co osloví a upoutá pozornost každého diváka.
                        </p>
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                            Mou specialitou je dodávat <strong>profesionálně zpracovaná videa</strong>, která jsou <strong>připravena k okamžité publikaci</strong>. S důrazem na detail a kreativní přístup se snažím přinášet technicky precizní videa, která jsou však i <strong>obsahově bohatá</strong> a <strong>příběhově silná</strong>. Každý projekt pro mě představuje novou výzvu, kterou s radostí přijímám a plně se jí věnuji, aby výsledek byl nejenom uspokojivý, ale i inspiroval k dalším příležitostem a <strong>spolupracím</strong>.
                        </p>
                    </div>

                    <Link href={'/o-mne'} className='group font-bold text-[#6D6D6D] lg:hover:text-black active:text-black relative overflow-hidden w-fit lg:duration-[300ms]'>
                        <span className={`relative text-[16px]`}>
                            Více o mně
                        </span>
                        <span className={`mb-[4px] underline-navigation absolute left-0 w-full lg:group-hover:bg-black bg-[#6D6D6D] h-[1px] active:text-black z-0 lg:duration-[300ms] bottom-[-1px] lg:group-hover:translate-x-[calc(-100%-2px)] -translate-x-0 `}/>
                    </Link>
                </div>

            </div>

            <div className='w-full flex items-center justify-center  '>
                <AboutMeSlideshow />
            </div>
        </div>
    </div>
  )
}
