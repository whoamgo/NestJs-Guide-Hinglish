import { chapters } from "../data/chapters";
import type { ActiveView } from "../App";

interface Props {
  open: boolean;
  onClose: () => void;
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

export default function Sidebar({ open, onClose: _onClose, activeView, onNavigate }: Props) {
  const isChapterActive = (id: string) =>
    activeView.type === "chapter" && activeView.id === id;

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
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow">
            N
          </div>
          <div className="text-left">
            <div className="font-bold text-foreground leading-tight">NestJS Guide</div>
            <div className="text-xs text-muted-foreground">Beginner se Expert</div>
          </div>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {/* Home */}
        <button
          onClick={() => onNavigate({ type: "home" })}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
            ${activeView.type === "home"
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted"
            }`}
        >
          <span className="text-base">🏠</span>
          <span>Home</span>
        </button>

        {/* Chapters label */}
        <div className="px-3 pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Chapters
        </div>

        {chapters.map((ch, idx) => (
          <button
            key={ch.id}
            onClick={() => onNavigate({ type: "chapter", id: ch.id })}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
              ${isChapterActive(ch.id)
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-foreground hover:bg-muted font-medium"
              }`}
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-md bg-muted/60 text-xs font-bold shrink-0">
              {idx + 1}
            </span>
            <span className="mr-1">{ch.emoji}</span>
            <span className="truncate text-left">{ch.title}</span>
          </button>
        ))}

        {/* Interview separator */}
        <div className="px-3 pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Interview Prep
        </div>

        <button
          onClick={() => onNavigate({ type: "interview" })}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
            ${activeView.type === "interview"
              ? "bg-accent text-accent-foreground"
              : "text-foreground hover:bg-muted"
            }`}
        >
          <span className="text-base">🎯</span>
          <span>Interview Q&A</span>
          <span className="ml-auto bg-accent/20 text-accent-foreground text-xs px-1.5 py-0.5 rounded-full font-semibold">
            16
          </span>
        </button>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          Beginners ke liye • Hinglish mein
        </div>
      </div>
    </aside>
  );
}
