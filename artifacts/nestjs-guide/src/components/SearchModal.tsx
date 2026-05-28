import { useState, useEffect, useRef } from "react";
import { courses, allCourseData } from "../data/index";
import type { ActiveView } from "../context";

interface Props {
  onClose: () => void;
  onNavigate: (view: ActiveView) => void;
}

interface Result {
  type: "chapter" | "section" | "interview";
  title: string;
  subtitle: string;
  emoji: string;
  courseEmoji: string;
  courseName: string;
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

    for (const course of courses) {
      const { chapters, interviews } = allCourseData[course.id] || { chapters: [], interviews: [] };

      for (const ch of chapters) {
        if (ch.title.toLowerCase().includes(q) || ch.description.toLowerCase().includes(q)) {
          res.push({
            type: "chapter",
            title: ch.title,
            subtitle: ch.description,
            emoji: ch.emoji,
            courseEmoji: course.emoji,
            courseName: course.title,
            view: { type: "chapter", courseId: course.id, chapterId: ch.id },
          });
        }
        for (const s of ch.sections) {
          if (s.heading.toLowerCase().includes(q) || s.content?.toLowerCase().includes(q)) {
            res.push({
              type: "section",
              title: s.heading,
              subtitle: `${ch.emoji} ${ch.title} — ${course.title}`,
              emoji: "📄",
              courseEmoji: course.emoji,
              courseName: course.title,
              view: { type: "chapter", courseId: course.id, chapterId: ch.id },
            });
          }
        }
      }

      for (const iq of interviews) {
        if (iq.question.toLowerCase().includes(q) || iq.answer.toLowerCase().includes(q)) {
          res.push({
            type: "interview",
            title: iq.question,
            subtitle: `${iq.level} • ${course.title} Interview`,
            emoji: "🎯",
            courseEmoji: course.emoji,
            courseName: course.title,
            view: { type: "interview", courseId: course.id },
          });
        }
      }
    }

    return res.slice(0, 10);
  })();

  useEffect(() => { setSelected(0); }, [query]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    else if (e.key === "Enter" && results[selected]) onNavigate(results[selected].view);
    else if (e.key === "Escape") onClose();
  };

  const typeStyle: Record<string, string> = {
    chapter: "bg-primary/10 text-primary",
    section: "bg-muted text-muted-foreground",
    interview: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  };

  const quickTopics = ["useState", "JWT", "JOIN", "OOP", "Laravel", "useEffect", "SOLID", "Transaction", "Express", "Props"];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
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
            placeholder="Koi bhi topic search karo... (useState, JWT, JOIN...)"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <kbd className="text-xs text-muted-foreground bg-muted border border-border px-1.5 py-0.5 rounded shrink-0">Esc</kbd>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <ul className="max-h-80 overflow-y-auto">
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
                    <div className="text-xs text-muted-foreground truncate mt-0.5">
                      <span>{r.courseEmoji} {r.courseName}</span>
                      <span className="mx-1">·</span>
                      <span>{r.subtitle}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 mt-1 ${typeStyle[r.type]}`}>
                    {r.type}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : query ? (
          <div className="py-12 text-center text-muted-foreground text-sm">
            <div className="text-4xl mb-3">🔍</div>
            <p>Koi result nahi mila <strong>"{query}"</strong> ke liye</p>
            <p className="text-xs mt-1 text-muted-foreground/70">Try: useState, JWT, JOIN, OOP, SOLID</p>
          </div>
        ) : (
          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">Quick Searches</p>
            <div className="flex flex-wrap gap-2">
              {quickTopics.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 mb-2 font-semibold uppercase tracking-wider">Courses</p>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onNavigate({ type: "course", courseId: c.id })}
                  className={`text-xs px-3 py-1.5 rounded-full border ${c.borderColor} ${c.badgeColor} font-medium hover:opacity-80 transition-opacity`}
                >
                  {c.emoji} {c.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="px-4 py-2.5 border-t border-border flex items-center gap-4 text-xs text-muted-foreground">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>Esc close</span>
            <span className="ml-auto">{results.length} results</span>
          </div>
        )}
      </div>
    </div>
  );
}
