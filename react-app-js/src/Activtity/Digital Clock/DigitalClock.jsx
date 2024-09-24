import React, { useState, useEffect } from "react";
import styles from "./DigitalClock.module.css";
//you can do this withouth the module thingyyy wrahhh
import "./Test.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  //It creates an interval that updates the time state every second. The return function clears the interval when the component unmounts to prevent memory leaks.
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const meridiem = hours >= 12 ? "P.M." : "A.M.";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  //This helper function adds a leading zero to numbers less than 10 to ensure they are always two digits.
  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div className={styles.container_clock}>
      <h1 className="test-css-feature">Colock</h1>

      <div className={styles.clock}>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
