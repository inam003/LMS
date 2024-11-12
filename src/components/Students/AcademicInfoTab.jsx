import { EditableField } from "./EditableField";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CourseList } from "./CourseList";

export const AcademicInfoTab = ({ student, isEditing, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EditableField
          label="Student ID"
          id="studentId"
          name="studentId"
          value={student.studentId}
          disabled={true}
        />
        <EditableField
          label="Major"
          id="major"
          name="major"
          value={student.major}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        <EditableField
          label="Year"
          id="year"
          name="year"
          value={student.year}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        <EditableField
          label="GPA"
          id="gpa"
          name="gpa"
          value={student.gpa}
          disabled={true}
        />
        <EditableField
          label="Enrollment Date"
          id="enrollmentDate"
          name="enrollmentDate"
          value={student.enrollmentDate}
          disabled={true}
        />
        <EditableField
          label="Expected Graduation"
          id="expectedGraduation"
          name="expectedGraduation"
          value={student.expectedGraduation}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={student.bio}
          onChange={handleInputChange}
          disabled={!isEditing}
          rows={4}
        />
      </div>
      <CourseList courses={student.courses} />
    </div>
  );
};
