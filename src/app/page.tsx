import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
