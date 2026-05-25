import { useState, useEffect, createContext, useContext } from "react";
import { chapters } from "./data/chapters";
import { interviewQuestions } from "./data/interview";
import ChapterView from "./components/ChapterView";
import InterviewView from "./components/InterviewView";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import SearchModal from "./components/SearchModal";

export type ActiveView = { type: "home" } | { type: "chapter"; id: string } | { type: "interview" };

interface AppContextType {
  darkMode: boolean;
  toggleDark: () => void;
  completed: Set<string>;
  toggleComplete: (id: string) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  darkMode: false,
  toggleDark: () => {},
  completed: new Set(),
  toggleComplete: () => {},
  searchOpen: false,
  setSearchOpen: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>({ type: "home" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("completedChapters");
      return new Set(saved ? JSON.parse(saved) : []);
    } catch {
      return new Set();
    }
  });
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("completedChapters", JSON.stringify([...completed]));
  }, [completed]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const toggleDark = () => setDarkMode((d) => !d);
  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const currentChapter =
    activeView.type === "chapter"
      ? chapters.find((c) => c.id === activeView.id)
      : null;

  const progress = Math.round((completed.size / chapters.length) * 100);

  return (
    <AppContext.Provider value={{ darkMode, toggleDark, completed, toggleComplete, searchOpen, setSearchOpen }}>
      <div className="min-h-screen bg-background flex transition-colors">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeView={activeView}
          onNavigate={(view) => {
            setActiveView(view);
            setSidebarOpen(false);
          }}
          progress={progress}
        />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button
              onClick={() => setActiveView({ type: "home" })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xl">🦅</span>
              <span className="font-bold text-primary hidden sm:block">NestJS Guide</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium hidden sm:block">Hinglish</span>
            </button>

            {activeView.type === "chapter" && currentChapter && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground min-w-0">
                <span>/</span>
                <span className="truncate font-medium text-foreground">
                  {currentChapter.emoji} {currentChapter.title}
                </span>
              </div>
            )}
            {activeView.type === "interview" && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>/</span>
                <span className="font-medium text-foreground">🎯 Interview Q&A</span>
              </div>
            )}

            <div className="ml-auto flex items-center gap-2">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/60 hover:bg-muted px-3 py-1.5 rounded-lg transition-colors border border-border"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:block">Search</span>
                <kbd className="hidden sm:block text-xs bg-background border border-border px-1 rounded">⌘K</kbd>
              </button>

              {/* Progress */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span>{progress}%</span>
              </div>

              {/* Dark mode */}
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                title={darkMode ? "Light mode" : "Dark mode"}
              >
                {darkMode ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            {activeView.type === "home" && (
              <Home onStart={() => setActiveView({ type: "chapter", id: chapters[0].id })} onNavigate={setActiveView} />
            )}
            {activeView.type === "chapter" && currentChapter && (
              <ChapterView chapter={currentChapter} allChapters={chapters} onNavigate={setActiveView} />
            )}
            {activeView.type === "interview" && (
              <InterviewView questions={interviewQuestions} />
            )}
          </main>
        </div>

        {searchOpen && (
          <SearchModal
            onClose={() => setSearchOpen(false)}
            onNavigate={(view) => {
              setActiveView(view);
              setSearchOpen(false);
            }}
          />
        )}
      </div>
    </AppContext.Provider>
  );
}
