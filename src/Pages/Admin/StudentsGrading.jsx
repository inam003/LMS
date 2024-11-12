import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Pagination } from "@/components/Admin/Pagination";
import { AddGradeDialog } from "@/components/Admin/AddGradeDialog";
import { SearchAndFilterGrade } from "@/components/Admin/SearchAndFilterGrade";
import { GradingTable } from "@/components/Admin/GradingTable";

const gradings = [
  {
    id: 1,
    studentName: "John Doe",
    course: "Introduction to Programming",
    assignment: "Final Project",
    grade: "A",
    submissionDate: "2023-11-15",
    gradedBy: "Prof. Smith",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    course: "Advanced Mathematics",
    assignment: "Midterm Exam",
    grade: "B+",
    submissionDate: "2023-11-10",
    gradedBy: "Prof. Johnson",
  },
  {
    id: 3,
    studentName: "Bob Johnson",
    course: "World History",
    assignment: "Research Paper",
    grade: "A-",
    submissionDate: "2023-11-12",
    gradedBy: "Prof. Williams",
  },
  {
    id: 4,
    studentName: "Alice Brown",
    course: "English Literature",
    assignment: "Essay Analysis",
    grade: "B",
    submissionDate: "2023-11-14",
    gradedBy: "Prof. Davis",
  },
  {
    id: 5,
    studentName: "Charlie Davis",
    course: "Physics 101",
    assignment: "Lab Report",
    grade: "A+",
    submissionDate: "2023-11-16",
    gradedBy: "Prof. Wilson",
  },
  {
    id: 6,
    studentName: "Eva Wilson",
    course: "Web Development Bootcamp",
    assignment: "Portfolio Project",
    grade: "A",
    submissionDate: "2023-11-18",
    gradedBy: "Prof. Taylor",
  },
  {
    id: 7,
    studentName: "Frank Miller",
    course: "Business Ethics",
    assignment: "Case Study",
    grade: "B-",
    submissionDate: "2023-11-20",
    gradedBy: "Prof. Anderson",
  },
  {
    id: 8,
    studentName: "Grace Lee",
    course: "Graphic Design Fundamentals",
    assignment: "Logo Design",
    grade: "A-",
    submissionDate: "2023-11-22",
    gradedBy: "Prof. Thomas",
  },
  {
    id: 9,
    studentName: "Henry Taylor",
    course: "Environmental Science",
    assignment: "Field Report",
    grade: "B+",
    submissionDate: "2023-11-24",
    gradedBy: "Prof. Martinez",
  },
  {
    id: 10,
    studentName: "Ivy Chen",
    course: "Digital Marketing",
    assignment: "Campaign Strategy",
    grade: "A",
    submissionDate: "2023-11-26",
    gradedBy: "Prof. Garcia",
  },
];

const StudentsGrading = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [gradeFilter, setGradeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredGradings, setFilteredGradings] = useState(gradings);
  const [isAddGradeDialogOpen, setIsAddGradeDialogOpen] = useState(false);
  const [newGrade, setNewGrade] = useState({
    studentName: "",
    course: "",
    assignment: "",
    grade: "",
    submissionDate: "",
    gradedBy: "",
  });
  const gradingsPerPage = 5;

  useEffect(() => {
    const filtered = gradings.filter(
      (grading) =>
        (grading.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          grading.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          grading.assignment
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (courseFilter === "all" || grading.course === courseFilter) &&
        (gradeFilter === "all" || grading.grade.startsWith(gradeFilter))
    );
    setFilteredGradings(filtered);
    setCurrentPage(1);
  }, [searchTerm, courseFilter, gradeFilter]);

  const totalPages = Math.ceil(filteredGradings.length / gradingsPerPage);
  const indexOfLastGrading = currentPage * gradingsPerPage;
  const indexOfFirstGrading = indexOfLastGrading - gradingsPerPage;
  const currentGradings = filteredGradings.slice(
    indexOfFirstGrading,
    indexOfLastGrading
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  const uniqueCourses = Array.from(
    new Set(gradings.map((grading) => grading.course))
  );
  const gradeOptions = [
    "A+",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];

  const handleAddGrade = () => {
    // Here you would typically send the new grade data to your backend
    console.log("Adding new grade:", newGrade);
    setIsAddGradeDialogOpen(false);
    setNewGrade({
      studentName: "",
      course: "",
      assignment: "",
      grade: "",
      submissionDate: "",
      gradedBy: "",
    });
  };

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto my-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Gradings Management</CardTitle>
                <CardDescription>
                  View and manage all student grades
                </CardDescription>
              </div>
              <AddGradeDialog
                isOpen={isAddGradeDialogOpen}
                setIsOpen={setIsAddGradeDialogOpen}
                newGrade={newGrade}
                setNewGrade={setNewGrade}
                handleAddGrade={handleAddGrade}
                uniqueCourses={uniqueCourses}
                gradeOptions={gradeOptions}
              />
            </div>
          </CardHeader>
          <CardContent>
            <SearchAndFilterGrade
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              courseFilter={courseFilter}
              setCourseFilter={setCourseFilter}
              gradeFilter={gradeFilter}
              setGradeFilter={setGradeFilter}
              uniqueCourses={uniqueCourses}
              gradeOptions={gradeOptions}
            />
            <GradingTable gradings={currentGradings} />
          </CardContent>
          <CardFooter>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goToPreviousPage={goToPreviousPage}
              goToNextPage={goToNextPage}
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StudentsGrading;
