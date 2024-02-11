/* eslint-disable react/prop-types */

import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Todo</h1>
      <input placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          onAddTask(text), setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
