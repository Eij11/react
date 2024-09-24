import React from "react";

const Food = () => {
  const food1 = "Hamburger";
  const food2 = "Coke";

  return (
    <div>
      <ul>
        <li>Fries</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
    </div>
  );
};

export default Food;
