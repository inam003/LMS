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
  ChevronDown,
  MoreHorizontal,
  Search,
  Eye,
  Download,
  CreditCard,
  RefreshCw,
  RefreshCcw,
} from "lucide-react";
import { Pagination } from "./Pagination";

export const TransactionsTable = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const transactionsPerPage = 5;

  useEffect(() => {
    const filtered = transactions.filter(
      (transaction) =>
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (statusFilter === "all" ||
          transaction.status.toLowerCase() === statusFilter.toLowerCase())
    );
    setFilteredTransactions(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, transactions]);

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          A list of recent financial transactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Status: {statusFilter === "all" ? "All" : statusFilter}
                <ChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                All Statuses
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("completed")}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("pending")}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("failed")}>
                Failed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium pl-3">Date</TableHead>
                <TableHead className="font-medium">Description</TableHead>
                <TableHead className="font-medium">Amount</TableHead>
                <TableHead className="font-medium pl-5">Status</TableHead>
                <TableHead className="font-medium">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="pl-3 py-3">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="py-3">
                    {transaction.description}
                  </TableCell>
                  <TableCell className="py-3">
                    ${transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="py-3">
                    <Badge
                      variant={
                        transaction.status === "Completed"
                          ? "success"
                          : transaction.status === "Pending"
                          ? "warning"
                          : "destructive"
                      }
                    >
                      {transaction.status}
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
                        <DropdownMenuItem className="cursor-pointer">
                          <div className="flex items-center">
                            <Eye className="size-4 mr-2" />
                            View details
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <div className="flex items-center">
                            <Download className="size-4 mr-2" />
                            Download receipt
                          </div>
                        </DropdownMenuItem>
                        {transaction.status === "Pending" && (
                          <DropdownMenuItem className="cursor-pointer">
                            <CreditCard className="mr-2 size-4" />
                            Process payment
                          </DropdownMenuItem>
                        )}
                        {transaction.status === "Failed" && (
                          <DropdownMenuItem className="cursor-pointer">
                            <RefreshCw className="mr-2 size-4" />
                            Retry payment
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          <div className="flex items-center hover:text-red-600">
                            <RefreshCcw className="mr-2 size-4" />
                            Refund payment
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
