import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const courseResults = [
  { id: 1, course: "React Fundamentals", grade: "A", score: 92, credits: 3 },
  { id: 2, course: "Advanced JavaScript", grade: "B+", score: 87, credits: 4 },
  { id: 3, course: "Database Systems", grade: "A-", score: 90, credits: 3 },
  {
    id: 4,
    course: "UI/UX Design Principles",
    grade: "A",
    score: 95,
    credits: 3,
  },
  {
    id: 5,
    course: "Data Structures and Algorithms",
    grade: "B",
    score: 83,
    credits: 4,
  },
];

const Results = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-medium">Results</h1>
      <div className="container mx-auto p-4 space-y-6">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">
              Course Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold text-primary border-r px-4 py-3">
                      Course
                    </TableHead>
                    <TableHead className="font-semibold text-primary border-r px-4 py-3">
                      Grade
                    </TableHead>
                    <TableHead className="font-semibold text-primary border-r px-4 py-3">
                      Score
                    </TableHead>
                    <TableHead className="font-semibold text-primary px-4 py-3">
                      Credits
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseResults.map((course, index) => (
                    <TableRow
                      key={course.id}
                      className={index % 2 === 0 ? "bg-muted/20" : ""}
                    >
                      <TableCell className="font-medium border-r px-4 py-3">
                        {course.course}
                      </TableCell>
                      <TableCell className="border-r px-4 py-3">
                        {course.grade}
                      </TableCell>
                      <TableCell className="border-r px-4 py-3">
                        {course.score}%
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        {course.credits}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
