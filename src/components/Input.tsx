import { FormEvent, useState } from "react";
import { CreateButton } from "./CreateButton";

export function Input() {
  const [task, setTask] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("🚀 ~ file: Input.tsx ~ line 6 ~ Input ~ task", task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <CreateButton type="submit" />
    </form>
  );
}
