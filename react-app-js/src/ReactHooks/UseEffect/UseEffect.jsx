// useEffect() = React hook that tells Ract DO SOME CODE WHEN (pick one):
//              This componenent re-renders
//              This component mounts
//              The state of a value

// allows you to perform side effects in your functional components. Side effects are operations that affect something outside the scope of the function being executed, such as fetching data, updating the DOM, or setting up subscriptions.

// useEffect(() => {
//     // Your side effect logic here
//   }, [dependencies]);

// 1. useEffect(() => {})              //Runs after every re-render
// 2. useEffect(() => {}, [])          //Runs only on mount
// 3. useEffect(() => {}, [value])     //Runs on mount + when value changes

//USES
// 1. Event Listeners
// 2. DOM Manipulation
// 3. Subscription (real-time-updates)
// 4. Fetching DATA from an API
// 5. Clean up whena component unmounts

import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //#1
  //renames the title of the TAB, updates everytime it rerenders
  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   });

  //#2
  //only update once
  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   });

  //#3
  //Do this code, when the dependecy(count) updates
  //yung sa #1 mag uupdate siya everytime na mag rerender eh
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () => {
      //Some Clean up CODE
    };
  }, [count]);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtractCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  //toggles between red and green
  // it doesnt execute the useEffect
  const changeColor = (event) => {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  };

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default UseEffect;
