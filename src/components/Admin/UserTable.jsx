import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Edit, Eye, MoreHorizontal, Settings2Icon } from "lucide-react";

export const UserTable = ({ users }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium pl-4">Name</TableHead>
            <TableHead className="font-medium">Email</TableHead>
            <TableHead className="font-medium pl-6">Role</TableHead>
            <TableHead className="font-medium pl-6">Status</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium pl-4 py-3">
                {user.name}
              </TableCell>
              <TableCell className="py-3">{user.email}</TableCell>
              <TableCell className="py-3">
                <Badge
                  variant={user.role === "teacher" ? "default" : "secondary"}
                >
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="py-3">
                <Badge
                  variant={user.status === "approved" ? "success" : "warning"}
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="py-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="size-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => navigator.clipboard.writeText(user.email)}
                    >
                      <div className="flex items-center">
                        <Copy className="size-4 mr-2" />
                        Copy email
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center">
                        <Eye className="size-4 mr-2" />
                        View details
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center">
                        <Edit className="size-4 mr-2" />
                        Edit user
                      </div>
                    </DropdownMenuItem>
                    {user.status === "pending" && (
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <Settings2Icon className="size-4 mr-2" />
                          Approve user
                        </div>
                      </DropdownMenuItem>
                    )}
                    {user.status === "approved" && (
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <Settings2Icon className="size-4 mr-2" />
                          Set as pending
                        </div>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
