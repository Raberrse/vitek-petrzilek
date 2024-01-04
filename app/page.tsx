import { AboutMe, ContactMe, Hero, Logos, ReferenceLetters, TopThree } from "@/components/main";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
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
