import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";

export const SearchAndFilterGrade = ({
  searchTerm,
  setSearchTerm,
  courseFilter,
  setCourseFilter,
  gradeFilter,
  setGradeFilter,
  uniqueCourses,
  gradeOptions,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
      <div className="relative w-full md:w-64">
        <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
        <Input
          placeholder="Search gradings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="flex space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Course: {courseFilter === "all" ? "All" : courseFilter}
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setCourseFilter("all")}>
              All Courses
            </DropdownMenuItem>
            {uniqueCourses.map((course) => (
              <DropdownMenuItem
                key={course}
                onClick={() => setCourseFilter(course)}
              >
                {course}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Grade: {gradeFilter === "all" ? "All" : gradeFilter}
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setGradeFilter("all")}>
              All Grades
            </DropdownMenuItem>
            {gradeOptions.map((grade) => (
              <DropdownMenuItem
                key={grade}
                onClick={() => setGradeFilter(grade)}
              >
                {grade}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
