import styles from "./App.module.css";
import todoLogo from "./assets/todo-logo.svg";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import emptyIcon from "./assets/empty-icon.svg";
import { useState } from "react";

interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  console.log(tasks);

  const addTask = (task: ITask) => {
    setTasks((oldTasks) => [...oldTasks, task]);
  };

  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="Foguete logotipo do aplicativo todo list" />
      </header>

      <main>
        <Input onAddTask={addTask} />

        <header className={styles.taskHeader}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>

          <p>
            Concluídas <span>2 de 5</span>
          </p>
        </header>

        <div className={styles.taskContainer}>
          {tasks.length > 0 ? (
            tasks.map((task) => <Task />)
          ) : (
            <div className={styles.emptyTaskContainer}>
              <img src={emptyIcon} alt="Ícone ilustrando lista vazia" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
