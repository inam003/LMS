import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AvatarSection } from "@/components/Teachers/AvatarSection";
import { PersonalInfoTab } from "@/components/Teachers/PersonalInfoTab";
import { ProfessionalInfoTab } from "@/components/Teachers/ProfessionalInfoTab";

const teacherData = {
  name: "Muhammad Inam Aslam",
  email: "teacher@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Education St, Knowledge City, 12345",
  department: "Computer Science",
  title: "Associate Professor",
  bio: "Passionate educator with 10+ years of experience in teaching computer science. Specializes in AI and machine learning.",
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Tech University",
      year: 2010,
    },
    {
      degree: "M.S. in Computer Science",
      institution: "Innovation College",
      year: 2005,
    },
  ],
  avatar: "../../../public/ava1.avif",
  notificationPreferences: {
    email: true,
    sms: false,
    inApp: true,
  },
};

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState(teacherData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving profile:", teacher);
    setIsEditing(false);
  };

  return (
    <div className="my-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Teacher Profile</CardTitle>
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
              <AvatarSection
                avatar={teacher.avatar}
                name={teacher.name}
                isEditing={isEditing}
              />
              <div className="md:w-2/3">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="professional">
                      Professional Info
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal">
                    <PersonalInfoTab
                      personalInfo={teacher}
                      isEditing={isEditing}
                      onChange={handleInputChange}
                    />
                  </TabsContent>
                  <TabsContent value="professional">
                    <ProfessionalInfoTab
                      professionalInfo={teacher}
                      isEditing={isEditing}
                      onChange={handleInputChange}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
        {isEditing && (
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherProfile;
