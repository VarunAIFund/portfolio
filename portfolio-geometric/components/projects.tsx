"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type PlaceholderConfig = {
  bg: string;
  rows: string[];
};

const placeholders: Record<string, PlaceholderConfig> = {
  "Inbox Triage Assistant": {
    bg: "linear-gradient(135deg, rgba(20,184,166,0.28) 0%, rgba(16,185,129,0.12) 55%, rgba(3,3,3,0.9) 100%)",
    rows: ["72%", "55%", "82%"],
  },
  MediMinder: {
    bg: "linear-gradient(135deg, rgba(99,102,241,0.28) 0%, rgba(139,92,246,0.12) 55%, rgba(3,3,3,0.9) 100%)",
    rows: ["60%", "78%", "48%"],
  },
  "Healthcare Scheduling Chatbot": {
    bg: "linear-gradient(135deg, rgba(244,63,94,0.28) 0%, rgba(249,115,22,0.12) 55%, rgba(3,3,3,0.9) 100%)",
    rows: ["70%", "58%", "84%"],
  },
  "Movie Tracker": {
    bg: "linear-gradient(135deg, rgba(139,92,246,0.28) 0%, rgba(217,70,239,0.12) 55%, rgba(3,3,3,0.9) 100%)",
    rows: ["65%", "80%", "52%"],
  },
};

function PlaceholderThumb({ config }: { config: PlaceholderConfig }) {
  return (
    <div className="relative w-full h-full" style={{ background: config.bg }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 p-5 flex flex-col gap-3">
        <div className="h-2 w-28 rounded-full bg-white/20" />
        <div className="h-1.5 w-44 rounded-full bg-white/10" />
        <div className="flex flex-col gap-2.5 pt-1">
          {config.rows.map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/25 flex-shrink-0" />
              <div className="h-1.5 rounded-full bg-white/12" style={{ width: w }} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#030303]/80 to-transparent" />
    </div>
  );
}

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
    image: "/projects/latex-editor.png",
  },
  {
    title: "Inbox Triage Assistant",
    description:
      "Smart Gmail manager that clusters emails by pattern (newsletters, shopping, same-sender, similar-topic) and enables one-click bulk archiving.",
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="relative py-16 md:py-24 px-4">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0} className="mb-5">
          <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-syne">
            Projects
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-10 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Selected Work
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn
              key={project.title}
              delay={0.15 + i * 0.08}
              className={project.wide ? "md:col-span-2" : ""}
            >
              <div
                className={cn(
                  "group relative rounded-2xl overflow-hidden h-full",
                  "bg-white/[0.02] border border-white/[0.06]",
                  "hover:bg-white/[0.035] hover:border-white/[0.10]",
                  "transition-all duration-300"
                )}
              >
                {/* Thumbnail */}
                <div
                  className={cn(
                    "relative overflow-hidden",
                    project.wide ? "h-52 md:h-64" : "h-40"
                  )}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <PlaceholderThumb config={placeholders[project.title]} />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#030303]/60 to-transparent pointer-events-none" />
                </div>

                {/* Card content */}
                <div className="relative z-10 flex flex-col p-6 md:p-7">
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
                          className="text-white/40 hover:text-white/75 transition-colors duration-200"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/40 hover:text-white/75 transition-colors duration-200"
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
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
