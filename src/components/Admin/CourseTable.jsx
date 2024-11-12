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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Edit,
  Eye,
  MoreHorizontal,
  PauseCircle,
  PlayCircle,
  Trash,
} from "lucide-react";

export const CourseTable = ({ courses }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium pl-4">Course Name</TableHead>
            <TableHead className="font-medium">Instructor</TableHead>
            <TableHead className="font-medium">Category</TableHead>
            <TableHead className="font-medium pl-3">Status</TableHead>
            <TableHead className="font-medium">Students</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium pl-4 py-3">
                {course.name}
              </TableCell>
              <TableCell className="py-3">{course.instructor}</TableCell>
              <TableCell className="py-3">{course.category}</TableCell>
              <TableCell className="py-3 pl-2">
                <Badge
                  variant={course.status === "active" ? "success" : "secondary"}
                >
                  {course.status.charAt(0).toUpperCase() +
                    course.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="pl-7 py-3">{course.students}</TableCell>
              <TableCell className="pl-4 py-3">
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
                        Edit course
                      </div>
                    </DropdownMenuItem>
                    {course.status === "active" ? (
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <PauseCircle className="size-4 mr-2" />
                          Deactivate course
                        </div>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <PlayCircle className="size-4 mr-2" />
                          Activate course
                        </div>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center hover:text-red-500">
                        <Trash className="size-4 mr-2" />
                        Delete course
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
