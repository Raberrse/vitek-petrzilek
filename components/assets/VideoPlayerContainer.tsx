'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import { VideoPlayerParallel } from '.'

export default function VideoPlayerContainer({defaultRoute}: {defaultRoute: string}) {
    const searchParams = useSearchParams()
    const projectId = searchParams.get('projekt')

  return (
    <>
        {projectId && (
            <VideoPlayerParallel projectId={projectId} defaultRoute={defaultRoute}/>
        )}
    </>
  )
}
