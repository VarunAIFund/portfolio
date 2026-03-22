"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "Email",
    value: "vas001@ucsd.edu",
    href: "mailto:vas001@ucsd.edu",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/varun-sharma",
    href: "https://linkedin.com/in/varun-sharma",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/varunsharma",
    href: "https://github.com/varunsharma",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(124,58,237,0.1),transparent)]" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3 block">
            05. Contact
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Let's Talk
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            I'm open to summer 2027 internships, full-time roles, and interesting
            projects. Drop me a line — I respond fast.
          </p>

          <a
            href="mailto:vas001@ucsd.edu"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 mb-16"
          >
            Say Hello
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-2.5 text-zinc-500 hover:text-violet-400 transition-colors duration-200"
              >
                <s.icon className="w-4 h-4" />
                <span className="text-sm font-mono">{s.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-24 text-center"
      >
        <p className="text-xs text-zinc-700 font-mono">
          Designed & built by Varun Sharma · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
