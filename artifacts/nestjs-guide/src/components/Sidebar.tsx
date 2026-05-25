import { chapters } from "../data/chapters";
import type { ActiveView } from "../App";
import { useApp } from "../App";

interface Props {
  open: boolean;
  onClose: () => void;
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  progress: number;
}

const categories = ["Basics", "Intermediate", "Advanced"];

export default function Sidebar({ open, activeView, onNavigate, progress }: Props) {
  const { completed } = useApp();

  const isChapterActive = (id: string) =>
    activeView.type === "chapter" && activeView.id === id;

  const grouped = categories.map((cat) => ({
    cat,
    items: chapters.filter((c) => c.category === cat),
  }));

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-30 w-72 bg-card border-r border-border flex flex-col
        transform transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0 lg:flex
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <button
          onClick={() => onNavigate({ type: "home" })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity w-full"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
            N
          </div>
          <div className="text-left flex-1">
            <div className="font-bold text-foreground leading-tight">NestJS Guide</div>
            <div className="text-xs text-muted-foreground">Beginner se Expert</div>
          </div>
        </button>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
            <span>Progress</span>
            <span className="font-semibold text-primary">{completed.size}/{chapters.length} chapters</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {/* Home */}
        <button
          onClick={() => onNavigate({ type: "home" })}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
            ${activeView.type === "home"
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted"
            }`}
        >
          <span className="text-base w-5 text-center">🏠</span>
          <span>Home</span>
        </button>

        {/* Grouped chapters */}
        {grouped.map(({ cat, items }) => (
          <div key={cat}>
            <div className="px-3 pt-4 pb-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {cat}
            </div>
            {items.map((ch) => {
              const idx = chapters.findIndex((c) => c.id === ch.id);
              const active = isChapterActive(ch.id);
              const done = completed.has(ch.id);

              return (
                <button
                  key={ch.id}
                  onClick={() => onNavigate({ type: "chapter", id: ch.id })}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all
                    ${active
                      ? "bg-primary/15 text-primary font-semibold border border-primary/30"
                      : "text-foreground hover:bg-muted font-medium"
                    }`}
                >
                  <span className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold shrink-0
                    ${done ? "bg-emerald-500 text-white" : active ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {done ? "✓" : idx + 1}
                  </span>
                  <span className="text-sm mr-0.5">{ch.emoji}</span>
                  <span className="truncate text-left text-xs leading-tight">{ch.title}</span>
                </button>
              );
            })}
          </div>
        ))}

        {/* Interview section */}
        <div className="px-3 pt-4 pb-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          Interview Prep
        </div>
        <button
          onClick={() => onNavigate({ type: "interview" })}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
            ${activeView.type === "interview"
              ? "bg-accent/15 text-accent-foreground border border-accent/30"
              : "text-foreground hover:bg-muted"
            }`}
        >
          <span className="text-base w-5 text-center">🎯</span>
          <span>Interview Q&A</span>
          <span className="ml-auto bg-accent/20 text-accent-foreground text-[10px] px-1.5 py-0.5 rounded-full font-bold">
            30
          </span>
        </button>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          {progress === 100 ? "🎉 Sab chapters complete!" : `${chapters.length - completed.size} chapters baaki hain`}
        </div>
      </div>
    </aside>
  );
}
