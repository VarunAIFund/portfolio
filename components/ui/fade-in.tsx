"use client";

import { useRef, useLayoutEffect, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
}

/**
 * SSR-safe fade-in component. Avoids the Framer Motion whileInView flicker
 * caused by hydration setting opacity:0 before IntersectionObserver fires.
 *
 * useLayoutEffect runs synchronously before the browser paints:
 * - If already in viewport on mount → stay visible, no animation
 * - If below fold → instantly set opacity:0 (off-screen, user can't see it),
 *   then CSS-transition fade in when it scrolls into view
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  margin = "-60px 0px",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "initial" = SSR / before layout effect → keep opacity:1 to match server HTML
  const [state, setState] = useState<"initial" | "hidden" | "visible">("initial");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyInView) {
      setState("visible");
      return;
    }

    // Element is off-screen — hide it and watch for it entering view
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: state === "hidden" ? 0 : 1,
        transition:
          state === "visible"
            ? `opacity 0.7s cubic-bezier(0.25, 0.4, 0.25, 1) ${delay}s`
            : "none",
      }}
    >
      {children}
    </div>
  );
}
