"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Visa",
    initials: "Vi",
    role: "Software Engineer Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Austin, TX",
    type: "Incoming",
    accent: "#1A1FE8",
    bullets: [
      "Developing agentic AI workflows and an LLM + RAG chatbot for querying the CDISI knowledge base.",
    ],
    tags: ["Agentic AI", "LLM", "RAG"],
  },
  {
    company: "DeepLearning.AI",
    initials: "DL",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Present",
    location: "Mountain View, CA",
    type: "Current",
    accent: "#7c3aed",
    bullets: [
      "Refactored the AI Developer Conference site from Vercel v0 to Next.js + React, wired up Supabase edge functions and Google Sheets API.",
      "Diagnosed ~19 MB of slow mobile assets via Chrome DevTools; compressed images to reduce transfer to ~3 MB.",
      "Built a backend pipeline for sponsor intake processing.",
    ],
    tags: ["Next.js", "React", "Supabase", "Google Sheets API", "Vercel"],
  },
  {
    company: "AI Fund",
    initials: "AF",
    role: "AI & Technical Program Management Intern",
    period: "Jul 2025 – Present",
    location: "Mountain View, CA",
    type: "Current",
    accent: "#0891b2",
    bullets: [
      "Built UltraLink — a natural-language candidate search system over ~200K profiles using LLM two-stage ranking, SQL generation, and FAISS-style retrieval.",
      "Engineered a LinkedIn profile collection + enrichment pipeline (Apify → OpenAI → Supabase Postgres) with seniority classification.",
      "Designed and shipped the Buildathon.ai website (React + Tailwind + Supabase) with full ownership.",
    ],
    tags: ["RAG", "OpenAI", "Supabase", "Apify", "React", "Tailwind"],
  },
  {
    company: "Planck AI",
    initials: "PA",
    role: "Data Validation Intern",
    period: "Mar 2025 – Jul 2025",
    location: "Remote",
    type: null,
    accent: "#059669",
    bullets: [
      "Built PDF processing pipelines using PDFPlumber, LayoutParser, and PaddleOCR to extract structured data from diverse multi-layout PDFs for LLM workflows.",
      "Generated annotated visualizations to debug parsing errors and verify extraction quality.",
    ],
    tags: ["Python", "PDFPlumber", "PaddleOCR", "LayoutParser", "LLM"],
  },
  {
    company: "Integem",
    initials: "In",
    role: "AI & AR Project Intern",
    period: "Jun 2024 – Sep 2024",
    location: "Cupertino, CA",
    type: null,
    accent: "#d97706",
    bullets: [
      "Retrained MobileNetV2 image classifier for real-time cube recognition on robot live feed; improved accuracy ~10% via data augmentation.",
      "Trained models on NVIDIA Jetson Nano; built AR game components on Raspberry Pi robots.",
    ],
    tags: ["TensorFlow", "MobileNetV2", "OpenCV", "Jetson Nano", "Python"],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="relative group"
    >
      {/* Gradient left border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to bottom, ${exp.accent}, transparent)` }}
      />

      <div className="ml-5 glass rounded-2xl p-6 md:p-7 hover:bg-white/[0.05] hover:border-white/[0.10] transition-all duration-300 group-hover:shadow-lg"
        style={{ boxShadow: "none" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${exp.accent}18`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ background: `linear-gradient(135deg, ${exp.accent}cc, ${exp.accent}66)` }}
            >
              {exp.initials}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-base font-bold text-white">{exp.company}</h3>
                {exp.type && (
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1"
                    style={{
                      backgroundColor: `${exp.accent}18`,
                      color: exp.accent,
                      border: `1px solid ${exp.accent}35`,
                    }}
                  >
                    {exp.type === "Current" && (
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: exp.accent }} />
                    )}
                    {exp.type}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium" style={{ color: exp.accent + "cc" }}>{exp.role}</p>
            </div>
          </div>
          <div className="text-right shrink-0 sm:pl-4">
            <p className="text-xs text-zinc-400 font-mono">{exp.period}</p>
            <p className="text-xs text-zinc-600 mt-0.5">{exp.location}</p>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex gap-3 text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-200">
              <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-zinc-600" />
              {b}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-zinc-900/80 text-zinc-500 border border-zinc-800/60 group-hover:border-zinc-700/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">02. Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Where I&apos;ve Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line (desktop) */}
          <div className="absolute left-[1px] top-0 bottom-0 w-[1px] bg-zinc-800/50 hidden md:block" />
          <motion.div
            className="absolute left-[1px] top-0 w-[1px] bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 origin-top hidden md:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
