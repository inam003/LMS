import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileAvatar } from "@/components/Admin/ProfileAvatar";
import { ProfileAbout } from "@/components/Admin/ProfileAbout";

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Full Name",
    email: "example@email.com",
    department: "Department",
    title: "Admin",
    bio: "Introduction about the Administrator.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving profile:", personalInfo);
    setIsEditing(false);
  };

  const handleChangeAvatar = () => {
    // Implement avatar change logic here
    console.log("Changing avatar");
  };

  return (
    <div className="my-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Admin Profile</CardTitle>
              <CardDescription>
                View and manage your personal information
              </CardDescription>
            </div>
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-y-8">
              <ProfileAvatar
                isEditing={isEditing}
                avatarUrl="/ava1.avif"
                onChangeAvatar={handleChangeAvatar}
              />
              <div className="md:w-2/3">
                <ProfileAbout
                  personalInfo={personalInfo}
                  isEditing={isEditing}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end w-full">
              {isEditing && (
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save Changes</Button>
                </div>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
