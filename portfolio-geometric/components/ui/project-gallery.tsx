"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ProjectGallery({
  images,
  title,
  activeIndex,
  onClose,
  onNavigate,
}: ProjectGalleryProps) {
  const prev = useCallback(() => {
    onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }, [activeIndex, images.length, onNavigate]);

  const next = useCallback(() => {
    onNavigate(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Header */}
        <div className="relative z-10 w-full flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <div>
            <p className="font-syne font-semibold text-white/90 text-sm">{title}</p>
            <p className="text-white/40 text-xs mt-0.5">{activeIndex + 1} / {images.length}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image */}
        <div
          className="relative z-10 flex items-center justify-center w-full flex-1 px-16"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-4 p-2.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-white/60 hover:text-white hover:bg-white/[0.12] transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${title} screenshot ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-4 p-2.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-white/60 hover:text-white hover:bg-white/[0.12] transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          className="relative z-10 flex items-center gap-2 px-6 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
                i === activeIndex
                  ? "ring-2 ring-white/50 opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="w-16 h-10 object-cover object-top"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
