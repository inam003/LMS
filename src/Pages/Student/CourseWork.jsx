import React from "react";
import { CourseWorkCard } from "@/components/Students/CourseWorkCard";

const assignments = [
  { id: 1, title: "React Basics", lastDate: "2024-10-15" },
  { id: 2, title: "State Management", lastDate: "2024-10-20" },
  { id: 3, title: "API Integration", lastDate: "2024-10-25" },
];

const quizzes = [
  { id: 1, title: "React Basics", lastDate: "2024-10-15" },
  { id: 2, title: "State Management", lastDate: "2024-10-20" },
  { id: 3, title: "API Integration", lastDate: "2024-10-25" },
];

const gdbs = [
  { id: 1, title: "React Basics", lastDate: "2024-10-15" },
  { id: 2, title: "State Management", lastDate: "2024-10-20" },
  { id: 3, title: "API Integration", lastDate: "2024-10-25" },
];

const CourseWork = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-medium">Course Work</h1>
      <div className="container mx-auto mb-4 p-4 space-y-6">
        <CourseWorkCard title="Assignments" items={assignments} />
        <CourseWorkCard title="Quizzes" items={quizzes} />
        <CourseWorkCard title="GDBs" items={gdbs} />
      </div>
    </div>
  );
};

export default CourseWork;
