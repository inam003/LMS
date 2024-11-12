import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronRight } from "lucide-react";

export const RecentMessages = ({ messages }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {messages.map((message, index) => (
            <li key={index} className="flex items-start space-x-2">
              <MessageCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">{message.sender}</p>
                <p className="text-sm text-gray-500">{message.message}</p>
                <p className="text-xs text-gray-400">{message.time}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button variant="link" className="mt-4 w-full">
          View All Messages
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
