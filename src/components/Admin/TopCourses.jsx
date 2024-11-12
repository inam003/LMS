import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TopCourses = ({ courses }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Courses</CardTitle>
        <CardDescription>Courses with highest enrollments.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {courses.map((course, index) => (
            <div
              key={index}
              className="mb-4 last:mb-0 flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{course.name}</p>
                <p className="text-sm text-muted-foreground">
                  Enrollments: {course.enrollments}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
