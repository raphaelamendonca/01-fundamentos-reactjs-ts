import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import profilePic from "../assets/profile.png";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((count) => {
      return count + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profilePic} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leslie Alexander</strong>
              <time
                title="11 de Maio de 2022 às 08h13"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            {/* 
            é interessante, principalmente visando a questão da acessibilidade para leitores de tela, por exemplo, inserir a propriedade title em botões que são apenas ícones e não possuem nada escrito
            */}

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
