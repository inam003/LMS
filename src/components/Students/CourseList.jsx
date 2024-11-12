import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

export const CourseList = ({ courses }) => {
  return (
    <div>
      <Label>Current Courses</Label>
      {courses.map((course, index) => (
        <div key={index} className="flex items-center space-x-2 mt-2">
          <BookOpen className="h-4 w-4" />
          <span>
            {course.code} - {course.name} (Grade: {course.grade})
          </span>
        </div>
      ))}
    </div>
  );
};
