import styles from "./App.module.css";
import todoLogo from "./assets/todo-logo.svg";

function App() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Foguete logotipo do aplicativo todo list" />
    </header>
  );
}

export default App;
