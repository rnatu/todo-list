import styles from "./Task.module.css";
import checkboxUnchecked from "../assets/checkbox-unchecked.svg";
import deleteIcon from "../assets/delete-icon.svg";

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <button className={styles.taskCheckBox}>
        <div />
      </button>

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className={styles.taskDelete}>
        <img src={deleteIcon} alt="deletar tarefa" />
      </button>
    </div>
  );
}
