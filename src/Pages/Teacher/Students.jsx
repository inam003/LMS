import React, { useState, useEffect } from "react";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StudentStatistics } from "@/components/Teachers/StudentStatistics";
import { StudentList } from "@/components/Teachers/StudentList";
import { StudentsRecentActivity } from "@/components/Teachers/StudentsRecentActivity";

const fetchStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000);
  });
};

const fetchRecentActivities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recentActivities);
    }, 1000);
  });
};

// Mock data
const students = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    currentGrade: "A",
    attendanceRate: 95,
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    currentGrade: "B",
    attendanceRate: 88,
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    currentGrade: "B+",
    attendanceRate: 92,
  },
  {
    id: "4",
    name: "Diana Ross",
    email: "diana@example.com",
    currentGrade: "A-",
    attendanceRate: 97,
  },
  {
    id: "5",
    name: "Ethan Hunt",
    email: "ethan@example.com",
    currentGrade: "C+",
    attendanceRate: 85,
  },
  {
    id: "6",
    name: "Fiona Davis",
    email: "fiona@example.com",
    currentGrade: "A",
    attendanceRate: 93,
  },
  {
    id: "7",
    name: "George King",
    email: "george@example.com",
    currentGrade: "B-",
    attendanceRate: 82,
  },
  {
    id: "8",
    name: "Hannah Lee",
    email: "hannah@example.com",
    currentGrade: "A+",
    attendanceRate: 99,
  },
  {
    id: "9",
    name: "Isaac Newton",
    email: "isaac@example.com",
    currentGrade: "B",
    attendanceRate: 89,
  },
  {
    id: "10",
    name: "Julia Roberts",
    email: "julia@example.com",
    currentGrade: "A-",
    attendanceRate: 96,
  },
  {
    id: "11",
    name: "Kevin Hart",
    email: "kevin@example.com",
    currentGrade: "C",
    attendanceRate: 80,
  },
  {
    id: "12",
    name: "Laura Palmer",
    email: "laura@example.com",
    currentGrade: "B+",
    attendanceRate: 91,
  },
  {
    id: "13",
    name: "Mike Tyson",
    email: "mike@example.com",
    currentGrade: "B",
    attendanceRate: 87,
  },
  {
    id: "14",
    name: "Nina Simone",
    email: "nina@example.com",
    currentGrade: "A",
    attendanceRate: 94,
  },
  {
    id: "15",
    name: "Oscar Wilde",
    email: "oscar@example.com",
    currentGrade: "C+",
    attendanceRate: 83,
  },
];

const recentActivities = [
  {
    id: "1",
    student: "Alice Johnson",
    action: "Submitted assignment",
    time: "2 hours ago",
  },
  {
    id: "2",
    student: "Bob Smith",
    action: "Posted in forum",
    time: "4 hours ago",
  },
  {
    id: "3",
    student: "Charlie Brown",
    action: "Viewed lecture notes",
    time: "1 day ago",
  },
  {
    id: "4",
    student: "Diana Ross",
    action: "Completed quiz",
    time: "1 day ago",
  },
  {
    id: "5",
    student: "Ethan Hunt",
    action: "Attended virtual office hours",
    time: "2 days ago",
  },
];

const Students = () => {
  const [students, setStudents] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchStudents(), fetchRecentActivities()])
      .then(([studentsData, activitiesData]) => {
        setStudents(studentsData);
        setActivities(activitiesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  if (isLoading) {
    return <div className="text-center my-72">Loading...</div>;
  }

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">
              Students - Introduction to Computer Science
            </CardTitle>
            <CardDescription>
              Manage and view student information for your course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudentStatistics
              totalStudents={students.length}
              averageGrade="B+"
              attendanceRate="92%"
            />
          </CardContent>
        </Card>

        <div className="mb-6">
          <StudentList students={students} />
        </div>

        <div className="mb-6">
          <StudentsRecentActivity activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Students;
