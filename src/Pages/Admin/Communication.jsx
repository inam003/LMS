import React, { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComposeMessageForm } from "@/components/Admin/ComposeMessageForm";
import { SentCommunicationsTable } from "@/components/Admin/SentCommunicationsTable";

// Mock data for sent communications
const sentCommunications = [
  {
    id: 1,
    subject: "Important Course Update",
    recipientGroup: "All Students",
    dateSent: "2023-11-20",
    openRate: "85%",
    responseRate: "42%",
  },
  {
    id: 2,
    subject: "New Feature Announcement",
    recipientGroup: "All Users",
    dateSent: "2023-11-18",
    openRate: "78%",
    responseRate: "31%",
  },
  {
    id: 3,
    subject: "Upcoming Maintenance",
    recipientGroup: "All Teachers",
    dateSent: "2023-11-15",
    openRate: "92%",
    responseRate: "56%",
  },
  {
    id: 4,
    subject: "Holiday Schedule",
    recipientGroup: "All Users",
    dateSent: "2023-11-10",
    openRate: "89%",
    responseRate: "27%",
  },
  {
    id: 5,
    subject: "Feedback Request",
    recipientGroup: "Recent Graduates",
    dateSent: "2023-11-05",
    openRate: "72%",
    responseRate: "38%",
  },
  {
    id: 6,
    subject: "Announcement",
    recipientGroup: "Recent Graduates",
    dateSent: "2023-11-05",
    openRate: "72%",
    responseRate: "38%",
  },
  {
    id: 7,
    subject: "Education",
    recipientGroup: "Recent Graduates",
    dateSent: "2023-11-05",
    openRate: "72%",
    responseRate: "38%",
  },
  {
    id: 8,
    subject: "Sports",
    recipientGroup: "Recent Graduates",
    dateSent: "2023-11-05",
    openRate: "72%",
    responseRate: "38%",
  },
  {
    id: 9,
    subject: "Leave",
    recipientGroup: "Recent Graduates",
    dateSent: "2023-11-05",
    openRate: "72%",
    responseRate: "38%",
  },
  {
    id: 10,
    subject: "New Course",
    recipientGroup: "Recent Graduates",
    dateSent: "2023-11-05",
    openRate: "72%",
    responseRate: "38%",
  },
];

const Communication = () => {
  const handleSendMessage = () => {
    console.log("Sending message:", {
      subject,
      message,
      recipientGroup,
      scheduledDate,
    });
  };

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Communication Center</h1>

        <Tabs defaultValue="compose" className="space-y-4">
          <TabsList>
            <TabsTrigger value="compose">Compose Message</TabsTrigger>
            <TabsTrigger value="sent">Sent Communications</TabsTrigger>
          </TabsList>
          <TabsContent value="compose">
            <ComposeMessageForm onSendMessage={handleSendMessage} />
          </TabsContent>
          <TabsContent value="sent">
            <SentCommunicationsTable communications={sentCommunications} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Communication;
