"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "experience", "projects", "skills", "contact"];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current;
    if (y < 80) {
      setVisible(true);
    } else if (diff > 6) {
      setVisible(false);
      setMobileOpen(false);
    } else if (diff < -6) {
      setVisible(true);
    }
    lastY.current = y;
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer select-none"
            whileHover={{ scale: 1.04 }}
            onClick={() => handleLinkClick("#hero")}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">VS</span>
            </div>
            <span className="font-semibold text-sm text-white/80 hidden sm:block">
              Varun Sharma
            </span>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm rounded-xl transition-colors duration-200 font-medium",
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.07] rounded-xl border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:vas001@ucsd.edu"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Hire Me
            </a>
            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-zinc-400 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-px bg-zinc-400"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-zinc-400 origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-2"
            >
              <div className="glass-strong rounded-2xl p-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="h-px bg-white/[0.06] my-1" />
                <a
                  href="mailto:vas001@ucsd.edu"
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-center bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
