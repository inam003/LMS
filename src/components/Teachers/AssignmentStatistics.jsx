import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AssignmentStatistics = ({ assignments }) => {
  const totalAssignments = assignments.length;
  const publishedAssignments = assignments.filter(
    (a) => a.status === "published"
  ).length;
  const draftAssignments = assignments.filter(
    (a) => a.status === "draft"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAssignments}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Published Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{publishedAssignments}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Draft Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{draftAssignments}</div>
        </CardContent>
      </Card>
    </div>
  );
};
