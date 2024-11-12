import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const RecentActivities = ({ activities }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest actions across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {activities.map((activity, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.action}{" "}
                {activity.target && (
                  <span className="font-medium">{activity.target}</span>
                )}
              </p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
