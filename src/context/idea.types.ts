export type ideaType = {
  title: string;
  description: string;
  modifiedDate: number;
  isUpdated: boolean;
};

export type ideaContextType = {
    ideas: ideaType[];
    addIdea: (newIdea: ideaType) => void;
    updateIdea: (indexToUpdate: number, updatedIdea: ideaType) => void;
    removeIdea: (indexToDelete: number) => void;
    isEdit: boolean;
    isEditable: (editState: boolean) => void;
    count: number;
    counter: (wordCount: number) => void;
}