import { getCourseData, courses } from "../data/index";
import type { ActiveView } from "../App";
import { useApp } from "../App";

interface Props {
  courseId: string;
  onNavigate: (view: ActiveView) => void;
}

export default function CourseHome({ courseId, onNavigate }: Props) {
  const { completed } = useApp();
  const courseInfo = courses.find((c) => c.id === courseId);
  const { chapters, interviews } = getCourseData(courseId);
  const courseCompleted = completed[courseId] || new Set<string>();
  const progress = chapters.length > 0 ? Math.round((courseCompleted.size / chapters.length) * 100) : 0;

  if (!courseInfo) return null;

  const categories = ["Basics", "Intermediate", "Advanced"];
  const grouped = categories.map((cat) => ({
    cat,
    items: chapters.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

  const categoryBadge: Record<string, string> = {
    Basics: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* Course Header */}
      <div className={`bg-gradient-to-br ${courseInfo.bgGradient} border ${courseInfo.borderColor} rounded-3xl p-8`}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="text-6xl">{courseInfo.emoji}</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${courseInfo.badgeColor}`}>
                {courseInfo.level}
              </span>
              <span className="text-xs text-muted-foreground">{chapters.length} chapters • {interviews.length} interview Q&A</span>
            </div>
            <h1 className={`text-3xl sm:text-4xl font-extrabold mb-2 ${courseInfo.color}`}>
              {courseInfo.title}
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">{courseInfo.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {courseInfo.topics.map((t) => (
                <span key={t} className="text-xs px-3 py-1 bg-background/60 rounded-full border border-border text-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Progress */}
        {progress > 0 && (
          <div className="mt-5 bg-background/40 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-foreground font-medium">Progress</span>
              <span className={`font-bold ${courseInfo.color}`}>{courseCompleted.size}/{chapters.length} chapters</span>
            </div>
            <div className="h-2.5 bg-background/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-5">
          <button
            onClick={() => {
              const notDone = chapters.find((c) => !courseCompleted.has(c.id));
              if (notDone) onNavigate({ type: "chapter", courseId, chapterId: notDone.id });
              else onNavigate({ type: "chapter", courseId, chapterId: chapters[0].id });
            }}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            {courseCompleted.size > 0 ? "▶ Continue Karo" : "▶ Shuru Karo"}
          </button>
          <button
            onClick={() => onNavigate({ type: "interview", courseId })}
            className="bg-card border border-border text-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-primary/50 transition-all"
          >
            🎯 Interview Q&A ({interviews.length})
          </button>
        </div>
      </div>

      {/* Chapters grouped */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-foreground">📚 All Chapters</h2>
        {grouped.map(({ cat, items }) => (
          <div key={cat}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryBadge[cat]}`}>{cat}</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">{items.length} chapters</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((ch) => {
                const idx = chapters.findIndex((c) => c.id === ch.id);
                const done = courseCompleted.has(ch.id);
                return (
                  <button
                    key={ch.id}
                    onClick={() => onNavigate({ type: "chapter", courseId, chapterId: ch.id })}
                    className={`flex items-start gap-3 p-4 rounded-xl border text-left hover:shadow-md transition-all group
                      ${done ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800" : "bg-card border-border hover:border-primary/40"}`}
                  >
                    <div className="flex flex-col items-center gap-1.5 shrink-0">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold
                        ${done ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"}`}>
                        {done ? "✓" : idx + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-lg">{ch.emoji}</span>
                        <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                          {ch.title}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">{ch.description}</p>
                      <div className="flex gap-2 mt-1.5">
                        <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          {ch.sections.length} sections
                        </span>
                        {ch.mcqs?.length ? (
                          <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {ch.mcqs.length} MCQs
                          </span>
                        ) : null}
                        {ch.cheatsheet?.length ? (
                          <span className="text-[10px] bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full">
                            📌 Cheatsheet
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Interview Card */}
        <button
          onClick={() => onNavigate({ type: "interview", courseId })}
          className={`w-full border ${courseInfo.borderColor} bg-gradient-to-br ${courseInfo.bgGradient} rounded-xl p-5 text-left hover:shadow-md transition-all group`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 bg-background/50 rounded-xl flex items-center justify-center text-2xl`}>🎯</div>
            <div>
              <div className={`font-bold ${courseInfo.color} group-hover:opacity-80 transition-opacity`}>
                Interview Q&A — {courseInfo.title}
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {interviews.length} questions — Hinglish mein with code examples
              </div>
            </div>
            <span className={`ml-auto ${courseInfo.color} text-xl`}>→</span>
          </div>
        </button>
      </div>
    </div>
  );
}
