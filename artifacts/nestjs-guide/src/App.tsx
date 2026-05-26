import { useState, useEffect, createContext, useContext } from "react";
import { courses, getCourseData } from "./data/index";
import ChapterView from "./components/ChapterView";
import InterviewView from "./components/InterviewView";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import CourseHome from "./components/CourseHome";
import SearchModal from "./components/SearchModal";

export type ActiveView =
  | { type: "home" }
  | { type: "course"; courseId: string }
  | { type: "chapter"; courseId: string; chapterId: string }
  | { type: "interview"; courseId: string };

export type Lang = "hi" | "en";

interface AppContextType {
  darkMode: boolean;
  toggleDark: () => void;
  completed: Record<string, Set<string>>;
  toggleComplete: (courseId: string, chapterId: string) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  activeCourseId: string;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const AppContext = createContext<AppContextType>({
  darkMode: false,
  toggleDark: () => {},
  completed: {},
  toggleComplete: () => {},
  searchOpen: false,
  setSearchOpen: () => {},
  activeCourseId: "nestjs",
  lang: "hi",
  setLang: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

function loadCompleted(): Record<string, Set<string>> {
  try {
    const saved = localStorage.getItem("completedChapters_v2");
    if (!saved) return {};
    const raw: Record<string, string[]> = JSON.parse(saved);
    return Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, new Set(v)]));
  } catch {
    return {};
  }
}

function saveCompleted(completed: Record<string, Set<string>>) {
  const raw = Object.fromEntries(Object.entries(completed).map(([k, v]) => [k, [...v]]));
  localStorage.setItem("completedChapters_v2", JSON.stringify(raw));
}

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>({ type: "home" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [completed, setCompleted] = useState<Record<string, Set<string>>>(loadCompleted);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLangState] = useState<Lang>(() =>
    (localStorage.getItem("lang") as Lang) || "hi"
  );

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const activeCourseId =
    activeView.type === "home" ? "nestjs" :
    activeView.type === "course" ? activeView.courseId :
    (activeView as any).courseId || "nestjs";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    saveCompleted(completed);
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
  const toggleComplete = (courseId: string, chapterId: string) => {
    setCompleted((prev) => {
      const courseSet = new Set(prev[courseId] || []);
      if (courseSet.has(chapterId)) courseSet.delete(chapterId);
      else courseSet.add(chapterId);
      return { ...prev, [courseId]: courseSet };
    });
  };

  const currentCourseData = activeView.type !== "home" ? getCourseData(activeCourseId) : null;
  const currentChapter =
    activeView.type === "chapter" && currentCourseData
      ? currentCourseData.chapters.find((c) => c.id === activeView.chapterId)
      : null;
  const courseCompleted = completed[activeCourseId] || new Set<string>();
  const courseChapters = currentCourseData?.chapters || [];
  const progress = courseChapters.length > 0
    ? Math.round((courseCompleted.size / courseChapters.length) * 100)
    : 0;

  const courseInfo = courses.find((c) => c.id === activeCourseId);

  return (
    <AppContext.Provider value={{ darkMode, toggleDark, completed, toggleComplete, searchOpen, setSearchOpen, activeCourseId, lang, setLang }}>
      <div className="min-h-screen bg-background flex transition-colors">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeView={activeView}
          onNavigate={(view) => { setActiveView(view); setSidebarOpen(false); }}
          progress={progress}
        />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button onClick={() => setActiveView({ type: "home" })} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-xl">💻</span>
              <span className="font-bold text-primary hidden sm:block">Full Stack Guide</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium hidden sm:block">
                {lang === "hi" ? "Hinglish" : "English"}
              </span>
            </button>

            {/* Breadcrumb */}
            {activeView.type !== "home" && courseInfo && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground min-w-0">
                <span className="text-border">/</span>
                <button
                  onClick={() => setActiveView({ type: "course", courseId: activeCourseId })}
                  className={`font-medium hover:text-foreground transition-colors ${courseInfo.color}`}
                >
                  {courseInfo.emoji} {courseInfo.title}
                </button>
                {activeView.type === "chapter" && currentChapter && (
                  <>
                    <span className="text-border">/</span>
                    <span className="truncate text-foreground font-medium text-xs">{currentChapter.title}</span>
                  </>
                )}
                {activeView.type === "interview" && (
                  <>
                    <span className="text-border">/</span>
                    <span className="text-foreground font-medium">🎯 {lang === "hi" ? "Interview Q&A" : "Interview Q&A"}</span>
                  </>
                )}
              </div>
            )}

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/60 hover:bg-muted px-3 py-1.5 rounded-lg transition-colors border border-border"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:block text-xs">{lang === "hi" ? "Dhundo" : "Search"}</span>
                <kbd className="hidden sm:block text-xs bg-background border border-border px-1 rounded">⌘K</kbd>
              </button>

              {activeView.type !== "home" && courseChapters.length > 0 && (
                <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                  <span>{progress}%</span>
                </div>
              )}

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "hi" ? "en" : "hi")}
                title={lang === "hi" ? "Switch to English" : "Hinglish pe switch karo"}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-border hover:bg-muted transition-colors text-muted-foreground"
              >
                {lang === "hi" ? (
                  <>🇬🇧 <span className="hidden sm:inline">EN</span></>
                ) : (
                  <>🇮🇳 <span className="hidden sm:inline">HI</span></>
                )}
              </button>

              <button onClick={toggleDark} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
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
              <Home onNavigate={setActiveView} />
            )}
            {activeView.type === "course" && (
              <CourseHome courseId={activeView.courseId} onNavigate={setActiveView} />
            )}
            {activeView.type === "chapter" && currentChapter && currentCourseData && (
              <ChapterView
                chapter={currentChapter}
                allChapters={currentCourseData.chapters}
                courseId={activeCourseId}
                onNavigate={setActiveView}
              />
            )}
            {activeView.type === "interview" && currentCourseData && (
              <InterviewView questions={currentCourseData.interviews} courseId={activeCourseId} />
            )}
          </main>
        </div>

        {searchOpen && (
          <SearchModal
            onClose={() => setSearchOpen(false)}
            onNavigate={(view) => { setActiveView(view); setSearchOpen(false); }}
          />
        )}
      </div>
    </AppContext.Provider>
  );
}
