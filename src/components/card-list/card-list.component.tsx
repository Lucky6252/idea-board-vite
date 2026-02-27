import { useState } from "react";
import type { ChangeEvent } from "react";

import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { ideaType } from "../../context/idea.types";
import Card from "../card/card.component";
import AddCard from "../add-card/add-card.component";
import Popup from "../popup/popup.component";
import "./card-list.styles.css";

const defaultIdea: ideaType = {
  title: "",
  description: "",
};

const CardList = () => {
  const { ideas, isOpen, updateIdea, isPopupOpen } = useIdeas();
  const [editedText, setEditedText] = useState<ideaType>(defaultIdea);
  const [editedIndex, setEditedIndex] = useState<number | null>(null);

  const editIdea = (idx: number, idea: ideaType) => {
    setEditedIndex(idx);
    setEditedText(idea);
    isPopupOpen(!isOpen);
  };

  const updateIdeaFromPopup = () => {

    if (editedIndex != null){
      console.log("passing check...")
      updateIdea(editedIndex, editedText);
    }
    else{
      isPopupOpen(!isOpen);
      return;
    }

    isPopupOpen(!isOpen);
  };

  const cancelPopup = () => {
    isPopupOpen(!isOpen);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEditedText((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="card-list-container">
      {ideas &&
        ideas.map((idea, idx) => {
          return (
            <Card
              key={idx}
              card={idea}
              idx={idx}
              onEdit={() => editIdea(idx, idea)}
            />
          );
        })}
      <AddCard />
      {isOpen && (
        <Popup onSave={updateIdeaFromPopup} onCancel={cancelPopup}>
          <h2>Edit an Idea Card</h2>
          <div className="element-group">
            <label>Title</label>
            <input
              type="text"
              required
              name="title"
              onChange={handleChange}
              value={editedText.title}
            />
          </div>
          <div className="element-group">
            <label>Description</label>
            <textarea
              value={editedText.description}
              required
              name="description"
              maxLength={140}
              onChange={handleChange}
              rows={5}
              cols={35}
            ></textarea>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default CardList;
