import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap } from "lucide-react";

export const ProfessionalInfoTab = ({
  professionalInfo,
  isEditing,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          name="department"
          value={professionalInfo.department}
          onChange={onChange}
          disabled={!isEditing}
        />
      </div>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={professionalInfo.title}
          onChange={onChange}
          disabled={!isEditing}
        />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={professionalInfo.bio}
          onChange={onChange}
          disabled={!isEditing}
          rows={4}
        />
      </div>
      <div>
        <Label>Education</Label>
        {professionalInfo.education.map((edu, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <GraduationCap className="h-4 w-4" />
            <span>
              {edu.degree} - {edu.institution}, {edu.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
