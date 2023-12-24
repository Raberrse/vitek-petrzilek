import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
  return (
    <div className='w-full py-[110px] bg-red-50 flex items-center justify-center px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px]'>
        <div className='flex max-lg:flex-col gap-14 justify-center w-full max-w-[1200px] bg-red-100 '>
            <div className='w-full'>
                <div className='flex flex-col gap-[30px]'>
                    <h2 className='text-[38px] font-bold'>O mně</h2>

                    <div 
                        className='flex flex-col gap-[22px] about-me-paragraphs' 
                    >
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                            Jmenuji se Vítek Petržílek, jsem vášnivý tvůrce videí již od malička. Má práce spočívá v tom, vytvářet nejen videa, ale skutečné <strong>vizuální zážitky</strong>. Mým cílem je vždy vytvořit něco <strong>zajímavého</strong> a <strong>unikátního</strong>, co osloví a upoutá pozornost každého diváka.
                        </p>
                        <p className='text-[#9F9F9F] font-normal text-[16px]'>
                            Mou specialitou je dodávat <strong>profesionálně zpracovaná videa</strong>, která jsou <strong>připravena k okamžité publikaci</strong>. S důrazem na detail a kreativní přístup se snažím přinášet nejen technicky precizní videa, ale i <strong>obsahově bohaté</strong> a <strong>příběhově silné</strong>. Každý projekt pro mě představuje novou výzvu, kterou s radostí přijímám a plně se věnuji, aby výsledek byl nejenom uspokojivý, ale i inspiroval k dalším příležitostem a <strong>spolupracím</strong>. 
                        </p>
                    </div>

                    <Link href={''} className='font-bold text-[#6D6D6D] underline'>
                        Více o mně
                    </Link>
                </div>

            </div>

            <div className='w-full flex items-center justify-center'>
                <div className='w-full bg-black h-[400px] '>
                </div>
            </div>
        </div>
    </div>
  )
}
