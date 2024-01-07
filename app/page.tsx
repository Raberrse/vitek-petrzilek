import { VideoPlayerContainer, VideoPlayerParallel } from "@/components/assets";
import { AboutMe, ContactMe, Hero, Logos, ReferenceLetters, TopThree } from "@/components/main";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Suspense>
          <VideoPlayerContainer defaultRoute='/'/>
        </Suspense>
        <Hero />
        <Logos />
        <AboutMe />
        <TopThree/>
        <ReferenceLetters />
        <ContactMe />
      </div>
    </>
  )
}
