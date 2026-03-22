"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-4">
      {/* Gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-rose-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-syne">
              Contact
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-syne text-4xl md:text-6xl font-bold mb-5 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Let&apos;s Build{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Something
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/65 text-lg font-light leading-relaxed max-w-lg mb-12"
          >
            I&apos;m always open to discussing new opportunities, collaborations,
            or just chatting about AI and tech.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="mailto:hello@varunsharma.dev"
              className={cn(
                "group flex items-center gap-3 px-6 py-4 rounded-full",
                "bg-white/[0.05] border border-white/[0.10]",
                "hover:bg-white/[0.09] hover:border-white/[0.18]",
                "transition-all duration-300"
              )}
            >
              <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span className="text-sm text-white/80">hello@varunsharma.dev</span>
              <ArrowRight className="w-4 h-4 ml-auto text-white/25 group-hover:translate-x-1 group-hover:text-white/50 transition-all duration-200" />
            </a>

            <div
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-full",
                "bg-white/[0.02] border border-white/[0.06]",
                "text-white/55 text-sm"
              )}
            >
              <MapPin className="w-4 h-4 text-rose-400/50 flex-shrink-0" />
              Milpitas, CA · U.S. Citizen
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="font-syne font-bold text-white/40 text-sm tracking-wide">
                Varun Sharma
              </span>
              <span className="text-white/25">·</span>
              <span className="text-white/35 text-xs">hello@varunsharma.dev</span>
            </div>
            <span className="text-white/35 text-xs text-center">
              UCSD Mathematics & Computer Science · Expected Dec 2026
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
