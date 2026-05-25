import { chapters } from "../data/chapters";
import type { ActiveView } from "../App";

interface Props {
  onStart: () => void;
  onNavigate: (view: ActiveView) => void;
}

const stats = [
  { label: "Chapters", value: `${chapters.length}`, emoji: "📚" },
  { label: "Interview Questions", value: "16", emoji: "🎯" },
  { label: "Language", value: "Hinglish", emoji: "🗣️" },
  { label: "Level", value: "Beginner", emoji: "🌱" },
];

export default function Home({ onStart, onNavigate }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
          🦅 NestJS Hinglish Guide
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
          NestJS <span className="text-primary">Step by Step</span>
          <br />
          <span className="text-2xl sm:text-3xl font-bold text-muted-foreground">Bilkul Beginner ke liye</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          NestJS ko aasaan Hinglish mein seekho — modules, controllers, services, database, authentication, testing aur interview questions sab ek jagah.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={onStart}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Padhna Shuru Karo →
          </button>
          <button
            onClick={() => onNavigate({ type: "interview" })}
            className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            🎯 Interview Prep
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-3xl mb-1">{s.emoji}</div>
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* What you'll learn */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">📋 Kya seekhoge is guide mein?</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "NestJS kya hai aur kaise kaam karta hai",
            "Modules, Controllers, Services ka concept",
            "DTO banao aur data validate karo",
            "Database connect karo TypeORM ke saath",
            "JWT Authentication aur Guards",
            "Middleware, Pipes, aur Interceptors",
            "Environment variables aur Config",
            "Unit Testing aur E2E Testing",
            "16 common interview questions",
            "Real-world code examples Hinglish mein",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary mt-0.5 shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">📚 Saare Chapters</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => onNavigate({ type: "chapter", id: ch.id })}
              className="bg-card border border-border rounded-xl p-4 text-left hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <span className="text-2xl">{ch.emoji}</span>
              </div>
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                {ch.title}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {ch.sections.length} sections
              </div>
            </button>
          ))}
          {/* Interview card */}
          <button
            onClick={() => onNavigate({ type: "interview" })}
            className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-left hover:border-accent hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 bg-accent/20 text-accent-foreground rounded-lg flex items-center justify-center text-xs font-bold">
                Q
              </span>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
              Interview Questions
            </div>
            <div className="text-xs text-muted-foreground mt-1">16 questions + answers</div>
          </button>
        </div>
      </div>

      {/* Tip box */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-3">
        <span className="text-2xl shrink-0">💡</span>
        <div>
          <div className="font-semibold text-foreground mb-1">Kaise padhe ye guide?</div>
          <p className="text-sm text-muted-foreground">
            Chapter 1 se start karo aur order mein padho. Har chapter mein code examples hain — unhe copy karke khud try karo. Last mein Interview Q&A padho aur sabko revise karo.
          </p>
        </div>
      </div>
    </div>
  );
}
