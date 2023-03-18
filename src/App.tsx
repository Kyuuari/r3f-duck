import { useState } from "react";
import "./App.css";
import Ducks from "./components/Duck";

function App() {
  const [speed, set] = useState<number>(1); // specify number type for speed state and set function
  return (
    <>
      <Ducks speed={speed} />
      <input
        className="absolute bottom-1/2 -rotate-90"
        type="range"
        min="0"
        max="10"
        value={speed}
        step="1"
        onChange={(e) => set(Number(e.target.value))} // convert string value to number
      />
    </>
  );
}

export default App;
