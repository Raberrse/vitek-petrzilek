import Image from 'next/image';
import React from 'react';
import { VideoArrow } from '../svg';
import Link from 'next/link';

const projects = [
  {
    imageSrc: '/top_1.jpg',
    alt: 'Mistroství světa v Thajsku',
    title: 'Mistroství světa v\u00A0Thajsku',
    additionalClasses: ''
  },
  {
    imageSrc: '/top_2.jpg',
    alt: 'Festival Výrava x MOK',
    title: 'Festival Výrava\u00A0x MOK',
    additionalClasses: ''
  },
  {
    imageSrc: '/top_3.jpg',
    alt: 'Kolobřeh paddleboardové závody',
    title: 'Kolobřeh paddleboardové závody',
    additionalClasses: 'object-[83%]'
  },
];

export default function TopThree() {
  return (
    <div className='relative flex flex-col items-center gap-10'>
      <h2 className='text-center absolute z-20 text-white font-bold text-[19px] top-20 w-full'>
        Moje top 3 Projekty
      </h2>

      <div className='flex h-[800px] max-lg:flex-col max-lg:h-[2400px] w-full'>
        {projects.map((project, index) => (
          <div key={index} className='relative flex-1 group/container '>
            <div className='absolute top-0 left-0  w-full h-full duration-[200ms] lg:group-hover/container:backdrop-blur-[10px] z-10'>
              <div className='bg-black w-full h-full opacity-0 duration-[200ms] lg:group-hover/container:opacity-[0.25] '/>
            </div>

            <Image
              src={project.imageSrc}
              alt={project.alt}
              fill
              className={`object-fit ${project.additionalClasses} relative z-0 object-cover`}
              quality={100}
            />

            <div className='duration-[200ms] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 flex flex-col gap-6 items-center justify-center z-10'>
              <h3 className="duration-[200ms] text-white text-center text-[38px] font-bold">
                {project.title}
              </h3>
              <div className='duration-[200ms] w-10 h-0 lg:group-hover/container:h-10 max-lg:h-10'>
                <button className='-translate-x-1/2 left-1/2 w-[48px] h-[48px] relative flex items-center justify-center'>
                  <VideoArrow width='48px' additionalClasses='duration-[200ms] lg:group-hover/container:opacity-100 max-lg:opacity-100 opacity-0 ' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href={''} className='font-bold underline'>
        Více projektů zde...
      </Link>
    </div>
  );
}
