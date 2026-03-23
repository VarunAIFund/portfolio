import { FadeIn } from "@/components/ui/fade-in";
import { GitHubHeatmap } from "@/components/ui/github-heatmap";

const skillGroups = [
  {
    category: "Languages",
    gradientClass: "from-white/[0.04]",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Bash", "HTML/CSS", "MATLAB", "R"],
  },
  {
    category: "AI / ML",
    gradientClass: "from-white/[0.04]",
    skills: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "OpenAI API",
      "LangChain",
      "TensorFlow",
      "PyTorch",
      "FAISS",
      "Word2Vec",
      "Computer Vision",
      "NLP",
      "Prompt Engineering",
    ],
  },
  {
    category: "Web / Full-Stack",
    gradientClass: "from-white/[0.04]",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Google APIs",
      "Edge Functions",
    ],
  },
  {
    category: "Concepts",
    gradientClass: "from-white/[0.04]",
    skills: [
      "Structured Outputs",
      "Transfer Learning",
      "Data Pipelines",
      "Two-Stage Ranking",
      "System Design",
      "CI/CD",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative py-16 md:py-24 px-4">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0} className="mb-5">
          <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-syne">
            Skills
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Tech Stack
            </span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={0.15 + i * 0.1}>
              <div className="relative rounded-2xl p-7 bg-white/[0.03] border border-white/[0.07] overflow-hidden h-full">
                <div
                  className={`absolute inset-0 opacity-25 bg-gradient-to-br ${group.gradientClass} to-transparent`}
                />
                <div className="relative z-10">
                  <h3 className="font-syne text-[10px] uppercase tracking-[0.2em] text-white/65 mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/[0.09] bg-white/[0.04] text-white/65"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <GitHubHeatmap />
      </div>
    </section>
  );
}
