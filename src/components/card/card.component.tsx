import { MdDelete } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import { toast } from "react-toastify";
import { useState } from "react";

import type { ideaType } from "../../context/idea.types";
import EditableInput from "../editable-input/eidtable-input.component";
import EditableTextArea from "../editable-textArea/editable-textArea.component";
import Counter from "../counter/counter.component";
import "./card.styles.css";

//types for Card properties received from CardList.
type CardProps = {
  card: ideaType;
  idx: number;
};

const Card = ({ card, idx }: CardProps) => {
  //Safely accessed global states through custom hook
  const { removeIdea, updateIdea } = useIdeas();
  //Local state to control the counter visibility.
  const [isEditing, setIsEditing] = useState(false);
  //Decontructed values from provided card. Card provided is ideas from CartList.
  const { title, description } = card;

  //Formatted date to display DD/MM/YYYY
  const formattedDate = new Date(card.modifiedDate).toLocaleString("en-GB");

  //Notification message toast from react-toastify library. Check package.json for more details.
  //Message used to notify user after successfull update.
  const notify = () => toast("Your Idea Card is updated successfully")

  //Handles delete button. Uses global state to filter out only ideas kept.
  const onDeleteClick = () => {
    removeIdea(idx);
  };

  //Handle update and receive props from EditableInput and EditableTextArea components.
  //Updates through global state.
  const handleUpdate = (newTitleValue: string, name: string) => {
    //checks which objects needs update and ensures update only occurs if there are changes made.
    if (name === "title" && !(newTitleValue === card.title)) {
      updateIdea(idx, {
        ...card,
        title: newTitleValue,
        isUpdated: true,
        modifiedDate: Date.now(),
      });
      notify();
    } else if (name === "description" && !(newTitleValue === card.description)) {
      updateIdea(idx, {
        ...card,
        description: newTitleValue,
        isUpdated: true,
        modifiedDate: Date.now(),
      });
      notify();
    }
  };

  return (
    <div className="w-sm h-[250px] px-[5px] py-[7px] rounded-md bg-[#36393F] mt-[5px] flex flex-col
    shadow-md shadow-neutral-300 transition-transform duration-250 ease-out hover:scale-[1.05]">
      <div className="justify-self-start">
        <EditableInput
          titleValue={title}
          name="title"
          onChange={handleUpdate}
        />
      </div>
      <div className="flex-1">
        <EditableTextArea
          descValue={description}
          name="description"
          onChange={handleUpdate}
          setIsEditing={setIsEditing}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        {card.isUpdated ? (
          <p className="text-xs text-gray-50">Updated at: {formattedDate}</p>
        ) : (
          <p className="text-xs text-gray-50">Created at: {formattedDate}</p>
        )}
        <div className="counter-wrapper">
          {isEditing ? <Counter /> : <div></div>}
        </div>
        <MdDelete className="text-gray-50 hover:text-gray-400 cursor-pointer" onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export default Card;
