import { chapters } from "../data/chapters";
import type { ActiveView } from "../App";
import { useApp } from "../App";

interface Props {
  onStart: () => void;
  onNavigate: (view: ActiveView) => void;
}

export default function Home({ onStart, onNavigate }: Props) {
  const { completed } = useApp();
  const progress = Math.round((completed.size / chapters.length) * 100);

  const categories = ["Basics", "Intermediate", "Advanced"];
  const grouped = categories.map((cat) => ({
    cat,
    items: chapters.filter((c) => c.category === cat),
    color:
      cat === "Basics"
        ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30"
        : cat === "Intermediate"
        ? "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30"
        : "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30",
    badge:
      cat === "Basics"
        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300"
        : cat === "Intermediate"
        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300"
        : "bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300",
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* Hero */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
          🦅 Ultimate NestJS Guide — Hinglish mein
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
          NestJS <span className="text-primary">Step by Step</span>
          <br />
          <span className="text-2xl sm:text-3xl font-bold text-muted-foreground mt-1 block">Beginner se Production-Ready</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Modules, Controllers, Services, JWT Auth, TypeORM, Guards, Testing, Deployment — sab kuch Hinglish mein deep dive. Interview prep bhi!
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={onStart}
            className="bg-primary text-primary-foreground px-7 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            Padhna Shuru Karo →
          </button>
          <button
            onClick={() => onNavigate({ type: "interview" })}
            className="bg-accent text-accent-foreground px-7 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-accent/20"
          >
            🎯 Interview Prep
          </button>
        </div>
      </div>

      {/* Progress card (if started) */}
      {completed.size > 0 && (
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-bold text-foreground">📈 Tumhara Progress</div>
              <div className="text-sm text-muted-foreground mt-0.5">{completed.size} chapters complete, {chapters.length - completed.size} baaki</div>
            </div>
            <div className="text-3xl font-extrabold text-primary">{progress}%</div>
          </div>
          <div className="h-3 bg-background/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress < 100 && (
            <button
              onClick={() => {
                const notDone = chapters.find((c) => !completed.has(c.id));
                if (notDone) onNavigate({ type: "chapter", id: notDone.id });
              }}
              className="mt-3 text-sm font-medium text-primary hover:underline"
            >
              Agle chapter se continue karo →
            </button>
          )}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Chapters", value: `${chapters.length}`, emoji: "📚" },
          { label: "Interview Questions", value: "30", emoji: "🎯" },
          { label: "Language", value: "Hinglish", emoji: "🗣️" },
          { label: "MCQs included", value: "Yes", emoji: "✅" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors">
            <div className="text-3xl mb-1.5">{s.emoji}</div>
            <div className="text-xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* What you'll learn */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📋</span> Kya seekhoge is guide mein?
        </h2>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            "NestJS architecture aur core concepts",
            "Modules, Controllers, Services deeply",
            "DTO validation class-validator ke saath",
            "JWT Authentication + Guards + Roles",
            "TypeORM — Entities, Relations, Migrations",
            "Caching, Rate Limiting, Compression",
            "Middleware, Pipes, Interceptors, Filters",
            "WebSockets — real-time features",
            "Microservices architecture basics",
            "Testing — Unit + Integration + E2E",
            "Docker + Deployment best practices",
            "30 interview questions with answers",
            "MCQs har chapter ke baad",
            "Cheat sheets aur revision notes",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5 shrink-0 font-bold">✓</span>
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters by category */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-foreground">📚 Saare Chapters</h2>
        {grouped.map(({ cat, items, color, badge }) => (
          <div key={cat}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge}`}>{cat}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((ch) => {
                const idx = chapters.findIndex((c) => c.id === ch.id);
                const done = completed.has(ch.id);
                return (
                  <button
                    key={ch.id}
                    onClick={() => onNavigate({ type: "chapter", id: ch.id })}
                    className={`border rounded-xl p-4 text-left hover:shadow-md transition-all group relative overflow-hidden ${color} hover:border-primary/50`}
                  >
                    {done && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 bg-background/70 text-foreground rounded-md flex items-center justify-center text-xs font-bold border border-border">
                        {idx + 1}
                      </span>
                      <span className="text-xl">{ch.emoji}</span>
                    </div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {ch.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{ch.description}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">{ch.sections.length} sections</span>
                      {ch.mcqs && <span className="text-xs text-muted-foreground">• {ch.mcqs.length} MCQs</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Interview card */}
        <button
          onClick={() => onNavigate({ type: "interview" })}
          className="w-full border border-accent/30 bg-accent/5 rounded-xl p-5 text-left hover:border-accent hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-2xl">🎯</div>
            <div>
              <div className="font-bold text-foreground group-hover:text-accent transition-colors">Interview Questions & Answers</div>
              <div className="text-sm text-muted-foreground mt-0.5">30 questions — Beginner se Advanced tak, Hinglish mein</div>
            </div>
            <span className="ml-auto text-accent text-xl">→</span>
          </div>
        </button>
      </div>

      {/* Study tip */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 flex gap-3">
        <span className="text-2xl shrink-0">💡</span>
        <div>
          <div className="font-semibold text-foreground mb-1">Kaise padhe ye guide?</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Chapter 1 se start karo, order mein padho. Har chapter mein code examples copy karke khud try karo. MCQs se knowledge check karo. Cheat sheet aur revision notes jaldi review ke liye save karo. Last mein Interview Q&A se preparation karo.
          </p>
        </div>
      </div>
    </div>
  );
}
