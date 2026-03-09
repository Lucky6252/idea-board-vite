import "./editable-textArea.styles.css";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { MdEdit } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";

type EditableTextAreaProps = {
  descValue: string;
  name: string;
  onChange: (newDescValue: string, name: string) => void;
  setIsEditing: (value: boolean) => void;
};

const EditableTextArea = ({
  descValue,
  name,
  onChange,
  setIsEditing,
}: EditableTextAreaProps) => {
  const [tempDescValue, setTempDescValue] = useState<string>(descValue);
  const [isEdit, setIsEdit] = useState(false);
  const { counter } = useIdeas();

  const handleBlur = () => {
    if (tempDescValue) {
      setIsEdit(!isEdit);
      setIsEditing(!isEdit);
      onChange(tempDescValue, name);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    counter(value.length);
    setTempDescValue(value);
  };

  const handleClick = () => {
    setIsEditing(!isEdit);
    setIsEdit(!isEdit);
  };

  const handleEditButton = () => {
    setIsEditing(!isEdit);
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <textarea
          className="desc-text-area"
          value={tempDescValue}
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
          <MdEdit className="desc-edit-icon" onClick={handleEditButton} />
        </>
      )}
    </>
  );
};

export default EditableTextArea;
