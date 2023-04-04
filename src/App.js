import "./app.css";
import TaskForm from "./components/taskForm/taskForm";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete.id);

    setTasks(newTasks);
  };

  const deleteDay = (dayToDelete) => {
    const newTasks = tasks.filter((task) => task.day !== dayToDelete);

    setTasks(newTasks);
  };

  const changeTask = (taskToChange) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskToChange.id) {
        task.importance = !task.importance;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <TaskForm
        addTask={addTask}
        tasks={tasks}
        deleteTask={deleteTask}
        deleteDay={deleteDay}
        changeTask={changeTask}
      />
    </div>
  );
};

export default App;
