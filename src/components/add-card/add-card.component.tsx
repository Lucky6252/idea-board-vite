import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { ideaType } from "../../context/idea.types";
import type { CSSProperties, ChangeEvent } from "react";

import { MdSave } from "react-icons/md";
import { useState } from "react";
import './add-card.styles.css'

const defaultIdea: ideaType = {
  title: "",
  description: "",
  modifiedDate: 0,
  isUpdated: false,
};

const AddCard = () => {
  const { addIdea } = useIdeas();
  const [idea, setIdea] = useState<ideaType>(defaultIdea);
  const [count, setCount] = useState<number>(0);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "description") {
      setCount(value.length);
      setIdea((prev) => {
        return { ...prev, [name]: value };
      });
    } else {
      setIdea((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const saveIdea = () => {
    if (idea.title.length > 0 && idea.description.length > 0) {
      const newIdea = {...idea, isUpdated: false, modifiedDate: Date.now()}
      addIdea(newIdea);
      setCount(0);
      setIdea(defaultIdea);
    } else {
      alert("Please enter information to both inputs");
    }
  };

  const counterColorChange: CSSProperties = {
    color: "red",
    visibility: count >= 100 ? "visible" : "hidden",
  };

  return (
    <div className="card-container">
        <input  autoFocus className="title-input" value={idea.title} type="text" name="title" onChange={handleChange} placeholder="Enter New Idea Title here..." />
        <textarea
        id="description"
        className="desc-text-area"
          value={idea.description}
          placeholder={idea.title.trim() ? "Enter Description here. Only 140 characters allowed" : ''}
          name="description"
          maxLength={140}
          onChange={handleChange}
          rows={5}
          cols={35}
        ></textarea>
      <div className="card-footer">
        <p className="count-label" style={counterColorChange}>
          {count}/140
        </p>
        
        <MdSave className="btn-save" onClick={saveIdea} />
      </div>
    </div>
  );
};

export default AddCard;
