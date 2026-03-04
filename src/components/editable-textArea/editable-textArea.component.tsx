import "./editable-textArea.styles.css";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { MdEdit } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";

type EditableTextAreaProps = {
  descValue: string;
  name: string;
  onChange: (newDescValue: string, name: string) => void;
};

const EditableTextArea = ({ descValue, name, onChange }: EditableTextAreaProps) => {
  const [tempValue, setTempValue] = useState<string>(descValue);
  const {counter, isEditable, isEdit} = useIdeas();

  const handleBlur = () => {
    isEditable(false);
    onChange(tempValue, name);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    counter(value.length);
    setTempValue(value);
  };

  const handleClick = () => {
    isEditable(true);
  };

  const handleEditButton = () => {
    isEditable(true);

  }

  return (
    <>
      {isEdit ? (
        <textarea
          className="desc-text-area"
          value={tempValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          maxLength={140}
          rows={5}
          cols={35}
        />
      ) : (
        <>
        <span className="desc-span" onClick={handleClick}>
          {descValue}
        </span>
        <MdEdit className="desc-edit-icon" onClick={handleEditButton}/>
        </>
      )}
    </>
  );
};

export default EditableTextArea;
