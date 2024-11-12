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
import { CreateQuizForm } from "@/components/Teachers/CreateQuizForm";
import { QuizTable } from "@/components/Teachers/QuizTable";

const fetchQuizzes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Midterm Review",
          questionCount: 5,
          status: "published",
        },
        {
          id: "2",
          title: "Final Exam Prep",
          questionCount: 10,
          status: "draft",
        },
        {
          id: "3",
          title: "Chapter 1-3 Quiz",
          questionCount: 15,
          status: "published",
        },
      ]);
    }, 1000);
  });
};

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchQuizzes()
      .then((data) => {
        setQuizzes(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch quizzes");
        setIsLoading(false);
      });
  }, []);

  const handleCreateQuiz = (newQuiz) => {
    const quizToAdd = {
      id: Date.now().toString(),
      title: newQuiz.title,
      questionCount: newQuiz.questions.length,
      status: newQuiz.status,
    };
    setQuizzes([...quizzes, quizToAdd]);
    setIsDialogOpen(false);
  };

  const handleDeleteQuiz = (id) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  const handleEditQuiz = (id) => {
    console.log(`Edit quiz with id: ${id}`);
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
                Quizzes - Introduction to Computer Science
              </CardTitle>
              <CardDescription>
                Create and manage quizzes for your course
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 size-4" /> Create Quiz
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Quiz</DialogTitle>
                  <DialogDescription>
                    Create a new quiz with 5, 10, or 15 multiple choice
                    questions.
                  </DialogDescription>
                </DialogHeader>
                <CreateQuizForm onSubmit={handleCreateQuiz} />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <QuizTable
                quizzes={quizzes}
                onEditQuiz={handleEditQuiz}
                onDeleteQuiz={handleDeleteQuiz}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quizzes;
