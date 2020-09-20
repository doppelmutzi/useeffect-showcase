import React, { useState, useEffect, useCallback, useContext } from "react";

const EffectsContext = React.createContext(null);

const Counter = ({ interval }) => {
  console.log("render Counter");
  const [count, setCount] = useState(0);
  const { onDarkModeChange } = useContext(EffectsContext);

  useEffect(() => {
    console.log(`useEffect ${onDarkModeChange()}`);
    const counterInterval = setInterval(function () {
      setCount((prev) => prev + 1);
    }, interval);
    return () => clearInterval(counterInterval);
  }, [interval, onDarkModeChange]);
  return <p>and the counter counts {count}</p>;
};

const IntervalConfig = () => {
  console.log("render IntervalConfig");
  const [interval, setInterval] = useState(1000);
  const onChange = (evt) => setInterval(evt.target.value);

  return (
    <div>
      <input type="text" value={interval} onChange={onChange} />
      <Counter interval={interval} />
    </div>
  );
};

const EffectsDemoContext = () => {
  console.log("render EffectsDemoContext");
  const [numberClicks, setNumberClicks] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const onDarkModeChange = useCallback(() => {
    return darkMode ? "🌙" : "🌞";
  }, [darkMode]);

  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <label htmlFor="darkMode">dark mode</label>
      <input
        name="darkMode"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode((prev) => !prev)}
      />
      <p>
        <button onClick={() => setNumberClicks((prev) => prev + 1)}>
          click
        </button>
        <span>&nbsp;Number clicks: {numberClicks}</span>
      </p>
      <EffectsContext.Provider value={{ onDarkModeChange }}>
        <IntervalConfig />
      </EffectsContext.Provider>
    </div>
  );
};

export default EffectsDemoContext;
