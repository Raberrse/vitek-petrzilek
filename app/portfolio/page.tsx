import { VideoPlayerContainer, VideoPlayerParallel } from "@/components/assets";
import { VideoGallery } from "@/components/portfolio";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense>
        <VideoPlayerContainer defaultRoute="/portfolio" />
      </Suspense>
      <VideoGallery />
    </div>
  )
}
