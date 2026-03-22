"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    gradientClass: "from-white/[0.04]",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Bash"],
  },
  {
    category: "AI / ML",
    gradientClass: "from-white/[0.04]",
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
    gradientClass: "from-white/[0.04]",
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
    gradientClass: "from-white/[0.04]",
    skills: [
      "Structured Outputs",
      "Transfer Learning",
      "Data Pipelines",
      "Two-Stage Ranking",
      "System Design",
      "CI/CD",
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
    <section id="skills" aria-label="Skills" className="relative py-16 md:py-24 px-4">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-5">
            <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-syne">
              Skills
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Tech Stack
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="relative rounded-2xl p-7 bg-white/[0.03] border border-white/[0.07] overflow-hidden"
              >
                <div
                  className={`absolute inset-0 opacity-25 bg-gradient-to-br ${group.gradientClass} to-transparent`}
                />
                <div className="relative z-10">
                  <h3 className="font-syne text-[10px] uppercase tracking-[0.2em] text-white/65 mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/[0.09] bg-white/[0.04] text-white/65"
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
