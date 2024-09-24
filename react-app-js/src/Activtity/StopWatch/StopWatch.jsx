import "./StopWatch.css";

import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elsapsedTime, setElsapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElsapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elsapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElsapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elsapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elsapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elsapsedTime / 1000) % 60);
    let milliSeconds = Math.floor((elsapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliSeconds}`;
  };

  return (
    <div className="container-stopwatch">
      <div className="dislay-time">{formatTime()}</div>

      <div className="container-controls-btn">
        <button className="start-btn" onClick={start}>
          Start
        </button>
        <button className="stop-btn" onClick={stop}>
          Stop
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
