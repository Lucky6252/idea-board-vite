import { MdDelete, MdEdit } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";

import type { ideaType } from "../../context/idea.types";
import EditableInput from "../editable-input/eidtable-input.component";
import "./card.styles.css";

type CardProps = {
  card: ideaType;
  idx: number;
  onEdit: () => void;
};

const Card = ({ card, idx, onEdit }: CardProps) => {
  const { removeIdea, updateIdea } = useIdeas();
  const { title, description } = card;

  const onDeleteClick = () => {
    removeIdea(idx);
  };

  const handleTitleChange = (newTitleValue: string) => {
    updateIdea(idx, {...card, title: newTitleValue});
  }

  return (
    <div className="card-container">
      <EditableInput titleValue={title} onChange={handleTitleChange}/>
      <p>{description}</p>
      <div className="btn-container">
        <MdDelete className="btn-delete" onClick={onDeleteClick} />
        <MdEdit className="btn-edit" onClick={onEdit} />
      </div>
    </div>
  );
};

export default Card;
