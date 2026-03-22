"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Healthcare Patient Scheduling Chatbot",
    description:
      "AI-powered chatbot that matches patients with therapists based on their needs and specialty. Integrated Google Calendar API for fully automated appointment scheduling.",
    tech: ["React", "Supabase", "OpenAI API", "Google Calendar API"],
    period: "May 2025",
    gradientClass: "from-indigo-500/[0.12]",
    accentClass: "text-indigo-400",
    features: [
      "OpenAI function calling drives the chatbot's decision logic",
      "Admin dashboard for real-time session and appointment management",
      "Automated calendar scheduling on match confirmation",
    ],
    wide: true,
  },
  {
    title: "MediMinder",
    description:
      "Full-stack AI-powered medication management app designed specifically for elderly users with complex multi-medication schedules.",
    tech: ["React", "Full-Stack", "AI-Powered"],
    period: "2025",
    gradientClass: "from-rose-500/[0.12]",
    accentClass: "text-rose-400",
    features: [
      "Medication tracking and smart reminders",
      "Designed for elderly users with simple UX",
      "Complex schedule management and conflict detection",
    ],
    wide: false,
  },
  {
    title: "Automatic Playlist Continuation",
    description:
      "Spotify Million Playlist Challenge — recommends 500 songs to continue a playlist using Word2Vec, autoencoder embeddings, CNN sequence modeling, and FAISS retrieval.",
    tech: ["Python", "Word2Vec", "CNN", "FAISS", "TensorFlow", "PyTorch"],
    period: "Dec 2024",
    gradientClass: "from-violet-500/[0.12]",
    accentClass: "text-violet-400",
    features: [
      "Autoencoder + CNN learns song representations from co-occurrence structure",
      "FAISS nearest-neighbor retrieval over full corpus of songs",
      "Word2Vec title-based playlist similarity as a separate model",
    ],
    wide: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="relative py-28 md:py-40 px-4">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-syne">
              Projects
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white/90 to-indigo-300">
              Selected Work
            </span>
          </motion.h2>

          {/* Wide card on top */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={cn(
                  "group relative rounded-2xl p-7 overflow-hidden",
                  "bg-white/[0.02] border border-white/[0.06]",
                  "hover:bg-white/[0.035] hover:border-white/[0.10]",
                  "transition-all duration-300",
                  i === 0 ? "md:col-span-2" : ""
                )}
              >
                {/* Hover gradient */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-br ${project.gradientClass} via-transparent to-transparent`
                  )}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-syne font-bold text-white text-lg leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-xs text-white/45 shrink-0 mt-1">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-white/65 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {project.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-white/55 text-xs leading-relaxed"
                      >
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/55"
                      >
                        {t}
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
