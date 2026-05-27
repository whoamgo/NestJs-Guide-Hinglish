import { useState } from "react";
import type { InterviewQ } from "../data/interview";
import { courses } from "../data/index";

interface Props {
  questions: InterviewQ[];
  courseId: string;
}

const levelConfig: Record<string, { color: string; bg: string }> = {
  Beginner: { color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-100 dark:bg-emerald-900/40" },
  Intermediate: { color: "text-blue-700 dark:text-blue-300", bg: "bg-blue-100 dark:bg-blue-900/40" },
  Advanced: { color: "text-purple-700 dark:text-purple-300", bg: "bg-purple-100 dark:bg-purple-900/40" },
};

function renderAnswer(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { elements.push(<div key={i} className="h-1.5" />); i++; continue; }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-1.5 my-2">
          {items.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span>{parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold text-foreground">{p}</strong> : <span key={k}>{p}</span>)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    }
    const parts = line.split(/\*\*(.*?)\*\*/g);
    elements.push(
      <p key={i} className="text-sm leading-relaxed">
        {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold text-foreground">{p}</strong> : <span key={k}>{p}</span>)}
      </p>
    );
    i++;
  }
  return elements;
}

function QuestionCard({ q, num }: { q: InterviewQ; num: number }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const level = q.level ?? "Beginner";
  const cfg = levelConfig[level] ?? levelConfig["Beginner"];

  return (
    <div className={`bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-primary/50 shadow-md" : "border-border hover:border-primary/30 hover:shadow-sm"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-4 p-5 text-left">
        <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${cfg.bg} ${cfg.color}`}>
          {num}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>{q.level}</span>
            {q.tags?.map((tag) => (
              <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">#{tag}</span>
            ))}
          </div>
          <p className="font-semibold text-foreground text-sm sm:text-base leading-snug">{q.question}</p>
        </div>
        <span className={`text-muted-foreground shrink-0 mt-1.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-border/50">
          <div className="pt-4 space-y-1.5 text-muted-foreground">{renderAnswer(q.answer)}</div>
          {q.code && (
            <div className="mt-4 rounded-xl overflow-hidden border border-border shadow-sm">
              <div className="flex items-center justify-between bg-[#1e2030] px-4 py-2.5 border-b border-white/10">
                <span className="text-xs text-slate-400 font-mono">typescript</span>
                <button onClick={() => { navigator.clipboard.writeText(q.code!); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                  className="text-xs text-slate-400 hover:text-white transition-colors">
                  {copied ? <span className="text-emerald-400">✓ Copied!</span> : "Copy"}
                </button>
              </div>
              <pre className="bg-[#0d1117] text-[#c9d1d9] text-xs sm:text-sm p-4 overflow-x-auto font-mono leading-relaxed"><code>{q.code}</code></pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function InterviewView({ questions, courseId }: Props) {
  const [filter, setFilter] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All");
  const [tagFilter, setTagFilter] = useState("all");
  const courseInfo = courses.find((c) => c.id === courseId);

  const allTags = Array.from(new Set(questions.flatMap((q) => q.tags || [])));

  const filtered = questions.filter((q) => {
    const levelOk = filter === "All" || q.level === filter;
    const tagOk = tagFilter === "all" || (q.tags || []).includes(tagFilter);
    return levelOk && tagOk;
  });

  const counts = {
    All: questions.length,
    Beginner: questions.filter((q) => q.level === "Beginner").length,
    Intermediate: questions.filter((q) => q.level === "Intermediate").length,
    Advanced: questions.filter((q) => q.level === "Advanced").length,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          {courseInfo && (
            <button
              onClick={() => {}}
              className={`text-sm font-medium ${courseInfo.color} hover:underline`}
            >
              {courseInfo.emoji} {courseInfo.title}
            </button>
          )}
          <span className="text-border">/</span>
          <span className="text-sm text-muted-foreground">Interview Q&A</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Interview Q&A
              {courseInfo && <span className={` ${courseInfo.color}`}> — {courseInfo.title}</span>}
            </h1>
            <p className="text-muted-foreground text-sm mt-0.5">Hinglish mein — Code examples ke saath</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          {(["Beginner", "Intermediate", "Advanced"] as const).map((level) => (
            <div key={level} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${levelConfig[level].bg} ${levelConfig[level].color}`}>
              <span>{counts[level]} questions • {level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tip */}
      <div className={`border ${courseInfo?.borderColor || "border-primary/20"} bg-gradient-to-r ${courseInfo?.bgGradient || "from-primary/5 to-accent/5"} rounded-xl p-4 mb-6 flex gap-3`}>
        <span className="text-xl shrink-0">🎓</span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Pro tip:</strong> Sirf answer yaad mat karo — concept samjho. Interviewer follow-up pooch sakta hai. Code examples khud likho practice ke liye.
        </p>
      </div>

      {/* Level filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((level) => (
          <button key={level} onClick={() => setFilter(level)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border
              ${filter === level ? "bg-primary text-primary-foreground border-primary shadow-md" : "bg-card text-foreground border-border hover:border-primary/50"}`}>
            {level} <span className="opacity-70 text-xs">({counts[level]})</span>
          </button>
        ))}
      </div>

      {/* Tag filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => setTagFilter("all")}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${tagFilter === "all" ? "bg-muted text-foreground border-border" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            #all
          </button>
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setTagFilter(tagFilter === tag ? "all" : tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${tagFilter === tag ? "bg-primary/10 text-primary border-primary/30" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              #{tag}
            </button>
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground mb-4">{filtered.length} questions dikh rahe hain</p>

      {/* Questions */}
      <div className="space-y-3">
        {filtered.map((q, i) => <QuestionCard key={q.id} q={q} num={i + 1} />)}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          <div className="text-4xl mb-3">😕</div>
          <p>Is filter ke saath koi question nahi mila.</p>
          <button onClick={() => { setFilter("All"); setTagFilter("all"); }} className="mt-3 text-primary text-sm hover:underline">
            Filters clear karo
          </button>
        </div>
      )}

      {/* CTA */}
      <div className={`mt-10 p-6 bg-gradient-to-br ${courseInfo?.bgGradient || "from-primary/10 to-accent/10"} border ${courseInfo?.borderColor || "border-primary/20"} rounded-2xl text-center`}>
        <div className="text-3xl mb-2">🚀</div>
        <p className="font-bold text-foreground text-lg mb-1">Ready for Interview?</p>
        <p className="text-sm text-muted-foreground">Practice makes perfect — code karo, sirf padho mat!</p>
      </div>
    </div>
  );
}
