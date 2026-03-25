import { useIdeas } from "../../custome-hooks/useIdeas.hook";
import type { CSSProperties } from "react";

import './counter.styles.css'

const Counter = () => {
  //Count updated from EditTextArea through Card to global state.
  const { count } = useIdeas();

  //Custom styling to show orange if characters are less than or equals
  //to 120 but is higher or equals 100. And red when its higher than 120.
  //Only visible if characters are higher or equal to 100 
  const counterColorChange: CSSProperties = {
    color: count <= 120? "orange":"white",
    visibility: count >= 100 ? "visible" : "hidden",
    fontSize: "0.8rem",
  };


  return (
    <p className="text-xs" style={counterColorChange}>
      {count}/140
    </p>
  );
};

export default Counter;
