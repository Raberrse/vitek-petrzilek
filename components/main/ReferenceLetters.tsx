import React from 'react'

export default function ReferenceLetters() {
  return (
    <div className='flex items-center justify-center py-[140px] px-[90px] max-lg:px-[60px] max-sm:px-[30px]'>
      <div className='text-[18px] flex w-full max-w-[1100px] flex-wrap justify-center gap-x-20 gap-y-16 '>
        <div className='flex flex-col gap-5 w-[500px]'>
          <div className='flex flex-col'>
            <span className='font-bold'>Aleš Bělík</span>
            <span className=''>Ředitel PR – Enteria</span>
          </div>
          <p className='italic'>“...Během svého pobytu u nás vytvořil několik fascinujících a cenných videí, která významně obohatila náš obsah. Vítek se také ukázal být výborným týmovým hráčem, jeho komunikační schopnosti byly na vysoké úrovni a reagoval na naše potřeby rychle a efektivně. Naše spolupráce s ním byla tak pozitivní, že jsme se rozhodli prodloužit ji a nabídli mu brigádní místo. Těšíme se na další spolupráci.”</p>
        </div>

        <div className='flex flex-col gap-5 w-[500px]'>
          <div className='flex flex-col'>
            <span className='font-bold'>Martin Zíta</span>
            <span className=''>Marketingový specialista – Pádlujte.cz</span>
          </div>
          <p className='italic'>“Na Vítka se můžeme vždy spolehnout. Jeho schopnost porozumět naší představě v kombinaci s jeho talentem je výjimečná. Je vidět, že to, co dělá ho velmi baví a je v tom opravdu dobrý. Vždy mu jde o naši spokojenost a je ochoten vyladit videa do detailu.”</p>
        </div>

        <div className='flex flex-col gap-5 w-[500px]'>
          <div className='flex flex-col'>
            <span className='font-bold'>David Raab</span>
            <span className=''>Prezident organizace – Česká Federace Stand Up Paddle</span>
          </div>
          <p className='italic'>“Vítek je profesionál. Je spolehlivý, seriózní, umí naslouchat zadání a rozumí svému řemeslu. Díky za naší několikaletou spolupráci!”</p>        </div>
      </div>
    </div>
  )
}
