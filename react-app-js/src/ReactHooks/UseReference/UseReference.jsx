//use State = Re-renders the component when thestate value changes.

//useRef() = "use Reference" Does not cause re-renders when its value changes. When you want a component to "remember" some information, but you don't want that information to trigger new renders.

//          1. Accessing/Interacting with DOM elements
//          2. Handling Focus, Animation, and Transition
//          3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

const UseReference = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  //   const [number, setNumber] = useState(0);

  //go inspect mode: its an object with the current property
  //   console.log(ref);

  useEffect(() => {
    console.log("Component Rendered");
    console.log(inputRef1);
  });

  //useState
  //   const handleClick = () => {
  //     setNumber((prevNumber) => prevNumber + 1);
  //   };

  //useRef
  const handleClick1 = () => {
    //da focus method highlights the input box
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick2 = () => {
    //da focus method highlights the input box
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick3 = () => {
    //da focus method highlights the input box
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "blue";
  };

  return (
    <div>
      <button onClick={handleClick1}>Click Me</button>
      {/* <p>{`Count ${number}`}</p> */}
      <input type="text" ref={inputRef1} />

      <button onClick={handleClick2}>Click Me</button>
      <input type="text" ref={inputRef2} />

      <button onClick={handleClick3}>Click Me</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
};

export default UseReference;
