import React from "react";
import { NavLink } from "react-router-dom";
import exam from "../../../public/exam.png";
import assignment from "../../../public/assignment.png";
import result from "../../../public/result.png";
import announcements from "../../../public/announcement.png";
import { Home, Users } from "lucide-react";

const Sidebar = () => {
  const menus = [
    {
      path: "/Teacher",
      icon: <Home className="size-4" />,
      title: "Home",
    },
    {
      path: "Students",
      icon: <Users className="size-4" />,
      title: "Students",
    },
    {
      path: "Quizzes",
      icon: <img src={assignment} />,
      title: "Quizzes",
    },
    {
      path: "Assignments",
      icon: <img src={assignment} />,
      title: "Assignments",
    },
    {
      path: "Exams",
      icon: <img src={exam} />,
      title: "Exams",
    },
    {
      path: "Grading",
      icon: <img src={result} />,
      title: "Grading",
    },
    {
      path: "Announcements",
      icon: <img src={announcements} />,
      title: "Announcements",
    },
  ];
  // bg-[#c0c1d6]

  return (
    <div className="hidden md:inline fixed md:w-56 top-16 left-0 min-h-[91.1vh] max-h-full overflow-hidden bg-white border-r border-slate-200 py-4">
      <nav className="items-start px-2 lg:px-3 text-sm font-medium h-full">
        {menus.map((item, id) => (
          <div key={id}>
            <NavLink
              end={item.path === "/Teacher"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200 hover:text-black ${
                  isActive ? "bg-slate-200 text-black" : ""
                }`
              }
              to={item.path}
            >
              <span className="size-4">{item.icon}</span>
              {item.title}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
