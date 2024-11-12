import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { AddContentDialog } from "@/components/Admin/AddContentDialog";
import { SearchAndFilterContent } from "@/components/Admin/SearchAndFilterContent";
import { ContentTable } from "@/components/Admin/ContentTable";
import { Pagination } from "@/components/Admin/Pagination";

// Mock content data
const contentItems = [
  {
    id: 1,
    title: "Introduction to React",
    type: "Article",
    category: "Programming",
    status: "Published",
    author: "John Doe",
    lastUpdated: "2023-11-15",
  },
  {
    id: 2,
    title: "Advanced JavaScript Techniques",
    type: "Video",
    category: "Programming",
    status: "Draft",
    author: "Jane Smith",
    lastUpdated: "2023-11-14",
  },
  {
    id: 3,
    title: "Data Structures Quiz",
    type: "Quiz",
    category: "Computer Science",
    status: "Published",
    author: "Bob Johnson",
    lastUpdated: "2023-11-13",
  },
  {
    id: 4,
    title: "History of Ancient Rome",
    type: "Article",
    category: "History",
    status: "Published",
    author: "Alice Brown",
    lastUpdated: "2023-11-12",
  },
  {
    id: 5,
    title: "Calculus Problem Set",
    type: "Assignment",
    category: "Mathematics",
    status: "Draft",
    author: "Charlie Davis",
    lastUpdated: "2023-11-11",
  },
  {
    id: 6,
    title: "Introduction to Machine Learning",
    type: "Video",
    category: "Data Science",
    status: "Published",
    author: "Eva Wilson",
    lastUpdated: "2023-11-10",
  },
  {
    id: 7,
    title: "English Literature Analysis",
    type: "Assignment",
    category: "Literature",
    status: "Published",
    author: "Frank Miller",
    lastUpdated: "2023-11-09",
  },
  {
    id: 8,
    title: "Web Design Principles",
    type: "Article",
    category: "Design",
    status: "Draft",
    author: "Grace Lee",
    lastUpdated: "2023-11-08",
  },
  {
    id: 9,
    title: "Physics Experiment Guide",
    type: "Assignment",
    category: "Science",
    status: "Published",
    author: "Henry Taylor",
    lastUpdated: "2023-11-07",
  },
  {
    id: 10,
    title: "Digital Marketing Strategies",
    type: "Quiz",
    category: "Marketing",
    status: "Draft",
    author: "Ivy Chen",
    lastUpdated: "2023-11-06",
  },
];

const ContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [isAddContentDialogOpen, setIsAddContentDialogOpen] = useState(false);
  const [newContent, setNewContent] = useState({
    title: "",
    type: "",
    category: "",

    content: "",
  });
  const itemsPerPage = 5;

  useEffect(() => {
    const filtered = contentItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (typeFilter === "all" || item.type === typeFilter) &&
        (statusFilter === "all" || item.status === statusFilter)
    );
    setFilteredContent(filtered);
    setCurrentPage(1);
  }, [searchTerm, typeFilter, statusFilter]);

  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContent.slice(indexOfFirstItem, indexOfLastItem);

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  const uniqueTypes = Array.from(
    new Set(contentItems.map((item) => item.type))
  );
  const uniqueCategories = Array.from(
    new Set(contentItems.map((item) => item.category))
  );

  const handleAddContent = () => {
    // Here you would typically send the new content data to your backend
    console.log("Adding new content:", newContent);
    setIsAddContentDialogOpen(false);
    setNewContent({ title: "", type: "", category: "", content: "" });
  };

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto my-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Content Management</CardTitle>
                <CardDescription>
                  Manage and organize all educational content
                </CardDescription>
              </div>
              <AddContentDialog
                isOpen={isAddContentDialogOpen}
                setIsOpen={setIsAddContentDialogOpen}
                newContent={newContent}
                setNewContent={setNewContent}
                handleAddContent={handleAddContent}
                uniqueTypes={uniqueTypes}
                uniqueCategories={uniqueCategories}
              />
            </div>
          </CardHeader>
          <CardContent>
            <SearchAndFilterContent
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              uniqueTypes={uniqueTypes}
            />
            <ContentTable contentItems={currentItems} />
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
      </div>
    </div>
  );
};

export default ContentManagement;
