import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();
import { tasks as data } from "../data/task";

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid));
  }

  useEffect(() => {
    setTasks(data);
    console.log(tasks.length);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
