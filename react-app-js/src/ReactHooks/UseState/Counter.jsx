// React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to simplify state management and lifecycle methods in functional components, which previously required class components.
// (useState, useEffect, useContext, useReducer, useCallback)

// useState is one of the most commonly used React hooks. It allows you to add state to your functional components.
//state variable AND a setter function
// [name, setName]

// UPDATER function - a function passed as an argument to setState()
//      ex. setYear(arrow function) (y =>y + 1)
//allows for safe updates based on the PREVIOUS state
//only concerns when you need the PREVIOUS state and the CURRENT state
//good practice to use it in useStates

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //Uses the CURRENT state to calculate the NEXT state
  //set functions do not trigger an update
  //React batches together state updates for perforamnce reasons
  //NEXT state becomes the CURRENT state after an update

  const incrementCounter = () => {
    //different yung +2, if you want to do this it wont work
    // setCounter(counter + 1); //process: (0 + 1)
    // setCounter(counter + 1); //process: (0 + 1)

    //Takes the PREVIOUS state to calculate NEXT state
    //updater func puts into a queue (FIFO)
    //During the next render, it will call them in the same order
    //do this with arrow func
    setCounter((preCounter) => preCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="container-counter">
      <h1 className="h1-counter">{counter}</h1>
      <div className="container-btn-counter">
        <button className="btn-counter decrement" onClick={decrementCounter}>
          -
        </button>
        <button className="btn-counter reset" onClick={resetCounter}>
          reset
        </button>
        <button className="btn-counter increment" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
