"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";

const links = [
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#experience", label: "Experience", sectionId: "experience" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#skills", label: "Skills", sectionId: "skills" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

const socialLinks = [
  { href: "https://github.com/varunaifund", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/varun-sharma-891286229/", label: "LinkedIn", icon: Linkedin },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "experience", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -85% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-6 md:px-12 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="font-syne font-bold text-lg tracking-tight text-white w-24"
      >
        VS
      </a>

      {/* Desktop links — centered */}
      <div className="hidden md:flex items-center justify-center gap-8 flex-1">
        {links.map((link) => {
          const isActive = activeSection === link.sectionId;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isActive ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Desktop right side */}
      <div className="hidden md:flex items-center justify-end gap-3 w-36">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-full text-white/50 hover:text-white transition-colors duration-200"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
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
                className="text-sm text-white/65 hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/55 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
