import React, { useState } from "react";

const UpdateArrays = () => {
  const [foods, setFoods] = useState(["Apple", "Borgir", "Coke"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("addFoodInput").value;
    document.getElementById("addFoodInput").value = "";

    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  const handleRemoveFood = (index) => {
    //parameter that is on underscore (_) should be ignored!
    setFoods(foods.filter((_, i) => i !== index));
  };

  //maps the list of foods para madisplay each elements
  const listFoods = foods.map((food, index) => (
    //on click of the food element, ireremove niya goto: handleRemoveFood
    <li key={index} onClick={() => handleRemoveFood(index)}>
      {food}
    </li>
  ));

  return (
    <div>
      <h2>My Foods</h2>
      <ul>{listFoods}</ul>

      <input type="text" id="addFoodInput" placeholder="Add Food" />
      <button onClick={handleAddFood}>Add Food</button>

      <br />
    </div>
  );
};

export default UpdateArrays;
