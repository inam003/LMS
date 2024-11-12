import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";

export const CreateAnnouncementForm = ({ onSaveDraft, onPublish }) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input id="title" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="content" className="text-right">
          Content
        </Label>
        <Textarea id="content" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="schedule" className="text-right">
          Schedule
        </Label>
        <div className="col-span-3 flex items-center space-x-2">
          <Input id="schedule" type="datetime-local" />
          <CalendarIcon className="h-4 w-4 text-gray-500" />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onSaveDraft}>
          Save as Draft
        </Button>
        <Button onClick={onPublish}>Publish</Button>
      </div>
    </div>
  );
};
