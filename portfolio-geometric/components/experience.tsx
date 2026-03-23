"use client";

import { Building2, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

const experiences = [
  {
    company: "DeepLearning.AI",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Present",
    location: "Mountain View, CA",
    status: "current",
    statusLabel: "Current",
    statusClass: "bg-white/[0.06] text-white/60 border-white/[0.12]",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/65",
    dotClass: "bg-white/40",
    bullets: [
      "Refactored AI Dev Conference site from Vercel v0 to Next.js + React with Supabase edge functions and Google Sheets API",
      "Reduced total page transfer size from ~19 MB to ~3 MB by compressing images and removing heavy animations",
      "Built backend for sponsor intake processing; coordinates speakers, sponsors, and schedule changes",
    ],
  },
  {
    company: "AI Fund",
    role: "AI & Technical Program Management Intern",
    period: "Jul 2025 – Present",
    location: "Mountain View, CA",
    status: "current",
    statusLabel: "Current",
    statusClass: "bg-white/[0.06] text-white/60 border-white/[0.12]",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/65",
    dotClass: "bg-white/40",
    bullets: [
      "Built a natural-language candidate search system over 20,000 LinkedIn profiles, cutting LLM cost by about 55% and reducing ranked search latency from about 4 minutes to 1 minute.",
      "Built an Apify-based LinkedIn ingestion pipeline and used LLM structured outputs to convert raw profiles into a structured schema with summaries, seniority labels, implied skills, and industry tags.",
      "Designed and built the Buildathon website using React, JavaScript, Tailwind CSS, and Supabase; also built an internal HR dashboard for applicant review.",
    ],
  },
  {
    company: "Planck AI",
    role: "Data Validation Intern",
    period: "Mar 2025 – Jul 2025",
    location: "Remote",
    status: "past",
    statusLabel: "",
    statusClass: "",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/65",
    dotClass: "bg-white/40",
    bullets: [
      "Built PDF processing pipelines using PDFPlumber, LayoutParser, and PaddleOCR to extract structured data from multi-layout documents for LLM workflows.",
      "Generated annotated visualizations to debug parsing errors and verify extraction quality before downstream use in language-model pipelines.",
      "Handled difficult scanned PDFs and table-heavy documents by combining text extraction, layout analysis, and specialized table-detection approaches to improve robustness.",
    ],
  },
  {
    company: "Integem",
    role: "AI & AR Project Intern",
    period: "Jun 2024 – Sep 2024",
    location: "Cupertino, CA",
    status: "past",
    statusLabel: "",
    statusClass: "",
    gradientClass: "from-white/[0.04]",
    accentClass: "text-white/65",
    dotClass: "bg-white/40",
    bullets: [
      "Retrained and deployed a lightweight TensorFlow image classifier for a robot pickup workflow, improving cube recognition accuracy by about 10% under real-time camera input.",
      "Improved robustness to lighting changes, motion blur, and background clutter through targeted data augmentation, confidence thresholding, early stopping, and learning-rate scheduling.",
      "Trained models on NVIDIA Jetson Nano and built AR game components in Python for Raspberry Pi-based robots.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative py-16 md:py-24 px-4"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-rose-500/[0.03] blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0} className="mb-5">
          <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-syne">
            Experience
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Where I&apos;ve Worked
            </span>
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={0.15 + i * 0.1}>
              <div
                className={cn(
                  "group relative rounded-2xl p-6 md:p-8 overflow-hidden",
                  "bg-white/[0.02] border border-white/[0.06]",
                  "hover:bg-white/[0.035] hover:border-white/[0.10]",
                  "transition-all duration-400",
                )}
              >
                {/* Hover gradient */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${exp.gradientClass} to-transparent`,
                  )}
                />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="font-syne font-bold text-xl text-white">
                          {exp.company}
                        </span>
                        {exp.statusLabel && (
                          <span
                            className={cn(
                              "text-[10px] px-2.5 py-0.5 rounded-full border font-syne tracking-wide",
                              exp.statusClass,
                            )}
                          >
                            {exp.statusLabel}
                          </span>
                        )}
                      </div>
                      <p className={cn("text-sm font-medium", exp.accentClass)}>
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-white/55 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/45 text-xs">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                      >
                        <span
                          className={cn(
                            "mt-[9px] w-1 h-1 rounded-full flex-shrink-0 opacity-60",
                            exp.dotClass,
                          )}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
