import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CameraIcon } from "lucide-react";

export const AvatarSection = ({ avatar, name, isEditing }) => {
  return (
    <div className="relative">
      <Avatar className="size-48 mx-8">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      {isEditing && (
        <Button
          size="icon"
          className="absolute bottom-0 lg:bottom-52 left-40 top-40 rounded-full"
        >
          <CameraIcon className="size-4" />
          <span className="sr-only">Change avatar</span>
        </Button>
      )}
    </div>
  );
};
