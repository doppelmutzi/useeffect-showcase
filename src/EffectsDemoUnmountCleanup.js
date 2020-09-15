import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(function () {
      setCount((prev) => prev + 1);
    }, 1000);
    // return optional function for cleanup
    // in this case acts like componentWillUnmount
    return () => clearInterval(interval);
  }, []);
  return <p>and the counter counts {count}</p>;
}

function EffectsDemoUnmountCleanup() {
  const [unmount, setUnmount] = useState(false);
  const renderDemo = () => !unmount && <Counter />;
  return (
    <div>
      <button onClick={() => setUnmount(true)}>Unmount child component</button>
      {renderDemo()}
    </div>
  );
}

export default EffectsDemoUnmountCleanup;
