"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Visa",
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
    role: "Software Engineer Intern",
    period: "Sep 2025 – Present",
    location: "Mountain View, CA",
    type: "Current",
    accent: "#7c3aed",
    bullets: [
      "Refactored the AI Developer Conference site from Vercel v0 to Next.js + React, wired up Supabase edge functions and Google Sheets API.",
      "Diagnosed ~19 MB of slow mobile assets via Chrome DevTools; compressed images and simplified animations to reduce transfer to ~3 MB.",
      "Built a backend pipeline for sponsor intake processing.",
    ],
    tags: ["Next.js", "React", "Supabase", "Google Sheets API", "Vercel"],
  },
  {
    company: "AI Fund",
    role: "AI & Technical Program Management Intern",
    period: "Jul 2025 – Present",
    location: "Mountain View, CA",
    type: "Current",
    accent: "#0891b2",
    bullets: [
      "Built UltraLink — a natural-language candidate search system over ~200K profiles using LLM two-stage ranking, SQL generation, and FAISS-style retrieval.",
      "Engineered a LinkedIn profile collection + enrichment pipeline (Apify → OpenAI structured outputs → Supabase Postgres) with seniority classification, implied skills, and fit rationales.",
      "Designed and shipped the Buildathon website (React + Tailwind + Supabase) with an internal HR dashboard — no design spec, full ownership.",
    ],
    tags: ["RAG", "OpenAI", "Supabase", "Apify", "React", "Tailwind"],
  },
  {
    company: "Planck AI",
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
    role: "AI & AR Project Intern",
    period: "Jun 2024 – Sep 2024",
    location: "Cupertino, CA",
    type: null,
    accent: "#d97706",
    bullets: [
      "Retrained MobileNetV2 image classifier for real-time cube recognition on robot live feed; improved accuracy ~10% via data augmentation (brightness, contrast, motion blur simulation).",
      "Trained models on NVIDIA Jetson Nano; built AR game components on Raspberry Pi robots.",
    ],
    tags: ["TensorFlow", "MobileNetV2", "OpenCV", "Jetson Nano", "Python"],
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <span className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3 block">
        02. Experience
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gradient">{children}</h2>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Where I've Worked</SectionTitle>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-zinc-700/50 to-transparent hidden md:block ml-[6px]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2 border-[#050508] hidden md:block"
                  style={{ backgroundColor: exp.accent }}
                />

                <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-300 hover:border-white/[0.1] group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                        {exp.type && (
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${exp.accent}20`,
                              color: exp.accent,
                              border: `1px solid ${exp.accent}40`,
                            }}
                          >
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <p className="text-violet-400 font-medium text-sm">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-zinc-400 font-mono">{exp.period}</p>
                      <p className="text-xs text-zinc-600 mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-violet-500 mt-1.5 shrink-0">▸</span>
                        <span className="group-hover:text-zinc-300 transition-colors duration-200">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
