"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Sparkles } from "lucide-react";

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
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const nameWords = ["VARUN", "SHARMA"];

const stats = [
  { value: "200K+", label: "profiles searched" },
  { value: "3.9", label: "GPA" },
  { value: "5+", label: "companies" },
  { value: "Dec '26", label: "graduation" },
];

export default function Hero() {
  const role = useTypewriter(roles);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 noise"
    >
      {/* Animated aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main aurora mesh */}
        <div
          className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] opacity-60"
          style={{
            background: `radial-gradient(ellipse 70% 60% at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(124,58,237,0.18) 0%, transparent 60%),
                         radial-gradient(ellipse 50% 50% at 80% 20%, rgba(6,182,212,0.1) 0%, transparent 55%),
                         radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139,92,246,0.08) 0%, transparent 50%)`,
            transition: "background 0.15s ease-out",
          }}
        />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-100" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-violet-600/[0.07] blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-cyan-500/[0.05] blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">

        {/* Status badge with shimmer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10 relative overflow-hidden"
          style={{
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s linear infinite",
            }}
          />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="relative text-emerald-400 text-sm font-medium">
            Incoming SWE Intern @ Visa · Class of Dec 2026
          </span>
        </motion.div>

        {/* Name — character-by-character reveal */}
        <div className="mb-4">
          {nameWords.map((word, wi) => (
            <div key={word} className="overflow-hidden">
              <div className="flex justify-center">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + wi * 0.12 + ci * 0.04,
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[68px] sm:text-[96px] md:text-[124px] lg:text-[156px] font-black tracking-tighter leading-[0.9]"
                    style={{
                      background: "linear-gradient(160deg, #ffffff 0%, #d4d4d8 50%, #a1a1aa 100%)",
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
          transition={{ delay: 0.95 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-mono text-violet-400 tracking-wide">
            {role}
            <span className="animate-blink ml-0.5 text-violet-500">|</span>
          </span>
        </motion.div>

        {/* Location + meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12 text-sm text-zinc-500"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Milpitas, CA
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>UCSD Math & CS</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>Provost Honors 2023–2026</span>
        </motion.div>

        {/* Stats chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/[0.07] hover:border-violet-500/30 transition-colors duration-300"
            >
              <span className="text-white font-bold text-sm">{stat.value}</span>
              <span className="text-zinc-600 text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 opacity-80" />
            View My Work
          </motion.a>
          <motion.a
            href="mailto:vas001@ucsd.edu"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:bg-white/[0.03]"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 cursor-pointer"
        onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
