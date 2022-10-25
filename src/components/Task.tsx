import styles from "./Task.module.css";
import checkIcon from "../assets/check-icon.svg";
import { useState } from "react";

interface TaskProps {
  description: string;
  isCompleted: boolean;
}

export function Task({ description, isCompleted }: TaskProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.taskContainer}>
      <button
        className={styles.taskCheckBox}
        onClick={() => setChecked(!checked)}
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
          checked && styles.checkedTaskDescription
        }`}
      >
        {description}
      </p>

      <button className={styles.taskDelete} />
    </div>
  );
}
