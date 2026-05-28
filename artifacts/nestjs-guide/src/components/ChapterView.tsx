import { useState } from "react";
import type { Chapter } from "../data/chapters";
import type { ActiveView } from "../context";
import { useApp } from "../context";
import { courses } from "../data/index";

interface Props {
  chapter: Chapter;
  allChapters: Chapter[];
  courseId: string;
  onNavigate: (view: ActiveView) => void;
}

type Tab = "content" | "mcq" | "cheatsheet" | "revision";

function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative rounded-xl overflow-hidden border border-border my-4 shadow-sm">
      <div className="flex items-center justify-between bg-[#1e2030] px-4 py-2.5 border-b border-white/10">
        <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">{language || "code"}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          {copied ? <span className="text-emerald-400">✓ Copied!</span> : <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>Copy</>}
        </button>
      </div>
      <pre className="bg-[#0d1117] text-[#c9d1d9] text-sm p-4 overflow-x-auto font-mono leading-relaxed"><code>{code}</code></pre>
    </div>
  );
}

function renderContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { elements.push(<div key={i} className="h-2" />); i++; continue; }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-1.5 my-2">
          {items.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span>{parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold">{p}</strong> : <span key={k}>{p}</span>)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    }
    const parts = line.split(/\*\*(.*?)\*\*/g);
    elements.push(
      <p key={i} className="text-sm sm:text-base text-foreground leading-relaxed">
        {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold text-primary">{p}</strong> : <span key={k}>{p}</span>)}
      </p>
    );
    i++;
  }
  return elements;
}

function MCQSection({ mcqs, courseId }: { mcqs: NonNullable<Chapter["mcqs"]>; courseId: string }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number | null>(null);
  const courseInfo = courses.find(c => c.id === courseId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">🧠 Practice MCQs</h3>
        {score !== null && (
          <div className={`text-sm font-bold px-3 py-1.5 rounded-full ${score === mcqs.length ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"}`}>
            {score}/{mcqs.length} Correct {score === mcqs.length ? "🎉" : ""}
          </div>
        )}
      </div>
      {mcqs.map((mcq, qi) => {
        const answered = answers[qi] !== undefined;
        const isCorrect = answers[qi] === mcq.correct;
        return (
          <div key={qi} className={`border rounded-xl p-5 space-y-3 transition-colors ${answered ? (isCorrect ? "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20" : "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/20") : "border-border bg-card"}`}>
            <p className="font-semibold text-foreground text-sm">
              <span className={`font-bold mr-2 ${courseInfo?.color || "text-primary"}`}>Q{qi + 1}.</span>{mcq.q}
            </p>
            <div className="grid gap-2">
              {mcq.options.map((opt, oi) => {
                let style = "border-border bg-background text-foreground hover:border-primary/50 hover:bg-primary/5";
                if (answered) {
                  if (oi === mcq.correct) style = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold";
                  else if (oi === answers[qi]) style = "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400";
                  else style = "border-border bg-background text-muted-foreground opacity-60";
                }
                return (
                  <button key={oi} disabled={answered || score !== null}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`w-full text-left text-sm px-4 py-2.5 rounded-lg border transition-all ${style}`}>
                    <span className="font-bold mr-2 text-muted-foreground">{["A", "B", "C", "D"][oi]}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className="flex gap-2 items-start bg-background/70 rounded-lg p-3 border border-border">
                <span className="text-lg shrink-0">{isCorrect ? "✅" : "❌"}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{mcq.explain}</p>
              </div>
            )}
          </div>
        );
      })}
      <div className="flex gap-3">
        {score === null && Object.keys(answers).length === mcqs.length && (
          <button onClick={() => setScore(mcqs.filter((q, i) => answers[i] === q.correct).length)}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
            Check Answers
          </button>
        )}
        {score !== null && (
          <button onClick={() => { setAnswers({}); setScore(null); }}
            className="bg-muted text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-muted/80">
            Dobara Try Karo
          </button>
        )}
      </div>
    </div>
  );
}

export default function ChapterView({ chapter, allChapters, courseId, onNavigate }: Props) {
  const { completed, toggleComplete, lang } = useApp();
  const [activeTab, setActiveTab] = useState<Tab>("content");

  const isEn = lang === "en";

  const courseCompleted = completed[courseId] || new Set<string>();
  const isDone = courseCompleted.has(chapter.id);
  const currentIdx = allChapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIdx > 0 ? allChapters[currentIdx - 1] : null;
  const nextChapter = currentIdx < allChapters.length - 1 ? allChapters[currentIdx + 1] : null;
  const courseInfo = courses.find((c) => c.id === courseId);

  const displayTitle = (isEn && chapter.titleEn) ? chapter.titleEn : chapter.title;
  const displayDescription = (isEn && chapter.descriptionEn) ? chapter.descriptionEn : chapter.description;
  const displaySections = (isEn && chapter.sectionsEn?.length) ? chapter.sectionsEn : chapter.sections;
  const displayMcqs = (isEn && chapter.mcqsEn?.length) ? chapter.mcqsEn : chapter.mcqs;
  const displayCheatsheet = (isEn && chapter.cheatsheetEn?.length) ? chapter.cheatsheetEn : chapter.cheatsheet;
  const displayRevision = (isEn && chapter.revisionEn?.length) ? chapter.revisionEn : chapter.revision;

  const tabs: { id: Tab; label: string; emoji: string; disabled?: boolean }[] = [
    { id: "content", label: isEn ? "Content" : "Content", emoji: "📖" },
    { id: "mcq", label: "MCQ Quiz", emoji: "🧠", disabled: !displayMcqs?.length },
    { id: "cheatsheet", label: isEn ? "Cheat Sheet" : "Cheat Sheet", emoji: "📌", disabled: !displayCheatsheet?.length },
    { id: "revision", label: isEn ? "Revision" : "Revision", emoji: "🔁", disabled: !displayRevision?.length },
  ];

  const categoryColor: Record<string, string> = {
    Basics: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
          <button onClick={() => onNavigate({ type: "course", courseId })} className={`flex items-center gap-1 font-medium hover:underline ${courseInfo?.color}`}>
            {courseInfo?.emoji} {courseInfo?.title}
          </button>
          <span>/</span>
          <span>Chapter {currentIdx + 1} of {allChapters.length}</span>
          <span className={`px-2 py-0.5 rounded-full font-semibold ${categoryColor[chapter.category] || ""}`}>{chapter.category}</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground flex items-center gap-3 leading-tight">
            <span className="text-3xl sm:text-4xl">{chapter.emoji}</span>
            {displayTitle}
          </h1>
          <button
            onClick={() => toggleComplete(courseId, chapter.id)}
            className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${isDone ? "bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700" : "bg-muted text-muted-foreground border-border hover:border-primary/50"}`}
          >
            {isDone ? <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{isEn ? "Done" : "Done"}</> : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{isEn ? "Mark Done" : "Mark Done"}</>}
          </button>
        </div>
        <p className="text-muted-foreground text-sm mt-2">{displayDescription}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted/50 p-1 rounded-xl mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => !tab.disabled && setActiveTab(tab.id)} disabled={tab.disabled}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap
              ${activeTab === tab.id ? "bg-card shadow text-foreground" : tab.disabled ? "text-muted-foreground/40 cursor-not-allowed" : "text-muted-foreground hover:text-foreground"}`}>
            <span>{tab.emoji}</span><span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "content" && (
        <div className="space-y-10">
          {displaySections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className={`text-lg sm:text-xl font-bold text-foreground border-l-4 pl-3 leading-snug border-primary`}>
                {section.heading}
              </h2>
              {section.content && <div className="space-y-2 text-muted-foreground pl-1">{renderContent(section.content)}</div>}
              {section.diagram && (
                <div className="my-4 rounded-xl border border-primary/20 bg-primary/5 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-foreground p-4 font-mono leading-relaxed whitespace-pre">{section.diagram}</pre>
                </div>
              )}
              {section.code && <CodeBlock code={section.code} language={section.language} />}
              {section.tip && (
                <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-xl p-4">
                  <span className="text-xl shrink-0">💡</span>
                  <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed"><strong>Tip:</strong> {section.tip}</p>
                </div>
              )}
              {section.warning && (
                <div className="flex gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40 rounded-xl p-4">
                  <span className="text-xl shrink-0">⚠️</span>
                  <p className="text-sm text-red-800 dark:text-red-200 leading-relaxed"><strong>Warning:</strong> {section.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === "mcq" && displayMcqs && <MCQSection mcqs={displayMcqs} courseId={courseId} />}

      {activeTab === "cheatsheet" && displayCheatsheet && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground">📌 Quick Reference</h3>
          <div className="bg-[#0d1117] rounded-xl p-5 space-y-2.5">
            {displayCheatsheet.map((item, i) => {
              const [cmd, ...desc] = item.split(" — ");
              return (
                <div key={i} className="flex items-start gap-3 text-sm font-mono">
                  <span className="text-emerald-400 font-bold shrink-0">{cmd}</span>
                  {desc.length > 0 && <span className="text-slate-400 font-sans normal-case">— {desc.join(" — ")}</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "revision" && displayRevision && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground">🔁 Key Takeaways</h3>
          <div className="space-y-2">
            {displayRevision.map((point, i) => {
              const [bold, ...rest] = point.split(" — ");
              return (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3">
                  <span className={`w-6 h-6 ${courseInfo?.badgeColor || "bg-primary/10 text-primary"} rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground">
                    <strong>{bold}</strong>
                    {rest.length > 0 && <span className="text-muted-foreground"> — {rest.join(" — ")}</span>}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-12 pt-6 border-t border-border flex items-center justify-between gap-4">
        {prevChapter ? (
          <button onClick={() => onNavigate({ type: "chapter", courseId, chapterId: prevChapter.id })}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <span>←</span><span className="truncate max-w-[140px]">{prevChapter.emoji} {isEn && prevChapter.titleEn ? prevChapter.titleEn : prevChapter.title}</span>
          </button>
        ) : (
          <button onClick={() => onNavigate({ type: "course", courseId })}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <span>←</span><span>{isEn ? "Course Home" : "Course Home"}</span>
          </button>
        )}

        {nextChapter ? (
          <button
            onClick={() => { toggleComplete(courseId, chapter.id); onNavigate({ type: "chapter", courseId, chapterId: nextChapter.id }); }}
            className="flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-md">
            <span className="truncate max-w-[140px]">{nextChapter.emoji} {isEn && nextChapter.titleEn ? nextChapter.titleEn : nextChapter.title}</span><span>→</span>
          </button>
        ) : (
          <button
            onClick={() => { toggleComplete(courseId, chapter.id); onNavigate({ type: "interview", courseId }); }}
            className="flex items-center gap-2 text-sm font-semibold bg-accent text-accent-foreground px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
            <span>🎯 Interview Q&A</span><span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
