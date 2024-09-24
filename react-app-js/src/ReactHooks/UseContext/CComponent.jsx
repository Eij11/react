//you can pass on multiple COMPONENTS woahhh
//CONSUMER COMPONENT
//1
import React, { useContext } from "react";
import { UserContext } from "./AComponent";

import DComponent from "./DComponent";

const CComponent = () => {
  //2
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello ${user}, from C Component`}</h2>

      <DComponent />
    </div>
  );
};

export default CComponent;
