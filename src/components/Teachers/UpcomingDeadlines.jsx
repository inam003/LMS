import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const UpcomingDeadlines = ({ deadlines }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {deadlines.map((deadline, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{deadline.title}</span>
              </div>
              <Badge variant={deadline.urgent ? "destructive" : "outline"}>
                {deadline.date}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
