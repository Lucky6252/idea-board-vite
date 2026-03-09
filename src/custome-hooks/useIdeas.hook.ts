import { IdeaContext } from "../context/idea.context";

import { useContext } from "react";

//Custom hook to access context safe and is centralized.
export const useIdeas = () => {
    const context = useContext(IdeaContext);

    if(!context) {
        throw new Error("IdeaContext is used outside provider");
    }

    return context;
}