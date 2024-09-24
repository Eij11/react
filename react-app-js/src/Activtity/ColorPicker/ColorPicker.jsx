import React, { useState } from "react";

import styles from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColor = (event) => {
    setColor(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  };

  return (
    <div className={styles.container_color_picker}>
      <h1 className={styles.heading} style={{ color: color }}>
        Color Picker
      </h1>

      <div className="color-display">
        <p>Selected Color: {color}</p>
      </div>

      <label htmlFor="">
        <b>Select a color: </b>
      </label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );
};

export default ColorPicker;
