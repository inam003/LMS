import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Megaphone, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const AnnouncementCard = ({ announcement }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <Card className="mb-4 w-full">
        <CollapsibleTrigger className="w-full text-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${announcement.author}`}
                  />
                  <AvatarFallback>{announcement.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <CardTitle className="text-lg">
                    {announcement.title}
                  </CardTitle>
                  <CardDescription>
                    {announcement.author} • {announcement.date}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                {announcement.type === "overall" ? (
                  <Megaphone className="h-5 w-5 text-gray-500" />
                ) : (
                  <div className="flex items-center text-sm font-medium text-blue-600">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {announcement.courseCode}
                  </div>
                )}
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            <p className="text-sm text-gray-700">{announcement.content}</p>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
