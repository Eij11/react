// In React.js, props (short for “properties”) are used to pass data from one component to another, typically from a parent component to a child component. They are similar to function arguments in JavaScript and attributes in HTML.

// In short, props are like the instructions or ingredients you give to a component to tell it what to do or display. They help make your components flexible and reusable.
//          <Component key=value />

//
//  propTypes are a way to ensure that the props you pass to a component are of the correct type
//          age: PropTypes.number

import propTypes from "prop-types";

//the key value pair are stored in this prop object,
//sending it to the associated val: {props.name}
const Students = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {/* If value is true, return ? else : */}
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

//checks lang if yung pinass in na data are same sa pagsstorean
Students.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

// defaultProps = default values kapag kunyare di nakalagay ng value yung parent class
//          default val -name: "Guests"

Students.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Students;

// ================================ App.jsx / ================================
// //this component will serve as the root to tie all other components

// import React from "react";
// import Students from "./Props/Students";

// const App = () => {
//   return (
//     <div>
//       <Students name="Spongebob" age={30} isStudent={true} />
//       <Students name="Patrick" age={31} isStudent={false} />
//       <Students name="Squidward" age={36} isStudent={false} />

//       {/*defaultProps  */}
//       <Students name="Sandy" />
//     </div>
//   );
// };

// export default App;
