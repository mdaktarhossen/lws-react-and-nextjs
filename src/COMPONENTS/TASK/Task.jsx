import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  let taskContent;
  if (isEdit) {
    taskContent = (
      <>
        <input type="text" value={task.text} />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
          {taskContent}

          <button>Delete</button>
        </label>
      </li>
    </>
  );
}
