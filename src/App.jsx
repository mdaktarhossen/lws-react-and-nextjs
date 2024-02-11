import { useState } from "react";
import AddTask from "./COMPONENTS/AddTask";
import TaskList from "./COMPONENTS/TASK/TaskList";
import { initialTasks } from "./data/data";

export default function App() {
  const [tasks, setTask] = useState(initialTasks);

  //generating last id for handaling add task:
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) => (prev && prev.id > current.id ? prev.id : current.id));
    return maxId + 1;
  };

  const handleAddTask = (inputValue) => {
    setTask([
      ...tasks,
      {
        id: getNextId(tasks),
        text: inputValue,
        done: false,
      },
    ]);
  };

  const handleChange = (task) => {
    const changeTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTask(changeTask);
  };

  const handleDeleteTask = (taskId) => {
    setTask(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChange} onDelete={handleDeleteTask} />
    </>
  );
}
