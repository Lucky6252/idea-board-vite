import { useState, type ChangeEvent } from "react";
import { MdEdit } from "react-icons/md";
import "./eidtable-input.styles.css";

//types for EditableInput properties
type EditableInputProps = {
  //title value to be updated
  titleValue?: string | undefined;
  //Name of the object to be changes
  name: string;
  //Onchange giving access to Card's function to update values through global state.
  onChange: (newTitleValue: string, name: string) => void;
};

const EditableInput = ({ titleValue, name, onChange }: EditableInputProps) => {
  //local state to control inline edit. 
  const [isEditable, setIsEditable] = useState<boolean>(false);
  //Temporary value to hold new title and provides it to Card to update an card's title
  const [tempValue, setTempValue] = useState<string | undefined>(titleValue);

  //Updates onChange from Card when user click anywhere except inside input field. 
  const handleBlur = () => {
    //updates Card boolen local state to control count visibility.
    setIsEditable(false);
    if (tempValue) {
      // If there is any value in temporary value then update Card's onChange.
      onChange(tempValue, name);
    }
  };

  //Handle change and update temporary value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTempValue(value);
  };

  //Handle span's onClick.
  const handleClick = () => {
    //Displays input field for inline edit.
    setIsEditable(true);
  };

  //Handle edit icon's onClick.
  const handleEditButton = () => {
    //Displays input field for inline edit.
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
