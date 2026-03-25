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
    <div className="px-2">
      {isEditable ? (
        <input
          className="w-full !bg-neutral-800 !text-white mt-4 text-2xl text-center"
          value={tempValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span className="flex flex-row w-full justify-center mt-4 item-ceter group gap-1" onClick={handleClick}>
          <h2 className="text-white text-2xl">{titleValue}</h2>
          <MdEdit className="hidden group-hover:inline size-[0.7rem] text-gray-50 mt-[0.5rem]" onClick={handleEditButton} />
        </span>
      )}
    </div>
  );
};

export default EditableInput;
