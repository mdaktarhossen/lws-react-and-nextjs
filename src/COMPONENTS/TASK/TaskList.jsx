/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({ tasks, onDelete, onChangeTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onChangeTask={onChangeTask} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
