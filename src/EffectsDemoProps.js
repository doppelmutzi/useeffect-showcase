import React, { useState, useEffect } from "react";

function Counter({ interval }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterInterval = setInterval(function () {
      setCount((prev) => prev + 1);
    }, interval);
    return () => clearInterval(counterInterval);
  }, []);
  return <p>and the counter counts {count}</p>;
}

function EffectsDemoProps() {
  const [interval, setInterval] = useState(1000);
  return (
    <div>
      <input
        type="text"
        value={interval}
        onChange={(evt) => setInterval(evt.target.value)}
      />
      <Counter interval={interval} />
    </div>
  );
}

export default EffectsDemoProps;
