import styles from "./App.module.css";
import todoLogo from "./assets/todo-logo.svg";
import { Input } from "./components/Input";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="Foguete logotipo do aplicativo todo list" />
      </header>

      <Input />
    </div>
  );
}

export default App;
