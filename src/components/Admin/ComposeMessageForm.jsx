import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Send } from "lucide-react";
import { Label } from "@/components/ui/label";

export const ComposeMessageForm = ({ onSendMessage }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [recipientGroup, setRecipientGroup] = useState("");
  const [scheduledDate, setScheduledDate] = useState();

  const handleSendMessage = () => {
    onSendMessage({ subject, recipientGroup, message, scheduledDate });
    // Reset form fields after sending
    setSubject("");
    setMessage("");
    setRecipientGroup("");
    setScheduledDate(undefined);
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Compose New Message</CardTitle>
        <CardDescription>
          Send a new announcement or notification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Enter message subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recipient-group">Recipient Group</Label>
            <Select value={recipientGroup} onValueChange={setRecipientGroup}>
              <SelectTrigger>
                <SelectValue placeholder="Select recipient group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-users">All Users</SelectItem>
                <SelectItem value="all-students">All Students</SelectItem>
                <SelectItem value="all-teachers">All Teachers</SelectItem>
                <SelectItem value="recent-graduates">
                  Recent Graduates
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </div>
          <div className="space-y-2">
            <Label>Schedule (Optional)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !scheduledDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {scheduledDate
                    ? format(scheduledDate, "PPP")
                    : "Schedule for later"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={scheduledDate}
                  onSelect={setScheduledDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSendMessage}>
          <Send className="mr-2 size-4" /> Send Message
        </Button>
      </CardFooter>
    </Card>
  );
};
