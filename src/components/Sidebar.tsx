import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import profilePic from "../assets/profile.png";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={
          "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        }
      />
      <div className={styles.profile}>
        <Avatar src={profilePic} />
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
