import { MdDelete, MdEdit } from "react-icons/md";
import { useIdeas } from "../../custome-hooks/useIdeas.hook";

import type { ideaType } from "../../context/idea.types";
import "./card.styles.css";

type CardProps = {
  card: ideaType;
  idx: number;
  onEdit: () => void;
};

const Card = ({ card, idx, onEdit }: CardProps) => {
  const { removeIdea } = useIdeas();
  const { title, description } = card;

  const onDeleteClick = () => {
    removeIdea(idx);
  };

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="btn-container">
        <MdDelete className="btn-delete" onClick={onDeleteClick} />
        <MdEdit className="btn-edit" onClick={onEdit} />
      </div>
    </div>
  );
};

export default Card;
