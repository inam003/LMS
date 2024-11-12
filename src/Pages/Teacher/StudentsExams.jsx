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
import { CreateExamForm } from "@/components/Teachers/CreateExamForm";
import { ExamStatistics } from "@/components/Teachers/ExamStatistics";
import { ExamTable } from "@/components/Teachers/ExamTable";

const fetchExams = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Midterm Exam",
          date: new Date("2023-11-15"),
          status: "upcoming",
          questionCount: 50,
        },
        {
          id: "2",
          title: "Final Exam",
          date: new Date("2023-12-10"),
          status: "completed",
          questionCount: 100,
        },
      ]);
    }, 1000);
  });
};

const StudentsExams = () => {
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  useEffect(() => {
    fetchExams()
      .then((data) => {
        setExams(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch exams");
        setIsLoading(false);
      });
  }, []);

  const handleCreateExam = (values) => {
    const newExam = {
      id: Date.now().toString(),
      title: values.title,
      date: values.date,
      status: "upcoming",
      questionCount: 1, // Assuming we start with one question
    };
    setExams([...exams, newExam]);
    setIsCreateDialogOpen(false);
  };

  const handleDeleteExam = (id) => {
    setExams(exams.filter((exam) => exam.id !== id));
  };

  const handleEditExam = (id) => {
    console.log(`Edit exam with id: ${id}`);
  };

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="my-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                Exams - Introduction to Computer Science
              </CardTitle>
              <CardDescription>
                Create, manage, and grade exams for your course
              </CardDescription>
            </div>

            <Dialog
              open={isCreateDialogOpen}
              onOpenChange={setIsCreateDialogOpen}
            >
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create New Exam
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader className="text-left">
                  <DialogTitle>Create New Exam</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new exam.
                  </DialogDescription>
                </DialogHeader>
                <CreateExamForm onSubmit={handleCreateExam} />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <ExamStatistics exams={exams} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exam List</CardTitle>
          </CardHeader>
          <CardContent>
            <ExamTable
              exams={exams}
              isLoading={isLoading}
              onEditExam={handleEditExam}
              onDeleteExam={handleDeleteExam}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentsExams;
