export type ideaType = {
  title: string;
  description: string;
};

export type ideaContextType = {
    ideas: ideaType[];
    addIdea: (newIdea: ideaType) => void;
    updateIdea: (indexToUpdate: number, updatedIdea: ideaType) => void;
    removeIdea: (indexToDelete: number) => void;
    isOpen: boolean;
    isPopupOpen: (popupState: boolean) => void;

}