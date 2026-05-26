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

import { chapters as nestjsChapters } from "./chapters";
import { interviewQuestions as nestjsInterviews } from "./interview";
import { phpChapters, phpInterviews } from "./php";
import { oopChapters, oopInterviews } from "./oop";
import { laravelChapters, laravelInterviews } from "./laravel";
import { nodeChapters, nodeInterviews } from "./nodejs";
import { reactChapters, reactInterviews } from "./reactjs";
import { apiChapters, apiInterviews } from "./api";
import { mysqlChapters, mysqlInterviews } from "./mysql";
import type { Chapter } from "./chapters";
import type { InterviewQ } from "./interview";

export const allCourseData: Record<string, { chapters: Chapter[]; interviews: InterviewQ[] }> = {
  nestjs: { chapters: nestjsChapters, interviews: nestjsInterviews },
  php: { chapters: phpChapters, interviews: phpInterviews as InterviewQ[] },
  oop: { chapters: oopChapters, interviews: oopInterviews as InterviewQ[] },
  laravel: { chapters: laravelChapters, interviews: laravelInterviews as InterviewQ[] },
  nodejs: { chapters: nodeChapters, interviews: nodeInterviews as InterviewQ[] },
  reactjs: { chapters: reactChapters, interviews: reactInterviews as InterviewQ[] },
  api: { chapters: apiChapters, interviews: apiInterviews as InterviewQ[] },
  mysql: { chapters: mysqlChapters, interviews: mysqlInterviews as InterviewQ[] },
};

export function getCourseData(courseId: string) {
  return allCourseData[courseId] || allCourseData.nestjs;
}
