import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { ideaType } from "../../context/idea.types";
import type { ChangeEvent } from "react";

import { MdSave } from "react-icons/md";
import { useState } from "react";
// import "./add-card.styles.css";
import Counter from "../counter/counter.component";

const defaultIdea: ideaType = {
  title: "",
  description: "",
  modifiedDate: 0,
  isUpdated: false,
};

const AddCard = () => {
  const { addIdea, counter } = useIdeas();
  const [idea, setIdea] = useState<ideaType>(defaultIdea);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "description") {
      counter(value.length);
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
      const newIdea = { ...idea, isUpdated: false, modifiedDate: Date.now() };
      addIdea(newIdea);
      counter(0);
      setIdea(defaultIdea);
    } else {
      alert("Please enter information to both inputs");
    }
  };

  return (
    <div
      className="w-3xs h-[12rem] px-[5px] py-[7px] rounded-md bg-[#36393F] mt-[5px] flex flex-col
    shadow-md shadow-neutral-300 transition-all duration-300 hover:scale-110 gap-3"
    >
      <input
        autoFocus
        className="w-full !bg-[#36393F] !text-white mt-4 text-base font-semibold text-center"
        value={idea.title}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Enter New Idea Title here..."
      />
      <textarea
        id="description"
        className="!bg-[#36393F] !text-white text-xs w-full h-full !font-light"
        value={idea.description}
        placeholder={
          idea.title.trim()
            ? "Enter Description here. Only 140 characters allowed"
            : ""
        }
        name="description"
        maxLength={140}
        onChange={handleChange}
        rows={5}
        cols={35}
      ></textarea>
      <div className="flex justify-between">
        <Counter />
        <MdSave
          className="text-gray-50 hover:text-gray-400 cursor-pointer"
          onClick={saveIdea}
        />
      </div>
    </div>
  );
};

export default AddCard;
