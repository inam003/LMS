import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseProgressDetails } from "./CourseProgressDetails";

export const CourseProgressTabs = ({ courses, onCourseChange }) => {
  return (
    <Tabs
      defaultValue={courses[0].id}
      className="w-full bg-none"
      onValueChange={(value) =>
        onCourseChange(
          courses.find((course) => course.id === value) || courses[0]
        )
      }
    >
      <TabsList className="grid grid-cols-5 w-full">
        {courses.map((course) => (
          <TabsTrigger
            key={course.id}
            value={course.id}
            className="text-xs sm:text-sm bg-none hover:bg-slate-200"
          >
            {course.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {courses.map((course) => (
        <TabsContent key={course.id} value={course.id} className="mt-6">
          <CourseProgressDetails course={course} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
