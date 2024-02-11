export default function taskReducer(draft, action) {
  switch (action.type) {
    case "addTask": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "changeTask": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;

      // return tasks.map((t) => {
      //   if (t.id === action.task.id) {
      //     return action.task;
      //   } else {
      //     return t;
      //   }
      // });
    }
    case "deleteTask": {
      return draft.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("No task to delete");
    }
  }
}
