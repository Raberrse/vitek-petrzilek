import React from 'react'
export default function HeroVideo() {
  return (
    <>

    {/* Desktop  */}
      <video
        playsInline
        controls={false}
        width={'100%'}
        id="myVideo" 
        src="/hero_video_lg.mp4"
        autoPlay
        muted
        loop
        className='min-h-[450px] h-screen object-cover relative max-md:hidden'
      />

    {/* Mobile */}
      <video
        playsInline
        controls={false}
        width={'100%'}
        id="myVideo" 
        src="/hero_video_md.mp4"
        autoPlay
        muted
        loop
        className='min-h-[450px] h-screen object-cover relative md:hidden'
      />
    </>
        
  )
}
