export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "addTask": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changeTask": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleteTask": {
      return tasks.filter((t) => t.id !== action.taskId);
    }

    default: {
      throw Error("No task to delete");
    }
  }
}
