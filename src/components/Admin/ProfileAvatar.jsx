import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CameraIcon } from "lucide-react";

export function ProfileAvatar({ isEditing, avatarUrl, onChangeAvatar }) {
  return (
    <div className="relative">
      <Avatar className="size-48 mx-8">
        <AvatarImage src={avatarUrl} alt="Admin Avatar" />
      </Avatar>
      {isEditing && (
        <Button
          size="icon"
          className="absolute bottom-0 lg:bottom-52 left-40 top-40 rounded-full"
          onClick={onChangeAvatar}
        >
          <CameraIcon className="size-4" />
          <span className="sr-only">Change avatar</span>
        </Button>
      )}
    </div>
  );
}
