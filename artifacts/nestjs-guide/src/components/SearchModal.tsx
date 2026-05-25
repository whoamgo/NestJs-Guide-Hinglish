import { useState, useEffect, useRef } from "react";
import { chapters } from "../data/chapters";
import { interviewQuestions } from "../data/interview";
import type { ActiveView } from "../App";

interface Props {
  onClose: () => void;
  onNavigate: (view: ActiveView) => void;
}

interface Result {
  type: "chapter" | "section" | "interview";
  title: string;
  subtitle: string;
  emoji: string;
  view: ActiveView;
}

export default function SearchModal({ onClose, onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results: Result[] = (() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const res: Result[] = [];

    for (const ch of chapters) {
      if (ch.title.toLowerCase().includes(q) || ch.description.toLowerCase().includes(q)) {
        res.push({
          type: "chapter",
          title: ch.title,
          subtitle: ch.description,
          emoji: ch.emoji,
          view: { type: "chapter", id: ch.id },
        });
      }
      for (const s of ch.sections) {
        if (s.heading.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) {
          res.push({
            type: "section",
            title: s.heading,
            subtitle: `${ch.emoji} ${ch.title}`,
            emoji: "📄",
            view: { type: "chapter", id: ch.id },
          });
        }
      }
    }

    for (const iq of interviewQuestions) {
      if (iq.question.toLowerCase().includes(q) || iq.answer.toLowerCase().includes(q)) {
        res.push({
          type: "interview",
          title: iq.question,
          subtitle: `${iq.level} • Interview Q&A`,
          emoji: "🎯",
          view: { type: "interview" },
        });
      }
    }

    return res.slice(0, 8);
  })();

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[selected]) {
      onNavigate(results[selected].view);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const typeColors: Record<string, string> = {
    chapter: "bg-primary/10 text-primary",
    section: "bg-muted text-muted-foreground",
    interview: "bg-accent/10 text-accent-foreground",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <svg className="w-5 h-5 text-muted-foreground shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Chapter ya topic search karo..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <kbd className="text-xs text-muted-foreground bg-muted border border-border px-1.5 py-0.5 rounded">Esc</kbd>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <ul className="max-h-72 overflow-y-auto">
            {results.map((r, i) => (
              <li key={i}>
                <button
                  onClick={() => onNavigate(r.view)}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors
                    ${selected === i ? "bg-primary/10" : "hover:bg-muted/50"}`}
                >
                  <span className="text-lg shrink-0 mt-0.5">{r.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{r.title}</div>
                    <div className="text-xs text-muted-foreground truncate mt-0.5">{r.subtitle}</div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 mt-1 ${typeColors[r.type]}`}>
                    {r.type}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : query ? (
          <div className="py-10 text-center text-muted-foreground text-sm">
            <div className="text-3xl mb-2">🔍</div>
            <p>Koi result nahi mila <strong>"{query}"</strong> ke liye</p>
          </div>
        ) : (
          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">Quick Access</p>
            <div className="flex flex-wrap gap-2">
              {["Module", "Controller", "Service", "JWT", "TypeORM", "Guard", "Interview"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        {results.length > 0 && (
          <div className="px-4 py-2.5 border-t border-border flex items-center gap-3 text-xs text-muted-foreground">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>Esc close</span>
          </div>
        )}
      </div>
    </div>
  );
}
