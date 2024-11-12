import React from "react";
import Navbar from "@/components/Students/Navbar";
import Sidebar from "@/components/Students/Sidebar";
import { Outlet } from "react-router-dom";

const StudentsDashboard = () => {
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

export default StudentsDashboard;
