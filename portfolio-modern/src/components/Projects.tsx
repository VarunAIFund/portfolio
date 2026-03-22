"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "UltraLink",
    subtitle: "RAG Candidate Search System",
    description:
      "Natural-language candidate search over ~200K profiles. Two-stage LLM ranking (GPT-4o-mini summaries → heavy model reranking), SQL query generation with abbreviation expansion, bookmarks + shareable search links.",
    tags: ["RAG", "OpenAI", "Supabase", "Apify", "Python"],
    link: null,
    featured: true,
    org: "AI Fund",
    accentFrom: "#7c3aed",
    accentTo: "#06b6d4",
  },
  {
    title: "Buildathon.ai",
    subtitle: "Conference & Competition Website",
    description:
      "Designed and built the full site for AI Fund's first Buildathon. React + Tailwind + Supabase edge functions. Built proactively with no design spec — including an HR dashboard for applicant management.",
    tags: ["React", "Tailwind", "Supabase", "JavaScript"],
    link: "https://www.buildathon.ai/",
    featured: false,
    org: "AI Fund",
    accentFrom: "#0891b2",
    accentTo: "#7c3aed",
  },
  {
    title: "AI Dev Conference Site",
    subtitle: "deeplearning.ai/conferences",
    description:
      "Maintains the DeepLearning.AI conference website. Refactored from Vercel v0 to Next.js + React. Optimized from 19 MB → 3 MB total transfer by compressing images and removing heavy animations.",
    tags: ["Next.js", "React", "Supabase", "Vercel"],
    link: "https://ai-dev.deeplearning.ai/",
    featured: false,
    org: "DeepLearning.AI",
    accentFrom: "#7c3aed",
    accentTo: "#a78bfa",
  },
  {
    title: "Healthcare Scheduling Chatbot",
    subtitle: "Patient–Therapist Matcher",
    description:
      "React + Supabase chatbot powered by OpenAI function calling. Matches patients with therapists by specialty, integrates Google Calendar for automated scheduling, and includes an admin dashboard.",
    tags: ["React", "Supabase", "OpenAI", "Google Calendar API"],
    link: null,
    featured: false,
    org: "Personal",
    accentFrom: "#059669",
    accentTo: "#06b6d4",
  },
  {
    title: "MediMinder",
    subtitle: "AI Medication Management",
    description:
      "Full-stack AI app for elderly users to track medications, set smart reminders, and manage complex schedules. Designed for accessibility and ease of use.",
    tags: ["Full-Stack", "AI", "React", "Supabase"],
    link: null,
    featured: false,
    org: "Personal",
    accentFrom: "#d97706",
    accentTo: "#059669",
  },
  {
    title: "Playlist Continuation",
    subtitle: "Spotify Million Playlist Challenge",
    description:
      "Two ML models: Word2Vec on playlist titles for title-based song recommendation, and an Autoencoder + CNN pipeline with FAISS retrieval for next-song prediction from co-occurrence embeddings.",
    tags: ["Python", "Word2Vec", "TensorFlow", "FAISS", "NLP"],
    link: null,
    featured: false,
    org: "UCSD ML",
    accentFrom: "#0891b2",
    accentTo: "#7c3aed",
  },
];

function SpotlightCard({
  project,
  index,
  className,
}: {
  project: typeof projects[0];
  index: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotPos, setSpotPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group cursor-default",
        project.featured && "ring-1 ring-violet-500/25",
        className
      )}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${spotPos.x}% ${spotPos.y}%, rgba(139,92,246,0.08), transparent 70%)`,
        }}
      />

      {/* Gradient header strip */}
      <div
        className="h-1.5 w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s",
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Org + link */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{project.org}</span>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/20">
                Featured
              </span>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-violet-400 transition-colors p-1 rounded-lg hover:bg-violet-500/10"
                aria-label={`Open ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-base font-bold text-white mb-1 group-hover:text-violet-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs text-violet-400/60 font-mono mb-3">{project.subtitle}</p>
        <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-400 transition-colors duration-200">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/80 text-zinc-600 border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.04),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">03. Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Things I&apos;ve Built</h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* UltraLink — featured, spans 2 cols */}
          <SpotlightCard
            project={projects[0]}
            index={0}
            className="lg:col-span-2"
          />
          {/* Buildathon */}
          <SpotlightCard project={projects[1]} index={1} />
          {/* AI Dev Conference */}
          <SpotlightCard project={projects[2]} index={2} />
          {/* Healthcare */}
          <SpotlightCard project={projects[3]} index={3} />
          {/* MediMinder */}
          <SpotlightCard project={projects[4]} index={4} />
          {/* Playlist Continuation */}
          <SpotlightCard project={projects[5]} index={5} />
        </div>
      </div>
    </section>
  );
}
