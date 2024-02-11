import { useImmerReducer } from "use-immer";
import AddTask from "./COMPONENTS/AddTask";
import TaskList from "./COMPONENTS/TASK/TaskList";
import { initialTasks } from "./data/data";
import taskReducer from "./reducer/taskReducer";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  //generating last id for handaling add task:
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) => (prev && prev.id > current.id ? prev.id : current.id));
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "addTask",
      text,
      id: getNextId(tasks),
    });
  };

  const handleChange = (task) => {
    dispatch({
      type: "changeTask",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleteTask",
      id: taskId,
    });
  };

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChange} onDelete={handleDeleteTask} />
    </>
  );
}
