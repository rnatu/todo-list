import styles from "./CreateButton.module.css";
import plusIcon from "../assets/plus-icon.svg";
import { ButtonHTMLAttributes } from "react";

export function CreateButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.createButton} {...props}>
      Criar <img src={plusIcon} alt="" />
    </button>
  );
}
