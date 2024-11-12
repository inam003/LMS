import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

export const RecentActivity = ({ activities }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start space-x-4">
              <Avatar className="mt-0.5">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${activity.user}`}
                  alt={activity.user}
                />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user}{" "}
                  <span className="text-muted-foreground">
                    {activity.action}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.course}
                </p>
                <div className="flex items-center pt-2">
                  <Clock className="mr-2 h-3 w-3 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
