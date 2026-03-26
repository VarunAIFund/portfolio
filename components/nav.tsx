"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { GithubIcon, Linkedin, FileDown, Sun, Moon } from "lucide-react";

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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      // When scrolled to the bottom, force-activate Contact since the section
      // never reaches the top threshold of the IntersectionObserver
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (atBottom) setActiveSection("contact");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      style={
        scrolled
          ? { background: "var(--nav-bg)" }
          : {}
      }
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-6 md:px-12 py-5 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md border-b border-white/[0.06]"
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
              className={`relative text-sm tracking-wide transition-colors duration-200 pb-1 ${
                isActive ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : 0 }}
              />
            </a>
          );
        })}
      </div>

      {/* Desktop right side */}
      <div className="hidden md:flex items-center justify-end gap-3 w-44">
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
        <a
          href="/resume.pdf"
          download
          aria-label="Download resume"
          className="p-2 rounded-full text-white/50 hover:text-white transition-colors duration-200"
        >
          <FileDown className="w-4 h-4" />
        </a>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle light/dark mode"
            className="relative p-2 rounded-full text-white/50 hover:text-white transition-colors duration-200"
          >
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.div>
          </button>
        )}
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
          style={{ background: "var(--nav-bg)" }}
          className="absolute top-full left-0 right-0 backdrop-blur-md border-b border-white/[0.06] md:hidden"
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
              <a
                href="/resume.pdf"
                download
                aria-label="Download resume"
                className="text-white/55 hover:text-white transition-colors duration-200"
              >
                <FileDown className="w-4 h-4" />
              </a>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle light/dark mode"
                  className="text-white/55 hover:text-white transition-colors duration-200"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
