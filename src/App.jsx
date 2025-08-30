import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp } from "./Pages";
import {
  AdminDashboard,
  StudentsDashboard,
  TeachersDashboard,
} from "./Dashboards";
import {
  Announcements,
  ChangePassword,
  Contact,
  Courses,
  CourseWork,
  Exams,
  Progress,
  Results,
  StudentProfile,
} from "./Pages/Student";
import {
  AnnouncementsPage,
  Assignments,
  Grading,
  TeacherHome,
  Quizzes,
  Students,
  StudentsExams,
  TeacherProfile,
  TeacherSettings,
} from "./Pages/Teacher";
import {
  AdminHome,
  AdminProfile,
  AdminSettings,
  AllCourses,
  Communication,
  ContentManagement,
  Finance,
  StudentsGrading,
  Support,
  UserManagement,
} from "./Pages/Admin";
import { Home } from "./Pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Student",
    element: <StudentsDashboard />,

    children: [
      {
        path: "",
        element: <Courses />,
      },
      {
        path: "Profile",
        element: <StudentProfile />,
      },
      {
        path: "ChangePassword",
        element: <ChangePassword />,
      },
      {
        path: "CourseWork",
        element: <CourseWork />,
      },
      {
        path: "Exams",
        element: <Exams />,
      },
      {
        path: "Results",
        element: <Results />,
      },
      {
        path: "Progress",
        element: <Progress />,
      },
      {
        path: "Announcements",
        element: <Announcements />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/Teacher",
    element: <TeachersDashboard />,

    children: [
      {
        path: "",
        element: <TeacherHome />,
      },
      {
        path: "Profile",
        element: <TeacherProfile />,
      },
      {
        path: "Settings",
        element: <TeacherSettings />,
      },
      {
        path: "Students",
        element: <Students />,
      },
      {
        path: "Quizzes",
        element: <Quizzes />,
      },
      {
        path: "Assignments",
        element: <Assignments />,
      },
      {
        path: "Grading",
        element: <Grading />,
      },
      {
        path: "Exams",
        element: <StudentsExams />,
      },
      {
        path: "Announcements",
        element: <AnnouncementsPage />,
      },
    ],
  },
  {
    path: "/Admin",
    element: <AdminDashboard />,

    children: [
      {
        path: "",
        element: <AdminHome />,
      },

      {
        path: "UserManagement",
        element: <UserManagement />,
      },
      {
        path: "AllCourses",
        element: <AllCourses />,
      },
      {
        path: "Gradings",
        element: <StudentsGrading />,
      },
      {
        path: "ContentManagement",
        element: <ContentManagement />,
      },
      {
        path: "Finance",
        element: <Finance />,
      },
      {
        path: "Communication",
        element: <Communication />,
      },
      {
        path: "Support",
        element: <Support />,
      },
      {
        path: "Profile",
        element: <AdminProfile />,
      },
      {
        path: "Settings",
        element: <AdminSettings />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
