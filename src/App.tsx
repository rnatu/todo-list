import styles from "./App.module.css";
import todoLogo from "./assets/todo-logo.svg";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import emptyIcon from "./assets/empty-icon.svg";

function App() {
  const tasks: any = [
    // {
    //   id: 12334,
    //   taskDescription:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum illum laborum, tempore officiis soluta sunt, adipisci est sint, similique voluptatem! Itaque architecto iste veniam nostrum accusamus doloremque animi eaque.",
    //   isCompleted: false,
    // },
    // {
    //   id: 445345,
    //   taskDescription:
    //     "oluta sunt, adipisci est sint, similique voluptatem! Itaque architecto iste veniam nostrum accusamus",
    //   isCompleted: false,
    // },
    // {
    //   id: 4494948,
    //   askDescription:
    //     "unt, olut sint, similiquea sadipisci est voluptatem! Itaque architecto iamus",
    //   isCompleted: false,
    // },
  ];

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

        <div className={styles.taskContainer}>
          {tasks.length > 0 ? (
            tasks.map(() => <Task />)
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
