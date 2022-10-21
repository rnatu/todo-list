import { FormEvent, useState } from "react";
import { CreateButton } from "./CreateButton";
import styles from "./Input.module.css";

export function Input() {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("🚀 ~ file: Input.tsx ~ line 6 ~ Input ~ taskInput", taskInput);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <CreateButton type="submit" />
    </form>
  );
}
