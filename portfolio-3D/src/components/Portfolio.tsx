"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

// ── SWAP BACKGROUND HERE ──────────────────────────────────────────────────────
//  Option 1:  import Background from "./backgrounds/GalaxyBackground";
//  Option 2:  import Background from "./backgrounds/HolosphereBackground";
//  Option 3:  import Background from "./backgrounds/HyperspaceBackground";
// ─────────────────────────────────────────────────────────────────────────────
import Background from "./backgrounds/HolosphereBackground";

gsap.registerPlugin(ScrollTrigger);

// ── Data ──────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: "Visa",
    role: "Incoming Software Engineer Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Austin, TX",
    points: [
      "Developing agentic AI workflows and LLM + RAG chatbot for querying the CDISI knowledge base",
    ],
  },
  {
    company: "DeepLearning.AI",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Present",
    location: "Mountain View, CA",
    points: [
      "Maintains AI Developer Conference site — Next.js + React + Supabase on Vercel",
      "Reduced page transfer from ~19 MB → ~3 MB via Chrome DevTools profiling, image compression, animation removal",
      "Built sponsor intake processing backend with Supabase edge functions",
    ],
  },
  {
    company: "AI Fund",
    role: "AI & Technical Program Management Intern",
    period: "Jul 2025 – Present",
    location: "Mountain View, CA",
    points: [
      "Built UltraLink — RAG candidate search over 200K profiles with LLM two-stage matching, reranking, SQL generation",
      "LinkedIn scraping pipeline via Apify + LLM enrichment (OpenAI structured outputs) into Supabase Postgres",
      "Designed & built Buildathon.ai website (React + Tailwind + Supabase) with internal HR applicant dashboard",
    ],
  },
  {
    company: "Planck AI",
    role: "Data Validation Intern",
    period: "Mar – Jul 2025",
    location: "Remote",
    points: [
      "PDF extraction pipelines using PDFPlumber, LayoutParser, and PaddleOCR for LLM workflows",
      "Annotated visualizations for debugging table extraction across multi-layout document formats",
    ],
  },
  {
    company: "Integem",
    role: "AI & AR Project Intern",
    period: "Jun – Sep 2024",
    location: "Cupertino, CA",
    points: [
      "Retrained MobileNetV2 classifier for robot cube pickup — ~10% accuracy gain via data augmentation",
      "Trained on NVIDIA Jetson Nano; built AR game components on Raspberry Pi robots",
    ],
  },
];

const projects = [
  {
    title: "UltraLink — RAG Candidate Search",
    description:
      "Natural-language search over 200K candidate profiles. LLM two-stage matching (label → rationale), reranking, SQL generation with query expansion, bookmarks and shareable links.",
    tech: ["Python", "OpenAI API", "Supabase", "PostgreSQL", "Apify"],
    link: null,
  },
  {
    title: "Buildathon.ai",
    description:
      "Full website for AI Fund's inaugural Buildathon partnered with DeepLearning.AI. Solo design + build — React + Tailwind + Supabase, plus internal HR applicant dashboard.",
    tech: ["React", "Tailwind CSS", "Supabase", "JavaScript"],
    link: "https://www.buildathon.ai",
  },
  {
    title: "Healthcare Scheduling Chatbot",
    description:
      "React + Supabase chatbot powered by OpenAI function calling. Matches patients to therapists and books appointments via Google Calendar API. Admin session dashboard included.",
    tech: ["React", "Supabase", "OpenAI API", "Google Calendar API"],
    link: null,
  },
  {
    title: "Playlist Continuation ML",
    description:
      "Spotify Million Playlist Challenge. Word2Vec title-based recommender + Autoencoder embeddings with CNN next-song prediction and FAISS nearest-neighbor retrieval.",
    tech: ["Python", "Gensim", "TensorFlow", "FAISS", "NLTK"],
    link: null,
  },
  {
    title: "AI Dev Conference Site",
    description:
      "Maintains ai-dev.deeplearning.ai. Refactored from Vercel v0 to Next.js + React. Cut asset size 19 MB → 3 MB with significantly improved mobile load times.",
    tech: ["Next.js", "React", "Supabase", "Google Sheets API"],
    link: "https://ai-dev.deeplearning.ai",
  },
  {
    title: "MediMinder",
    description:
      "Full-stack AI medication management for elderly users — tracking, smart reminders, and management tools designed for complex multi-medication schedules.",
    tech: ["React", "AI/ML", "Full-stack"],
    link: null,
  },
];

