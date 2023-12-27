import Image from 'next/image';
import React from 'react';
import One from '../../public/bg/TOP3_thajsko.jpg'
import Two from '../../public/bg/TOP3_vyrava.jpg'
import Three from '../../public/bg/TOP3_kolobreh.jpg'
import Four from '../../public/bg/CT.jpg'
import Five from '../../public/bg/Dalesice.jpg'
import Six from '../../public/bg/Bezdrev.jpg'
import Seven from '../../public/bg/kdekoliv.jpg'
import Eight from '../../public/bg/Kvetopady.jpg'
import Nine from '../../public/bg/enteria.jpg'
import { VideoArrow } from '../svg';

const projects = [
  {
    image: One,
    alt: 'Mistroství světa v Thajsku',
    title: 'Mistroství světa v\u00A0Thajsku',
    description: '3-denní mistrovství Česka v paddleboardingu s rozhovory.',
    typeDate: '2022 | Event',
    additionalClasses: ''
  },
  {
    image: Two,
    alt: 'Festival Výrava x MOK',
    title: 'Festival Výrava\u00A0x MOK',
    description: 'Pravidelné mistrovství Česka v paddleboardingu na 3 dny. Ve videu je zachycený každý den včetně rozhovorů.',
    typeDate: '2023 | Event',
    additionalClasses: ''
  },
  {
    image: Three,
    alt: 'Kolobřeh paddleboardové závody',
    title: 'Kolobřeh paddleboardové závody',
    description: 'Byl jsem osloven Českou televizí pro vytvoření reportáže o Parapaddleboardingu. Reportáž byla vysílána na ČT Sport.',
    typeDate: '2022 | Reportáž',
    additionalClasses: ''
  },
  {
    image: Four,
    alt: 'Para paddleboarding ČT',
    title: 'Para paddleboarding ČT',
    description: 'Byl jsem osloven Českou televizí pro vytvoření reportáže o Parapaddleboardingu. Reportáž byla vysílána na ČT Sport.',
    typeDate: '2022 | Event',
    additionalClasses: ''
  },
  {
    image: Five,
    alt: 'Mistrovství ČR Dalešice',
    title: 'Mistrovství ČR Dalešice',
    description: '3-denní mistrovství Česka v paddleboardingu s rozhovory.',
    typeDate: '2022 | Reportáž',
    additionalClasses: ''
  },
  {
    image: Six,
    alt: 'Mistrovství ČR v\u00A0Bezdrev',
    title: 'Mistrovství ČR v\u00A0Bezdrev',
    description: 'Pravidelné mistrovství Česka v paddleboardingu na 3 dny. Ve videu je zachycený každý den včetně rozhovorů.',
    typeDate: '2022 | Reportáž',
    additionalClasses: ''
  },
  {
    image: Seven,
    alt: 'Pádlujte kdekoliv',
    title: 'Pádlujte kdekoliv',
    description: 'Video do reklamní kampaně Pádlujte kdekoliv.',
    typeDate: '2022 | Branding',
    additionalClasses: ''
  },
  {
    image: Eight,
    alt: 'Květopády',
    title: 'Květopády',
    description: 'Květopády v Zahradě nebeského nefritu',
    typeDate: '2022 | Dokumentační video',
    additionalClasses: ''
  },
  {
    image: Nine,
    alt: 'Entreria byty Thera',
    title: 'Entreria byty Thera',
    description: 'Krátký sestřih jak probíhá vystavba bytových domů Thera v Hradci Králové.',
    typeDate: '2023 | Dokumentační video',
    additionalClasses: ''
  },
];


export default function VideoGallery() {
  const oddClasses = ['','lg:col-start-1 row-start-2','row-span-2 lg:col-start-2 row-start-1 max-lg:row-start-3']
  const evenClasses = ['col-start-2 row-start-1','col-start-2 row-start-2','row-span-2 col-start-1 row-start-1']

  const itemsPerRow = 3

  const numRows = Math.ceil(projects.length / itemsPerRow)

  return (
    <div className='relative '>
      <div>
        {Array(numRows).fill('').map((_, rowIndex) => (
          <div key={rowIndex} className='grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 max-lg:grid-rows-4 h-[800px] max-lg:h-[1800px]'>
            {projects.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow).map((project, projectIndex) => (
              <div key={projectIndex} className={`relative flex-1 group/container ${oddClasses[projectIndex]}`}>
                <div className='absolute top-0 left-0  w-full h-full opacity-0 duration-[200ms] lg:group-hover/container:opacity-[1] backdrop-blur-[10px] z-10'>
                  <div className='bg-black w-full h-full opacity-[0.25]'/>
                </div>
        
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  placeholder='blur'
                  sizes="(min-width: 1040px) 50vw, 100vw"
                  className={`object-fit ${project.additionalClasses} relative z-0 object-cover`}
                />

                <div className='duration-[200ms] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 max-lg:px-[60px] max-sm:px-[30px] flex flex-col gap-6 items-center justify-center z-10'>
                  <div className='flex flex-col gap-[12px]'>
                  <h3 className="duration-[200ms] text-white text-center lg:leading-[55px] text-[42px] max-lg:text-[26px] font-bold">
                    {project.title}
                  </h3>
                  <p className="duration-[200ms] text-white text-center text-[16px] max-lg:text-[14px]">
                    {project.description}
                  </p>
                  <span className="duration-[200ms] text-white text-center font-bold text-[16px] max-lg:text-[14px]">
                    {project.typeDate}
                  </span>
                  </div>
                  <div className='duration-[200ms] w-10 h-0 lg:group-hover/container:h-10 max-lg:h-10'>
                    <button className='group/button -translate-x-1/2 left-1/2 w-[48px] h-[48px] relative flex items-center justify-center border-[1px] border-white rounded-full lg:group-hover/container:opacity-100 lg:hover:bg-white active:bg-white active:duration-0 max-lg:opacity-100 opacity-0 duration-[200ms] '>
                      <VideoArrow width='48px' arrowAdditionalClasses='lg:group-hover/button:fill-black group-active/button:fill-black group-active/button:duration-0 duration-200 ' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
