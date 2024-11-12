import React from "react";
import { Users, GraduationCap, BookOpen, DollarSign } from "lucide-react";
import { KPICard } from "@/components/Admin/KPICard";
import { RecentActivities } from "@/components/Admin/RecentActivities";
import { UpcomingEvents } from "@/components/Admin/UpcomingEvents";
import { TopCourses } from "@/components/Admin/TopCourses";

const kpiData = [
  { title: "Total Students", value: 5280, icon: Users, change: 12 },
  { title: "Total Teachers", value: 320, icon: GraduationCap, change: 5 },
  { title: "Active Courses", value: 150, icon: BookOpen, change: -2 },
  { title: "Revenue", value: 287500, icon: DollarSign, change: 8 },
];

const recentActivities = [
  { user: "John Doe", action: "enrolled in", target: "Advanced Mathematics" },
  {
    user: "Jane Smith",
    action: "submitted assignment for",
    target: "Introduction to Physics",
  },
  {
    user: "Admin User",
    action: "added new course",
    target: "Web Development Fundamentals",
  },
  { user: "Sarah Johnson", action: "updated profile information", target: "" },
  {
    user: "Mike Brown",
    action: "completed course",
    target: "Data Science Basics",
  },
  {
    user: "Mike Brown",
    action: "completed course",
    target: "Data Science Basics",
  },
  {
    user: "Mike Brown",
    action: "completed course",
    target: "Data Science Basics",
  },
];

const topCourses = [
  { name: "Introduction to Programming", enrollments: 320 },
  { name: "Data Science Fundamentals", enrollments: 280 },
  { name: "Web Development Bootcamp", enrollments: 250 },
  { name: "Machine Learning Basics", enrollments: 200 },
  { name: "Digital Marketing Essentials", enrollments: 180 },
  { name: "Frontend Development", enrollments: 200 },
  { name: "Cyber Security", enrollments: 300 },
];

const upcomingEvents = [
  {
    date: new Date(2024, 9, 25),
    title: "Fall Semester Start",
    type: "academic",
  },
  {
    date: new Date(2024, 10, 15),
    title: "Teacher Training Workshop",
    type: "training",
  },
  { date: new Date(2024, 10, 20), title: "Student Orientation", type: "event" },
  {
    date: new Date(2024, 11, 1),
    title: "Course Registration Deadline",
    type: "deadline",
  },
  {
    date: new Date(2024, 11, 10),
    title: "Annual Education Conference",
    type: "conference",
  },
];

const AdminHome = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <RecentActivities activities={recentActivities} />
          <TopCourses courses={topCourses} />
        </div>

        <div className="mt-6">
          <UpcomingEvents events={upcomingEvents} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
