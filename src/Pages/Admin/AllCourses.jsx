import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { AddCourseDialog } from "@/components/Admin/AddCourseDialog";
import { SearchAndFilterCourses } from "@/components/Admin/SearchAndFilterCourses";
import { CourseTable } from "@/components/Admin/CourseTable";
import { Pagination } from "@/components/Admin/Pagination";

const courses = [
  {
    id: 1,
    name: "Introduction to Programming",
    instructor: "John Doe",
    category: "Computer Science",
    status: "active",
    students: 120,
  },
  {
    id: 2,
    name: "Advanced Mathematics",
    instructor: "Jane Smith",
    category: "Mathematics",
    status: "active",
    students: 80,
  },
  {
    id: 3,
    name: "World History",
    instructor: "Bob Johnson",
    category: "History",
    status: "inactive",
    students: 95,
  },
  {
    id: 4,
    name: "English Literature",
    instructor: "Alice Brown",
    category: "Literature",
    status: "active",
    students: 110,
  },
  {
    id: 5,
    name: "Physics 101",
    instructor: "Charlie Davis",
    category: "Science",
    status: "active",
    students: 75,
  },
  {
    id: 6,
    name: "Web Development Bootcamp",
    instructor: "Eva Wilson",
    category: "Computer Science",
    status: "active",
    students: 150,
  },
  {
    id: 7,
    name: "Business Ethics",
    instructor: "Frank Miller",
    category: "Business",
    status: "inactive",
    students: 60,
  },
  {
    id: 8,
    name: "Graphic Design Fundamentals",
    instructor: "Grace Lee",
    category: "Arts",
    status: "active",
    students: 90,
  },
  {
    id: 9,
    name: "Environmental Science",
    instructor: "Henry Taylor",
    category: "Science",
    status: "active",
    students: 70,
  },
  {
    id: 10,
    name: "Digital Marketing",
    instructor: "Ivy Chen",
    category: "Marketing",
    status: "active",
    students: 130,
  },
  {
    id: 11,
    name: "Spanish for Beginners",
    instructor: "Jack Brown",
    category: "Languages",
    status: "active",
    students: 85,
  },
  {
    id: 12,
    name: "Data Science and Analytics",
    instructor: "Karen White",
    category: "Computer Science",
    status: "active",
    students: 100,
  },
  {
    id: 13,
    name: "Music Theory",
    instructor: "Leo Garcia",
    category: "Arts",
    status: "inactive",
    students: 50,
  },
  {
    id: 14,
    name: "Psychology 101",
    instructor: "Mia Johnson",
    category: "Social Sciences",
    status: "active",
    students: 140,
  },
  {
    id: 15,
    name: "Financial Planning",
    instructor: "Nathan Lee",
    category: "Finance",
    status: "active",
    students: 65,
  },
];

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isAddCourseDialogOpen, setIsAddCourseDialogOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    instructor: "",
    category: "",
  });
  const coursesPerPage = 10;

  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "all" || course.category === categoryFilter) &&
        (statusFilter === "all" || course.status === statusFilter)
    );
    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, statusFilter]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  const uniqueCategories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  const handleAddCourse = () => {
    // Here you would typically send the new course data to your backend
    console.log("Adding new course:", newCourse);
    setIsAddCourseDialogOpen(false);
    setNewCourse({ name: "", instructor: "", category: "" });
  };

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto my-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Courses Management</CardTitle>
                <CardDescription>
                  Manage and oversee all courses in the system
                </CardDescription>
              </div>
              <AddCourseDialog
                isOpen={isAddCourseDialogOpen}
                setIsOpen={setIsAddCourseDialogOpen}
                newCourse={newCourse}
                setNewCourse={setNewCourse}
                handleAddCourse={handleAddCourse}
                uniqueCategories={uniqueCategories}
              />
            </div>
          </CardHeader>
          <CardContent>
            <SearchAndFilterCourses
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              uniqueCategories={uniqueCategories}
            />
            <CourseTable courses={currentCourses} />
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

export default AllCourses;
