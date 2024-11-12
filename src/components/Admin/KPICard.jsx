import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const KPICard = ({ title, value, icon: Icon, change }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {title === "Revenue"
            ? `$${value.toLocaleString()}`
            : value.toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground">
          {change > 0 ? "+" : ""}
          {change}% from last month
        </p>
        <Progress
          value={50 + change}
          className="mt-2"
          indicatorColor={change >= 0 ? "bg-green-500" : "bg-red-500"}
        />
      </CardContent>
    </Card>
  );
};
