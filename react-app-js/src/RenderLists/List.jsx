// Rendering List
// It is used when you want to display a collection of items
import React from "react";

const List = () => {
  // Create an Array: First, you need an array of items you want to render.

  //{} makes them as objects
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorts alphabetically
  fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse sort alphabetically
  fruits.sort((a, b) => a.calories - b.calories); //sort by calories l-h
  fruits.sort((a, b) => b.calories - a.calories); //sort by calories h-l

  //filters fruits with less than 100cal
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //displays the filtered lowcalFrutis
  //   const listItems = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruit.id}>
  //       Fruit: <b>{lowCalFruit.name}</b> - Calories: {lowCalFruit.calories}
  //     </li>
  //   ));

  //Use the map Method: The map method is used to iterate over the array and return a new array of JSX elements.
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      Fruit: <b>{fruit.name}</b> - Calories: {fruit.calories}
    </li>
  ));

  //Render the List: Finally, you include the array of JSX elements in your component’s render method
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
