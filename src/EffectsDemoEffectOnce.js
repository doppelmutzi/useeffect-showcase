import React, { useState, useEffect, useRef } from "react";

function EffectsDemoEffectOnce() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();

  if (title) {
    useEffect(() => {
      console.log("useEffect title");
      document.title = title;
    });
  }

  console.log("render");
  const handleClick = () => setTitle(titleRef.current.value);
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

export default EffectsDemoEffectOnce;
