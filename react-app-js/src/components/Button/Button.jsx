import React from "react";

//Module for importing css; aside from external
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      {/* className is unique; no naming conflicts */}
      <button className={styles.btn}>Click Me</button>
    </div>
  );
};

export default Button;
