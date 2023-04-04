import DayItem from "../dayItem/dayItem";
import s from "./taskList.module.css";
import _ from "lodash";

const TaskList = ({ tasks, deleteTask, deleteDay, changeTask }) => {
  if (tasks.length === 0) {
    return <div></div>;
  }

  const tasksMap = _.groupBy(tasks, (task) => task.day);

  return (
    <div>
      {Object.keys(tasksMap)
        .sort()
        .map((day) => (
          <DayItem
            key={day}
            tasks={tasksMap[day]}
            day={day}
            deleteTask={deleteTask}
            deleteDay={deleteDay}
            changeTask={changeTask}
          />
        ))}
    </div>
  );
};

export default TaskList;
