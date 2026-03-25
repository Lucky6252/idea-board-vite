import "./editable-textArea.styles.css";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { MdEdit } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";

//types for EditableTextArea properties
type EditableTextAreaProps = {
  //description value to be updated
  descValue: string;
  //Name of the object to be changes
  name: string;
    //Onchange giving access to Card's function to update values through global state.
  onChange: (newDescValue: string, name: string) => void;
  //useState set function to update count visibility only when editing.
  setIsEditing: (value: boolean) => void;
};

const EditableTextArea = ({
  descValue,
  name,
  onChange,
  setIsEditing,
}: EditableTextAreaProps) => {
  //Temporary value to hold new description and provides it to Card to update an Card's description
  const [tempDescValue, setTempDescValue] = useState<string>(descValue);
  //local state to control inline edit. 
  const [isEdit, setIsEdit] = useState(false);
  //global state to keep character count.
  const { counter } = useIdeas();

  //Updates onChange from Card when user click anywhere except inside text area field.
  const handleBlur = () => {
    if (tempDescValue) {
      // If there is any value in temporary value then update local boolean state and Card's onChange and boolean state.
      setIsEdit(!isEdit);
      setIsEditing(!isEdit);
      onChange(tempDescValue, name);
    }
  };

  //Handle change and update temporary value
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    counter(value.length);
    setTempDescValue(value);
  };

  //Handle span's onClick.
  const handleClick = () => {
    //Displays input field for inline edit and counter
    setIsEditing(!isEdit);
    setIsEdit(!isEdit);
  };

  //Handle edit icon's onClick.
  const handleEditButton = () => {
    //Displays input field for inline edit and counter
    setIsEditing(!isEdit);
    setIsEdit(!isEdit);
  };

  return (
    <div className="pt-5 px-2">
      {isEdit ? (
        <textarea
          className="!bg-neutral-800 !text-white w-full h-full !font-light"
          value={tempDescValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          maxLength={140}
          rows={5}
          cols={35}
        />
      ) : (
        <div className="group w-full h-full">
          <span className="text-base text-gray-50 font-light" onClick={handleClick}>
            {descValue}
          </span>
          <MdEdit className="hidden group-hover:inline size-[0.7rem] text-gray-50 ml-[0.5rem]" onClick={handleEditButton} />
        </div>
      )}
    </div>
  );
};

export default EditableTextArea;
