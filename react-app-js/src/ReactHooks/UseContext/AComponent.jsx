//useContext = allows you to access and share state across your components without having to pass props manually at every level.

//PROVIDER COMPONENT
//1. import {createContext} from 'react';
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//     <Child />
//  </MyContext.Provider>

//CONSUMER COMPONENT
//1. import React, {useContext} from 'react';
//   import {MyContext} from './AComponent';
//2. const value = useContext(MyContext);

//PROVIDER Component
//1
import React, { useState, createContext } from "react";
import BComponent from "./BComponent";

//2: Context should be named to what you are passing
export const UserContext = createContext();

const AComponent = () => {
  const [user, setUser] = useState("Eljon");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>

      {/* 3: */}
      <UserContext.Provider value={user}>
        <BComponent />
      </UserContext.Provider>
    </div>
  );
};

export default AComponent;
