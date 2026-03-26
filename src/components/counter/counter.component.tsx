import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { CSSProperties } from "react";

const Counter = () => {
  //Count updated from EditTextArea through Card to global state.
  const { count } = useIdeas();

  //Custom styling to show orange if characters are less than or equals
  //to 120 but is higher or equals 100. And red when its higher than 120.
  //Only visible if characters are higher or equal to 100 
  const counterColorChange: CSSProperties = {
    color: count <= 120? "white":"orange",
    visibility: count >= 100 ? "visible" : "hidden",
    fontSize: "0.65rem",
  };


  return (
    <p className="text-[0.65rem]" style={counterColorChange}>
      {count}/140
    </p>
  );
};

export default Counter;
