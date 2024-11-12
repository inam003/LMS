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

// Sample data (replace with actual data fetching logic)
const upcomingExams = [
  {
    id: 1,
    course: "React Fundamentals",
    date: "2024-10-20",
    time: "10:00 AM",
    duration: "2 hours",
  },
  {
    id: 2,
    course: "Advanced JavaScript",
    date: "2024-10-25",
    time: "2:00 PM",
    duration: "1.5 hours",
  },
  {
    id: 3,
    course: "Database Systems",
    date: "2024-11-01",
    time: "11:00 AM",
    duration: "3 hours",
  },
  {
    id: 4,
    course: "UI/UX Design Principles",
    date: "2024-11-05",
    time: "9:00 AM",
    duration: "2 hours",
  },
];

const Exams = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-medium">Upcoming Exams</h1>
      <div className="container mx-auto p-4 space-y-6">
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-primary text-2xl">
              Exam Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/10">
                    <TableHead className="font-semibold border-r px-4 py-3">
                      Course
                    </TableHead>
                    <TableHead className="font-semibold border-r px-4 py-3">
                      Date
                    </TableHead>
                    <TableHead className="font-semibold border-r px-4 py-3">
                      Time
                    </TableHead>
                    <TableHead className="font-semibold px-4 py-3">
                      Duration
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingExams.map((exam, index) => (
                    <TableRow
                      key={exam.id}
                      className={index % 2 === 0 ? "bg-secondary/5" : ""}
                    >
                      <TableCell className="font-medium border-r px-4 py-3">
                        {exam.course}
                      </TableCell>
                      <TableCell className="border-r px-4 py-3">
                        {exam.date}
                      </TableCell>
                      <TableCell className="border-r px-4 py-3">
                        {exam.time}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        {exam.duration}
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

export default Exams;
