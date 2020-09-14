import React, { useState, useRef, useEffect } from "react";

export default function () {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();

  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });

  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render no dependency");
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}
