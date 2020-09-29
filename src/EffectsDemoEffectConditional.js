import React, { useState, useEffect, useRef } from "react";

function EffectsDemoEffectConditional() {
  const [count, setCount] = useState(0);
  const [trackChecked, setTrackChecked] = useState(false);
  const shouldTrackRef = useRef(false);
  const infoTrackedRef = useRef(false);

  const trackInfo = (info) => console.log(info);

  useEffect(() => {
    console.log("useEffect");
    if (shouldTrackRef.current && !infoTrackedRef.current) {
      trackInfo("user found the button component");
      infoTrackedRef.current = true;
    }
  }, [count]);

  console.log("render");
  const handleClick = () => setCount((prev) => prev + 1);
  const handleCheckboxChange = () => {
    setTrackChecked((prev) => {
      shouldTrackRef.current = !prev;
      return !prev;
    });
  };

  return (
    <div>
      <p>
        <label htmlFor="tracking">Declaration of consent for tracking</label>
        <input
          name="tracking"
          type="checkbox"
          checked={trackChecked}
          onChange={handleCheckboxChange}
        />
      </p>
      <p>
        <button onClick={handleClick}>click me</button>
      </p>
      <p>User clicked {count} times</p>
    </div>
  );
}

export default EffectsDemoEffectConditional;
