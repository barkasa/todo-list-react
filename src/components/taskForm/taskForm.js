import TaskCreator from "../daySelector/taskCreator";
import TaskList from "../taskList/taskList";
import s from "./taskForm.module.css";

const TaskForm = ({ addTask, tasks, deleteTask, deleteDay, changeTask }) => {
  return (
    <div>
      <div className={s.taskForm}>
        <TaskCreator addTask={addTask} />
      </div>
      <div>
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
          changeTask={changeTask}
        />
      </div>
    </div>
  );
};

export default TaskForm;
