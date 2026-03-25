import { cn } from "@/lib/utils";

type Day = { date: string; count: number; level: number };

const levelClass: Record<number, string> = {
  0: "bg-gray-200 dark:bg-white/[0.05]",
  1: "bg-indigo-200 dark:bg-indigo-300/30",
  2: "bg-indigo-300 dark:bg-indigo-300/55",
  3: "bg-indigo-500 dark:bg-indigo-300/80",
  4: "bg-indigo-700 dark:bg-indigo-300",
};

async function fetchContributions(): Promise<{ days: Day[]; total: number }> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/varunaifund?y=last",
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return { days: [], total: 0 };
    const data = await res.json();
    return { days: data.contributions as Day[], total: data.total?.lastYear ?? 0 };
  } catch {
    return { days: [], total: 0 };
  }
}

export async function GitHubHeatmap() {
  const { days, total } = await fetchContributions();
  if (!days.length) return null;

  const firstDow = new Date(days[0].date).getDay();
  const padded: (Day | null)[] = [...Array(firstDow).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  const trimmed = weeks.slice(-53);

  const monthLabels: { label: string; col: number }[] = [];
  trimmed.forEach((week, wi) => {
    const firstReal = week.find(Boolean) as Day | undefined;
    if (!firstReal) return;
    const d = new Date(firstReal.date);
    if (d.getDate() <= 7) {
      monthLabels.push({
        label: d.toLocaleString("default", { month: "short" }),
        col: wi,
      });
    }
  });

  return (
    <div className="mt-5">
      <div className="relative rounded-2xl p-7 md:p-8 bg-white/[0.03] border border-white/[0.07] overflow-hidden">
          {/* header */}
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <span className="font-syne text-[10px] uppercase tracking-[0.2em] text-white/50 block mb-1">
                GitHub Activity
              </span>
              <a
                href="https://github.com/varunaifund"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-xs hover:text-white/65 transition-colors duration-200"
              >
                github.com/varunaifund →
              </a>
            </div>
            <span className="text-sm font-syne font-semibold text-white/60">
              {total.toLocaleString()}{" "}
              <span className="text-white/35 font-normal text-xs">contributions last year</span>
            </span>
          </div>

          {/* month labels + grid — rtl so most-recent weeks are visible first on mobile */}
          <div className="overflow-x-auto" style={{ direction: "rtl" }}>
            <div style={{ minWidth: trimmed.length * 14, direction: "ltr" }}>
              {/* month labels */}
              <div className="relative h-5 mb-1" style={{ width: trimmed.length * 14 }}>
                {monthLabels.map(({ label, col }) => (
                  <span
                    key={`${label}-${col}`}
                    className="absolute text-[10px] text-white/30 font-syne"
                    style={{ left: col * 14 }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* grid */}
              <div className="flex gap-[4px]">
                {trimmed.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[4px]">
                    {Array.from({ length: 7 }).map((_, di) => {
                      const day = week[di] ?? null;
                      return (
                        <div
                          key={di}
                          title={day ? `${day.date}: ${day.count}` : ""}
                          className={cn(
                            "h-[10px] w-[10px] rounded-[2px]",
                            day ? levelClass[day.level] : "bg-transparent"
                          )}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* legend */}
          <div className="flex items-center gap-1.5 mt-4 justify-end">
            <span className="text-[9px] text-white/25">Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                className={cn("h-[10px] w-[10px] rounded-[2px]", levelClass[l])}
              />
            ))}
            <span className="text-[9px] text-white/25">More</span>
          </div>
      </div>
    </div>
  );
}
