import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { IdeaContext } from "./idea.context";
import type { ideaType } from "./idea.types";

//Provide initial values for ideas to receive from our localStorage database
const InitializeFromLocalStorage = ():ideaType[] => {
    const dataFromLocalStorage = localStorage.getItem("ideas");
    return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [{title: "", description: "", modifiedDate: 0, isUpdated: false}];
  }

  //Type for Provider prop children - required by Typescript
type ideaProviderPropType = {
  children: ReactNode;
}

//Context provider
export const IdeaProvider = ({ children }: ideaProviderPropType) => {
  //Global state for ideas from and to Local Storage.
  const [ideas, setIdeas] = useState<ideaType[]>(InitializeFromLocalStorage);
  //Global state for character count
  const [count, setCount] = useState<number>(0);

  //Monitor ideas change and updates local storage database.
  useEffect(() => {
    if (ideas) {
      localStorage.setItem("ideas", JSON.stringify(ideas));
    }
  }, [ideas]);

  //Global state for adding new idea object to our ideas object array.
  const addIdea = (newIdea: ideaType) => {
    setIdeas((prev) => [...prev, newIdea]);
  }

  //Global state for updating an idea. Receives index(position) of updated idea and values to update(idea).
  const updateIdea = (indexToUpdate: number, updatedIdea: ideaType) => {
    
    setIdeas(ideas.map((idea, index) => {
      //checks if the index is found. If found then update values.
      if(index === indexToUpdate && updatedIdea) {
        return {
          title: updatedIdea.title,
          description: updatedIdea.description,
          modifiedDate: updatedIdea.modifiedDate,
          isUpdated: updatedIdea.isUpdated,
        };
      }
      return idea;
    }));
    
  }

  //Global state for removing an idea. Receives index(position) of idea to delete.
  const removeIdea = (indexToDelete: number) => {
    //filters out ideas that do not match the index to be deleted.
    const retainedIdeas = ideas.filter((_, index) => index !== indexToDelete);

    if(retainedIdeas) {
      setIdeas(retainedIdeas);
    }
  }

  //Global state for keeping character count. 
  //Global state used instead of local state to shared data across unrelated components.
  const counter = (wordCount: number) => {
    setCount(wordCount);
  }

  return(
    //Global states accessible to children
    <IdeaContext.Provider value={{ideas, addIdea, updateIdea, removeIdea, count, counter}}>
    {children}
    </IdeaContext.Provider>
  );
};