const skillGroups = [
  { label: "Languages", skills: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { label: "Web / Full-Stack", skills: ["React", "Next.js", "Tailwind CSS", "Supabase", "Vercel"] },
  { label: "AI / ML", skills: ["LLMs", "RAG", "Agentic AI", "OpenAI API", "LangChain", "Prompt Engineering"] },
  { label: "ML Frameworks", skills: ["TensorFlow", "PyTorch", "Word2Vec", "FAISS", "Computer Vision", "NLP"] },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

  useEffect(() => {
    if (!containerRef.current) return;
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (progressRef.current)
          gsap.to(progressRef.current, { scaleY: self.progress, duration: 0.1 });
      },
    });
    sectionsRef.current.forEach((el, idx) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onEnter: () => setActiveSection(idx),
        onEnterBack: () => setActiveSection(idx),
      });
    });
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={containerRef} className="relative bg-transparent">
      <Background />

      {/* Scroll progress — Imperial red */}
      <div className="fixed top-0 right-0 w-px h-screen bg-white/5 z-50">
        <div
          ref={progressRef}
          className="w-full origin-top"
          style={{ height: "100%", transform: "scaleY(0)", background: "rgba(59,158,255,0.7)" }}
        />
      </div>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.04]"
        style={{ background: "rgba(1,2,8,0.92)", backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo mark */}
          <button
            onClick={() => scrollTo("about")}
            className="font-display text-sm font-bold tracking-[0.2em] text-white/80 hover:text-white transition-colors"
          >
            <span style={{ color: "#3b9eff" }}>▲</span> VS
          </button>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-display text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
                style={{ color: activeSection === i ? "#3b9eff" : "rgba(255,255,255,0.35)" }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="mailto:vas001@ucsd.edu"
            className="hidden md:flex items-center gap-2 font-display text-[11px] tracking-[0.15em] font-medium transition-all duration-200 border rounded-sm px-4 py-1.5"
            style={{ color: "#3b9eff", borderColor: "rgba(59,158,255,0.35)" }}
          >
            <Mail className="w-3 h-3" />
            Contact
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="about"
        ref={(el) => { sectionsRef.current[0] = el; }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
      >
        {/* Decorative corner brackets */}
        <div className="absolute top-24 left-8 w-12 h-12 border-t border-l opacity-20" style={{ borderColor: "#3b9eff" }} />
        <div className="absolute top-24 right-8 w-12 h-12 border-t border-r opacity-20" style={{ borderColor: "#3b9eff" }} />
        <div className="absolute bottom-16 left-8 w-12 h-12 border-b border-l opacity-20" style={{ borderColor: "#3b9eff" }} />
        <div className="absolute bottom-16 right-8 w-12 h-12 border-b border-r opacity-20" style={{ borderColor: "#3b9eff" }} />

        <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8">

          {/* Classification badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-mono-sw inline-flex items-center gap-3 px-5 py-2 border text-[11px] tracking-[0.25em] uppercase"
            style={{ borderColor: "rgba(59,158,255,0.3)", color: "rgba(59,158,255,0.8)", background: "rgba(59,158,255,0.05)" }}
          >
            <span className="animate-imperial-pulse">◈</span>
            UCSD · Math &amp; CS · GPA 3.9 · Class of Dec 2026
            <span className="animate-imperial-pulse">◈</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-6xl md:text-[6.5rem] font-black tracking-tight leading-none crawl-text"
          >
            VARUN SHARMA
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="w-48 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #3b9eff, transparent)" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-mono-sw text-sm md:text-base tracking-[0.12em] max-w-lg leading-relaxed"
            style={{ color: "rgba(212,218,232,0.55)" }}
          >
            Software Engineer · AI Systems · Full-Stack
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            <a
              href="mailto:vas001@ucsd.edu"
              className="font-display flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.18em] font-semibold text-white transition-all duration-200"
              style={{ background: "#3b9eff", boxShadow: "0 0 20px rgba(59,158,255,0.4)" }}
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.18em] font-medium transition-all duration-200 border"
              style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.3)" }}
            >
              <Github className="w-3.5 h-3.5" />
              GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.18em] font-medium transition-all duration-200 border"
              style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.3)" }}
            >
              <Linkedin className="w-3.5 h-3.5" />
              LINKEDIN
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="font-mono-sw text-[11px] tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Milpitas, CA · U.S. Citizen
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollTo("experience")}
          className="absolute bottom-10 animate-float transition-colors"
          style={{ color: "rgba(59,158,255,0.4)" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </section>

      {/* ── EXPERIENCE ── */}
      <section
        id="experience"
        ref={(el) => { sectionsRef.current[1] = el; }}
        className="relative min-h-screen px-6 py-24"
      >
        <div className="max-w-4xl mx-auto">
          <ImperialHeader code="01" title="Experience" sub="Work History" />

          <div className="relative mt-14">
            <div className="absolute left-[7px] top-2 bottom-0 w-px" style={{ background: "rgba(59,158,255,0.15)" }} />
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative pl-8 hud-card"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-[0.65rem] w-3.5 h-3.5 rounded-sm rotate-45"
                    style={{ background: "#010208", border: "1px solid rgba(59,158,255,0.6)" }}
                  />
                  <div
                    className="p-5 border transition-all duration-300"
                    style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-sm font-bold tracking-[0.1em] text-white">
                          {exp.company}
                        </h3>
                        <p className="font-mono-sw text-xs tracking-[0.08em] mt-1" style={{ color: "#3b9eff" }}>
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono-sw text-[10px] tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                          {exp.period}
                        </p>
                        <p className="font-mono-sw text-[10px] tracking-[0.08em] mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 font-mono-sw text-xs" style={{ color: "rgba(212,218,232,0.45)" }}>
                          <span className="mt-1.5 text-[8px]" style={{ color: "rgba(59,158,255,0.6)" }}>▶</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        ref={(el) => { sectionsRef.current[2] = el; }}
        className="relative min-h-screen px-6 py-24"
      >
        <div className="max-w-4xl mx-auto">
          <ImperialHeader code="02" title="Projects" sub="Selected Work" />

          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group hud-card p-5 border transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-start justify-between mb-2.5 gap-2">
                  <h3 className="font-display text-xs font-bold tracking-[0.08em] text-white leading-snug">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 transition-colors"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    >
                      <ExternalLink className="w-3.5 h-3.5 group-hover:text-red-500 transition-colors" />
                    </a>
                  )}
                </div>
                <p className="font-mono-sw text-[11px] mb-3.5 leading-relaxed" style={{ color: "rgba(212,218,232,0.4)" }}>
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-sw text-[10px] px-2 py-0.5 tracking-[0.06em] border"
                      style={{ borderColor: "rgba(59,158,255,0.2)", background: "rgba(59,158,255,0.05)", color: "rgba(212,218,232,0.45)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        ref={(el) => { sectionsRef.current[3] = el; }}
        className="relative min-h-screen px-6 py-24"
      >
        <div className="max-w-4xl mx-auto">
          <ImperialHeader code="FILE-03" title="COMBAT SYSTEMS" sub="Technical Skills" />

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="hud-card p-5 border"
                style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)" }}
              >
                <h4 className="font-display text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(59,158,255,0.8)" }}>
                  // {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono-sw px-3 py-1.5 text-[11px] tracking-[0.06em] border transition-all duration-200 hover:border-red-800"
                      style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", color: "rgba(212,218,232,0.6)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        ref={(el) => { sectionsRef.current[4] = el; }}
        className="relative min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Corner decorations */}
            <div className="relative inline-block w-full">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l opacity-30" style={{ borderColor: "#3b9eff" }} />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t border-r opacity-30" style={{ borderColor: "#3b9eff" }} />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l opacity-30" style={{ borderColor: "#3b9eff" }} />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r opacity-30" style={{ borderColor: "#3b9eff" }} />

              <div className="py-8 space-y-6">
                <p className="font-mono-sw text-[10px] tracking-[0.3em] animate-imperial-pulse" style={{ color: "rgba(59,158,255,0.6)" }}>
                  ◈ OPEN CHANNEL ◈
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                  BEGIN
                  <br />
                  <span className="crawl-text">TRANSMISSION</span>
                </h2>
                <p className="font-mono-sw text-xs tracking-[0.1em] max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(212,218,232,0.35)" }}>
                  OPEN TO INTERNSHIP OPPORTUNITIES, RESEARCH COLLABORATIONS, AND INTERESTING PROJECTS
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="mailto:vas001@ucsd.edu"
                className="font-display flex items-center gap-2 px-7 py-3 text-[11px] tracking-[0.18em] font-semibold text-white transition-all duration-200 hover:scale-[1.03]"
                style={{ background: "#3b9eff", boxShadow: "0 0 24px rgba(59,158,255,0.4)" }}
              >
                <Mail className="w-3.5 h-3.5" />
                SEND TRANSMISSION
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display flex items-center gap-2 px-7 py-3 text-[11px] tracking-[0.18em] font-medium transition-all duration-200 border"
                style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)" }}
              >
                <Linkedin className="w-3.5 h-3.5" />
                LINKEDIN
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ── Imperial section header ────────────────────────────────────────────────────
function ImperialHeader({ code, title, sub }: { code: string; title: string; sub: string }) {
  return (
    <div className="space-y-2">
      <p className="font-mono-sw text-[10px] tracking-[0.3em]" style={{ color: "rgba(59,158,255,0.5)" }}>
        {code}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-black tracking-[0.05em] text-white">
        {title}
      </h2>
      <p className="font-mono-sw text-xs tracking-[0.15em]" style={{ color: "rgba(212,218,232,0.3)" }}>
        {sub}
      </p>
      {/* Underline */}
      <div className="flex items-center gap-3 pt-1">
        <div className="h-px w-12" style={{ background: "#3b9eff" }} />
        <div className="h-px flex-1 opacity-10" style={{ background: "#3b9eff" }} />
      </div>
    </div>
  );
}
