import { useState, type ChangeEvent } from "react";
import "./eidtable-input.styles.css";

type EditableInputProps = {
  titleValue: string;
  onChange: (newTitleValue: string) => void;
};

const EditableInput = ({ titleValue, onChange }: EditableInputProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [tempValue, setTempValue] = useState<string>(titleValue);

  const handleBlur = () => {
    setIsEditable(false);
    onChange(tempValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTempValue(value);
  };

  const handleClick = () => {
    setIsEditable(true);
  }

  return (
    <>
      {isEditable ? (
        <input
          value={tempValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span onClick={handleClick}>{titleValue}</span>
      )}
    </>
  );
};

export default EditableInput;
