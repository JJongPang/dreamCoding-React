import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & update!: ${count}`);
  }, []);

  <li className="habit">
    <span className="habit-name">Reading</span>
    <span className="habit-count">{count}</span>
    <button className="habit-button habit-increase" onClick={handleIncrement}>
      <i className="fas fa-plus-square"></i>
    </button>
  </li>;
};

export default SimpleHabit;
