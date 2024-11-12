import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PersonalInfoTab = ({ personalInfo, isEditing, onChange }) => {
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
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
      </div>
    </div>
  );
};
