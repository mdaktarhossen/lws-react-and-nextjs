import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({ task, onChangeTask, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  let taskContent;
  if (isEdit) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />
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
          <input
            type="checkbox"
            value={task.done}
            onChange={(e) =>
              onChangeTask({
                ...Task,
                done: e.target.checked,
              })
            }
          />
          {taskContent}

          <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
      </li>
    </>
  );
}
