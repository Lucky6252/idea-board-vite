import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { CSSProperties } from "react";

const Counter = () => {
  const { count } = useIdeas();

  const counterColorChange: CSSProperties = {
    color: count <= 120? "orange":"red",
    visibility: count >= 100 ? "visible" : "hidden",
    fontSize: "0.8rem",
  };


  return (
    <p style={counterColorChange}>
      {count}/140
    </p>
  );
};

export default Counter;
