import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

export const CalendarWidget = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todaysEvents = events.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
        <div className="mt-4">
          <h4 className="font-semibold mb-2">
            Events for {selectedDate?.toDateString()}
          </h4>
          {todaysEvents.length > 0 ? (
            <ul className="space-y-2">
              {todaysEvents.map((event, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{event.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">
              No events scheduled for this day.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
