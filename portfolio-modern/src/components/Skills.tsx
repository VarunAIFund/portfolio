"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    color: "#a78bfa",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "AI / ML",
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
    color: "#38bdf8",
    skills: [
      "React", "Next.js", "Tailwind CSS",
      "Supabase", "Postgres", "Vercel",
      "Google Sheets API", "Google Calendar API", "Apify",
    ],
  },
  {
    category: "Tools & Other",
    color: "#fb923c",
    skills: [
      "PDFPlumber", "PaddleOCR", "LayoutParser",
      "OpenCV", "NVIDIA Jetson Nano", "Raspberry Pi",
      "Chrome DevTools", "Git",
    ],
  },
];

function MarqueeRow({
  skills,
  color,
  reverse = false,
}: {
  skills: string[];
  color: string;
  reverse?: boolean;
}) {
  const doubled = [...skills, ...skills, ...skills, ...skills];
  return (
    <div
      className="relative flex overflow-hidden py-1 marquee-track"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex shrink-0 gap-3 marquee-inner ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 hover:scale-105 cursor-default select-none"
            style={{
              backgroundColor: `${color}10`,
              color: color,
              border: `1px solid ${color}22`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">04. Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">My Toolkit</h2>
        </motion.div>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-3 px-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <span
                  className="text-xs font-mono uppercase tracking-[0.18em] font-semibold"
                  style={{ color: group.color + "cc" }}
                >
                  {group.category}
                </span>
              </div>

              {/* Marquee row — alternating direction */}
              <MarqueeRow
                skills={group.skills}
                color={group.color}
                reverse={gi % 2 === 1}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-zinc-700 mt-12 font-mono"
        >
          Hover to pause · Always learning more
        </motion.p>
      </div>
    </section>
  );
}
