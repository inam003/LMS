import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchAndFilterUsers } from "@/components/Admin/SearchAndFilterUsers";
import { UserTable } from "@/components/Admin/UserTable";
import { Pagination } from "@/components/Admin/Pagination";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "student",
    status: "approved",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "teacher",
    status: "approved",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "student",
    status: "pending",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "teacher",
    status: "pending",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "student",
    status: "approved",
  },
  {
    id: 6,
    name: "Eva Wilson",
    email: "eva@example.com",
    role: "student",
    status: "approved",
  },
  {
    id: 7,
    name: "Frank Miller",
    email: "frank@example.com",
    role: "teacher",
    status: "pending",
  },
  {
    id: 8,
    name: "Grace Lee",
    email: "grace@example.com",
    role: "student",
    status: "approved",
  },
  {
    id: 9,
    name: "Henry Taylor",
    email: "henry@example.com",
    role: "student",
    status: "pending",
  },
  {
    id: 10,
    name: "Ivy Chen",
    email: "ivy@example.com",
    role: "teacher",
    status: "approved",
  },
  {
    id: 11,
    name: "Jack Brown",
    email: "jack@example.com",
    role: "student",
    status: "approved",
  },
  {
    id: 12,
    name: "Karen White",
    email: "karen@example.com",
    role: "teacher",
    status: "pending",
  },
  {
    id: 13,
    name: "Leo Garcia",
    email: "leo@example.com",
    role: "student",
    status: "approved",
  },
  {
    id: 14,
    name: "Mia Johnson",
    email: "mia@example.com",
    role: "student",
    status: "pending",
  },
  {
    id: 15,
    name: "Someone",
    email: "nathan@example.com",
    role: "teacher",
    status: "approved",
  },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const usersPerPage = 10;

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (roleFilter === "all" || user.role === roleFilter) &&
        (statusFilter === "all" || user.status === statusFilter)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, roleFilter, statusFilter]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">User Management</CardTitle>
            <CardDescription>
              View and manage all users in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SearchAndFilterUsers
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              roleFilter={roleFilter}
              setRoleFilter={setRoleFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
            <UserTable users={currentUsers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goToPreviousPage={goToPreviousPage}
              goToNextPage={goToNextPage}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
