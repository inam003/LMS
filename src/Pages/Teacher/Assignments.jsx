import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { CreateAssignmentForm } from "@/components/Teachers/CreateAssignmentForm";
import { AssignmentStatistics } from "@/components/Teachers/AssignmentStatistics";
import { AssignmentTable } from "@/components/Teachers/AssignmentTable";

const fetchAssignments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Midterm Project",
          dueDate: "2023-11-15",
          status: "published",
        },
        {
          id: "2",
          name: "Final Essay",
          dueDate: "2023-12-10",
          status: "draft",
        },
        {
          id: "3",
          name: "Group Presentation",
          dueDate: "2023-11-30",
          status: "published",
        },
      ]);
    }, 1000);
  });
};

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchAssignments()
      .then((data) => {
        setAssignments(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch assignments");
        setIsLoading(false);
      });
  }, []);

  const handleCreateAssignment = (newAssignment) => {
    const assignmentToAdd = {
      id: Date.now().toString(),
      ...newAssignment,
    };
    setAssignments([...assignments, assignmentToAdd]);
    setIsDialogOpen(false);
  };

  const handleDeleteAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const handleEditAssignment = (id) => {
    console.log(`Edit assignment with id: ${id}`);
  };

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                Assignments - Introduction to Computer Science
              </CardTitle>
              <CardDescription>
                Manage and view assignments for your course
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create Assignment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Assignment</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new assignment.
                  </DialogDescription>
                </DialogHeader>

                <CreateAssignmentForm onSubmit={handleCreateAssignment} />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <AssignmentStatistics assignments={assignments} />
          </CardContent>
        </Card>

        <Card className="col-span-3 lg:col-span-2 mb-6">
          <CardHeader>
            <CardTitle>Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <AssignmentTable
                assignments={assignments}
                onEditAssignment={handleEditAssignment}
                onDeleteAssignment={handleDeleteAssignment}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assignments;
