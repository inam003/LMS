import React from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, TrashIcon } from "lucide-react";

export const ExamTable = ({ exams, isLoading, onEditExam, onDeleteExam }) => {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4">Exam Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Avg. Score</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                Loading exams...
              </TableCell>
            </TableRow>
          ) : (
            exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell className="font-medium px-4 py-3">
                  {exam.title}
                </TableCell>
                <TableCell className="py-3">
                  {format(exam.date, "PPP")}
                </TableCell>
                <TableCell className="px-0 py-3">
                  <Badge
                    variant={
                      exam.status === "completed" ? "default" : "secondary"
                    }
                  >
                    {exam.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-7 py-3">
                  {exam.questionCount}
                </TableCell>
                <TableCell className="px-7 py-3">
                  {exam.averageScore ? `${exam.averageScore}%` : "N/A"}
                </TableCell>
                <TableCell className="py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => onEditExam(exam.id)}
                      >
                        <div className="flex items-center">
                          <Edit className="size-4 mr-2" />
                          <span>Edit</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => onDeleteExam(exam.id)}
                      >
                        <div className="flex items-center hover:text-red-500">
                          <TrashIcon className="size-4 mr-2" />
                          <span>Delete</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
