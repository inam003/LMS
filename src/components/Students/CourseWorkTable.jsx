import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const CourseWorkTable = ({ items }) => {
  return (
    <div className="overflow-y-auto border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border-r px-4 py-3">Course</TableHead>
            <TableHead className="px-4 py-3">Last Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium border-r px-4 py-3">
                {item.title}
              </TableCell>
              <TableCell className="px-4 py-3">{item.lastDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
