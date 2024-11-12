import React from "react";
import Navbar from "@/components/Teachers/Navbar";
import Sidebar from "@/components/Teachers/Sidebar";
import { Outlet } from "react-router-dom";

const TeachersDashboard = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar className="flex basis-1/5 overflow-hidden" />
        <div
          className="flex-1
         pt-11 h-screen overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TeachersDashboard;
