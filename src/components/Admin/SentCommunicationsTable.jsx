import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Eye,
  RepeatIcon,
  Trash,
} from "lucide-react";
import { Pagination } from "./Pagination";

export const SentCommunicationsTable = ({ communications }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCommunications, setFilteredCommunications] =
    useState(communications);
  const communicationsPerPage = 5;

  useEffect(() => {
    const filtered = communications.filter((message) =>
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCommunications(filtered);
    setCurrentPage(1);
  }, [searchTerm, communications]);

  const totalPages = Math.ceil(
    filteredCommunications.length / communicationsPerPage
  );
  const indexOfLastCommunication = currentPage * communicationsPerPage;
  const indexOfFirstCommunication =
    indexOfLastCommunication - communicationsPerPage;
  const currentCommunications = filteredCommunications.slice(
    indexOfFirstCommunication,
    indexOfLastCommunication
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Sent Communications</CardTitle>
        <CardDescription>
          History of sent messages and announcements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder="Search communications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium pl-3">Subject</TableHead>
                <TableHead className="font-medium">Recipient Group</TableHead>
                <TableHead className="font-medium">Date Sent</TableHead>
                <TableHead className="font-medium">Open Rate</TableHead>
                <TableHead className="font-medium">Response Rate</TableHead>
                <TableHead className="font-medium">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCommunications.map((comm) => (
                <TableRow key={comm.id}>
                  <TableCell className="font-medium pl-3 py-3">
                    {comm.subject}
                  </TableCell>
                  <TableCell className="py-3">{comm.recipientGroup}</TableCell>
                  <TableCell className="py-3">{comm.dateSent}</TableCell>
                  <TableCell className="pl-5 py-3">
                    <Badge variant="secondary">{comm.openRate}</Badge>
                  </TableCell>
                  <TableCell className="pl-7 py-3">
                    <Badge variant="secondary">{comm.responseRate}</Badge>
                  </TableCell>
                  <TableCell className="pl-5 py-3">
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
                            View details
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <div className="flex items-center">
                            <RepeatIcon className="size-4 mr-2" />
                            Resend
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          <div className="flex items-center hover:text-red-500">
                            <Trash className="size-4 mr-2" />
                            Delete
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
      </CardContent>
      <CardFooter>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      </CardFooter>
    </Card>
  );
};
