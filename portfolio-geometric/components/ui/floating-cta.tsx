"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const isLight = mounted ? resolvedTheme === "light" : false;
  const show = visible && !contactVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md text-sm transition-colors duration-200"
          style={{
            background: isLight ? "rgba(240,237,230,0.94)" : "rgba(255,255,255,0.07)",
            border: isLight ? "1px solid rgba(13,12,10,0.22)" : "1px solid rgba(255,255,255,0.13)",
            color: isLight ? "rgba(13,12,10,0.88)" : "rgba(255,255,255,0.80)",
            boxShadow: isLight ? "0 4px 20px rgba(13,12,10,0.10)" : "none",
          }}
        >
          Get in touch
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
