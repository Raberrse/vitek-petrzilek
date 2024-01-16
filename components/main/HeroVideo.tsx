import React from 'react'

export default function HeroVideo() {
  return (
    <video
        preload='auto'
        playsInline
        controls={false}
        width={'100%'}
        id="myVideo" 
        autoPlay
        muted
        loop
        className='min-h-[450px] h-screen object-cover relative'
    >
        
        <source
        className=""
        src="/hero_video_md.mp4"
        type="video/mp4"
        media='(max-width: 764px)'
        />

        <source
        className=""
        src="/hero_video_lg.mp4"
        type="video/mp4"
        media=''
        />
    </video>
  )
}
