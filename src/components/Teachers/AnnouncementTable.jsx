import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, TrashIcon } from "lucide-react";

export const AnnouncementTable = ({
  announcements,
  onEditAnnouncement,
  onDeleteAnnouncement,
}) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium px-4">Title</TableHead>
            <TableHead className="font-medium">Date Posted</TableHead>
            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {announcements.map((announcement) => (
            <TableRow key={announcement.id}>
              <TableCell className="font-medium px-4 py-3">
                {announcement.title}
              </TableCell>
              <TableCell className="py-3">{announcement.datePosted}</TableCell>
              <TableCell className="py-3">
                <Badge
                  variant={
                    announcement.status === "Published"
                      ? "default"
                      : "secondary"
                  }
                >
                  {announcement.status}
                </Badge>
              </TableCell>
              <TableCell className="px-3 py-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => onEditAnnouncement(announcement.id)}
                    >
                      <div className="flex items-center">
                        <Edit className="size-4 mr-2" />
                        <span>Edit</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => onDeleteAnnouncement(announcement.id)}
                    >
                      <div className="flex items-center hover:text-red-500">
                        <TrashIcon className="size-4 mr-2" />
                        <span>Delete</span>
                      </div>
                    </DropdownMenuItem>
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
