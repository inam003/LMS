import React from "react";
import { Progress } from "@/components/ui/progress";
import { CircleChart } from "./CircleChart";

export const CourseProgressDetails = ({ course }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <CircleChart progress={course.progress} />
      <h3 className="text-xl font-semibold text-center">{course.name}</h3>
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <Progress value={course.progress} className="h-2" />
        <div className="flex justify-between text-sm">
          <span className="text-green-500">Completed: {course.progress}%</span>
          <span className="text-red-500">
            Not Completed: {100 - course.progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
