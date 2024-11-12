import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CourseProgressTabs } from "./CourseProgressTabs";

// Course data with the specified courses
const courses = [
  { id: "react", name: "React Fundamentals", progress: 75 },
  { id: "javascript", name: "Advanced JavaScript", progress: 60 },
  { id: "database", name: "Database Systems", progress: 40 },
  { id: "uiux", name: "UI/UX Design Principles", progress: 90 },
  { id: "dsa", name: "Data Structures and Algorithms", progress: 55 },
];

const CourseProgress = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">
            Course Progress (Make it Responsive)
          </CardTitle>
          <CardDescription>
            Track your progress across different courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CourseProgressTabs
            courses={courses}
            onCourseChange={setSelectedCourse}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseProgress;
