import styles from "./Task.module.css";
import checkIcon from "../assets/check-icon.svg";
import { useState } from "react";

export function Task() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.taskContainer}>
      <button
        className={styles.taskCheckBox}
        onClick={() => setChecked(!checked)}
      >
        {checked ? (
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
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className={styles.taskDelete} />
    </div>
  );
}
