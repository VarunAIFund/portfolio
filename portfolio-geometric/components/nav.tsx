"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="font-syne font-bold text-lg tracking-tight text-white"
      >
        VS
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-white/40 hover:text-white transition-colors duration-200 tracking-wide"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:hello@varunsharma.dev"
        className="hidden md:inline-flex text-sm px-4 py-2 rounded-full border border-white/[0.10] text-white/60 hover:text-white hover:border-white/25 transition-all duration-200"
      >
        hello@varunsharma.dev
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-md border-b border-white/[0.06] md:hidden"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@varunsharma.dev"
              className="text-sm text-indigo-400/70 hover:text-indigo-400 transition-colors duration-200 py-1"
            >
              hello@varunsharma.dev
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
