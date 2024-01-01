'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import image1 from '../../public/bg/TOP3_thajsko.jpg';
import image2 from '../../public/bg/TOP3_vyrava.jpg';
import image3 from '../../public/bg/TOP3_kolobreh.jpg';
import { VideoArrow } from '../svg';
import { useRouter } from 'next/navigation';

const projects = [
    {
      image: image1,
      alt: 'Mistroství světa v Thajsku',
      title: 'Mistroství světa v\u00A0Thajsku',
      additionalClasses: ''
    },
    {
      image: image2,
      alt: 'Festival Výrava x MOK',
      title: 'Festival Výrava x\u00A0MOK',
      additionalClasses: ''
    },
    {
      image: image3,
      alt: 'Kolobřeh paddleboardové závody',
      title: 'Kolobřeh paddleboardové závody',
      additionalClasses: 'object-[83%]'
    },
  ];

export default function TopThreeImages() {
    const [isLoaded, setIsLoaded] = useState(false)
    const router = useRouter()

  return (
    <>
        {projects.map((project, index) => (
          <div key={index} className={`relative flex-1 ${isLoaded && 'group/container'} `}>
                <div className="absolute top-0 left-0  w-full h-full opacity-0 duration-[200ms] lg:group-hover/container:opacity-[1] backdrop-blur-[10px] z-10">
                    <div className="bg-black w-full h-full opacity-[0.25]" />
                </div>

            <Image
              src={project.image}
              alt={project.alt}
              fill
              placeholder='blur'
              sizes="(min-width: 1040px) 33.32vw, 100vw"
              className={`object-fit ${project.additionalClasses} relative z-0 object-cover bg-[rgba(0,0,0,0.90)]`}
              onLoad={() => setIsLoaded(true)}
            />

            <div className='duration-[200ms] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 flex flex-col gap-6 items-center justify-center z-10'>
              <h3 className="duration-[200ms] text-white text-center text-[38px] font-bold">
                {project.title}
              </h3>
              <div className={`duration-[200ms] w-10 lg:group-hover/container:h-10 h-0 max-lg:h-10`}>
              <button
                onClick={() => router.push(`/projekty/${index}`, { scroll: false })}
                className="group/button -translate-x-1/2 left-1/2 w-[48px] h-[48px] relative flex items-center justify-center border-[1px] border-white rounded-full lg:group-hover/container:opacity-100 lg:hover:bg-white active:bg-white active:duration-0 max-lg:opacity-100 opacity-0 duration-[200ms] "
                aria-label={`Spustit video o ${project.title}`}
              >
                <VideoArrow
                  width="48px"
                  arrowAdditionalClasses="lg:group-hover/button:fill-black group-active/button:fill-black group-active/button:duration-0 duration-200 "
                />
              </button>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
