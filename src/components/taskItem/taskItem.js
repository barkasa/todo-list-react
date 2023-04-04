import s from "./taskItem.module.css";
import { useState } from "react";

const TaskItem = ({ task, deleteTask, changeTask }) => {
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
    <div className={s.task_wrapper}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={s.taskItemForm}
      >
        <div
          className={s.taskItem}
          key={task.id}
          style={{
            backgroundColor: task.importance ? "#E74C3C" : "#1ABC9C",
          }}
        >
          <p onClick={() => changeTask(task)}>{task.description}</p>
          <div
            style={opacityStyle}
            className={s.task_delet}
            onDoubleClick={() => deleteTask(task)}
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
