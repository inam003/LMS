import React from "react";
import { useState } from "react";
import {
  Users,
  FileText,
  Calendar as CalendarIcon,
  BarChart,
} from "lucide-react";
import { QuickStats } from "@/components/Teachers/QuickStats";
import { CourseOverview } from "@/components/Teachers/CourseOverview";
import { UpcomingDeadlines } from "@/components/Teachers/UpcomingDeadlines";
import { RecentActivity } from "@/components/Teachers/RecentActivity";
import { RecentMessages } from "@/components/Teachers/RecentMessages";
import { CalendarWidget } from "@/components/Teachers/CalendarWidget";

const quickStats = [
  { title: "Total Students", value: 30, icon: Users },
  { title: "Assignments", value: 5, icon: FileText },
  { title: "Upcoming Exams", value: 2, icon: CalendarIcon },
  { title: "Course Progress", value: "65%", icon: BarChart },
];

const upcomingDeadlines = [
  { title: "CS101 Midterm", date: "2023-06-20", urgent: true },
  { title: "CS202 Project Submission", date: "2023-06-25", urgent: false },
  { title: "CS303 Quiz", date: "2023-06-30", urgent: false },
];

const course = {
  id: "CS101",
  name: "Introduction to Computer Science",
  students: 30,
  progress: 65,
  description:
    "This course provides an introduction to the fundamental concepts of computer science, including programming, algorithms, and data structures.",
  nextLecture: "Data Types and Variables",
  nextLectureDate: "2024-10-12",
};

const recentActivities = [
  {
    user: "John Doe",
    action: "submitted assignment",
    course: "CS101",
    time: "2 hours ago",
  },
  {
    user: "Jane Smith",
    action: "asked a question",
    course: "CS202",
    time: "4 hours ago",
  },
  {
    user: "Mike Johnson",
    action: "viewed lecture notes",
    course: "CS303",
    time: "1 day ago",
  },
];

const recentMessages = [
  {
    sender: "John Doe",
    message: "Question about the upcoming exam",
    time: "2 hours ago",
  },
  {
    sender: "Jane Smith",
    message: "Submitted my assignment",
    time: "5 hours ago",
  },
  {
    sender: "Admin",
    message: "New department policy update",
    time: "1 day ago",
  },
];

const calendarEvents = [
  { date: new Date(2024, 10, 1), title: "CS101 Midterm" },
  { date: new Date(2024, 9, 10), title: "CS202 Project Due" },
  { date: new Date(2024, 9, 10), title: "CS303 Quiz" },
];

const TeacherHome = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todaysEvents = calendarEvents.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  );
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto pb-6">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold">
                Welcome, Prof Muhammad Inam Aslam
              </h1>
              <p className="text-gray-500">
                Today is {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <QuickStats stats={quickStats} />
            <CourseOverview course={course} />
            <UpcomingDeadlines deadlines={upcomingDeadlines} />
            <RecentActivity activities={recentActivities} />
          </div>

          <div className="space-y-6">
            <RecentMessages messages={recentMessages} />
            <CalendarWidget events={calendarEvents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
