import { courses } from "../data/index";
import type { ActiveView } from "../context";
import { useApp } from "../context";

interface Props {
  onNavigate: (view: ActiveView) => void;
}

const totalChapters = courses.reduce((sum, c) => sum + c.totalChapters, 0);
const totalInterviews = courses.reduce((sum, c) => sum + c.totalInterviews, 0);

export default function Home({ onNavigate }: Props) {
  const { completed } = useApp();

  const totalCompleted = Object.values(completed).reduce((sum, s) => sum + s.size, 0);
  const overallProgress = totalChapters > 0 ? Math.round((totalCompleted / totalChapters) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Hero */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
          💻 Ultimate Full Stack Guide — Hinglish mein
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
          Ek Jagah,{" "}
          <span className="text-primary">Sab Kuch Seekho</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          PHP, OOP, Laravel, Node.js, React.js, API Design, MySQL, aur NestJS — A to Z Hinglish mein.<br />
          MCQs, Cheat Sheets, Revision Notes, aur Interview Questions included!
        </p>
      </div>

      {/* Overall Progress */}
      {totalCompleted > 0 && (
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-bold text-foreground">📈 Overall Progress</div>
              <div className="text-sm text-muted-foreground mt-0.5">{totalCompleted} / {totalChapters} chapters complete</div>
            </div>
            <div className="text-3xl font-extrabold text-primary">{overallProgress}%</div>
          </div>
          <div className="h-3 bg-background/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Courses", value: `${courses.length}`, emoji: "📚" },
          { label: "Total Chapters", value: `${totalChapters}+`, emoji: "📖" },
          { label: "Interview Q&A", value: `${totalInterviews}+`, emoji: "🎯" },
          { label: "Language", value: "Hinglish", emoji: "🗣️" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors">
            <div className="text-3xl mb-1.5">{s.emoji}</div>
            <div className="text-xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Course Cards */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">🎓 Sab Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {courses.map((course) => {
            const courseCompleted = completed[course.id]?.size || 0;
            const progress = course.totalChapters > 0
              ? Math.round((courseCompleted / course.totalChapters) * 100)
              : 0;

            return (
              <button
                key={course.id}
                onClick={() => onNavigate({ type: "course", courseId: course.id })}
                className={`bg-gradient-to-br ${course.bgGradient} border ${course.borderColor} rounded-2xl p-5 text-left hover:shadow-lg transition-all group relative overflow-hidden hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{course.emoji}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${course.badgeColor}`}>
                    {course.level}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-1 group-hover:opacity-90 transition-opacity ${course.color}`}>
                  {course.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {course.topics.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 bg-background/60 rounded-full text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 bg-background/60 rounded-full text-muted-foreground">
                      +{course.topics.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{course.totalChapters} chapters</span>
                  <span>{courseCompleted}/{course.totalChapters}</span>
                </div>
                {courseCompleted > 0 && (
                  <div className="h-1.5 bg-background/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Learning path */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span>🗺️</span> Recommended Learning Path
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "oop", label: "OOP Concepts", emoji: "🏗️" },
            { id: "php", label: "PHP Basics", emoji: "🐘" },
            { id: "mysql", label: "MySQL", emoji: "🗃️" },
            { id: "laravel", label: "Laravel", emoji: "🚀" },
            { id: "nodejs", label: "Node.js", emoji: "🟢" },
            { id: "reactjs", label: "React.js", emoji: "⚛️" },
            { id: "api", label: "API Design", emoji: "🔌" },
            { id: "nestjs", label: "NestJS", emoji: "🦅" },
          ].map((item, i, arr) => (
            <div key={item.id} className="flex items-center gap-2">
              <button
                onClick={() => onNavigate({ type: "course", courseId: item.id })}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg text-sm font-medium transition-colors"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
              {i < arr.length - 1 && <span className="text-muted-foreground text-sm">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Tip */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 flex gap-3">
        <span className="text-2xl shrink-0">💡</span>
        <div>
          <div className="font-semibold text-foreground mb-1">Kaise use karein ye platform?</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            OOP se shuru karo (fundamentals), phir PHP seekho, MySQL basics, Laravel ya Node.js, phir React.js. Har chapter mein code examples khud try karo, MCQs se check karo, aur interview questions se prepare karo. Progress track hogi — wapas aao jab chaaho!
          </p>
        </div>
      </div>
    </div>
  );
}
