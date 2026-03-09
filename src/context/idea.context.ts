import type { ideaContextType } from "./idea.types";
import { createContext } from "react";

//Context declaraton/creation
export const IdeaContext = createContext<ideaContextType | null>(null);