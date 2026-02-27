import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IdeaProvider } from "./context/idea.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IdeaProvider>
      <App />
    </IdeaProvider>
  </StrictMode>,
);
