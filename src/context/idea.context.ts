import type { ideaContextType } from "./idea.types";
import { createContext } from "react";

export const IdeaContext = createContext<ideaContextType | null>(null);