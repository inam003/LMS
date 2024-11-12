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
import {
  BookOpen,
  Download,
  Edit,
  Eye,
  FileText,
  ListTodo,
  MoreHorizontal,
  Trash,
  Upload,
  Video,
} from "lucide-react";

export const ContentTable = ({ contentItems }) => {
  const getContentTypeIcon = (type) => {
    switch (type) {
      case "Article":
        return <FileText className="size-4" />;
      case "Video":
        return <Video className="size-4" />;
      case "Quiz":
        return <ListTodo className="size-4" />;
      case "Assignment":
        return <BookOpen className="size-4" />;
      default:
        return <FileText className="size-4" />;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium pl-3">Title</TableHead>
            <TableHead className="font-medium">Type</TableHead>
            <TableHead className="font-medium">Category</TableHead>
            <TableHead className="font-medium pl-3">Status</TableHead>
            <TableHead className="font-medium">Author</TableHead>
            <TableHead className="font-medium">Last Updated</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium pl-3 py-3">
                {item.title}
              </TableCell>
              <TableCell className="py-3">
                <div className="flex items-center">
                  {getContentTypeIcon(item.type)}
                  <span className="ml-2">{item.type}</span>
                </div>
              </TableCell>
              <TableCell className="py-3">{item.category}</TableCell>
              <TableCell className="py-3">
                <Badge
                  variant={
                    item.status === "Published" ? "success" : "secondary"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="py-3">{item.author}</TableCell>
              <TableCell className="py-3">{item.lastUpdated}</TableCell>
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
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center">
                        <Eye className="size-4 mr-2" />
                        View content
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center">
                        <Edit className="size-4 mr-2" />
                        Edit content
                      </div>
                    </DropdownMenuItem>
                    {item.status === "Draft" ? (
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <Upload className="size-4 mr-2" />
                          Publish
                        </div>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <Download className="size-4 mr-2" />
                          Unpublish
                        </div>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex items-center hover:text-red-500">
                        <Trash className="size-4 mr-2" />
                        Delete course
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
