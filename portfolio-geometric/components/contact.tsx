"use client";

import { Mail, MapPin, ArrowRight, GithubIcon, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { useEffect, useState } from "react";

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span className="text-white/30 text-xs">{time} PT</span>;
}

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative py-16 md:py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0} className="mb-5">
          <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-syne">
            Contact
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Let&apos;s Build Something
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-lg mb-10">
            I&apos;m always open to discussing new opportunities, collaborations,
            or just chatting about AI and tech.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="mailto:hello@varunsharma.dev"
              className={cn(
                "group flex items-center gap-3 px-6 py-4 rounded-full",
                "bg-white/[0.05] border border-white/[0.10]",
                "hover:bg-white/[0.09] hover:border-white/[0.18]",
                "transition-all duration-300"
              )}
            >
              <Mail className="w-4 h-4 text-white/55 flex-shrink-0" />
              <span className="text-sm text-white/85">hello@varunsharma.dev</span>
              <ArrowRight className="w-4 h-4 ml-auto text-white/30 group-hover:translate-x-1 group-hover:text-white/55 transition-all duration-200" />
            </a>

            <div
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-full",
                "bg-white/[0.02] border border-white/[0.07]",
                "text-white/60 text-sm"
              )}
            >
              <MapPin className="w-4 h-4 text-white/45 flex-shrink-0" />
              Bay Area, CA
              <span className="text-white/20">·</span>
              <LocalTime />
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.35}>
          <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-syne font-bold text-white/50 text-sm tracking-wide">
                Varun Sharma
              </span>
              <span className="text-white/30">·</span>
              <span className="text-white/45 text-xs">hello@varunsharma.dev</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/varunaifund"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/45 hover:text-white/75 transition-colors duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/varun-sharma-891286229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/45 hover:text-white/75 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-white/45 text-xs">
                UCSD Mathematics & Computer Science · Expected Dec 2026
              </span>
            </div>
          </footer>
        </FadeIn>
      </div>
    </section>
  );
}
