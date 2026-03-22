"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    category: "Languages",
    gradientClass: "from-indigo-500/[0.15]",
    tagClass: "border-indigo-500/30 text-indigo-300/85",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "AI / ML",
    gradientClass: "from-rose-500/[0.15]",
    tagClass: "border-rose-500/30 text-rose-300/85",
    skills: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "OpenAI API",
      "LangChain",
      "TensorFlow",
      "PyTorch",
      "FAISS",
      "Word2Vec",
      "Computer Vision",
      "NLP",
      "Prompt Engineering",
    ],
  },
  {
    category: "Web / Full-Stack",
    gradientClass: "from-violet-500/[0.15]",
    tagClass: "border-violet-500/30 text-violet-300/85",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Google APIs",
      "Edge Functions",
    ],
  },
  {
    category: "Concepts",
    gradientClass: "from-cyan-500/[0.15]",
    tagClass: "border-cyan-500/30 text-cyan-300/85",
    skills: [
      "Retrieval-Augmented Generation",
      "Structured Outputs",
      "Transfer Learning",
      "Data Pipelines",
      "Two-Stage Ranking",
      "System Design",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative py-28 md:py-40 px-4">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-syne">
              Skills
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white/90 to-indigo-300">
              Tech Stack
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="relative rounded-2xl p-7 bg-white/[0.02] border border-white/[0.06] overflow-hidden"
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-25",
                    `bg-gradient-to-br ${group.gradientClass} to-transparent`
                  )}
                />
                <div className="relative z-10">
                  <h3 className="font-syne text-[10px] uppercase tracking-[0.2em] text-white/55 mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          "text-xs px-3 py-1.5 rounded-full border bg-white/[0.03]",
                          group.tagClass
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
