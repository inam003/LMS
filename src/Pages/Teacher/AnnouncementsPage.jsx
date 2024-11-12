import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateAnnouncementForm } from "@/components/Teachers/CreateAnnouncementForm";
import { AnnouncementStatistics } from "@/components/Teachers/AnnouncementStatistics";
import { AnnouncementTable } from "@/components/Teachers/AnnouncementTable";

const mockAnnouncements = [
  {
    id: 1,
    title: "Welcome to the course",
    datePosted: "2023-09-01",
    status: "Published",
  },
  {
    id: 2,
    title: "Midterm exam details",
    datePosted: "2023-10-15",
    status: "Published",
  },
  {
    id: 3,
    title: "Project deadline extended",
    datePosted: "2023-11-05",
    status: "Published",
  },
  {
    id: 4,
    title: "Holiday schedule",
    datePosted: "2023-12-01",
    status: "Scheduled",
  },
];

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState(mockAnnouncements);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleEditAnnouncement = (id) => {
    console.log(`Editing announcement with id: ${id}`);
    // Implement edit functionality
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((a) => a.id !== id));
  };

  const handleSaveDraft = () => {
    console.log("Saving announcement as draft");
    setIsCreateDialogOpen(false);
    // Implement save draft functionality
  };

  const handlePublish = () => {
    console.log("Publishing announcement");
    setIsCreateDialogOpen(false);
    // Implement publish functionality
  };

  return (
    <div className="my-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                Announcements - Introduction to Computer Science
              </CardTitle>
              <CardDescription>
                Create and manage announcements for your course
              </CardDescription>
            </div>
            <Dialog
              open={isCreateDialogOpen}
              onOpenChange={setIsCreateDialogOpen}
            >
              <DialogTrigger asChild>
                <Button>Create New Announcement</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Announcement</DialogTitle>
                  <DialogDescription>
                    Create a new announcement for your students.
                  </DialogDescription>
                </DialogHeader>
                <CreateAnnouncementForm
                  onSaveDraft={handleSaveDraft}
                  onPublish={handlePublish}
                />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <AnnouncementStatistics announcements={announcements} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Announcement List</CardTitle>
          </CardHeader>
          <CardContent>
            <AnnouncementTable
              announcements={announcements}
              onEditAnnouncement={handleEditAnnouncement}
              onDeleteAnnouncement={handleDeleteAnnouncement}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
