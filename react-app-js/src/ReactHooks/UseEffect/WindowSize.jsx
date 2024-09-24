import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EL Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EL Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `W: ${width} H: ${height}`;
  }, [width, height]);

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Height Width: {height}px</p>
    </div>
  );
};

export default WindowSize;
