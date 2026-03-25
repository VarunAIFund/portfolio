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
  return <span className="text-white/30 text-xs" aria-hidden="true">{time} PT</span>;
}

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative py-16 md:py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0}>
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Contact
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-white/55 text-lg leading-relaxed mb-2 max-w-xl">
            Open to new grad roles, internships, and interesting AI or full-stack projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-6">
            <a
              href="mailto:hello@varunsharma.dev"
              className={cn(
                "group flex items-center gap-3 px-6 py-4 rounded-full no-active-scale",
                "bg-white/[0.09] border border-white/[0.18]",
                "hover:bg-white/[0.13] hover:border-white/[0.25]",
                "transition-[background-color,border-color,transform] duration-200"
              )}
            >
              <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
              <span className="text-sm text-white/90 font-medium">hello@varunsharma.dev</span>
              <ArrowRight className="w-4 h-4 ml-auto text-white/35 group-hover:translate-x-0.5 group-hover:text-white/60 transition-[transform,color] duration-150" />
            </a>

            <div
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-full",
                "bg-white/[0.03] border border-white/[0.08]",
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
        <FadeIn delay={0.25}>
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
