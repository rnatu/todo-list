import styles from "./Task.module.css";
import checkIcon from "../assets/check-icon.svg";

interface TaskProps {
  description: string;
  isCompleted: boolean;
  id: string;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  description,
  isCompleted,
  id,
  onToggleComplete,
  onDeleteTask,
}: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <button
        className={styles.taskCheckBox}
        onClick={() => onToggleComplete(id)}
      >
        {isCompleted ? (
          <div className={styles.checkedCheckBox}>
            <img src={checkIcon} />
          </div>
        ) : (
          <div />
        )}
      </button>

      <p
        className={`${styles.taskDescription} ${
          isCompleted && styles.checkedTaskDescription
        }`}
      >
        {description}
      </p>

      <button className={styles.taskDelete} onClick={() => onDeleteTask(id)} />
    </div>
  );
}
