"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    let raf: number;
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
    };

    const tick = () => {
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isLight = resolvedTheme === "light";

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[160px] w-[160px] rounded-full"
      style={{
        background: isLight
          ? "radial-gradient(circle, rgba(13,12,10,0.04) 0%, rgba(13,12,10,0.01) 50%, transparent 75%)"
          : "radial-gradient(circle, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 50%, transparent 75%)",
        willChange: "transform",
      }}
    />
  );
}
