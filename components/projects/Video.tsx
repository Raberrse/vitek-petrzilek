'use client'

import React from 'react'
import { VideoPlayerParallel } from '../assets'

interface VideoProps{
  videoLink: string,
  defaultRoute?: string
}

export default function Video({defaultRoute = '/', videoLink}: VideoProps) {

  return (
    <>
      <VideoPlayerParallel defaultRoute={defaultRoute} videoLink={videoLink}/>
    </>
  )
}
