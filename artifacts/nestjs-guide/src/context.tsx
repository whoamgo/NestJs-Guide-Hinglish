import { createContext, useContext } from "react";

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
