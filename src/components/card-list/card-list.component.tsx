import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { ideaType } from "../../context/idea.types";
import Card from "../card/card.component";
import AddCard from "../add-card/add-card.component";


const CardList = () => {
  //Ideas used to create card(s)
  const { ideas } = useIdeas();

  //String union type for sort type. Only this can be accepted.
  type SortTypes = "newest" | "oldest" | "az" | "za";

  //Local state for sorting cards.
  const [sortType, setSortType] = useState<SortTypes>(
    "oldest",
  );

  //Ideas sorted accroding to selected selected option from dropdown list.
  const [sortedIdeas, setSortedIdeas] = useState<ideaType[]>();

  //Function for sorting ideas according to selected option.
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

  //Monitor ideas and updated ideas to sorted ideas
  useEffect(() => {
    setSortedIdeas(ideas);
  }, [ideas]);

  //Monitor option selected from the dropdown list and sort according to selected option.
  useEffect(() => {
    sortingIdeas();
  }, [sortType]);

  //Handles value change in the sorting dropdown list.
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    //Safety to ensure selected option is known.
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
    <div className="w-full h-full">
      <div className="flex justify-end w-full h-15 px-5">
        <select className="self-center text-gray-50 bg-[#36393F]" value={sortType} onChange={handleChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      <div className="grid grid-cols-2 px-4 w-full gap-5">
        <AddCard />
        {sortedIdeas &&
          sortedIdeas.map((idea, idx) => {
            return <Card key={idx} card={idea} idx={idx} />;
          })}
        
      </div>
    </div>
  );
};

export default CardList;
