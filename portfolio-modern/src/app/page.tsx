import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050508] text-white min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />

      {/* Divider gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mx-6" />

      <Experience />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-6" />

      <Projects />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-6" />

      <Skills />

      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mx-6" />

      <Contact />
    </main>
  );
}
