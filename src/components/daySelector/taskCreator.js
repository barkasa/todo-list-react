import s from "./taskCreator.module.css";

let id = 0;

const TaskCreator = ({ addTask }) => {
  const submit_form = (event) => {
    event.preventDefault();
    const { day, importance, description } = event.target;

    if (
      description.value == "" ||
      day.value == "0" ||
      importance.value == "0"
    ) {
      return;
    }

    const task = {
      id: ++id,
      day: day.value,
      importance: importance.value === "true",
      description: description.value,
    };

    addTask(task);

    day.value = "0";
    importance.value = "0";
    description.value = "";
  };

  return (
    <form className={s.task_form} onSubmit={submit_form}>
      <div className={s.input_group}>
        <div className={s.input_first}>
          <select defaultValue="0" className={s.day_form} name="day">
            <option value="0" disabled>
              Выберите день
            </option>
            <option value="1">Понедельник</option>
            <option value="2">Вторник</option>
            <option value="3">Среда</option>
            <option value="4">Четверг</option>
            <option value="5">Пятница</option>
            <option value="6">Суббота</option>
            <option value="7">Воскресенье</option>
          </select>
          <select
            defaultValue="0"
            className={s.importance_form}
            name="importance"
          >
            <option value="0" disabled>
              Выберите важность
            </option>
            <option value="true">Важно</option>
            <option value="false">Не важно</option>
          </select>
        </div>
        <input
          className={s.input_task}
          type="text"
          name="description"
          placeholder="Описание"
        />
      </div>
      <button className={s.button_task}>Добавить</button>
    </form>
  );
};

export default TaskCreator;
