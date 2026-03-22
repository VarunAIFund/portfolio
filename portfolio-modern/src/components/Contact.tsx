"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";

const socials = [
  {
    label: "Email",
    handle: "vas001@ucsd.edu",
    href: "mailto:vas001@ucsd.edu",
    icon: Mail,
    color: "#a78bfa",
  },
  {
    label: "LinkedIn",
    handle: "varunsharma8",
    href: "https://linkedin.com/in/varunsharma8",
    icon: Linkedin,
    color: "#38bdf8",
  },
  {
    label: "GitHub",
    handle: "varunsharma8",
    href: "https://github.com/varunsharma8",
    icon: Github,
    color: "#34d399",
  },
];

function StarField() {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vas001@ucsd.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <StarField />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(124,58,237,0.08),transparent)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">05. Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let&apos;s build something.</h2>
        </motion.div>

        {/* Main CTA card with animated conic border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-10"
        >
          {/* Animated conic gradient border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ padding: "1px" }}>
            <motion.div
              className="absolute inset-[-200%]"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent 0deg, #7c3aed 60deg, #06b6d4 120deg, #a78bfa 180deg, transparent 240deg)",
                opacity: 0.6,
              }}
            />
            <div className="absolute inset-[1px] rounded-2xl bg-[#050508]" />
          </div>

          {/* Card content */}
          <div className="relative glass rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-cyan-500/[0.03] pointer-events-none" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto"
            >
              I&apos;m always open to new opportunities, collaborations, and interesting conversations.
              Whether you have a role in mind or just want to connect — my inbox is open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                href="mailto:vas001@ucsd.edu"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/25"
              >
                <Mail className="w-4 h-4" />
                Say Hello
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </motion.a>

              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-600 text-zinc-400 hover:text-white text-sm font-mono transition-all duration-200 hover:bg-white/[0.03]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "vas001@ucsd.edu"}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-4"
        >
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.07 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="group glass rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 text-center"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: `${social.color}15` }}
                >
                  <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: social.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">{social.label}</p>
                  <p className="text-[10px] text-zinc-600 font-mono mt-0.5">{social.handle}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <p className="text-xs text-zinc-700 font-mono">© 2025 Varun Sharma</p>
          <p className="text-xs text-zinc-700 font-mono">Built with Next.js + Framer Motion</p>
        </motion.div>
      </div>
    </section>
  );
}
