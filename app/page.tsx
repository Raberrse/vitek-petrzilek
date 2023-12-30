import { AboutMe, ContactMe, Hero, Logos, ReferenceLetters, TopThree } from "@/components/main";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
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
