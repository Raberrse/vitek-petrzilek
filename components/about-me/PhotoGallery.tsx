import Image from 'next/image';
import React from 'react';
import One from '../../public/about-me-photo-gallery/1.jpg'
import Two from '../../public/about-me-photo-gallery/2.jpg'
import Three from '../../public/about-me-photo-gallery/3.jpg'
import Four from '../../public/about-me-photo-gallery/4.jpg'
import Five from '../../public/about-me-photo-gallery/5.jpg'
import Six from '../../public/about-me-photo-gallery/6.jpg'
import Seven from '../../public/about-me-photo-gallery/7.jpg'
import Eight from '../../public/about-me-photo-gallery/8.jpg'

const images = [
  { component: One },
  { component: Two },
  { component: Three },
  { component: Four },
  { component: Five },
  { component: Six },
  { component: Seven },
  { component: Eight },
];
export default function PhotoGallery() {
  return (
    <div className='px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px]'>
      <div className='mx-auto max-w-[1200px] flex flex-col gap-5'>
        <h3 className='text-[16px] text-[#9F9F9F] font-medium self-end'>
          Fotky z natáčení
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center'>
          {images.map((file, index) => (
              <Image
                key={index}
                width={600}
                height={394}
                placeholder="blur"
                className='object-cover '
                src={file.component}
                alt={`Fotka ${index + 1}`}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
