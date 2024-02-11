/* eslint-disable react/prop-types */

import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [inputValue, setInputeValue] = useState("");
  const handleValueChange = (e) => {
    setInputeValue(e.target.value);
  };
  return (
    <>
      <h1>Todo</h1>
      <input placeholder="add task" value={inputValue} onChange={handleValueChange} />
      <button
        onClick={() => {
          onAddTask(inputValue), setInputeValue("");
        }}
      >
        Add
      </button>
    </>
  );
}
