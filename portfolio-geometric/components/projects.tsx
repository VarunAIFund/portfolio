"use client";

import { motion } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "LaTeX Resume Editor",
    description:
      "Full-stack AI-powered LaTeX editor with live PDF preview, GPT-4o chat assistant that edits your resume conversationally, diff view before applying changes, and cover letter generation.",
    tech: ["TypeScript", "React", "FastAPI", "OpenAI API", "Monaco Editor"],
    period: "Mar 2026",
    features: [
      "GPT-4o chat edits resume in-place with a diff preview before committing",
      "Live PDF compilation via pdflatex with real-time preview",
      "Cover letter generation with job posting screenshot context",
    ],
    github: "https://github.com/VarunAIFund/latex-editor",
    live: null,
    wide: true,
  },
  {
    title: "Inbox Triage Assistant",
    description:
      "Smart Gmail manager that clusters emails by pattern — newsletters, shopping, same-sender, similar-topic — and enables one-click bulk archiving.",
    tech: ["React", "Node.js", "Gmail API", "OAuth2"],
    period: "Mar 2026",
    features: [
      "Processes up to 200 emails and groups them into semantic clusters",
      "One-click bulk archive entire categories",
      "OAuth2 Google authentication with no data stored server-side",
    ],
    github: "https://github.com/VarunAIFund/inbox-triage-assistant",
    live: null,
    wide: false,
  },
  {
    title: "MediMinder",
    description:
      "AI medication management app for elderly users with voice-enabled AI nurse assistant, medication scanner, smart reminders, and adherence quizzes.",
    tech: ["Next.js", "Firebase", "Web Speech API", "Node.js"],
    period: "2025",
    features: [
      "AI nurse assistant analyzes medication journals and responds with voice",
      "Medication scanner via photo capture",
      "Quiz system to improve adherence",
    ],
    github: "https://github.com/VarunAIFund/MedHelper",
    live: "https://medi-minder-theta.vercel.app",
    wide: false,
  },
  {
    title: "Healthcare Scheduling Chatbot",
    description:
      "AI chatbot that matches patients to therapists based on specialty and insurance needs, with fully automated Google Calendar appointment booking.",
    tech: ["React", "Supabase", "OpenAI API", "Google Calendar API"],
    period: "May 2025",
    features: [
      "Natural language intake extracts specialty and insurance requirements",
      "AI matches patient to therapist from database and books calendar slot",
      "Admin dashboard for managing inquiries and appointments",
    ],
    github: "https://github.com/VarunAIFund/healthcare-chatbot",
    live: null,
    wide: false,
  },
  {
    title: "Movie Tracker",
    description:
      "Social media tracking app for movies and TV shows with watchlists, friend activity feed, and Firebase real-time backend.",
    tech: ["React", "Firebase", "Ant Design", "React Router"],
    period: "2025",
    features: [
      "Watchlist states: Watching, Planned, Completed",
      "Friend activity feed showing recent additions",
      "Firebase Auth + Firestore with real-time updates",
    ],
    github: "https://github.com/VarunAIFund/movieTracker",
    live: "https://inner-tokenizer-350401.web.app",
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
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Selected Work
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={cn(
                  "group relative rounded-2xl p-7 overflow-hidden",
                  "bg-white/[0.02] border border-white/[0.06]",
                  "hover:bg-white/[0.035] hover:border-white/[0.10]",
                  "transition-all duration-300",
                  project.wide ? "md:col-span-2" : ""
                )}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-syne font-bold text-white text-lg leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      <span className="text-xs text-white/45">{project.period}</span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/35 hover:text-white/70 transition-colors duration-200"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/35 hover:text-white/70 transition-colors duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
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
