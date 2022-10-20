import styles from "./CreateButton.module.css";
import plusIcon from "../assets/plus-icon.svg";

export function CreateButton() {
  return (
    <button className={styles.createButton} type="submit">
      Criar <img src={plusIcon} alt="" />
    </button>
  );
}
