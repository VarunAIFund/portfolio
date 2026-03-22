"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "UltraLink",
    subtitle: "RAG Candidate Search System",
    description:
      "Natural-language candidate search over ~200K profiles. Two-stage LLM ranking (GPT-4o-mini summaries → heavy model reranking), SQL query generation with abbreviation expansion, bookmarks + shareable search links.",
    tags: ["RAG", "OpenAI", "Supabase", "Apify", "Python"],
    link: null,
    highlight: true,
    org: "AI Fund",
  },
  {
    title: "Buildathon.ai",
    subtitle: "Conference & Competition Website",
    description:
      "Designed and built the full site for AI Fund's first Buildathon (partnered with DeepLearning.AI). React + Tailwind + Supabase edge functions. Built proactively with no design spec — including an HR dashboard for applicant management.",
    tags: ["React", "Tailwind", "Supabase", "JavaScript"],
    link: "https://www.buildathon.ai/",
    org: "AI Fund",
  },
  {
    title: "AI Dev Conference Site",
    subtitle: "deeplearning.ai/conferences",
    description:
      "Maintains and updates the DeepLearning.AI conference website. Refactored from Vercel v0 to Next.js + React. Optimized from 19 MB → 3 MB total transfer size by compressing images and removing heavy animations.",
    tags: ["Next.js", "React", "Supabase", "Google Sheets API", "Vercel"],
    link: "https://ai-dev.deeplearning.ai/",
    org: "DeepLearning.AI",
  },
  {
    title: "Healthcare Scheduling Chatbot",
    subtitle: "Patient–Therapist Matcher",
    description:
      "React + Supabase chatbot powered by OpenAI function calling. Matches patients with therapists by specialty/needs, integrates Google Calendar for automated scheduling, and includes an admin dashboard for real-time session management.",
    tags: ["React", "Supabase", "OpenAI", "Google Calendar API"],
    link: null,
    org: "Personal Project",
  },
  {
    title: "MediMinder",
    subtitle: "AI Medication Management",
    description:
      "Full-stack AI app for elderly users to track medications, set smart reminders, and manage complex schedules. Designed for accessibility and ease of use for older adults.",
    tags: ["Full-Stack", "AI", "React", "Supabase"],
    link: null,
    org: "Personal Project",
  },
  {
    title: "Playlist Continuation",
    subtitle: "Spotify Million Playlist Challenge",
    description:
      "Two ML models: Word2Vec on playlist titles for title-based song recommendation, and an Autoencoder + CNN pipeline with FAISS retrieval for next-song prediction from co-occurrence embeddings.",
    tags: ["Python", "Word2Vec", "TensorFlow", "FAISS", "NLP"],
    link: null,
    org: "UCSD ML",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3 block">
            03. Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Things I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative glass rounded-2xl p-6 flex flex-col hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300 ${
                p.highlight ? "ring-1 ring-violet-500/30 glow-violet" : ""
              }`}
            >
              {/* Org label */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  {p.org}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-violet-400 transition-colors"
                    aria-label={`Open ${p.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-violet-400/70 font-mono mb-3">{p.subtitle}</p>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-400 transition-colors">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-500 border border-zinc-700/40 group-hover:border-zinc-600/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
