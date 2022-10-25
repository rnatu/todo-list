import { FormEvent, useState } from "react";
import { CreateButton } from "./CreateButton";
import styles from "./Input.module.css";
import { v4 as uuidv4 } from "uuid";

interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface InputProps {
  onAddTask: (task: ITask) => void;
}

export function Input({ onAddTask }: InputProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (description === "") return;

    try {
      onAddTask({
        id: uuidv4(),
        description: description,
        isCompleted: false,
      });
    } catch (err) {
      if (err instanceof ErrorEvent) alert(err.message);
    } finally {
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <CreateButton type="submit" />
    </form>
  );
}
