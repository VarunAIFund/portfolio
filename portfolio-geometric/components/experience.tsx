"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "DeepLearning.AI",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Present",
    location: "Mountain View, CA",
    status: "current",
    statusLabel: "Current",
    statusClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/50",
    dotClass: "bg-white/40",
    bullets: [
      "Refactored AI Dev Conference site from Vercel v0 to Next.js + React with Supabase edge functions and Google Sheets API",
      "Reduced total page transfer size from ~19 MB to ~3 MB by compressing images and removing heavy animations",
      "Built backend for sponsor intake processing; coordinates speakers, sponsors, and schedule changes",
    ],
  },
  {
    company: "AI Fund",
    role: "AI & Technical Program Management Intern",
    period: "Jul 2025 – Present",
    location: "Mountain View, CA",
    status: "current",
    statusLabel: "Current",
    statusClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/50",
    dotClass: "bg-white/40",
    bullets: [
      "Built UltraLink — a RAG candidate search system over 200K profiles with LLM-based two-stage matching and reranking",
      "Implemented fit rationale generation for strong matches; optimized costs using GPT-4o-mini with selective heavy-model reranking",
      "Designed and built Buildathon.ai with React, Tailwind, Supabase edge functions; created HR dashboard for recruiting team",
    ],
  },
  {
    company: "Planck AI",
    role: "Data Validation Intern",
    period: "Mar 2025 – Jul 2025",
    location: "Remote",
    status: "past",
    statusLabel: "",
    statusClass: "",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/50",
    dotClass: "bg-white/40",
    bullets: [
      "Built PDF processing pipelines using PDFPlumber, LayoutParser, and PaddleOCR for structured LLM data extraction",
      "Generated annotated visualizations to debug parsing errors across diverse multi-layout document types",
    ],
  },
  {
    company: "Integem",
    role: "AI & AR Project Intern",
    period: "Jun 2024 – Sep 2024",
    location: "Cupertino, CA",
    status: "past",
    statusLabel: "",
    statusClass: "",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/50",
    dotClass: "bg-white/40",
    bullets: [
      "Retrained MobileNetV2 classifier for live robot cube detection; improved accuracy ~10% with data augmentation pipeline",
      "Simulated lighting changes, motion blur, and sensor grain via OpenCV transforms; used confidence thresholding for robustness",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 px-4">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-rose-500/[0.03] blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-syne">
              Experience
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Where I&apos;ve Worked
            </span>
          </motion.h2>

          <div className="space-y-3">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={cn(
                  "group relative rounded-2xl p-6 md:p-8 overflow-hidden",
                  "bg-white/[0.02] border border-white/[0.06]",
                  "hover:bg-white/[0.035] hover:border-white/[0.10]",
                  "transition-all duration-400"
                )}
              >
                {/* Hover gradient */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${exp.gradientClass} to-transparent`
                  )}
                />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="font-syne font-bold text-xl text-white">
                          {exp.company}
                        </span>
                        {exp.statusLabel && (
                          <span
                            className={cn(
                              "text-[10px] px-2.5 py-0.5 rounded-full border font-syne tracking-wide",
                              exp.statusClass
                            )}
                          >
                            {exp.statusLabel}
                          </span>
                        )}
                      </div>
                      <p className={cn("text-sm font-medium", exp.accentClass)}>
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-white/55 text-xs">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/25 text-xs">
                        <Building2 className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
                      >
                        <span
                          className={cn(
                            "mt-[9px] w-1 h-1 rounded-full flex-shrink-0 opacity-60",
                            exp.dotClass
                          )}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
