import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";

export const GradingTable = ({ gradings }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium pl-3">Student Name</TableHead>
            <TableHead className="font-medium">Course</TableHead>
            <TableHead className="font-medium">Assignment</TableHead>
            <TableHead className="font-medium">Grade</TableHead>
            <TableHead className="font-medium">Submission Date</TableHead>
            <TableHead className="font-medium">Graded By</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gradings.map((grading) => (
            <TableRow key={grading.id}>
              <TableCell className="font-medium pl-3 py-3">
                {grading.studentName}
              </TableCell>
              <TableCell className="py-3">{grading.course}</TableCell>
              <TableCell className="py-3">{grading.assignment}</TableCell>
              <TableCell className="py-3">
                <Badge
                  variant={
                    grading.grade.startsWith("A")
                      ? "success"
                      : grading.grade.startsWith("B")
                      ? "default"
                      : "destructive"
                  }
                >
                  {grading.grade}
                </Badge>
              </TableCell>
              <TableCell className="py-3">{grading.submissionDate}</TableCell>
              <TableCell className="py-3">{grading.gradedBy}</TableCell>
              <TableCell className="py-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="size-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center">
                        <Eye className="size-4 mr-2" />
                        View details
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center">
                        <Edit className="size-4 mr-2" />
                        Edit grades
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center hover:text-red-500">
                        <Trash className="size-4 mr-2" />
                        Delete enrollment
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
