"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "⌨",
    color: "#a78bfa",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "AI / ML",
    icon: "🧠",
    color: "#34d399",
    skills: [
      "LLMs", "Agentic AI", "RAG", "Prompt Engineering",
      "OpenAI API", "Gemini", "LangChain",
      "TensorFlow", "PyTorch", "Computer Vision",
      "NLP", "Word2Vec", "FAISS", "Reinforcement Learning",
    ],
  },
  {
    category: "Web & Full-Stack",
    icon: "🌐",
    color: "#38bdf8",
    skills: [
      "React", "Next.js", "Tailwind CSS",
      "Supabase", "Postgres", "Vercel",
      "Google Sheets API", "Google Calendar API", "Apify",
    ],
  },
  {
    category: "Tools & Other",
    icon: "🛠",
    color: "#fb923c",
    skills: [
      "PDFPlumber", "PaddleOCR", "LayoutParser",
      "OpenCV", "NVIDIA Jetson Nano", "Raspberry Pi",
      "Chrome DevTools", "Git",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3 block">
            04. Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">My Toolkit</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-zinc-200 text-sm uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.08 + si * 0.03, duration: 0.3 }}
                    whileHover={{ scale: 1.06, y: -1 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full cursor-default transition-all duration-200"
                    style={{
                      backgroundColor: `${group.color}12`,
                      color: group.color,
                      border: `1px solid ${group.color}25`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
