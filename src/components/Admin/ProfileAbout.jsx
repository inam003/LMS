import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap } from "lucide-react";

export function ProfileAbout({ personalInfo, isEditing, onChange }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          name="department"
          value={personalInfo.department}
          onChange={onChange}
          disabled={!isEditing}
        />
      </div>
      <div>
        <Label htmlFor="title">Role</Label>
        <Input
          id="title"
          name="title"
          value={personalInfo.title}
          onChange={onChange}
          disabled={!isEditing}
        />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={personalInfo.bio}
          onChange={onChange}
          disabled={!isEditing}
          rows={4}
        />
      </div>
      <div>
        <Label>Education</Label>
        <div className="flex items-center space-x-2 mt-1">
          <GraduationCap className="size-4" />
          <span>
            BS Software Engineering - Virtual University of Pakistan, 2025
          </span>
        </div>
      </div>
    </div>
  );
}
