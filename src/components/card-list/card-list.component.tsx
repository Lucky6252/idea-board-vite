import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { ideaType } from "../../context/idea.types";
import Card from "../card/card.component";
import AddCard from "../add-card/add-card.component";
import "./card-list.styles.css";

const CardList = () => {
  const { ideas } = useIdeas();
  const [sortType, setSortType] = useState<"newest" | "oldest" | "az" | "za">(
    "oldest",
  );
  const [sortedIdeas, setSortedIdeas] = useState<ideaType[]>();

  const sortingIdeas = () => {
    setSortedIdeas(
      [...ideas].sort((a, b) => {
        if (sortType === "newest") return b.modifiedDate - a.modifiedDate;
        if (sortType === "oldest") return a.modifiedDate - b.modifiedDate;
        if (sortType === "az") return a.title.localeCompare(b.title);
        if (sortType === "za") return b.title.localeCompare(a.title);
        return 0;
      }),
    );
  };

  useEffect(() => {
    setSortedIdeas(ideas);
  }, [ideas]);

  useEffect(() => {
    sortingIdeas();
  }, [sortType]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (
      value === "newest" ||
      value === "oldest" ||
      value === "az" ||
      value === "za"
    ) {
      setSortType(value);
    }
  };

  return (
    <div className="card-list">
      <div className="sort-container">
        <select className="dropdown" value={sortType} onChange={handleChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      <div className="card-list-container">
        {sortedIdeas &&
          sortedIdeas.map((idea, idx) => {
            return <Card key={idx} card={idea} idx={idx} />;
          })}
        <AddCard />
      </div>
    </div>
  );
};

export default CardList;
