import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const GradeStatistics = ({ grades }) => {
  const totalEntries = grades.length;
  const averageGrade =
    grades.length > 0
      ? (
          grades.reduce(
            (sum, grade) => sum + (grade.grade / grade.maxGrade) * 100,
            0
          ) / grades.length
        ).toFixed(2)
      : "N/A";
  const lastUpdated =
    grades.length > 0
      ? new Date(
          Math.max(...grades.map((g) => new Date(g.submissionDate).getTime()))
        ).toLocaleDateString()
      : "N/A";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalEntries}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {averageGrade !== "N/A" ? `${averageGrade}%` : averageGrade}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lastUpdated}</div>
        </CardContent>
      </Card>
    </div>
  );
};
