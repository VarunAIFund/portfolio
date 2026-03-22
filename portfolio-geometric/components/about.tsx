"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <section id="about" aria-label="About" className="relative py-16 md:py-24 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-5">
            <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-syne">
              About
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Who I Am
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-white/75 text-lg leading-relaxed font-light">
                I&apos;m a third-year student at{" "}
                <span className="text-white/90">UC San Diego</span> with senior
                standing, studying Mathematics & Computer Science with a minor
                in Cognitive Science.
              </p>
              <p className="text-white/75 text-lg leading-relaxed font-light">
                I currently work{" "}
                <span className="text-white/90">20 hours/week</span> across two
                AI-focused internships simultaneously while maintaining a 3.9
                GPA. I specialize in end-to-end ownership — from data collection
                and modeling to product UI and deployment.
              </p>
              <p className="text-white/65 text-base leading-relaxed font-light">
                Deep interest in applying AI to practical, human-facing
                problems: recruiting, healthcare, education, and media. Comfort
                in ambiguous environments where requirements aren&apos;t fully
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
            </motion.div>

            {/* Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className={cn(
                      "p-5 rounded-2xl group cursor-default",
                      "bg-white/[0.03] border border-white/[0.08]",
                      "hover:bg-white/[0.06] hover:border-white/[0.14]",
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
