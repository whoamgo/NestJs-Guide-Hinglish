import { courses, getCourseData } from "../data/index";
import type { ActiveView } from "../App";
import { useApp } from "../App";

interface Props {
  open: boolean;
  onClose: () => void;
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  progress: number;
}

export default function Sidebar({ open, activeView, onNavigate, progress }: Props) {
  const { completed, activeCourseId } = useApp();

  const courseInfo = courses.find((c) => c.id === activeCourseId);
  const { chapters } = getCourseData(activeCourseId);
  const courseCompleted = completed[activeCourseId] || new Set<string>();

  const isHome = activeView.type === "home";
  const isChapterActive = (id: string) =>
    activeView.type === "chapter" && (activeView as any).chapterId === id;

  const categories = ["Basics", "Intermediate", "Advanced"];
  const grouped = categories.map((cat) => ({
    cat,
    items: chapters.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

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
      <div className="p-4 border-b border-border">
        <button
          onClick={() => onNavigate({ type: "home" })}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity w-full mb-3"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
            FS
          </div>
          <div className="text-left flex-1 min-w-0">
            <div className="font-bold text-foreground text-sm leading-tight">Full Stack Guide</div>
            <div className="text-[10px] text-muted-foreground">Hinglish A to Z</div>
          </div>
        </button>

        {/* Course switcher */}
        <div className="grid grid-cols-4 gap-1">
          {courses.map((c) => {
            const isCurrent = activeCourseId === c.id && !isHome;
            const cDone = completed[c.id]?.size || 0;
            const cPct = c.totalChapters > 0 ? Math.round((cDone / c.totalChapters) * 100) : 0;
            return (
              <button
                key={c.id}
                onClick={() => onNavigate({ type: "course", courseId: c.id })}
                title={c.title}
                className={`relative flex flex-col items-center gap-0.5 p-1.5 rounded-lg text-center transition-all
                  ${isCurrent ? "bg-primary/15 border border-primary/30" : "hover:bg-muted border border-transparent"}`}
              >
                <span className="text-lg leading-none">{c.emoji}</span>
                <span className={`text-[8px] font-semibold leading-tight truncate w-full text-center
                  ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                  {c.id === "nestjs" ? "Nest" : c.id === "reactjs" ? "React" : c.id === "nodejs" ? "Node" : c.id === "laravel" ? "Lara" : c.title.slice(0, 5)}
                </span>
                {cPct > 0 && (
                  <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active course header */}
      {!isHome && courseInfo && (
        <div className={`px-4 py-3 border-b border-border bg-gradient-to-r ${courseInfo.bgGradient}`}>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">{courseInfo.emoji}</span>
              <span className={`font-bold text-sm ${courseInfo.color}`}>{courseInfo.title}</span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">{courseCompleted.size}/{chapters.length}</span>
          </div>
          <div className="h-1.5 bg-background/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {/* Home */}
        <button
          onClick={() => onNavigate({ type: "home" })}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
            ${isHome ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
        >
          <span className="text-base w-5 text-center">🏠</span>
          <span>All Courses</span>
        </button>

        {/* Current course chapters */}
        {!isHome && chapters.length > 0 && (
          <>
            {/* Course overview button */}
            <button
              onClick={() => onNavigate({ type: "course", courseId: activeCourseId })}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${activeView.type === "course" ? "bg-muted border border-border" : "text-muted-foreground hover:bg-muted/50"}`}
            >
              <span className="text-base w-5 text-center">📋</span>
              <span>Course Overview</span>
            </button>

            {grouped.map(({ cat, items }) => (
              <div key={cat}>
                <div className="px-3 pt-3 pb-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {cat}
                </div>
                {items.map((ch) => {
                  const idx = chapters.findIndex((c) => c.id === ch.id);
                  const active = isChapterActive(ch.id);
                  const done = courseCompleted.has(ch.id);

                  return (
                    <button
                      key={ch.id}
                      onClick={() => onNavigate({ type: "chapter", courseId: activeCourseId, chapterId: ch.id })}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                        ${active
                          ? "bg-primary/15 text-primary font-semibold border border-primary/30"
                          : "text-foreground hover:bg-muted font-medium"
                        }`}
                    >
                      <span className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold shrink-0
                        ${done ? "bg-emerald-500 text-white" : active ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {done ? "✓" : idx + 1}
                      </span>
                      <span className="text-sm">{ch.emoji}</span>
                      <span className="truncate text-left text-xs leading-tight">{ch.title}</span>
                    </button>
                  );
                })}
              </div>
            ))}

            {/* Interview */}
            <div className="px-3 pt-3 pb-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Interview
            </div>
            <button
              onClick={() => onNavigate({ type: "interview", courseId: activeCourseId })}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${activeView.type === "interview"
                  ? "bg-accent/15 border border-accent/30 text-foreground"
                  : "text-foreground hover:bg-muted"
                }`}
            >
              <span className="text-base w-5 text-center">🎯</span>
              <span>Interview Q&A</span>
            </button>
          </>
        )}

        {/* Home state — show course list */}
        {isHome && (
          <div className="mt-2">
            <div className="px-3 pb-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Courses
            </div>
            {courses.map((c) => {
              const cDone = completed[c.id]?.size || 0;
              const pct = c.totalChapters > 0 ? Math.round((cDone / c.totalChapters) * 100) : 0;
              return (
                <button
                  key={c.id}
                  onClick={() => onNavigate({ type: "course", courseId: c.id })}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-foreground hover:bg-muted"
                >
                  <span className="text-base w-5 text-center">{c.emoji}</span>
                  <span className="flex-1 text-left text-xs truncate">{c.title}</span>
                  {pct > 0 && (
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold shrink-0">{pct}%</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border text-xs text-muted-foreground text-center">
        💻 Full Stack Guide — Hinglish
      </div>
    </aside>
  );
}
