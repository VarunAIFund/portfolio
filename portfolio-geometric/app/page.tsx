import Nav from "@/components/nav";
import {
  HeroGeometric,
  GeometricBackground,
} from "@/components/ui/shape-landing-hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <GeometricBackground />
      <Nav />
      <section id="hero">
        <HeroGeometric title1="Varun Sharma" />
      </section>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
