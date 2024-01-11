"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VideoArrow } from "../svg";
import { projects } from "@/constants";
import { useRouter } from "next/navigation";

export default function VideoGallery() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  const handleButtonClick = (project: any) => {
    router.push(`/portfolio?projekt=${project.idPathname}`, {scroll: false});
  }
  const oddClasses = [
    "max-lg:row-span-2",
    "lg:col-start-1 lg:row-start-2 max-lg:row-start-3",
    "lg:row-span-2 lg:col-start-2 lg:row-start-1 max-lg:row-start-4",
  ];
  const evenClasses = [
    "lg:col-start-2 lg:row-start-1 max-lg:row-span-2",
    "lg:col-start-2 lg:row-start-2 max-lg:row-start-3",
    "lg:row-span-2 lg:col-start-1 lg:row-start-1 max-lg:row-start-4",
  ];

  const itemsPerRow = 3;

  const numRows = Math.ceil(projects.length / itemsPerRow);

  return (
    <>
      <div className="relative z-0">
        <div>
          {Array(numRows)
            .fill("")
            .map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 max-lg:grid-rows-4 h-screen lg:min-h-[850px] max-lg:h-[1800px]"
              >
                {projects
                  .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                  .map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className={`relative flex-1 ${isLoaded && 'group/container'} ${
                        rowIndex % 2 === 0
                          ? oddClasses[projectIndex]
                          : evenClasses[projectIndex]
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1040px) 50vw, 100vw"
                        className={`object-fit ${project.additionalClasses} relative z-0 object-cover bg-[rgba(0,0,0,0.90)]`}
                        onLoad={() => setIsLoaded(true)}
                      />

                          <div className="absolute top-0 left-0  w-full h-full opacity-0 duration-[200ms] lg:group-hover/container:opacity-[1] backdrop-blur-[10px] z-10">
                            <div className="bg-black w-full h-full opacity-[0.25]" />
                          </div>

                          <div className="duration-[200ms] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 max-lg:px-[60px] max-sm:px-[30px] flex flex-col gap-6 items-center justify-center z-20">
                            <div className="flex flex-col gap-[12px]">
                              <h3 className="duration-[200ms] text-white text-center lg:leading-[55px] text-[42px] max-lg:text-[32px] font-bold leading-[39px]">
                                {project.title}
                              </h3>
                              <p className="duration-[200ms] text-white text-center text-[16px] max-lg:text-[14px]">
                                {project.description}
                              </p>
                              <span className="duration-[200ms] text-white text-center font-bold text-[16px] max-lg:text-[14px]">
                                {project.typeDate}
                              </span>
                            </div>
                            <div className={`duration-[200ms] w-10 h-0 lg:group-hover/container:h-10 max-lg:h-10`}>
                            <button
                                aria-label={`Spustit video o ${project.title}`}
                                onClick={() => handleButtonClick(project)}
                                className="group/button -translate-x-1/2 left-1/2 w-[48px] h-[48px] relative flex items-center justify-center border-[1px] border-white rounded-full lg:group-hover/container:opacity-100 lg:hover:bg-white active:bg-white active:duration-0 max-lg:opacity-100 opacity-0 duration-[200ms] "
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
              </div>
            ))}
        </div>
      </div>
    </>
    
  );
}
