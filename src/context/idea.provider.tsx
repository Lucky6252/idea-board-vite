import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { IdeaContext } from "./idea.context";
import type { ideaType } from "./idea.types";


const InitializeFromLocalStorage = ():ideaType[] => {
    const dataFromLocalStorage = localStorage.getItem("ideas");
    return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [{title: "", description: "", modifiedDate: null, isUpdated: false}];
  }

type ideaProviderPropType = {
  children: ReactNode;
}

export const IdeaProvider = ({ children }: ideaProviderPropType) => {
  const [ideas, setIdeas] = useState<ideaType[]>(InitializeFromLocalStorage);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (ideas) {
      localStorage.setItem("ideas", JSON.stringify(ideas));
    }
  }, [ideas]);

  const addIdea = (newIdea: ideaType) => {
    setIdeas((prev) => [...prev, newIdea]);
  }

  const updateIdea = (indexToUpdate: number, updatedIdea: ideaType) => {
    
    setIdeas(ideas.map((idea, index) => {
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

  const removeIdea = (indexToDelete: number) => {
    const retainedIdeas = ideas.filter((_, index) => index !== indexToDelete);

    if(retainedIdeas) {
      setIdeas(retainedIdeas);
    }
  }

  const isEditable = (editState: boolean) => {
    setIsEdit(editState);
  }

  const counter = (wordCount: number) => {
    setCount(wordCount);
  }

  return(
    <IdeaContext.Provider value={{ideas, addIdea, updateIdea, removeIdea, isEditable, isEdit, count, counter}}>
    {children}
    </IdeaContext.Provider>
  );
};
