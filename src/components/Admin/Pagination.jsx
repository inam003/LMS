import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
}) => {
  return (
    <div className="flex items-center justify-between w-full space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-4 mr-2" />
        Previous
      </Button>
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="size-4 ml-2" />
      </Button>
    </div>
  );
};
