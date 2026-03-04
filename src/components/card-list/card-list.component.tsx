
import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { ideaType } from "../../context/idea.types";
import Card from "../card/card.component";
import AddCard from "../add-card/add-card.component";
import "./card-list.styles.css";

const defaultIdea: ideaType = {
  title: "",
  description: "",
  modifiedDate: null,
  isUpdated: false,
};

const CardList = () => {
  const { ideas } = useIdeas();


  return (
    <div className="card-list-container">
      {ideas &&
        ideas.map((idea, idx) => {
          return (
            <Card
              key={idx}
              card={idea}
              idx={idx}
            />
          );
        })}
      <AddCard />
    </div>
  );
};

export default CardList;
