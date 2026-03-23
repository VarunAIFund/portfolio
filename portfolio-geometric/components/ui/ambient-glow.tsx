"use client";

import { useEffect, useState } from "react";

const sections = ["hero", "about", "experience", "projects", "skills", "contact"];

// Each section gets its own colored glow — opacity crossfades via CSS transition
const glows: Record<string, string> = {
  hero:       "radial-gradient(ellipse 90% 70% at 50% -5%,  rgba(99,102,241,0.18), transparent 65%)",
  about:      "radial-gradient(ellipse 70% 60% at 15% 50%,  rgba(99,102,241,0.12), transparent 65%)",
  experience: "radial-gradient(ellipse 80% 65% at 85% 35%,  rgba(20,184,166,0.07),  transparent 65%)",
  projects:   "radial-gradient(ellipse 80% 65% at 25% 60%,  rgba(139,92,246,0.14), transparent 65%)",
  skills:     "radial-gradient(ellipse 80% 65% at 65% 45%,  rgba(6,182,212,0.12),  transparent 65%)",
  contact:    "radial-gradient(ellipse 70% 60% at 50% 95%,  rgba(99,102,241,0.14), transparent 65%)",
};

export function AmbientGlow() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -9 }}>
      {sections.map((id) => (
        <div
          key={id}
          className="absolute inset-0"
          style={{
            background: glows[id],
            opacity: active === id ? 1 : 0,
            transition: "opacity 1.4s ease",
          }}
        />
      ))}
    </div>
  );
}
