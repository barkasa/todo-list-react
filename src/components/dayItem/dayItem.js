import s from "./dayItem.module.css";
import { useState } from "react";
import TaskItem from "../taskItem/taskItem";

const DayItem = ({ tasks, day, deleteTask, deleteDay, changeTask }) => {
  const getDayName = (day) => {
    switch (day) {
      case "1":
        return "ПН";
      case "2":
        return "ВТ";
      case "3":
        return "СP";
      case "4":
        return "ЧТ";
      case "5":
        return "ПТ";
      case "6":
        return "СБ";
      case "7":
        return "ВС";
      default:
        return day;
    }
  };

  let [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const opacityStyle = {
    opacity: isHovered ? 1 : 0,
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={s.task_wrapper}
    >
      <div>
        <div className={s.taskDayForm}>{getDayName(day)}</div>
      </div>
      <div className={s.taskItemForm}>
        {tasks
          .sort((a, b) =>
            a.importance < b.importance
              ? 1
              : a.importance > b.importance
              ? -1
              : 0
          )
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              changeTask={changeTask}
            />
          ))}
      </div>
      <div
        style={opacityStyle}
        className={s.task_form_delet}
        onDoubleClick={() => deleteDay(day)}
      >
        X
      </div>
    </div>
  );
};

export default DayItem;
