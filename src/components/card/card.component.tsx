import { MdDelete } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import { toast } from "react-toastify";
import { useState } from "react";

import type { ideaType } from "../../context/idea.types";
import EditableInput from "../editable-input/eidtable-input.component";
import EditableTextArea from "../editable-textArea/editable-textArea.component";
import Counter from "../counter/counter.component";
import "./card.styles.css";

type CardProps = {
  card: ideaType;
  idx: number;
};

const Card = ({ card, idx }: CardProps) => {
  const { removeIdea, updateIdea } = useIdeas();
  const [isEditing, setIsEditing] = useState(false);
  const { title, description } = card;

  const formattedDate = new Date(card.modifiedDate).toLocaleString("en-GB");

  const notify = () => toast("Your Idea Card is updated successfully")

  const onDeleteClick = () => {
    removeIdea(idx);
  };

  const handleUpdate = (newTitleValue: string, name: string) => {
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
    <div className="card-container">
      <div className="title-wrapper">
        <EditableInput
          titleValue={title}
          name="title"
          onChange={handleUpdate}
        />
      </div>
      <div className="description-wrapper">
        <EditableTextArea
          descValue={description}
          name="description"
          onChange={handleUpdate}
          setIsEditing={setIsEditing}
        />
      </div>
      <div className="card-footer">
        {card.isUpdated ? (
          <p className="date-text">Updated at: {formattedDate}</p>
        ) : (
          <p className="date-text">Created at: {formattedDate}</p>
        )}
        <div className="counter-wrapper">
          {isEditing ? <Counter /> : <div></div>}
        </div>
        <MdDelete className="btn-delete" onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export default Card;
