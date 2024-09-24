// Conditional rendering in React refers to the process of displaying different components or elements based on certain conditions or states.

import React from "react";

import propTypes from "prop-types";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const loginMessage = <h2 className="login-message">Please Log in</h2>;

  return <div>{props.isLoggedIn ? welcomeMessage : loginMessage}</div>;
};

//good practice
UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  userName: propTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};

export default UserGreeting;

// ================================ App.jsx / ================================

{
  /* <div>
<UserGreeting isLoggedIn={true} userName="Ekxian" />
<UserGreeting isLoggedIn={true} />
</div> */
}
