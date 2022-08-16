//import React from "react";
import { useState, useEffect } from "react";
const Clock = () => {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  if (date.toLocaleTimeString() === "00:00:00") {
    window.location.replace("/");
  }
  return date.toLocaleTimeString();
};
export default Clock;
