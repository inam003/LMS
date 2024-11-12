import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ExamStatistics = ({ exams }) => {
  const totalExams = exams.length;
  const upcomingExams = exams.filter(
    (exam) => exam.status === "upcoming"
  ).length;
  const completedExams = exams.filter(
    (exam) => exam.status === "completed"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalExams}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Exams</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{upcomingExams}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Exams</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedExams}</div>
        </CardContent>
      </Card>
    </div>
  );
};
