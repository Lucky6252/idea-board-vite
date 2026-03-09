import { useState, type ChangeEvent } from "react";
import { MdEdit } from "react-icons/md";
import "./eidtable-input.styles.css";

type EditableInputProps = {
  titleValue?: string | undefined;
  name: string;
  onChange: (newTitleValue: string, name: string) => void;
};

const EditableInput = ({ titleValue, name, onChange }: EditableInputProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [tempValue, setTempValue] = useState<string | undefined>(titleValue);

  const handleBlur = () => {
    setIsEditable(false);
    if (tempValue) {
      onChange(tempValue, name);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTempValue(value);
  };

  const handleClick = () => {
    setIsEditable(true);
  };

  const handleEditButton = () => {
    setIsEditable(true);
  };

  return (
    <>
      {isEditable ? (
        <input
          className="title-input"
          value={tempValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span className="title-span" onClick={handleClick}>
          <h2 className="title-h2">{titleValue}</h2>
          <MdEdit className="title-edit-icon" onClick={handleEditButton} />
        </span>
      )}
    </>
  );
};

export default EditableInput;
