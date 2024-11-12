import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AvatarSection } from "@/components/Students/AvatarSection";
import { PersonalInfoTab } from "@/components/Students/PersonalInfoTab";
import { AcademicInfoTab } from "@/components/Students/AcademicInfoTab";

// Mock student data
const studentData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 987-6543",
  address: "456 Campus Ave, College Town, 54321",
  studentId: "S12345",
  major: "Computer Science",
  year: "Junior",
  gpa: "3.8",
  enrollmentDate: "2021-09-01",
  expectedGraduation: "2025-05-15",
  bio: "Passionate computer science student with a focus on artificial intelligence and machine learning. Active member of the Coding Club and Robotics Team.",
  courses: [
    { code: "CS301", name: "Data Structures and Algorithms", grade: "A" },
    { code: "CS302", name: "Database Systems", grade: "A-" },
    { code: "MATH201", name: "Linear Algebra", grade: "B+" },
  ],
  avatar: "../../../public/ava1.avif",
};

export default function StudentProfile() {
  const [student, setStudent] = useState(studentData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving profile:", student);
    setIsEditing(false);
  };

  return (
    <div className="my-10 mx-9 md:ml-64">
      <div className="container mx-auto p-4">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Student Profile</CardTitle>
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
                avatar={student.avatar}
                name={student.name}
                isEditing={isEditing}
              />
              <div className="md:w-2/3">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList>
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="academic">Academic Info</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal">
                    <PersonalInfoTab
                      student={student}
                      isEditing={isEditing}
                      handleInputChange={handleInputChange}
                    />
                  </TabsContent>
                  <TabsContent value="academic">
                    <AcademicInfoTab
                      student={student}
                      isEditing={isEditing}
                      handleInputChange={handleInputChange}
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
}
