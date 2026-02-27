import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { IdeaContext } from "./idea.context";
import type { ideaType } from "./idea.types";


const InitializeFromLocalStorage = ():ideaType[] => {
    const dataFromLocalStorage = localStorage.getItem("ideas");
    return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [{title: "", description: ""}];
  }

type ideaProviderPropType = {
  children: ReactNode;
}

export const IdeaProvider = ({ children }: ideaProviderPropType) => {
  const [ideas, setIdeas] = useState<ideaType[]>(InitializeFromLocalStorage);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const isPopupOpen = (popupState: boolean) => {
    setIsOpen(popupState);
  }

  return(
    <IdeaContext.Provider value={{ideas, addIdea, updateIdea, removeIdea, isPopupOpen, isOpen}}>
    {children}
    </IdeaContext.Provider>
  );
};
