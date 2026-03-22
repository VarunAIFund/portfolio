import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "from-indigo-500/[0.15]",
    "from-rose-500/[0.15]",
    "from-violet-500/[0.15]",
    "from-amber-500/[0.15]",
    "from-cyan-500/[0.15]",
    "from-indigo-500/[0.12]",
    "from-rose-500/[0.12]",
    "from-violet-500/[0.12]",
    "border-indigo-500/20",
    "border-rose-500/20",
    "border-violet-500/20",
    "border-amber-500/20",
    "border-cyan-500/20",
    "text-indigo-400",
    "text-rose-400",
    "text-violet-400",
    "text-amber-400",
    "text-cyan-400",
    "bg-indigo-400",
    "bg-rose-400",
    "bg-violet-400",
    "bg-amber-400",
    "bg-cyan-400",
    "border-indigo-500/30",
    "border-rose-500/30",
    "border-violet-500/30",
    "border-cyan-500/30",
    "text-indigo-300/70",
    "text-rose-300/70",
    "text-violet-300/70",
    "text-cyan-300/70",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
