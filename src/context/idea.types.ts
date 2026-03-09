//Idea object Types representation for this project
export type ideaType = {
  title: string;
  description: string;
  modifiedDate: number;
  isUpdated: boolean;
};

//Context type for global states
export type ideaContextType = {
    ideas: ideaType[];
    addIdea: (newIdea: ideaType) => void;
    updateIdea: (indexToUpdate: number, updatedIdea: ideaType) => void;
    removeIdea: (indexToDelete: number) => void;
    count: number;
    counter: (wordCount: number) => void;
}