/* eslint-disable react/prop-types */

import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [inputValue, setInputeValue] = useState("");

  return (
    <>
      <h1>Todo</h1>
      <input placeholder="add task" value={inputValue} onChange={(e) => setInputeValue(e.target.value)} />
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
