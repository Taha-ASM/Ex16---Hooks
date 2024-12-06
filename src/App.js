import { useState, useRef, useEffect } from "react";

function App() {
  // useState
  // const [count, setCount] = useState(0);

  // useRef
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  }

  return (
    <>
      {/* // useState */}
      {/* <button onClick={() => setCount(count + 1)}>Clike here to +</button>
      <p>count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Clike here to -</button> */}
      {/* // useRef */}
      <button onClick={handleClick}>Click me!</button>
      <input ref={inputRef} />
    </>
  );
}

export default App;
