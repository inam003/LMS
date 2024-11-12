import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AnnouncementStatistics = ({ announcements }) => {
  const totalAnnouncements = announcements.length;
  const pinnedAnnouncements = announcements.filter((a) => a.isPinned).length;
  const scheduledAnnouncements = announcements.filter(
    (a) => a.status === "Scheduled"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAnnouncements}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pinned Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{pinnedAnnouncements}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Scheduled Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{scheduledAnnouncements}</div>
        </CardContent>
      </Card>
    </div>
  );
};
