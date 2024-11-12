import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

export const AddGradeDialog = ({
  isOpen,
  setIsOpen,
  newGrade,
  setNewGrade,
  handleAddGrade,
  uniqueCourses,
  gradeOptions,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 size-4" /> Add New Grade
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Grade</DialogTitle>
          <DialogDescription>
            Enter the details for the new grade. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="studentName" className="text-right">
              Student Name
            </Label>
            <Input
              id="studentName"
              value={newGrade.studentName}
              onChange={(e) =>
                setNewGrade({ ...newGrade, studentName: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <Select
              value={newGrade.course}
              onValueChange={(value) =>
                setNewGrade({ ...newGrade, course: value })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {uniqueCourses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assignment" className="text-right">
              Assignment
            </Label>
            <Input
              id="assignment"
              value={newGrade.assignment}
              onChange={(e) =>
                setNewGrade({ ...newGrade, assignment: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="grade" className="text-right">
              Grade
            </Label>
            <Select
              value={newGrade.grade}
              onValueChange={(value) =>
                setNewGrade({ ...newGrade, grade: value })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a grade" />
              </SelectTrigger>
              <SelectContent>
                {gradeOptions.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="submissionDate" className="text-right">
              Submission Date
            </Label>
            <Input
              id="submissionDate"
              type="date"
              value={newGrade.submissionDate}
              onChange={(e) =>
                setNewGrade({ ...newGrade, submissionDate: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gradedBy" className="text-right">
              Graded By
            </Label>
            <Input
              id="gradedBy"
              value={newGrade.gradedBy}
              onChange={(e) =>
                setNewGrade({ ...newGrade, gradedBy: e.target.value })
              }
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddGrade}>
            Save Grade
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
