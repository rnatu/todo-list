import styles from "./App.module.css";
import todoLogo from "./assets/todo-logo.svg";
import { Input } from "./components/Input";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="Foguete logotipo do aplicativo todo list" />
      </header>

      <main>
        <Input />

        <header className={styles.taskHeader}>
          <p>
            Tarefas criadas <span>5</span>
          </p>

          <p>
            Concluídas <span>2 de 5</span>
          </p>
        </header>
      </main>
    </div>
  );
}

export default App;
