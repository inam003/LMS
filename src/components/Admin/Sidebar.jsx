import React from "react";
import { NavLink } from "react-router-dom";
import exam from "../../../public/exam.png";
import assignment from "../../../public/assignment.png";
import {
  CircleHelp,
  Home,
  MessageSquareMore,
  Users,
  Wallet,
} from "lucide-react";

const Sidebar = () => {
  const menus = [
    {
      path: "/Admin",
      icon: <Home className="size-4" />,
      title: "Home",
    },
    {
      path: "UserManagement",
      icon: <Users className="size-4" />,
      title: "User Management",
    },
    {
      path: "AllCourses",
      icon: <img src={assignment} />,
      title: "All Courses",
    },
    {
      path: "Gradings",
      icon: <img src={exam} />,
      title: "Gradings",
    },
    {
      path: "ContentManagement",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 7h8v2H6zm0 4h12v2H6zm0 4h2.99v2H6z"
          ></path>
          <path
            fill="currentColor"
            d="m14 3l-3-3v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2H4V4h7v2Zm-4 18l3 3v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4v2h4v16h-7v-2Z"
          ></path>
        </svg>
      ),
      title: "Content Management",
    },
    {
      path: "Finance",
      icon: <Wallet className="size-4" />,
      title: "Finance",
    },
    {
      path: "Communication",
      icon: <MessageSquareMore className="size-4" />,
      title: "Communication",
    },
    {
      path: "Support",
      icon: <CircleHelp className="size-4" />,
      title: "Support",
    },
  ];
  // bg-[#c0c1d6]

  return (
    <div className="hidden md:inline fixed md:w-56 top-16 left-0 min-h-[91.1vh] max-h-full overflow-hidden bg-white border-r border-slate-200 py-4">
      <nav className="items-start px-2 lg:px-3 text-sm font-medium h-full">
        {menus.map((item, id) => (
          <div key={id}>
            <NavLink
              end={item.path === "/Admin"}
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
