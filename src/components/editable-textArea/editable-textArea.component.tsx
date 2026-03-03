import "./editable-textArea.styles.css";
import { useState } from "react";
import type { ChangeEvent } from "react";

type EditableTextAreaProps = {
  descValue: string;
  onChange: (newDescValue: string) => void;
};

const EditableTextArea = ({ descValue, onChange }: EditableTextAreaProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [tempValue, setTempValue] = useState<string>(descValue);

  const handleBlur = () => {
    setIsEditable(false);
    onChange(tempValue);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setTempValue(value);
  };

  const handleClick = () => {
    setIsEditable(true);
  };

  return (
    <>
      {isEditable ? (
        <textarea
          className="title-input"
          value={tempValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          maxLength={140}
          rows={5}
          cols={35}
        />
      ) : (
        <span onClick={handleClick}>
          <h2>{descValue}</h2>
        </span>
      )}
    </>
  );
};

export default EditableTextArea;
