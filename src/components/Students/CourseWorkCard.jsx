import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseWorkTable } from "./CourseWorkTable";

export const CourseWorkCard = ({ title, items }) => {
  return (
    <Card className="border border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CourseWorkTable items={items} />
      </CardContent>
    </Card>
  );
};
