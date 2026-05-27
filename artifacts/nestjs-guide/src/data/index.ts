export { courses } from "./courses";
export { chapters as nestjsChapters } from "./chapters";
export { interviewQuestions as nestjsInterviews } from "./interview";
export { phpChapters, phpInterviews } from "./php";
export { oopChapters, oopInterviews } from "./oop";
export { laravelChapters, laravelInterviews } from "./laravel";
export { nodeChapters, nodeInterviews } from "./nodejs";
export { reactChapters, reactInterviews } from "./reactjs";
export { apiChapters, apiInterviews } from "./api";
export { mysqlChapters, mysqlInterviews } from "./mysql";
export { jsChapters, jsInterviews } from "./javascript";
export { pythonChapters, pythonInterviews } from "./python";
export { dsaChapters, dsaInterviews } from "./dsa";

import { chapters as nestjsChaptersBase } from "./chapters";
import { nestjsExtraChapters } from "./nestjs-extra";
import { interviewQuestions as nestjsInterviews } from "./interview";
import { phpChapters, phpInterviews } from "./php";
import { oopChapters, oopInterviews } from "./oop";
import { laravelChapters, laravelInterviews } from "./laravel";
import { nodeChapters, nodeInterviews } from "./nodejs";
import { reactChapters, reactInterviews } from "./reactjs";
import { apiChapters, apiInterviews } from "./api";
import { mysqlChapters, mysqlInterviews } from "./mysql";
import { jsChapters, jsInterviews } from "./javascript";
import { pythonChapters, pythonInterviews } from "./python";
import { dsaChapters, dsaInterviews } from "./dsa";
import type { Chapter } from "./chapters";
import type { InterviewQ } from "./interview";

const nestjsChapters = [...nestjsChaptersBase, ...nestjsExtraChapters];

// Some course files store chapters AND interview questions in the same export.
// This helper separates them: objects with `sections` = chapters, with `question` = interviews.
function separateMixed(baseChapters: Chapter[], mixedArr: any[]) {
  const extraChapters = mixedArr.filter((x) => x && typeof x === "object" && "sections" in x) as Chapter[];
  const interviews = mixedArr.filter((x) => x && typeof x === "object" && "question" in x) as InterviewQ[];
  return {
    chapters: [...baseChapters, ...extraChapters],
    interviews,
  };
}

export const allCourseData: Record<string, { chapters: Chapter[]; interviews: InterviewQ[] }> = {
  nestjs: { chapters: nestjsChapters, interviews: nestjsInterviews },
  php: { chapters: phpChapters, interviews: phpInterviews as InterviewQ[] },
  oop: { chapters: oopChapters, interviews: oopInterviews as InterviewQ[] },
  laravel: { chapters: laravelChapters, interviews: laravelInterviews as InterviewQ[] },
  nodejs: separateMixed(nodeChapters, nodeInterviews as any[]),
  reactjs: separateMixed(reactChapters, reactInterviews as any[]),
  api: { chapters: apiChapters, interviews: apiInterviews as InterviewQ[] },
  mysql: { chapters: mysqlChapters, interviews: mysqlInterviews as InterviewQ[] },
  javascript: { chapters: jsChapters, interviews: jsInterviews as InterviewQ[] },
  python: { chapters: pythonChapters, interviews: pythonInterviews as unknown as InterviewQ[] },
  dsa: { chapters: dsaChapters, interviews: dsaInterviews as unknown as InterviewQ[] },
};

export function getCourseData(courseId: string) {
  return allCourseData[courseId] || allCourseData.nestjs;
}
