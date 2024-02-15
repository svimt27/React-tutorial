import { useState } from "react";
import "./App.css";

function App() {
  //  useState hook is used when you want any changes on the ui
  // useState return the array with two value first is the count and second one is the function
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count == 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }
  };
  const removeValue = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2> Count Value: {count} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
