import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradeStatistics } from "@/components/Teachers/GradeStatistics";
import { GradeTable } from "@/components/Teachers/GradeTable";

const fetchGrades = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          studentName: "Alice Johnson",
          studentId: "S001",
          assignmentName: "Midterm Quiz",
          type: "quiz",
          grade: 85,
          maxGrade: 100,
          submissionDate: "2023-10-15",
        },
        {
          id: "2",
          studentName: "Bob Smith",
          studentId: "S002",
          assignmentName: "Midterm Quiz",
          type: "quiz",
          grade: 92,
          maxGrade: 100,
          submissionDate: "2023-10-15",
        },
        {
          id: "3",
          studentName: "Charlie Brown",
          studentId: "S003",
          assignmentName: "Midterm Quiz",
          type: "quiz",
          grade: 78,
          maxGrade: 100,
          submissionDate: "2023-10-15",
        },
      ]);
    }, 1000);
  });
};

const Gradings = () => {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGrades()
      .then((data) => {
        setGrades(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch grades");
        setIsLoading(false);
      });
  }, []);

  const handleUpdateGrade = (updatedGrade) => {
    const updatedGrades = grades.map((g) =>
      g.id === updatedGrade.id ? updatedGrade : g
    );
    setGrades(updatedGrades);
  };

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="my-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">
              Grading - Introduction to Computer Science
            </CardTitle>
            <CardDescription>
              View and manage student grades for quizzes and assignments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GradeStatistics grades={grades} />
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-2xl">Grade Entries</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4">Loading grades...</div>
            ) : (
              <GradeTable grades={grades} onUpdateGrade={handleUpdateGrade} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gradings;
