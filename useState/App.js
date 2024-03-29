import React, { useState } from "react";

function App() {
  /* var [initial.value, update.value]= useState is Hook
     useState is Use inside Hook Only
  */
  var [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}
export default App;
