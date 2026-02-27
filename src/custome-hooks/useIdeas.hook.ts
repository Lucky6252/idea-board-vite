import { IdeaContext } from "../context/idea.context";

import { useContext } from "react";


export const useIdeas = () => {
    const contextIsNotNull = useContext(IdeaContext);

    if(!contextIsNotNull) {
        throw new Error("IdeaContext is null");
    }

    return contextIsNotNull;
}