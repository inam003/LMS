import React, { useState } from "react";
import { SupportSummaryCards } from "@/components/Admin/SupportSummaryCards";
import { SupportTicketTable } from "@/components/Admin/SupportTicketTable";
import { TicketDetailsDialog } from "@/components/Admin/TicketDetailsDialog";

const supportTickets = [
  {
    subject: "Login Issues",
    user: "john@example.com",
    status: "Open",
    priority: "High",
    createdAt: "2023-11-20 10:30",
  },
  {
    subject: "Course Access Problem",
    user: "sarah@example.com",
    status: "In Progress",
    priority: "Medium",
    createdAt: "2023-11-19 15:45",
  },
  {
    subject: "Payment Failed",
    user: "mike@example.com",
    status: "Closed",
    priority: "High",
    createdAt: "2023-11-18 09:15",
  },
  {
    subject: "Certificate Not Received",
    user: "emily@example.com",
    status: "Open",
    priority: "Low",
    createdAt: "2023-11-17 14:20",
  },
  {
    subject: "Video Playback Error",
    user: "chris@example.com",
    status: "In Progress",
    priority: "Medium",
    createdAt: "2023-11-16 11:50",
  },
];

const Support = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedTicket(null);
  };

  const handleReply = (replyText) => {
    console.log(
      "Replying to ticket:",
      selectedTicket?.id,
      "with text:",
      replyText
    );
  };

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-6">Support Center</h1>
        <SupportSummaryCards supportTickets={supportTickets} />
        <SupportTicketTable
          supportTickets={supportTickets}
          onViewTicket={handleViewTicket}
        />
        <TicketDetailsDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          ticket={selectedTicket}
          onReply={handleReply}
        />
      </div>
    </div>
  );
};

export default Support;
