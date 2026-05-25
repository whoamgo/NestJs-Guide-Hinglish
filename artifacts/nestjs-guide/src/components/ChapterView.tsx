import { useState } from "react";
import type { Chapter } from "../data/chapters";
import type { ActiveView } from "../App";

interface Props {
  chapter: Chapter;
  allChapters: Chapter[];
  onNavigate: (view: ActiveView) => void;
}

function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-border my-4 group">
      <div className="flex items-center justify-between bg-muted/70 px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {language || "code"}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-primary">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="bg-[#0f1117] text-[#e2e8f0] text-sm p-4 overflow-x-auto font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function renderContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-foreground mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-none space-y-1.5 my-2">
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      <span key={k}>{part}</span>
                    )
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="text-sm sm:text-base text-foreground leading-relaxed">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="font-semibold text-primary">
                {part}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function ChapterView({ chapter, allChapters, onNavigate }: Props) {
  const currentIdx = allChapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIdx > 0 ? allChapters[currentIdx - 1] : null;
  const nextChapter = currentIdx < allChapters.length - 1 ? allChapters[currentIdx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>Chapter {currentIdx + 1}</span>
          <span>·</span>
          <span>{chapter.sections.length} sections</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center gap-3">
          <span className="text-4xl">{chapter.emoji}</span>
          {chapter.title}
        </h1>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {chapter.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-foreground border-l-4 border-primary pl-3 leading-snug">
              {section.heading}
            </h2>

            {section.content && (
              <div className="space-y-2 text-muted-foreground pl-1">
                {renderContent(section.content)}
              </div>
            )}

            {section.code && (
              <CodeBlock code={section.code} language={section.language} />
            )}

            {section.tip && (
              <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-xl p-4">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                  <strong>Tip:</strong> {section.tip}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-6 border-t border-border flex items-center justify-between gap-4">
        {prevChapter ? (
          <button
            onClick={() => onNavigate({ type: "chapter", id: prevChapter.id })}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span>←</span>
            <span className="truncate max-w-[140px]">
              {prevChapter.emoji} {prevChapter.title}
            </span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate({ type: "home" })}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span>←</span>
            <span>Home</span>
          </button>
        )}

        {nextChapter ? (
          <button
            onClick={() => onNavigate({ type: "chapter", id: nextChapter.id })}
            className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <span className="truncate max-w-[140px]">
              {nextChapter.emoji} {nextChapter.title}
            </span>
            <span>→</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate({ type: "interview" })}
            className="flex items-center gap-2 text-sm font-medium bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>🎯 Interview Q&A</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
