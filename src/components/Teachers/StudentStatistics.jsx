import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Statistic = ({ title, value }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export const StudentStatistics = ({
  totalStudents,
  averageGrade,
  attendanceRate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Statistic title="Total Students" value={totalStudents} />
      <Statistic title="Average Grade" value={averageGrade} />
      <Statistic title="Attendance Rate" value={attendanceRate} />
    </div>
  );
};
