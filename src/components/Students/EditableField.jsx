import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EditableField = ({
  label,
  id,
  name,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
