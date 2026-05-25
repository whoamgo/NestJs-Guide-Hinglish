import { useState } from "react";
import { chapters } from "./data/chapters";
import { interviewQuestions } from "./data/interview";
import ChapterView from "./components/ChapterView";
import InterviewView from "./components/InterviewView";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

export type ActiveView = { type: "home" } | { type: "chapter"; id: string } | { type: "interview" };

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>({ type: "home" });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentChapter =
    activeView.type === "chapter"
      ? chapters.find((c) => c.id === activeView.id)
      : null;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeView={activeView}
        onNavigate={(view) => {
          setActiveView(view);
          setSidebarOpen(false);
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🦅</span>
            <span className="font-bold text-primary">NestJS Guide</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Hinglish</span>
          </div>
          {activeView.type === "chapter" && currentChapter && (
            <>
              <span className="text-muted-foreground mx-1">/</span>
              <span className="text-sm font-medium truncate">
                {currentChapter.emoji} {currentChapter.title}
              </span>
            </>
          )}
          {activeView.type === "interview" && (
            <>
              <span className="text-muted-foreground mx-1">/</span>
              <span className="text-sm font-medium">🎯 Interview Q&A</span>
            </>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {activeView.type === "home" && (
            <Home
              onStart={() => setActiveView({ type: "chapter", id: chapters[0].id })}
              onNavigate={setActiveView}
            />
          )}
          {activeView.type === "chapter" && currentChapter && (
            <ChapterView
              chapter={currentChapter}
              allChapters={chapters}
              onNavigate={setActiveView}
            />
          )}
          {activeView.type === "interview" && (
            <InterviewView questions={interviewQuestions} />
          )}
        </main>
      </div>
    </div>
  );
}
