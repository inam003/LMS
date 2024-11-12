import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";

export const CourseOverview = ({ course }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Overview: {course.id}</CardTitle>
        <CardDescription>{course.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{course.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Total Students</span>
            <Badge variant="outline">{course.students}</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Course Progress</span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="w-full" />
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium">
              Next Lecture: {course.nextLecture}
            </p>
            <p className="text-xs text-muted-foreground">
              Date: {course.nextLectureDate}
            </p>
          </div>
          <Button className="w-full">
            View Course Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
