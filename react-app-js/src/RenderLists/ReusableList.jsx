// Rendering List
// It is used when you want to display a collection of items
import React from "react";

import propTypes from "prop-types";

//props to pass the params on the app.jsx
const ReusableList = (props) => {
  // Create an Array: First, you need an array of items you want to render.

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      <b>{item.name}</b> - Calories: {item.calories}
    </li>
  ));

  //Render the List: Finally, you include the array of JSX elements in your component’s render method
  return (
    <div className="container-reusableList">
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </div>
  );
};
ReusableList.propTypes = {
  category: propTypes.string,

  //array of objects
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
};

ReusableList.defaultProps = {
  category: "Category",
  items: [],
};

export default ReusableList;

// ================================ App.jsx / ================================

// //this component will serve as the root to tie all other components

// import React from "react";
// import List from "./RenderLists/List";
// import ReusableList from "./RenderLists/ReusableList";

// const App = () => {
//   //{} makes them as objects
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "coconut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];

//   const vegetables = [
//     { id: 1, name: "malunggay", calories: 95 },
//     { id: 2, name: "kalabasa", calories: 45 },
//     { id: 3, name: "okra", calories: 105 },
//     { id: 4, name: "tarong", calories: 159 },
//     { id: 5, name: "saluyot", calories: 37 },
//   ];

//   return (
//     <div>
//       <List />

//       {/*  operator ?true :false */}
//       {fruits.length > 0 ? (
//         <ReusableList items={fruits} category="Fruits" />
//       ) : null}

//       {/* if 2 statements (AND) are true *displays */}
//       {vegetables.length > 0 && (
//         <ReusableList items={vegetables} category="Vegetables" />
//       )}
//     </div>
//   );
// };

// export default App;
