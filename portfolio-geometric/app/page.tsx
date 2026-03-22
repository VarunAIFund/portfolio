import Nav from "@/components/nav";
import { HeroGeometric, GeometricBackground } from "@/components/ui/shape-landing-hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GeometricBackground />
      <Nav />
      <section id="hero">
        <HeroGeometric
          badge="AI Engineer & Developer"
          title1="Varun Sharma"
          title2="Building Intelligent Systems"
        />
      </section>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
