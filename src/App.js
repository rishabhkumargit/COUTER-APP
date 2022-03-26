import "./styles.css";
import { useState } from "react";
import React from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count < 0} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
