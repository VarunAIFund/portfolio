"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  {
    label: "Degree",
    value: "B.S. Math & CS",
    sub: "Cognitive Science Minor",
  },
  {
    label: "GPA",
    value: "3.9 / 4.0",
    sub: "Provost Honors 2023–2026",
  },
  {
    label: "Based in",
    value: "Bay Area, CA",
    sub: "U.S. Citizen",
  },
  {
    label: "Graduating",
    value: "December 2026",
    sub: "Third-year, Senior Standing",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About" className="relative py-16 md:py-24 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0} className="mb-5">
          <span className="text-xs tracking-[0.2em] text-white/60 uppercase font-syne">
            About
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Who I Am
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Bio */}
          <FadeIn delay={0.2} className="space-y-5">
            <p className="text-white/75 text-lg leading-relaxed font-light">
              I&apos;m a third-year student at{" "}
              <span className="text-white/90 font-medium">UC San Diego</span>{" "}
              with{" "}
              <span className="text-white/90 font-medium">senior standing</span>
              , studying Mathematics & Computer Science with a minor in
              Cognitive Science.
            </p>
            <p className="text-white/75 text-lg leading-relaxed font-light">
              I currently work in AI-focused engineering roles while maintaining
              a{" "}
              <span className="text-white/90 font-medium">3.9 GPA</span>. I
              specialize in{" "}
              <span className="text-white/90 font-medium">
                end-to-end ownership
              </span>
              , from data collection and modeling to product UI and deployment.
            </p>
            <p className="text-white/75 text-lg leading-relaxed font-light">
              Deep interest in applying AI to{" "}
              <span className="text-white/90 font-medium">
                practical, human-facing problems
              </span>
              : recruiting, healthcare, education, and media. Comfort in
              ambiguous environments where requirements aren&apos;t fully
              defined.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {[
                "End-to-End Ownership",
                "Agentic AI",
                "Full-Stack",
                "RAG Systems",
                "Computer Vision",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.09] text-white/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.2 + i * 0.08}>
                <div
                  className={cn(
                    "p-5 rounded-2xl group cursor-default h-full",
                    "bg-white/[0.05] border border-white/[0.10]",
                    "hover:bg-white/[0.08] hover:border-white/[0.16]",
                    "transition-all duration-300"
                  )}
                >
                  <div className="text-[10px] text-white/50 uppercase tracking-[0.15em] mb-1.5 font-syne">
                    {stat.label}
                  </div>
                  <div className="text-white font-syne font-semibold text-sm leading-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs leading-relaxed">
                    {stat.sub}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
