import Navbar from "@/components/Admin/Navbar";
import Sidebar from "@/components/Admin/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
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

export default AdminDashboard;
