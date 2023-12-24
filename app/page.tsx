import { AboutMe, ContactMe, Hero, Logos, ReferenceLetters, TopThree } from "@/components/main";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <>
      <main className="relative z-0 overflow-hidden">
        <Hero />
        <Logos />
        <AboutMe />
        <TopThree/>
        <ReferenceLetters />
        <ContactMe />
      </main>
    </>
  )
}
