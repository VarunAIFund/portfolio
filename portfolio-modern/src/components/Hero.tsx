"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, ExternalLink } from "lucide-react";

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "RAG Systems Builder",
  "Math + CS @ UCSD",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((t) => (deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)));
      }
    }, deleting ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const nameWords = ["VARUN", "SHARMA"];

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(6,182,212,0.06),transparent)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-sm font-medium mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Incoming SWE Intern @ Visa · Class of Dec 2026
        </motion.div>

        {/* Animated Name — one word per row */}
        <div className="mb-2">
          {nameWords.map((word, wi) => (
            <div key={word} className="overflow-hidden">
              <div className="flex justify-center">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + wi * 0.15 + ci * 0.04,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[72px] sm:text-[100px] md:text-[128px] lg:text-[160px] font-black tracking-tighter leading-none"
                    style={{
                      background: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-mono text-violet-400">
            {role}
            <span className="animate-blink ml-0.5">|</span>
          </span>
        </motion.div>

        {/* Location + GPA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-zinc-500"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Milpitas, CA
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>GPA 3.9 / 4.0</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>Provost Honors 2023–2026</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#experience"
            className="group px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
          >
            View My Work
          </a>
          <a
            href="mailto:vas001@ucsd.edu"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
