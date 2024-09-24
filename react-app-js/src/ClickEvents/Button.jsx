// click event is an action that occurs when a user clicks on an element, such as a button. This is handled using the onClick event handle

//so kapag may pinindot ka, dapat may reaction boom

// Common Mistakes: One common mistake is to call the function directly instead of passing its reference. For example, onClick={handleClick()} will call the function immediately when the component renders, which is not what you want. Instead, you should pass the function without parentheses: onClick={handleClick}.

import React from "react";

let count = 0;
const Button = () => {
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      alert(`Clicked by: ${name} for ${count}x times.`);
    } else {
      alert(`Stop clicking me ${name}!`);
    }
  };

  const handleClick2 = (name) => alert(`Napindot ulit ni ${name}`);

  //Event Handler
  const eventHandle = (e) => (e.target.textContent = "Napindot😎");

  return (
    <div>
      {/* <button onClick={() => handleClick2("Eljon")}>Click Me! 😎</button> */}

      <button onClick={() => handleClick("Eljon")}>
        Click Me conRendering
      </button>

      <button onDoubleClick={(e) => eventHandle(e)}>Event Handler</button>
    </div>
  );
};

export default Button;
