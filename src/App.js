import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function EffectsDemo1() {
  const [title, setTitle] = useState("v1");
  const titleRef = useRef();

  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });

  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render");
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

function App() {
  return (
    <>
      <EffectsDemo1 />
    </>
  );
}

export default App;
