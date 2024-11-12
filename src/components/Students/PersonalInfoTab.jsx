import { EditableField } from "./EditableField";

export const PersonalInfoTab = ({ student, isEditing, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EditableField
          label="Full Name"
          id="name"
          name="name"
          value={student.name}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        <EditableField
          label="Email"
          id="email"
          name="email"
          value={student.email}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        <EditableField
          label="Phone"
          id="phone"
          name="phone"
          value={student.phone}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        <EditableField
          label="Address"
          id="address"
          name="address"
          value={student.address}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
    </div>
  );
};
