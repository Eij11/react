// React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to simplify state management and lifecycle methods in functional components, which previously required class components.
// (useState, useEffect, useContext, useReducer, useCallback)

// useState is one of the most commonly used React hooks. It allows you to add state to your functional components.
//state variable AND a setter function
// [name, setName]

//always import this
import React, { useState } from "react";

const MyComponent = () => {
  //array destructuring - [variable, setVariable]
  const [name, setName] = useState("Guest"); //initial variable
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    //when you use thi setterVariable ng useState, mag rerender yung VDOM
    setName("Eljon");
  };

  const incrementAge = () => {
    //age++ doesnt work
    setAge(age + 1);
  };

  const employmentStatus = () => {
    //toggle between true:false
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Employment Status: {isEmployed ? "Working" : "Tambay"}</p>
      <button onClick={updateName}>Set Name</button>
      <button onClick={incrementAge}>Add Age</button>
      <button onClick={employmentStatus}>Change Employment Status</button>
    </div>
  );
};

export default MyComponent;
