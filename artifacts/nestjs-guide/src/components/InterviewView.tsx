import { useState } from "react";
import type { InterviewQ } from "../data/interview";

interface Props {
  questions: InterviewQ[];
}

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

function renderAnswer(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      elements.push(<div key={i} className="h-1.5" />);
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-1 my-2">
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      <span key={k}>{part}</span>
                    )
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="text-sm leading-relaxed">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="font-semibold text-foreground">
                {part}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

function QuestionCard({ q }: { q: InterviewQ }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-card border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-primary shadow-md" : "border-border hover:border-primary/40"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-5 text-left"
      >
        <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
          {q.id}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[q.level]}`}>
              {q.level}
            </span>
          </div>
          <p className="font-semibold text-foreground text-sm sm:text-base leading-snug">
            {q.question}
          </p>
        </div>
        <span className={`text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-border/60">
          <div className="pt-4 space-y-2 text-muted-foreground">
            {renderAnswer(q.answer)}
          </div>

          {q.code && (
            <div className="mt-4 rounded-xl overflow-hidden border border-border">
              <div className="flex items-center justify-between bg-muted/70 px-4 py-2 border-b border-border">
                <span className="text-xs text-muted-foreground font-mono">typescript</span>
                <button
                  onClick={() => handleCopy(q.code!)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <span className="text-primary">✓ Copied!</span>
                  ) : (
                    "Copy"
                  )}
                </button>
              </div>
              <pre className="bg-[#0f1117] text-[#e2e8f0] text-xs sm:text-sm p-4 overflow-x-auto font-mono leading-relaxed">
                <code>{q.code}</code>
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function InterviewView({ questions }: Props) {
  const [filter, setFilter] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All");

  const filtered = filter === "All" ? questions : questions.filter((q) => q.level === filter);
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center gap-3 mb-3">
          <span>🎯</span>
          Interview Q&A
        </h1>
        <p className="text-muted-foreground">
          NestJS ke{" "}
          <strong className="text-foreground">{questions.length} common interview questions</strong>{" "}
          — Hinglish mein jawab ke saath. Kisi bhi question par click karo jawab dekhne ke liye.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border
              ${filter === level
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:border-primary/50"
              }`}
          >
            {level}
            <span className="ml-1.5 text-xs opacity-70">({counts[level]})</span>
          </button>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 flex gap-3">
        <span className="text-xl shrink-0">🎓</span>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Interview tip:</strong> Sirf answer yaad mat karo — concept samjho. Interviewer follow-up questions pooch sakta hai. Har question ko apne shabdon mein explain karne ki practice karo.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {filtered.map((q) => (
          <QuestionCard key={q.id} q={q} />
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-10 p-5 bg-accent/10 border border-accent/20 rounded-xl text-center">
        <div className="text-2xl mb-2">🚀</div>
        <p className="font-semibold text-foreground mb-1">Aur practice chahiye?</p>
        <p className="text-sm text-muted-foreground">
          Chapters wapas padho aur khud se ek small project banao — Users CRUD API. Yahi sabse best practice hai!
        </p>
      </div>
    </div>
  );
}
