import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h3>This is a Number Counting App</h3>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)} className="button">
        Add
      </button>
      <button onClick={() => setNumber(number - 1)} className="button">
        Down
      </button>
      <button onClick={() => setNumber(0)} className="button">
        Reset
      </button>
    </div>
  );
};

export default App;
