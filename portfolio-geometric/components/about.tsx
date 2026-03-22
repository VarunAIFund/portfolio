"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: GraduationCap,
    label: "Degree",
    value: "B.S. Math & CS",
    sub: "Cognitive Science Minor",
    color: "text-indigo-400",
  },
  {
    icon: Award,
    label: "GPA",
    value: "3.9 / 4.0",
    sub: "Provost Honors 2023–2026",
    color: "text-rose-400",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Milpitas, CA",
    sub: "U.S. Citizen",
    color: "text-violet-400",
  },
  {
    icon: Layers,
    label: "Graduating",
    value: "December 2026",
    sub: "Third-year, Senior Standing",
    color: "text-cyan-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-4">
      {/* Background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs tracking-[0.2em] text-white/25 uppercase font-syne">
              About
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-14 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Who I Am
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-white/55 text-lg leading-relaxed font-light">
                I'm a third-year student at{" "}
                <span className="text-white/80">UC San Diego</span> with senior
                standing, studying Mathematics & Computer Science with a minor
                in Cognitive Science.
              </p>
              <p className="text-white/55 text-lg leading-relaxed font-light">
                I currently work{" "}
                <span className="text-white/80">20 hours/week</span> across two
                AI-focused internships simultaneously while maintaining a 3.9
                GPA. I specialize in end-to-end ownership — from data collection
                and modeling to product UI and deployment.
              </p>
              <p className="text-white/40 text-base leading-relaxed font-light">
                Deep interest in applying AI to practical, human-facing
                problems: recruiting, healthcare, education, and media. Comfort
                in ambiguous environments where requirements aren't fully
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
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className={cn(
                      "p-5 rounded-2xl group cursor-default",
                      "bg-white/[0.02] border border-white/[0.07]",
                      "hover:bg-white/[0.05] hover:border-white/[0.12]",
                      "transition-all duration-300"
                    )}
                  >
                    <Icon className={cn("w-4 h-4 mb-3 opacity-70", stat.color)} />
                    <div className="text-[10px] text-white/25 uppercase tracking-[0.15em] mb-1.5 font-syne">
                      {stat.label}
                    </div>
                    <div className="text-white font-syne font-semibold text-sm leading-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/35 text-xs leading-relaxed">
                      {stat.sub}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
